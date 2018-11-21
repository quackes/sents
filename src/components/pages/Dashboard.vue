<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Übersicht</v-toolbar-title>
  </v-toolbar>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs5>
        {{tasks.length}}
      </v-flex>
      <v-flex xs2>
        ≙
      </v-flex>
      <v-flex xs5>
        {{amount|currency}}
      </v-flex>
      <v-flex xs12>
        <b>Freizeit vs. Sparen</b>
      </v-flex>

      <v-flex>
        {{user.ratio|percent}}
      </v-flex>

      <v-flex>
        <v-slider
          v-model="user.ratio"
        ></v-slider>
      </v-flex>

      <v-flex>
        {{user.invRatio|percent}}
      </v-flex>
      <v-flex xs12>
        <b>Statistik</b>
      </v-flex>
      <v-flex xs5>
        <b>Freizeit</b><br>
        {{user.bankAccount.amount|currency}}
      </v-flex>
      <v-flex xs2>
        <small><i>...</i></small>
      </v-flex>
      <v-flex xs5>
        <b>Gespart</b><br>
        {{user.bankAccount.amount|currency}}
      </v-flex>
      <v-flex xs12>
        <b>Verdient gesamt</b><br>
        {{freeAmount|currency}}
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>
import { TASKS, USERS, COMPLETIONS }from '../../models/';
import { Task } from '../../models/'
import { getFreeAmount } from '../../services/helper.service';

console.log(USERS);

export default {
  name: "Dashboard",
  data () {
    return {
      tasks: TASKS,
      user: USERS[0]
    }
  },
  computed: {
    amount: function() {
      let amount = 0;
      console.log(this.tasks);
      this.tasks.forEach((task) => {
        if (task instanceof Task) {
          amount += task.amount;
        }
      });
      return amount;
    },
    freeAmount: function() {
      return getFreeAmount(COMPLETIONS, this.user);
    }
  }
};
</script>
