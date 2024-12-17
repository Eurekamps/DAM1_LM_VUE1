<script setup>
  import Login from './Login.vue';
  import Registro from './Registro.vue';
  import { ref } from 'vue';
  import Home from './home/Home.vue';

  const sTitle = ref('Mi Primera App');

  const blLoginVisible=ref(false);
  const blRegistroVisible=ref(false);
  const blHomeVisible=ref(true);

  // Methods
  function changeMessage() {
    sTitle.value = 'You clicked the button!';
  }

  function loginARegistro() {
    blLoginVisible.value=false;
    blRegistroVisible.value=true;
  }

  function registroALogin(){
    //alert("PASO 2");
    blLoginVisible.value=true;
    blRegistroVisible.value=false;
  }

  function loginConExito(){
    blLoginVisible.value=false;
    blRegistroVisible.value=false;
    blHomeVisible.value=true;
  }

</script>


<template>

  <h1>TITULO: {{ sTitle }}</h1>
  <br/> <br/>
  <Login v-if="blLoginVisible" @cambioARegistro="loginARegistro" @loginConExito="loginConExito"/>
  <Registro v-if="blRegistroVisible" @cambioALogin="registroALogin"/>
  <Home v-if="blHomeVisible"></Home>

  
</template>


<style scoped>

</style>
