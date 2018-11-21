<template>
    <div>
        <v-container>
            <v-layout row>
                <v-flex 3>
                    <v-img :src="logo" id="logo"/>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex 6>
                    <v-img :src="icon1" class="icon"/>  
                </v-flex>
                <v-flex 6>
                    <p>
                        <strong>Lerne Geld! 💰</strong>  <br />
                        Keine Münzen, keine Scheine, kein Sparschwein. Das ist die Zukunft. Dadurch dass alles online lebt wird es auch ein wenig komplexer. Aber Sents hilft dir dabei.
                    </p>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex 6>
                    <v-img :src="icon2" class="icon"/>  
                </v-flex>
                <v-flex 6>
                    <p>
                        <strong>Wünsche erfüllen 🎁</strong>  <br />
                        Jeder hat irgendeinen Wunsch. Und Sents erfüllt ihn dir. Werde für Aufgaben die du erledigst bezahlt und erfülle dir deinen Wunsch!
                    </p>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex 6>
                    <v-img :src="icon3" class="icon"/>  
                </v-flex>
                <v-flex 6>
                    <p>
                        <strong> Finanz-Superkräfte 💪</strong>  <br />
                        Kinder lernen Finanzen zu verwalten und Geld einzuteilen. Der erste Schritt zur Selbständigkeit in der digitalen Welt.
                    </p>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12 text-xs-center>
                    <v-btn color="primary">Sign Up</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12 text-xs-center>
                    <router-link to="/login">
                        <v-btn flat small color="primary">Login</v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <p>Du willst dich erst nur umschauen? Kein Problem!</p>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: "Welcome",
  data: function() {
    return {
      logo: require("../../assets/logo.png"),
      icon1: require("../../assets/icon-pig.png"),
      icon2: require("../../assets/icon-playstation.png"),
      icon3: require("../../assets/icon-hero.png")
    };
  }
};
</script>
<style scoped>
#logo {
  width: 100px !important;
  height: auto;
}
.icon {
  width: 90px !important;
}
</style>
