<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  name: "AppBar",
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