<template>
<div>
  <v-toolbar app>
      <v-toolbar-title>Einstellungen ⚙️</v-toolbar-title>
  </v-toolbar>
  <v-container >
    
  </v-container>
  </div>
</template>
<script>
export default {
  name: "Settings",
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

