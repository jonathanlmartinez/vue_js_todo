
/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: ['Hello', "Hi" , "Hola"],
      newTask: ""
    },
    methods: {
      addNewTask : function() {
        this.tasks.push(this.newTask).reset;
        this.newTask = "";
      }
    }
  });
});

