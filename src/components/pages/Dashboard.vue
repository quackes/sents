<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Übersicht</v-toolbar-title>
  </v-toolbar>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs5>
        {{numberOfOpenTasks}}
      </v-flex>
      <v-flex xs2>
        ≙
      </v-flex>
      <v-flex xs5>
        {{openAmount|currency}}
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
        {{freeAmount|currency}}
        {{accountAmount|currency}}
      </v-flex>
      <v-flex xs2>
        <small><i>...</i></small>
      </v-flex>
      <v-flex xs5>
        <b>Gespart</b><br>
        {{wishAmount|currency}}
      </v-flex>
      <v-flex xs12>
        <b>Verdient gesamt</b><br>
        {{fullAmount|currency}}
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>
import { TASKS, USERS, COMPLETIONS }from '../../models/';
import { Task } from '../../models/'
import { getFreeAmount, getWishAmount, getOpenAmount, getFullAmount, numberOfOpenTasks } from '../../services/helper.service';
import '../../services/ahoi/ahoi-service';

console.log(USERS);

export default {
  name: "Dashboard",
  data () {
    return {
      tasks: TASKS,
      user: USERS[0]
    }
  },
  subscriptions () {
    return {
      accountAmount: window.ahoi.saldo(USERS[0].bankAccount.iban)
    }
  },
  dependencies : ['ahoiService'],
  computed: {
    numberOfOpenTasks: function() {
      return numberOfOpenTasks();
    },
    openAmount: function() {
      return getOpenAmount(COMPLETIONS, this.user);
    },
    fullAmount: function() {
      return getFullAmount(COMPLETIONS, this.user);
    },
    freeAmount: function() {
      return getFreeAmount(COMPLETIONS, this.user);
    },
    wishAmount: function() {
      return getWishAmount(COMPLETIONS, this.user);
    }
  }
};
</script>
