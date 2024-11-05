<script setup>
    import {ref} from 'vue';

    const email=ref('');
    const password=ref('');

    const reemail=ref('');
    const repassword=ref('');
    const reRepetirPassword=ref('');

    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);

    function clickLogear(){
        //window.alert("USUARIO: "+email.value + " PASSWORD: "+password.value);
    }

    function clickRegistrame(){
        //window.alert("USUARIO: "+email.value + " PASSWORD: "+password.value);
        blLoginVisible.value=false;
        blRegistroVisible.value=true;
    }

    function clickAceptar(){
        //window.alert("USUARIO: "+email.value + " PASSWORD: "+password.value);
    }

    function clickCancelar(){
        //window.alert("USUARIO: "+email.value + " PASSWORD: "+password.value);
    }

</script>

<template>

    <div id="contenedor-login" v-if="blLoginVisible">
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

    <div id="contenedor-registro" v-if="blRegistroVisible">
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

        <!-- Password Input -->
        <div>
            <label for="password">Repetir Password:</label>
            <input type="password" id="password" v-model="reRepetirPassword" />
        </div>
        <br/>

        <button @click="clickLogear">Aceptar</button>
        <button @click="">Cancelar</button>
    </div>
</template>

<style scoped>
    #contenedor-login{
        background-color: antiquewhite;
    }
</style>
