<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Übersicht</v-toolbar-title>
  </v-toolbar>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-card dark color="primary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs6>
        <v-card dark color="primary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12>
        <v-card dark color="primary">
          <v-card-text class="px-0">6</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>
<script>
  export default {
    name: "Dashboard"
  }
</script>
