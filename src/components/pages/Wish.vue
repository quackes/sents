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
      <v-flex xs6>
        <h3>Gespart</h3>
        <h1>120 €</h1>
      </v-flex>
      <v-flex xs6>
        <h3>Übrig</h3>
        <h1>380 €</h1>
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
          <v-list-tile
            v-for="item in items"
            :key="item.title"
            info
          >

            <v-list-tile-content>
              <v-list-tile-title v-text="item.title"></v-list-tile-title>
            </v-list-tile-content>

            <div>
              <div v-text="item.info"></div>
            </div>
          </v-list-tile>
          <v-divider
              v-if="item + 1 < items.length"
              :key="title"
            ></v-divider>
        </v-list>
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

