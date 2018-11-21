<template>
    <div>
        <v-toolbar app>
            <v-btn @click="$router.go(-1)" icon>
                <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-toolbar-title>Login 🔓</v-toolbar-title>
        </v-toolbar>
        <v-container>
            <v-layout row text-xs-center justify-center>
                <div justify-center>
                    <v-img :src="icon1" id="login-image"/> 
                </div>
            </v-layout>
            <v-layout row>
                <v-flex xs12 >
                <v-text-field
                    outline
                    label="Email"
                    value="john.doe@gmail.com"
                ></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12>
                    <v-text-field
                    v-model="password"
                    hint="At least 8 characters"
                    placeholder="Password"
                    type="password"
                    outline
                    value="s3cret"
                ></v-text-field>
            </v-flex>
            </v-layout>
            <v-layout row justify-center>
                <v-flex xs12 text-xs-center>
                    <router-link to="/dashboard">
                        <v-btn color="primary">Login</v-btn>
                    </router-link>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
  name: "Login",
  data: function() {
    return {
      icon1: require("../../assets/icon-pig.png")
    };
  }
};
</script>

<style scoped>
#login-image {
  width: 200px !important;
  margin-top: 64px;
  margin-bottom: 32px;
}
</style>

