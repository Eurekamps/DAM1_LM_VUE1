<script setup>
    import { ref } from 'vue';
    import Login from './auth/Login.vue';
    import Register from './auth/Register.vue';
    import Home from './home/Home.vue';

    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);
    const blHomeVisible=ref(false);

    function mostrarRegistro(){
        blLoginVisible.value=false;
        blRegistroVisible.value=true;
    }

    function mostrarLogin(){
        blLoginVisible.value=true;
        blRegistroVisible.value=false;
    }

    function mostrarHome(){
        blHomeVisible.value=true;
        blLoginVisible.value=false;
    }


</script>

<template>
    <Login v-if="blLoginVisible" @logeado="mostrarHome" @solicitaRegistro="mostrarRegistro"/>
    <Register v-if="blRegistroVisible" @cambiarALogin="mostrarLogin"/>
    <Home v-if="blHomeVisible"/>

</template>

<style scoped>
    

</style>
