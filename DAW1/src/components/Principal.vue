<script setup>
    import { ref } from 'vue';
    import Login from './auth/Login.vue';
    import Register from './auth/Register.vue';

    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);

    function mostrarRegistro(){
        blLoginVisible.value=false;
        blRegistroVisible.value=true;
    }

    function mostrarLogin(){
        blLoginVisible.value=true;
        blRegistroVisible.value=false;
    }


</script>

<template>
    <Login v-if="blLoginVisible" @logeado="" @solicitaRegistro="mostrarRegistro"/>
    <Register v-if="blRegistroVisible"/>

</template>

<style scoped>
    

</style>
