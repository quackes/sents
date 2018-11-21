<template>
  <v-card flat v-if="hide==false">
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="white"
    >
      <v-btn
        color="teal"
        flat
        value="overview"
        to="/dashboard"
      >
        <span>Übersicht</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="earn"
        to="/earn"
      >
        <span>Verdienen</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="wish"
        to="/wish"
      >
        <span>Wunsch</span>
        <v-icon>place</v-icon>
      </v-btn>

      <v-btn
        color="teal"
        flat
        value="settings"
        to="/settings"
      >
        <span>Einstellungen</span>
        <v-icon>place</v-icon>
      </v-btn>
      <v-btn
        color="teal"
        flat
        value="cash-up"
        to="/cash-up"
      >
        <span>Abrechnen</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
export default {
  name: "ButtonNav",
  data() {
    return {
      bottomNav: "recent",
      hide: true
    };
  },
  mounted: function() {
    window.router.afterEach((to, from) => {
      if (to.path === "/" || to.path === "/login") {
        this.hide = true;
      } else {
        this.hide = false;
      }
    });
  }
};
</script>