<script setup>
    import {onMounted, ref} from 'vue';
    import { signInWithEmailAndPassword } from 'firebase/auth';
    import { useCurrentUser, useFirebaseAuth } from 'vuefire';
    import Button from "primevue/button";

    const auth = useFirebaseAuth() // only exists on client side 

    const emit = defineEmits(['cambioARegistro','loginConExito']);

    const email=ref('');
    const password=ref('');



    function clickLogear(){
        signInWithEmailAndPassword(auth,email.value,password.value)
        .then(LoginOK)
        .catch(loginNOK);
    }

    function LoginOK(userCredential){
        /*if (userCredential.user.emailVerified==true) {
            console.log("User's email is verified.");
            emit("loginConExito");
        } else {
            console.log("User's email is not verified.");
            alert("NO ESTA VERIFICADO");
        }*/
        emit("loginConExito");
        
    }

    function loginNOK(error){
        alert(error);
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

        <Button @click="clickLogear">Logearme</Button>
        <Button @click="clickRegistrame">Registrarme</Button>
    </div>

    
</template>

<style scoped>
    #contenedor-login{
        max-width: 1280px;
        background-color: antiquewhite;
    }
</style>
