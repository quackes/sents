<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Wunsch 🎁</v-toolbar-title>
  </v-toolbar>
  <v-container >
    <v-layout row text-xs-center>
      <v-flex xs12>
        <h2>Playstation 4</h2>
          <v-progress-circular :value="40"></v-progress-circular>
          <h1>500</h1>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center>
      <v-flex xs4>
        <h3>Gespart</h3>
        <h1>120 €</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Übrig</h3>
        <h1>380 €</h1>
      </v-flex>
      <v-flex xs4>
        <h3>Wunsch erreicht in</h3>
        <h1>61 Tagen</h1>
      </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout row>
      <v-flex xs12>
        <h1>Wunschliste</h1>
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
                <div v-text="item.info"></div>
              </div>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="`divider-${index}`"></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 text-xs-center>
        <v-btn flat small color="primary">Hinzufügen</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>
export default {
  name: "Wish",
  data: function() {
    return {
      items: [
        { title: "Neues Fahrrad", info: "450 € übrig" },
        { title: "Snowboard", info: "320€ übrig" }
      ]
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
.spacer {
  margin-top: 64px;
}
</style>

