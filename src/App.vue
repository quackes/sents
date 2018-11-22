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

.spacer {
  margin-top: 32px;
}

.container {
  padding-left: 8px;
  padding-right: 8px;
}

body {
  font-family: "Nunito", sans-serif;
}

.application {
  font-family: "Nunito", sans-serif;
  font-weight: 700;
  background-color: white !important;
}

.v-toolbar__title {
  font-weight: 900;
}

.v-toolbar {
  background-color: white !important;
  box-shadow: none;
}

.v-btn__content {
  font-weight: 900;
}

.v-list__tile__title {
  font-weight: 700;
}
.v-card {
  border-radius: 8px;
}
.dramatic {
  font-weight: 900;
}
.dramatic-red {
  font-weight: 900;
  color: #ea3468;
}
.dramatic-blue {
  font-weight: 900;
  color: #1c47f1;
}
.dramatic-yellow {
  font-weight: 900;
  color: #fade4b;
}

.text-white {
  color: white !important;
}
.text-red {
  color: #ea3468 !important;
}

.huge-text {
  font-size: 56px;
}

#open-tasks {
  border: 10px solid #fade4b;
  border-radius: 100px;
}

.text-left {
  text-align: left !important;
}
</style>
