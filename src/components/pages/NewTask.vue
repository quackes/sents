<template>
<div>
  <v-toolbar app>
    <v-btn @click="$router.go(-1)" icon>
        <v-icon>keyboard_arrow_left</v-icon>
    </v-btn> 
    <v-toolbar-title>Neue Aufgabe 💪</v-toolbar-title>
  </v-toolbar>
  <v-container>
        <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                v-model="task.title"
                label="Titel"
            ></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                readonly
                label="Verantwortlich"
                v-model="user.firstname"
            ></v-text-field>
            </v-flex>
        </v-layout>
         <v-layout row text-xs-center justify-center>
            <v-flex xs12 >
            <v-text-field
                outline
                v-model="task.amount"
                label="Belohnung"
                type="number"
                suffix="€"
            ></v-text-field>
            </v-flex>
        </v-layout>
        <v-layout row justify-center>
        <v-flex xs12 text-xs-center>
            <v-btn color="primary" type="submit" v-on:click="save">Weiter</v-btn>
        </v-flex>
    </v-layout>
   </v-container>  
    <v-spacer />
</div>
</template>
<script>
import { Task } from '../../models/task.js';
export default {
  name: "NewTask",
  data: function() {
    return {
        task: {
            title: '',
            amount: 3
        },
        user: {},
        tasks: []
    };
  },
  dependencies: ["DataService"],
  mounted: function() {
    this.DataService.restore()
      .then(data => {
        this.user = data.users[1];
        this.tasks = data.tasks;
      })
      .catch(error => {
        console.warn(error);
      });
  },
  methods: {
    save: function () {
        this.tasks.push(new Task(this.task.title, parseInt(this.task.amount * 100), this.user , require("../../assets/icon-clean.png")));
        this.DataService.store().
        then(() => {
            window.router.push('/earn')
        });   
    }
  }
};
</script>