<template>
    <v-app>
        <v-content>
            <div class="scroll-container">
                <v-container fluid grid-list-xl>
                    <router-view></router-view>
                </v-container>
            </div>
        </v-content>
        <ButtonNav/>
    </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import ButtonNav from "./components/ButtonNav.vue";
import HelloWorld from "./components/HelloWorld.vue";

import AhoiService from "./services/ahoi/ahoi-service";

export default {
  name: "app",
  dependencies: ["ahoiService"],
  components: {
    ButtonNav
  },
  methods: {
    loginAhoi: function() {
      this.ahoiService.init().then(() => {
        this.ahoiService.transfer();
      });
    }
  }
};
</script>

<style>
.v-content {
  max-height: 100vh;
}
.scroll-container {
  height: 100%;
  overflow-y: scroll;
  backface-visibility: hidden;
}
.container {
  padding-left: 8px;
  padding-right: 8px;
}
</style>
