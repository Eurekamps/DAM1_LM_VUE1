<script setup>
    import { ref } from 'vue';
    import { createUserWithEmailAndPassword,sendEmailVerification } from 'firebase/auth';
    import { useFirebaseAuth,useFirestore } from 'vuefire';
    import {collection, addDoc, setDoc,doc } from "firebase/firestore";

    const sUsuarioRe=ref('');
    const sPasswordRe=ref('');
    const sRepetirPasswordRe=ref('');
    const errorMensaje=ref('');
    const buenMensaje=ref('');
    const sNombreUser=ref('');

    const emit=defineEmits(["cambiarALogin"]);
    const auth=useFirebaseAuth();
    const db = useFirestore();

    function presioneAceptar(){
        errorMensaje.value="";
        buenMensaje.value="";

        if(!sUsuarioRe.value || !sPasswordRe.value){
            errorMensaje.value="Porfavor complete todos los campos";
        }
        else{
            createUserWithEmailAndPassword(auth,sUsuarioRe.value,sPasswordRe.value)
            .then(registerOK)
            .catch(registerNOK);
        }

    }

    function registerOK(usuarioRegistrado){
        buenMensaje.value="Registro completado";
        //sendEmailVerification(auth.currentUser);
        crearPerfil();
        
    }

    function registerNOK(error){
        
        if(error=="FirebaseError: Firebase: Error (auth/email-already-in-use)."){
            alert("USUARIO YA EXISTE, INTENTA LOGEARTE");
        }
        else{
            errorMensaje.value="FALLA POR: "+error;
        }
    }

    /**
     * Funcion que coge los datos del formulario visual y los inserta en la coleccion perfiles
     * de la base de datos
     */
    function crearPerfil(){
        const profileRef = collection(db, "/Profiles");
        const postRef=doc(profileRef, auth.currentUser.uid);
        setDoc(postRef,{nombre:sNombreUser.value})
        //addDoc(collectionRefPerfiles,datosNuevoPerfil)
        .then(perfilInsertadoOK)
        .catch(perfilInsertadoNOK);
    }

    function perfilInsertadoOK(nuevoPerfilRef){
        alert("SE HA INSERTADO CORRECTAMENTE UN PERFIL NUEVO "+nuevoPerfilRef.id);
        emit("cambiarALogin");
    }

    function perfilInsertadoNOK(error){
        
    }
    

    function presioneCancelar(){
        emit("cambiarALogin");
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

        <div>
            <label>NOMBRE:</label>
            <input v-model="sNombreUser" type="text"></input>
        </div>

        <button @click="presioneAceptar">ACEPTAR</button>
        <button @click="presioneCancelar">CANCELAR</button>

        <label>{{ errorMensaje }}</label>
        <label>{{ buenMensaje }}</label>
    </div>
</template>

<style scoped>
    #contenedor-registro{
        background-color:bisque;
    }
</style>