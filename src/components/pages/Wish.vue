<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Wunsch 🎁</v-toolbar-title>
  </v-toolbar>
  <v-container >
    <v-layout row text-xs-center v-if="wishes.length > 0">
      <v-flex xs12>
        <h2 class="dramatic">{{wishes[0].title}}</h2>
          <v-progress-circular color="accent" :value="percentProgress">
            <img id="wish-image" :src="playstation" />
          </v-progress-circular>
          <h1 class="dramatic-red huge-text">{{wishes[0].amount | currency}}</h1>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center align-center v-if="wishes.length > 0">
      <v-flex xs4>
        <h3>Gespart</h3>
        <h1 class="dramatic-red">{{wishAmount|currency}}</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Übrig</h3>
        <h1 class="dramatic-red">{{restAmount|currency}}</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Tage zum Ziel</h3>
        <h1 class="dramatic-red">{{Math.round(restAmount/750)}}</h1>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout row>
      <v-flex xs12>
        <h2 class="dramatic">Wunschliste</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-list>
          <template v-for="(item, index) in wishes">
            <v-list-tile :key="index" info>

              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
              <div>
                <!-- <div class="dramatic-blue">{{item.amount|currency}}</div> -->
              </div>
            </v-list-tile>
            <v-divider v-if="index + 1 < wishes.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 text-xs-center>
        <v-btn color="primary">Neuer Wunsch</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
    <v-spacer />
  </div>
</template>
<script>
import { getWishAmount } from '../../services/helper.service';
export default {
  name: "Wish",
  data: function() {
    return {
      completions: [],
      user: {},
      wishes: [],
      playstation: require("../../assets/playstation.jpg")
    };
  },
  dependencies: ["DataService"],
  mounted: function () {
    this.DataService.restore()
      .then((data) => {
        console.log(data);
        this.completions = data.completions;
        this.tasks = data.tasks;
        this.user = data.users[0];
        this.wishes = this.user.wishes;
        this.openTasks = getOpenTasks( data.tasks);
        this.closedTasks = getClosedTasks( data.tasks);
      })
      .catch((error) => {
        console.warn(error);
      });
  },
  computed: {
    wishAmount: function() {
      return getWishAmount(this.completions, this.user);
    },
    restAmount: function() {
      return this.wishes[0].amount - getWishAmount(this.completions, this.user);
    },
    percentProgress: function() {
      return getWishAmount(this.completions, this.user) / this.wishes[0].amount * 100;
    }
  }
};
</script>

<style scoped>
.v-progress-circular {
  height: 20vh !important;
  width: 20vh !important;
}

#wish-image {
  border-radius: 100px;
  height: 10vh;
}
</style>

