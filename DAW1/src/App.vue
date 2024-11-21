<script setup>
  import Principal from './components/Principal.vue';
  import { initializeApp } from 'firebase/app'
  //import { getFirestore, collection } from 'firebase/firestore'

  const firebaseApp = initializeApp({

  })

</script>

<template>

  <div>
    <h1> MI PRIMERA APP</h1>
  </div>
  
  <br/>
  <br/>

  <div>
    <Principal></Principal>
  </div>
  

</template>

<style scoped>
  .contenedores{
      background-color:rgb(57, 248, 143);
  }
</style>
