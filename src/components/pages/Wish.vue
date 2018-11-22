<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Wunsch 🎁</v-toolbar-title>
  </v-toolbar>
  <v-container >
    <v-layout row text-xs-center>
      <v-flex xs12>
        <h2 class="dramatic">Playstation 4</h2>
          <v-progress-circular color="accent" :value="40">
            <img id="wish-image" :src="playstation" />
          </v-progress-circular>
          <h1 class="dramatic-red huge-text">500 €</h1>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center align-center>
      <v-flex xs4>
        <h3>Gespart</h3>
        <h1 class="dramatic-red">120 €</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Übrig</h3>
        <h1 class="dramatic-red">380 €</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Tage zum Ziel</h3>
        <h1 class="dramatic-red">61</h1>
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
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" info>

              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
              <div>
                <div class="dramatic-blue" v-text="item.info"></div>
              </div>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
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
export default {
  name: "Wish",
  data: function() {
    return {
      items: [
        { title: "Neues Fahrrad", info: "450 € übrig" },
        { title: "Snowboard", info: "320 € übrig" }
      ],
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
      })
      .catch((error) => {
        console.warn(error);
      });
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

