<script setup>
    import {ref} from 'vue';

    const emit = defineEmits(['cambioARegistro','loginConExito']);

    const email=ref('');
    const password=ref('');

    function clickLogear(){
        if(email.value=='yony' && password.value=='123456'){
            emit("loginConExito");
        }
        else{
            alert("USUARIO O CONTRASEÑA NO COINCIDEN");
        }
        
    }

    function clickRegistrame(){
        emit("cambioARegistro");
    }

</script>

<template>

    <div id="contenedor-login">
        <h1> LOGIN PAGE</h1><br/><br/>

        <!-- Email Input -->
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" />
        </div>

        <!-- Password Input -->
        <div>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" />
        </div>
        <br/>

        <button @click="clickLogear">Logearme</button>
        <button @click="clickRegistrame">Registrarme</button>
    </div>

    
</template>

<style scoped>
    #contenedor-login{
        background-color: antiquewhite;
    }
</style>
