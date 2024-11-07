<script setup>
    import { ref } from 'vue';

    const emit = defineEmits(['logeado','solicitaRegistro']);

    const sUsuario=ref('');
    const sPassword=ref('');

    function presioneLogin(){
        window.alert("LOGIN CON USUARIO: "+sUsuario.value+" PASSWORD: "+sPassword.value)
    }

    function presioneRegistrar(){
        emit('solicitaRegistro');
    }

</script>

<template>
    <div id="contenedor-login">
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
    </div>
</template>

<style scoped>
    #contenedor-login{
        background-color: aquamarine;
    }
</style>
