<template>
    <div>
        <v-toolbar app>
            <v-toolbar-title>Aufgaben betätigen 💸</v-toolbar-title>
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
                            <v-list-tile-sub-title>{{ item.amount |currency}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn color="accent" fab dark small>
                                <v-icon>add</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                    <v-divider v-if="index + 1 < closedTask.length" :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
            <v-layout row justify-center>
                <v-flex xs12 text-xs-center>
                    <v-btn color="primary" v-on:click="addAll">Alle bestätigen</v-btn>
                </v-flex>
            </v-layout>
            <v-spacer></v-spacer>
            <v-layout row>
                <v-flex xs12>
                    <h2>Bestätigte Aufgaben</h2>
                </v-flex>
            </v-layout>
            <v-list two-line v-if="hasAccepted()">
                <template v-for="(item, index) in completion.tasks">
                    <v-list-tile
                      :key="index"
                      avatar
                    >
                        <v-list-tile-avatar>
                            <img v-bind:src="item.icon">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.amount |currency}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
                    <v-divider v-if="index + 1 < completion.tasks.length" :key="`divider-${index}`"></v-divider>
                </template>

                    <v-list-tile >

                        <v-list-tile-content>
                            <v-list-tile-title>SUMME</v-list-tile-title>
                            <v-list-tile-sub-title>{{ acceptedSum() |currency}}</v-list-tile-sub-title>
                        </v-list-tile-content>

                    </v-list-tile>
            </v-list>

            <v-layout row justify-center>
                <v-flex xs12 text-xs-center>
                    <v-btn v-if="!loading" :disabled="!hasAccepted()" color="primary" v-on:click="cashUp">Auszahlen</v-btn>
                    <v-progress-circular v-if="loading" indeterminate ></v-progress-circular>

                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
import { getClosedTasks } from "../../services/helper.service";
import { Completion } from "../../models/completion";
import { USERS } from "../../models";

export default {
  name: "CashUp",
  data() {
    return {
      completions: [],
      user: {},
      tasks: [],
      completion: new Completion(USERS[1]),
      loading: false
    };
  },
  dependencies: ["ahoiService", "DataService"],
  mounted: function() {
    this.DataService.restore()
      .then(data => {
        console.log(data);
        this.completions = data.completions;
        this.tasks = data.tasks;
        this.user = data.users[1];
        this.completion = new Completion(this.user);
      })
      .catch(error => {
        console.warn(error);
      });
  },
  computed: {
    closedTask: function() {
      return getClosedTasks(this.tasks).filter(t => this.completion.tasks.indexOf(t) < 0);
    }
  },
  methods: {
    add: function(task) {
      // this.completion.addTask(task);
    },
    addAll: function() {
      getClosedTasks(this.tasks).forEach(t => {
        this.completion.addTask(t);
      });
    },
    cashUp: function() {
      this.loading = true;
      new Promise((resolve, reject) => {
        let transactions = this.completion.transactions;
        let transferPromises = [];
        Object.keys(transactions).forEach(key => {
            let t = transactions[key];
            t.tasks.forEach(t => t.paid())
          transferPromises.push(window.ahoi.transfer(t));
        });
        Promise.all(transferPromises).then(resolve, reject);
      })
        .then(() => {
          this.completion = new Completion(USERS[1]);
          this.loading = false;
          this.DataService.store();
        })
        .catch(() => (this.loading = false));
    },
    hasAccepted: function() {
      return !!this.completion.tasks.length;
    },
    acceptedSum: function() {
      return this.completion.tasks.reduce((cur, next) => cur + next.amount, 0);
    }
  }
};
</script>