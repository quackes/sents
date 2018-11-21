<template>
  <div>
    <v-toolbar app>
        <v-toolbar-title>Übersicht</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex xs6>
          {{tasks.length}}
        </v-flex>
        <v-flex xs6>
          {{amount()}}
        </v-flex>
        <v-flex xs12>
          <v-slider
            v-model="slider"
          ></v-slider>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import { TASKS } from '../../models/';

export default {
  name: "Dashboard",
  data () {
    return {
      slider: 45,
      tasks: TASKS
    }
  },
  computed: {
    amount: function () {
      let amount = 0;
      this.tasks.forEach((task) => {
        amount += task.amount;
      });
      return amount;
    }
  }
}
</script>
