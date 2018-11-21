<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="loginAhoi">LoginAhoi</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

import AhoiService from './services/ahoi/ahoi-service'


export default {
  name: 'app',
  dependencies : ['ahoiService'],
  components: {
    HelloWorld
  },
    methods: {
        loginAhoi: function(){
            this.ahoiService.init()
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
