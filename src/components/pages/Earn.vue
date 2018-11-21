<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Verdienen 🚀</v-toolbar-title>
  </v-toolbar>
  <v-container>
    <v-list two-line>
        <template v-for="(item, index) in open">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <h3>{{ item.amount }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < open.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
    <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn flat small color="primary">erledigte Anzeigen</v-btn>
        </v-flex>
    </v-layout>
     <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn color="primary">Neue Aufgabe</v-btn>
        </v-flex>
    </v-layout>
    <v-spacer></v-spacer>
     <v-layout row>
        <v-flex xs12>
            <h2>Warten auf Bestätigung</h2>
        </v-flex>
    </v-layout>
    <v-list two-line>
        <template v-for="(item, index) in pending">
            <v-list-tile
              :key="index"
              avatar
            >
                <v-list-tile-avatar>
                    <img v-bind:src="item.icon">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.parent }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <h3>{{ item.amount }}</h3>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < pending.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
  </v-container>
</div>
</template>
<script>
export default {
  name: "Earn",
  data: function() {
    return {
      open: [
        {
          title: "Garage Aufräumen",
          parent: "Mama",
          amount: "15 €",
          icon: require("../../assets/icon-clean.png")
        },
        {
          title: "Gassi gehen",
          parent: "Papa",
          amount: "3 €",
          icon: require("../../assets/icon-dog.png")
        },
        {
          title: "Rasen mähen",
          parent: "Papa",
          amount: "20 €",
          icon: require("../../assets/icon-lawn.png")
        },
        {
          title: "Wäsche sortieren",
          parent: "Mama",
          amount: "7 €",
          icon: require("../../assets/icon-laundry.png")
        }
      ],
      pending: [
        {
          title: "Rasen mähen",
          parent: "Papa",
          amount: "20 €",
          icon: require("../../assets/icon-lawn.png")
        },
        {
          title: "Wäsche sortieren",
          parent: "Mama",
          amount: "7 €",
          icon: require("../../assets/icon-laundry.png")
        },
        {
          title: "Wäsche sortieren",
          parent: "Mama",
          amount: "7 €",
          icon: require("../../assets/icon-laundry.png")
        },
        {
          title: "Wäsche sortieren",
          parent: "Mama",
          amount: "7 €",
          icon: require("../../assets/icon-laundry.png")
        }
      ]
    };
  }
};
</script>