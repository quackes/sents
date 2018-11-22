<template>
<div>
  <v-toolbar app>
      <v-btn @click="$router.go(-1)" icon>
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
      <v-toolbar-title>Wunsch erfüllen 🎉 </v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-layout row text-xs-center>
      <v-flex xs12>
          <img style="width:100%;" :src="gif" />
      </v-flex>
    </v-layout>
    <v-spacer />
    <v-layout row text-xs-center justify-center>
        <v-flex xs12>
            <img style="width:60%;" :src="logo" />
        </v-flex>
    </v-layout>
    <v-layout row text-xs-center justify-center>
        <v-flex xs12>
            <h1 class="dramatic-red">Machen statt Träumen.</h1>
        </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>
export default {
  name: "Celebrate",
  data: function() {
    return {
      playstation: require("../../assets/playstation.jpg"),
      gif: "https://media.giphy.com/media/5yLgoctdubLO8XGodOM/giphy.gif",
      logo: require("../../assets/logo.png")
    };
  }
};
</script>



