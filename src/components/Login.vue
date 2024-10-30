<script setup>
import {ref} from 'vue';

const email=ref('');
const password=ref('');

function clickLogear(){
    window.alert("USUARIO: "+email.value + " PASSWORD: "+password.value);
}

</script>

<template>
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


</template>


<style scoped>

</style>
