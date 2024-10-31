<script setup>
    import { ref } from 'vue'

    const sUsuario=ref('...')
    const sPassword=ref('')

    function presioneLogin(){
        window.alert("LOGIN CON USUARIO: "+sUsuario.value+" PASSWORD: "+sPassword.value)
    }

    function presioneRegistrar(){
        window.alert("HAN PRESIONADO BOTON REGISTRAR")
    }


</script>

<template>

    <h1> LOGIN</h1>

    <div>
        <label>USUARIO:</label>
        <input v-model="sUsuario" type="text"></input>
    </div>

    <div>
        <label>PASSWORD:</label>
        <input v-model="sPassword" type="password"></input>
    </div>

    <button @click="presioneLogin">LOGEARSE</button>
    <button @click="presioneRegistrar">REGISTRARSE</button>


</template>

<style scoped>
</style>
