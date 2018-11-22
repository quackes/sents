<template>
<div>
  <v-toolbar app>
    <v-btn @click="$router.go(-1)" icon>
        <v-icon>keyboard_arrow_left</v-icon>
    </v-btn> 
    <v-toolbar-title>Neue Aufgabe 💪</v-toolbar-title>
  </v-toolbar>
  <v-container>
        <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                label="Name"
            ></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                label="Verantwortlich"
                value="Mama"
            ></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                label="Wie oft"
                value="Nur einmal"
            ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
          <router-link to="/earn">
            <v-btn color="primary">Weiter</v-btn>
          </router-link>
        </v-flex>
    </v-layout>
   </v-container>  
    <v-spacer />
</div>
</template>
<script>
export default {
  name: "NewTask"
};
</script>