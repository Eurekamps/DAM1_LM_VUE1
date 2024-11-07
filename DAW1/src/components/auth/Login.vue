<script setup>
    import { ref } from 'vue';

    const sUsuario=ref('');
    const sPassword=ref('');

    function presioneLogin(){
        window.alert("LOGIN CON USUARIO: "+sUsuario.value+" PASSWORD: "+sPassword.value)
    }

    function presioneRegistrar(){
        
    }

</script>

<template>
</template>

<style scoped>
</style>
