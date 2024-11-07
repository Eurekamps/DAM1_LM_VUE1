<script setup>
    import { ref } from 'vue';
    import Login from './auth/Login.vue';
    import Register from './auth/Register.vue';

    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);


</script>

<template>
    <Login v-if="true"/>
    <Register v-if="false"/>

</template>

<style scoped>
    

</style>
