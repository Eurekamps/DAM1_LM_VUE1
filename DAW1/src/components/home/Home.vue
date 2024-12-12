<script setup>
    import { ref } from 'vue';
    //import { db } from '@/firebase';
    import { useFirestore } from 'vuefire';
    import { doc, getDoc } from "firebase/firestore";

    const arPosts=ref([]);

    const sNuevoTitulo=ref('');
    const sNuevoCuerpo=ref('');
    const sNombreBotonAgregar=ref('Agregar');

    const db = useFirestore();

    function agregarPost(){
        const idNuevoPost=arPosts.value.length+1;
        arPosts.value.push({ id:idNuevoPost, 
            titulo: sNuevoTitulo.value, 
            cuerpo: sNuevoCuerpo.value, 
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6D8Wox_753mhLFRQWR8T_h_IC0n0LNeGag&s' });
        sNuevoTitulo.value='';
        sNuevoCuerpo.value='';
    }

    function descargarPosts(){
        const docRef = doc(db, "Profiles", "yony1");
        getDoc(docRef)
        .then(descargaOK)
        .catch(descargaNOK);

        //const docSnap = await getDoc(docRef);
        /*
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
        */
    }

    function descargaOK(docSnap){
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            alert("Document data: NAME: "+docSnap.data()['name']);
        } else {
        // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    function descargaNOK(error){

    }

</script>

<template>
    <h1>HOME</h1>

    <div class="contenedor-form">
        <input v-model="sNuevoTitulo" placeholder="Nuevo titulo de Post"/>
        <textarea v-model="sNuevoCuerpo" placeholder="Nuevo cuerpo de Post"/>
        <button @click="agregarPost">{{ sNombreBotonAgregar }}</button>
        <button @click="descargarPosts">DESCARGAR POSTS</button>

    </div>

    <div v-for="post in arPosts" v-bind:key="post.id" class="contenedor-post">
        <h2>{{ post.titulo }}</h2>
        <p>{{ post.cuerpo }}</p>
        <img v-bind:src="post.imagen"/>
    </div>



</template>

<style scoped>
    .contenedor-post{
        border: 2px solid;
        margin: 5px;
    }

    .contenedor-form{
        display: flex;
        flex-direction: column;
    }
</style>
