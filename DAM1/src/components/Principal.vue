<script setup>
  import Login from './Login.vue';
  import Registro from './Registro.vue';
  import { ref } from 'vue';

  const sTitle = ref('Mi Primera App');

  const blLoginVisible=ref(true);
  const blRegistroVisible=ref(false);

  // Methods
  function changeMessage() {
    sTitle.value = 'You clicked the button!';
  }

  function loginARegistro() {
    blLoginVisible.value=false;
    blRegistroVisible.value=true;
  }

</script>


<template>

  <h1>TITULO: {{ sTitle }}</h1>
  <br/> <br/>
  <Login v-if="blLoginVisible" @cambioARegistro="loginARegistro" @loginConExito=""/>
  <Registro v-if="blRegistroVisible"/>

  
</template>


<style scoped>

</style>
