<script setup>
    import {ref} from 'vue';

    const emit = defineEmits(['cambioALogin','registerConExito']);

    const reemail=ref('');
    const repassword=ref('');
    const reRepetirPassword=ref('');

    function clickAceptar(){
    }

    function clickCancelar(){
        //alert("PASO 1");
        emit("cambioALogin");
    }

</script>

<template>
    <div id="contenedor-registro">
        <h1> REGISTRO PAGE</h1><br/><br/>

        <!-- Email Input -->
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="reemail" />
        </div>

        <!-- Password Input -->
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="repassword" />
        </div>

        <!--Repetir Password Input -->
        <div>
            <label for="password">Repetir Password:</label>
            <input type="password" id="password" v-model="reRepetirPassword" />
        </div>
        <br/>

        <button @click="">Aceptar</button>
        <button @click="clickCancelar">Cancelar</button>
    </div>
</template>

<style scoped>
    #contenedor-registro{
        background-color: antiquewhite;
    }
</style>