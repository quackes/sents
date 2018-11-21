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
import AppBar from './components/AppBar.vue';
import ButtonNav from './components/ButtonNav.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
   // dependencies : ['ahoiService'],
  components: {
    ButtonNav
  },
    methods: {
        test: function(){
            this.ahoiService.init()
        }
    }
}
</script>
