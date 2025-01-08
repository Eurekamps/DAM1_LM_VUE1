<script setup>
    import {ref} from 'vue';
    import { signOut, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
    import { useCurrentUser, useFirebaseAuth } from 'vuefire'
    import { addDoc, collection, doc, setDoc} from "firebase/firestore";
    import { useFirestore } from 'vuefire';

    const bbdd=useFirestore();

    const auth = useFirebaseAuth(); // only exists on client side 

    const emit = defineEmits(['cambioALogin','registerConExito']);

    const reemail=ref('');
    const repassword=ref('');
    const reRepetirPassword=ref('');
    const var_nombre=ref('');

    function clickAceptar(){
        createUserWithEmailAndPassword(auth,reemail.value,repassword.value)
        .then(firebaseCrearUsuarioOK)
        .catch(firebaseCrearUsuarioFail);

    }

    function firebaseCrearUsuarioOK(userCredential){
        const user = userCredential.user;
        sendEmailVerification(user);
        const profileRef = collection(bbdd, "/Profiles");
        //addDoc(profileRef,{nombre:var_nombre.value})
        const postRef=doc(profileRef, auth.currentUser.uid);
        setDoc(postRef,{nombre:var_nombre.value})
        .then(insertNuevoPerfilOK)
        .catch(insertNuevoPerfilNOK);

        
    }

    function firebaseCrearUsuarioFail(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("FALLO EN REGISTRO: "+errorMessage);
    }

    function insertNuevoPerfilOK(docRef){
        alert("documento Nuevo creado, con ID: "+docRef.id);
        emit("cambioALogin");
    }

    function insertNuevoPerfilNOK(error){
        
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

        <!-- Nombre Input -->
        <div>
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="var_nombre" />
        </div>

        <button @click="clickAceptar">Aceptar</button>
        <button @click="clickCancelar">Cancelar</button>
    </div>
</template>

<style scoped>
    #contenedor-registro{
        background-color: antiquewhite;
    }
</style>