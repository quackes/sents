<template>
<div>
  <v-toolbar app>
    <v-toolbar-title>Übersicht 🏦</v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h3 class="dramatic">Hi {{user.firstname}}! 👋</h3>
        <p>
          Sents hilft dir dabei zu Lernen mit Geld umzugehen. Erledige Aufgaben, werde bezahlt, spare und erfülle dir deine Wünsche!
        </p>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container grid-list-md text-xs-center>
    <v-layout row>
      <v-flex xs12>
        <v-card color="primary" class="text-white">
          <v-card-text>
              <h2 class="dramatic text-left">Offene Aufgaben 💪</h2>
            <v-layout row align-center>
              <v-flex xs5>
                <h1 id="open-tasks" class="dramatic-yellow huge-text">{{numberOfOpenTasks}}</h1>
              </v-flex>
              <v-flex xs2>
                <v-icon color="secondary">arrow_right_alt</v-icon>
              </v-flex>
              <v-flex xs5>
                <h1 class="dramatic-yellow huge-text">{{openAmount|currency}}</h1>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
      
     <v-layout row>
        <v-flex xs12>
          <v-card color="secondary" class="text-red">
            <v-card-text>
              <v-layout row justify-center>
                <v-flex xs12>
                  <h2 class="dramatic text-left">Freizeit oder Sparen ⚖️</h2>
                  <p class="text-left">
                    Finde dein Gleichgewicht und entscheide selbst wie viel Geld direkt auf dein Freizeitkonto geht und wie viel Geld du für deinen Wunsch sparen möchtest.
                  </p>
                </v-flex>
              </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-slider thumb-color="primary" v-model="user.ratio"></v-slider>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex>
                    <h2 class="dramatic-red">{{user.ratio|percent}}</h2>
                  </v-flex>
                  <v-flex>
                  <h2 class="dramatic-red">{{user.invRatio|percent}}</h2>
                </v-flex>
                </v-layout>
            </v-card-text>
          </v-card>
        </v-flex>
     </v-layout>

    <v-layout row>
      <v-flex xs12>
        <v-card color="primary" class="text-white">
          <v-card-text>
            <v-layout row>
              <v-flex xs12>
                <h2 class="dramatic text-left">Fortschritt 📈</h2>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs4>
                <h3>Freizeit</h3>
                <h3 class="dramatic-yellow">{{accountAmount|currency}}</h3>
                <h3 class="dramatic-yellow">{{freeAmount|currency}}</h3>
              </v-flex>
              <v-flex xs4>
                <h3>Gesamt</h3>
                <h3 class="dramatic-yellow">{{fullAmount|currency}}</h3>
              </v-flex>
              <v-flex xs4>
                <h3>Wunsch</h3>
                <h3 class="dramatic-yellow">{{wishAmount|currency}}</h3>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <v-spacer />
  </div>
</template>
<script>
import {
  getFreeAmount,
  getWishAmount,
  getOpenAmount,
  getFullAmount,
  numberOfOpenTasks
} from "../../services/helper.service";
import "../../services/ahoi/ahoi-service";

export default {
  name: "Dashboard",
  data() {
    return {
      completions: [],
      user: {},
      tasks: []
    };
  },
  subscriptions() {
    return {
      accountAmount: window.ahoi.saldo("DE00999940000000001135")
    };
  },
  dependencies: ["ahoiService", "DataService"],
  mounted: function() {
    this.DataService.restore()
      .then(data => {
        console.log(data);
        this.completions = data.completions;
        this.tasks = data.tasks;
        this.user = data.users[0];
      })
      .catch(error => {
        console.warn(error);
      });
  },
  computed: {
    numberOfOpenTasks: function() {
      return numberOfOpenTasks(this.tasks);
    },
    openAmount: function() {
      return getOpenAmount(this.tasks);
    },
    fullAmount: function() {
      return getFullAmount(this.completions, this.user);
    },
    freeAmount: function() {
      return getFreeAmount(this.completions, this.user);
    },
    wishAmount: function() {
      return getWishAmount(this.completions, this.user);
    }
  }
};
</script>
