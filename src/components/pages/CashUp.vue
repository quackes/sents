<template>
<div>
  <v-toolbar app>
    <v-toolbar-title>Verdienen 🚀</v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-list two-line>
        <template v-for="(item, index) in closedTask">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <h3>{{ item.amount }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < closedTask.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
    <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn flat small color="primary">erledigte Anzeigen</v-btn>
        </v-flex>
    </v-layout>
     <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn color="primary">Neue Aufgabe</v-btn>
        </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
     <v-layout row>
        <v-flex xs12>
            <h2>Warten auf Bestätigung</h2>
        </v-flex>
    </v-layout>
    <!-- <v-list two-line>
        <template v-for="(item, index) in pending">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <h3>{{ item.amount }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < pending.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list> -->
  </v-container>
</div>
</template>
<script>
import {getClosedTasks} from '../../services/helper.service';
import { Completion } from '../../models/completion';
import { USERS } from '../../models';
export default {
  name: "CashUp",
  data () {
    return {
      completion: new Completion(USERS[1])
    }
  },
  computed: {
      closedTask: function () {
          return getClosedTasks();
      }
  },
  methods: {
      add: function (task) {
        // this.completion.addTask(task);
      },
      cashUp: function () {
        
      }
  }
};
</script>