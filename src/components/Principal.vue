<script setup>
import Login from './Login.vue'
import { ref } from 'vue';

  const sTitle = ref('Mi Primera App');

  // Methods
  function changeMessage() {
    sTitle.value = 'You clicked the button!';
  }

</script>


<template>

  <h1> {{ sTitle }}</h1>
  <br/> <br/>
  <Login/>

  <button @click="changeMessage">Click Me</button>

  
</template>


<style scoped>

</style>
