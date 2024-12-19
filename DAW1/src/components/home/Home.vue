<script setup>
    import { ref } from 'vue';
    //import { db } from '@/firebase';
    import { useFirestore } from 'vuefire';
    import { doc, getDoc, getDocs , collection, setDoc, addDoc } from "firebase/firestore";

    const arPosts=ref([
    ]);

    const sNuevoTitulo=ref('');
    const sNuevoCuerpo=ref('');
    const sNombreBotonAgregar=ref('Agregar');

    const db = useFirestore();

    function agregarPost(){
        const datosNuevoPost={ 
            //id:idNuevoPost, 
            title: sNuevoTitulo.value, 
            body: sNuevoCuerpo.value, 
            likes:0,
            imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6D8Wox_753mhLFRQWR8T_h_IC0n0LNeGag&s' };

        //const documentoRefPostNuevo=doc(db, "Profiles/yony1/Posts", ""+Date.now());
        const collectionRefPosts=collection(db,"Profiles/yony1/Posts");
        //setDoc(documentoRefPostNuevo,datosNuevoPost)
        addDoc(collectionRefPosts,datosNuevoPost)
        .then(postInsertadoOK)
        .catch(postInsertadoNOK);

        /*
        const idNuevoPost=arPosts.value.length+1;
        arPosts.value.push();
        sNuevoTitulo.value='';
        sNuevoCuerpo.value='';
        */
    }

    function postInsertadoOK(nuevoPostRef){
        alert("SE HA INSERTADO CORRECTAMENTE "+nuevoPostRef.id);
    }

    function postInsertadoNOK(error){
        
    }

    function descargarPost(){
        const docRef = doc(db, "Profiles/yony1/Posts", "post1");
        getDoc(docRef)
        .then(descargaOK)
        .catch(descargaNOK);
    }

    function descargarPosts(){
        const collectionRef = collection(db,"Profiles/yony1/Posts");
        getDocs(collectionRef)
        .then(descargaPostsOK)
        .catch(descargaPostsNOK);
    }

    function descargaPostsOK(postsDescargados){
        for(const post of postsDescargados.docs){
            console.log(post.id, " => ", post.data());
            arPosts.value.push(post.data());
            //arPosts.value.push({id:post.id,title:post.data().title,body:post.data().body,likes:post.data().likes});
        }

        /*postsDescargados.forEach((post) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            arPosts.value.push(post.data());
        });*/
    }

    function descargaPostsNOK(error){

    }

    function descargaOK(docPost){

        if (docPost.exists()) {
            const datos = docPost.data();

            console.log("Document data:", datos);
            arPosts.value.push(datos);
            
            //alert("Document data: TITULO: "+datos['title']);
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
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
        <h3>{{ post.likes }}</h3>
        <!--<img v-bind:src="post.imagen"/>-->
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
