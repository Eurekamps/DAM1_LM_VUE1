<script setup>
    import { ref } from 'vue';
    //import { VueFire, VueFireAuth } from 'vuefire'

    import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
    import { useCurrentUser, useFirebaseAuth } from 'vuefire'

    const emit = defineEmits(['logeado','solicitaRegistro']);

    const sUsuario=ref('');
    const sPassword=ref('');

    const auth = useFirebaseAuth();

    function presioneLogin(){
        signInWithEmailAndPassword(auth,sUsuario.value,sPassword.value)
        .then((userCredential) => {
            // User signed in successfully
            const user = userCredential.user;
            // Perform actions after successful sign-in, e.g., redirect or update UI
            alert("Usuario autenticado correctamente");
            emit('logeado');
        })
        .catch((reason)=>
        {
            //console.error('Failed sign', reason);
            //error.value = reason;
            alert("Usuario equivocado intenta otra vez "+reason);
        });

        //alert("TODO BIEN");

        //window.alert("LOGIN CON USUARIO: "+sUsuario.value+" PASSWORD: "+sPassword.value);
        /*if(sUsuario.value.trim()=='yony' && sPassword.value.trim()=='1234'){
            emit('logeado');
        }
        else{
            window.alert("Usuario equivocado intenta otra vez");
        }*/
        
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
