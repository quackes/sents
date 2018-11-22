<template>
  <v-card flat v-if="hide==false">
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="white"
    >
      <v-btn
        color="primary"
        flat
        value="overview"
        to="/dashboard"
      >
        <span>Übersicht</span>
        <v-icon>account_balance_wallet</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="earn"
        to="/earn"
      >
        <span>Verdienen</span>
        <v-icon>fitness_center</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="wish"
        to="/wish"
      >
        <span>Wunsch</span>
        <v-icon>flag</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="settings"
        to="/settings"
      >
        <span>Einstellungen</span>
        <v-icon>settings</v-icon>
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
    let path = window.router.currentRoute.path;
    if (
        path === "/" ||
        path === "/login" ||
        path === "/cash-up" ||
        path === "/celebrate"
      ) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    window.router.afterEach((to, from) => {
      if (
        to.path === "/" ||
        to.path === "/login" ||
        to.path === "/cash-up" ||
        to.path === "/celebrate"
      ) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    });
  }
};
</script>