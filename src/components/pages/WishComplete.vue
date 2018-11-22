<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Wunsch 🎁</v-toolbar-title>
  </v-toolbar>
  <v-container >
    <v-layout row text-xs-center>
      <v-flex xs12>
        <h2 class="dramatic">Playstation 4</h2>
          <v-progress-circular color="accent" :value="100">
            <img id="wish-image" :src="playstation" />
          </v-progress-circular>
          <h1 class="dramatic-red huge-text">500 €</h1>
      </v-flex>
    </v-layout>
    <v-layout row text-xs-center justify-center>
      <h1 id="text-done">Geschafft 🎉</h1>
    </v-layout>
    <v-layout row justify-center>
      <v-flex xs12 text-xs-center>
        <v-btn large color="primary">Wunsch erfüllen</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
    <v-spacer />
  </div>
</template>
<script>
export default {
  name: "WishComplete",
  data: function() {
    return {
      playstation: require("../../assets/playstation.jpg")
    };
  }
};
</script>

<style scoped>
.v-progress-circular {
  height: 40vh !important;
  width: 40vh !important;
}

#wish-image {
  border-radius: 100px;
  height: 20vh;
}

#text-done {
  font-size: 48px;
  font-weight: 900;
  color: #1c47f1;
}
</style>

