<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Verdienen 🚀</v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-list two-line>
        <template v-for="(item, index) in openTasks">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent.firstname }}</v-list-tile-sub-title>
                </v-list-tile-content>


                        <v-list-tile-action>
                            <v-btn v-on:click="close(item)" color="primary" fab dark small>
                                <v-icon>check</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                <v-list-tile-action>
                    <h3 class="dramatic-blue">{{ item.amount|currency }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < openTasks.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
    <!--<v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn flat small color="primary">erledigte Anzeigen</v-btn>
        </v-flex>
    </v-layout> -->
     <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
          <router-link to="/new-task">
            <v-btn color="primary">Neue Aufgabe</v-btn>
          </router-link>
        </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
     <v-layout row>
        <v-flex xs12>
            <h2>Erledigte Aufgaben</h2>
        </v-flex>
    </v-layout>
    <v-list two-line>
        <template v-for="(item, index) in closedTasks">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent.firstname }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <h3 class="dramatic-blue">{{ item.amount|currency }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < closedTasks.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
  </v-container>
    <v-spacer />
</div>
</template>
<script>
import { getClosedTasks, getOpenTasks } from "../../services/helper.service";
export default {
  name: "Earn",
  data: function() {
    return {
      openTasks: [],
      closedTasks: []
    };
  },
  dependencies: ["DataService"],
  mounted: function() {
    this.DataService.restore()
      .then(data => {
        console.log(data);
        this.completions = data.completions;
        this.tasks = data.tasks;
        this.user = data.users[0];
        this.openTasks = getOpenTasks(data.tasks);
        this.closedTasks = getClosedTasks(data.tasks);
      })
      .catch(error => {
        console.warn(error);
      });
  },
  methods: {
    close: function(task) {
      let index = this.tasks.indexOf(task);
      if (index >= 0) {
        console.log(this.tasks[index]);
        this.tasks[index].done();
        this.openTasks = getOpenTasks(this.tasks);
        this.closedTasks = getClosedTasks(this.tasks);
        this.DataService.store();
      }
    }
  }
};
</script>