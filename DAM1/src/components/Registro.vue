<script setup>
    import {ref} from 'vue';
    import { signOut, createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
    import { useCurrentUser, useFirebaseAuth } from 'vuefire'
    import { addDoc, collection, doc, setDoc} from "firebase/firestore";
    import { ref as storageRef, uploadBytesResumable, getDownloadURL,getStorage } from 'firebase/storage';
    import { useFirestore} from 'vuefire';
    import FileUpload from 'primevue/fileupload';
    import { useToast } from "primevue/usetoast";
    import Toast from 'primevue/toast';
    import Button from "primevue/button";

    const toast = useToast();
    const fileupload = ref();
    const uploadProgress = ref(0);
    const uploadUrl = ref('');

    const bbdd=useFirestore();

    const auth = useFirebaseAuth(); // only exists on client side 

    const storage = getStorage();

    const emit = defineEmits(['cambioALogin','registerConExito']);

    const reemail=ref('');
    const repassword=ref('');
    const reRepetirPassword=ref('');
    const var_nombre=ref('');

    function uploadAvatar(usuario_UID){

        const file = fileupload.value.files[0];

      if (!file) {
        alert('Please select a file!');
        return;
      }

      const fileRef = storageRef(storage, 'uploads/DAM1/'+auth.currentUser.uid+'/'+file.name);
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.error('Upload failed', error);
          createNuevoPerfil("https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png");
        },
        async () => {
          uploadUrl.value = await getDownloadURL(uploadTask.snapshot.ref);
          createNuevoPerfil(uploadUrl.value );
          //alert('File uploaded successfully!');
        }
      );


    };

    function onUpload(){
        toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
    };

    function clickAceptar(){
        createUserWithEmailAndPassword(auth,reemail.value,repassword.value)
        .then(firebaseCrearUsuarioOK)
        .catch(firebaseCrearUsuarioFail);

    }

    function firebaseCrearUsuarioOK(userCredential){
        const user = userCredential.user;
        //sendEmailVerification(user);
        uploadAvatar(auth.currentUser.uid);//PASO 2

        /*
        
        */

        
    }

    function firebaseCrearUsuarioFail(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("FALLO EN REGISTRO: "+errorMessage);
    }

    function createNuevoPerfil(urlAvatar){
        const profileRef = collection(bbdd, "/Profiles");
        const postRef=doc(profileRef, auth.currentUser.uid);
        setDoc(postRef,
        {
            nombre:var_nombre.value,
            urlavatar:urlAvatar
        })
        .then(insertNuevoPerfilOK)
        .catch(insertNuevoPerfilNOK);
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

<!-- File Upload -->
<div class="card flex flex-col gap-6 items-center justify-center">
      <Toast />
      <FileUpload
        ref="fileupload"
        mode="basic"
        accept="image/*"
        :maxFileSize="10000000"
      />
    </div>

    <!-- Progress Indicator -->
    <h3>Progreso de subida: {{ uploadProgress.toFixed(2) }}%</h3>

        <button @click="clickAceptar">Aceptar</button>
        <button @click="clickCancelar">Cancelar</button>
    </div>
</template>

<style scoped>
    #contenedor-registro{
        background-color: antiquewhite;
    }
</style>