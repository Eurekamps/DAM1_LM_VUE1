<script setup>
    import { ref } from 'vue'

    const sUsuario=ref('...')
    const sPassword=ref('')

    function presioneLogin(){
        window.alert("HAN PRESIONADO BOTON LOGIN")
    }


</script>

<template>

    <h1> LOGIN</h1>

    <div>
        <label>USUARIO:</label>
        <input v-model="sUsuario"></input>
    </div>

    <div>
        <label>PASSWORD:</label>
        <input v-model="sPassword"></input>
    </div>

    <button @click="presioneLogin">LOGEARSE</button>
    <button>REGISTRARSE</button>


</template>

<style scoped>
</style>
