<script setup>
    import { ref } from 'vue'


    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);


</script>

<template>

    <div id="contenedor-login" v-if="blLoginVisible">
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

    <div id="contenedor-registro" v-if="blRegistroVisible">
        <h1>REGISTRO</h1>

        <div>
            <label>USUARIO:</label>
            <input v-model="sUsuarioRe" type="text"></input>
        </div>

        <div>
            <label>PASSWORD:</label>
            <input v-model="sPasswordRe" type="password"></input>
        </div>

        <div>
            <label>REPETIR PASSWORD:</label>
            <input v-model="sRepetirPasswordRe" type="password"></input>
        </div>

        <button @click="">ACEPTAR</button>
        <button @click="presioneCancelar">CANCELAR</button>
    </div>
    


</template>

<style scoped>
    #contenedor-login{
        background-color: aquamarine;
    }

</style>
