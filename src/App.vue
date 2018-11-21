<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button v-on:click="test">test</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

var a = '';

export default {
  name: 'app',
    dependencies : ['ahoiService'],
  components: {
    HelloWorld
  },
    methods: {
        test: function(){
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
