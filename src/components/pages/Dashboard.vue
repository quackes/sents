<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Übersicht 🏦</v-toolbar-title>
  </v-toolbar>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex xs12>
        <v-card color="yellow">
          <v-card-text>
            <v-layout row align-center>
              <v-flex xs5>
                <h5>Offene Aufgaben</h5>
                <h1>{{numberOfOpenTasks}}</h1>
              </v-flex>
              <v-flex xs2>
                <v-icon>arrow_right_alt</v-icon>
              </v-flex>
              <v-flex xs5>
                <h5> Zu verdienen</h5>
                <h1>{{openAmount|currency}}</h1>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
      
     <v-layout row>
        <v-flex xs12>
          <v-card color="yellow">
            <v-card-text>
              <v-layout row justify-center>
                <v-flex xs12>
                  <h2>Freizeit vs. Sparen</h2>
                </v-flex>
              </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-slider v-model="user.ratio"></v-slider>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <b>{{user.ratio|percent}}</b>
                  </v-flex>
                  <v-flex>
                  {{user.invRatio|percent}}
                </v-flex>
                </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
     </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-card color="yellow">
          <v-card-text>
            <v-layout row>
              <v-flex xs12>
                <h2>Statistik</h2>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
      
      <v-flex xs5>
        <b>Freizeit</b><br>
        <!-- {{freeAmount|currency}} -->
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
  </v-container>
  </div>
</template>
<script>
import { TASKS, USERS, COMPLETIONS } from "../../models/";
import { Task } from "../../models/";
import {
  getFreeAmount,
  getWishAmount,
  getOpenAmount,
  getFullAmount,
  numberOfOpenTasks
} from "../../services/helper.service";
import "../../services/ahoi/ahoi-service";

console.log(USERS);

export default {
  name: "Dashboard",
  data() {
    return {
      tasks: TASKS,
      user: USERS[0]
    };
  },
  subscriptions() {
    return {
      accountAmount: window.ahoi.saldo('DE00999940000000001135')
    }
  },
  dependencies: ["ahoiService"],
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
