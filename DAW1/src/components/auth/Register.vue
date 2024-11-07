<script setup>
    import { ref } from 'vue';

    const sUsuarioRe=ref('');
    const sPasswordRe=ref('');
    const sRepetirPasswordRe=ref('');

    function presioneAceptar(){

    }

    function presioneCancelar(){

    }

</script>

<template>
    <div id="contenedor-registro">
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
    #contenedor-registro{
        background-color:bisque;
    }
</style>