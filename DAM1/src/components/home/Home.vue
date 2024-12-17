<script setup>
    import { ref } from 'vue';
    import { useFirestore } from 'vuefire';
    import { doc, getDoc, collection, getDocs  } from "firebase/firestore";


    const bbdd=useFirestore();

    const arPosts = ref([
    ]);

    const sTitulo = ref('');
    const sCuerpo = ref('');
    const urlImg = ref('');

    function agregarPost(){
        const postid=arPosts.value.length;
        arPosts.value.push({id:postid,titulo:sTitulo.value,cuerpo: sCuerpo.value,urlImg:urlImg.value});
    }

    function descargarPosts(){
        const postsRef = collection(bbdd, "/Profiles/yony1/Posts");
        getDocs(postsRef)
        .then(descargaPostsOK)
        .catch(descargarPostsNOK);

        /*const docRef = doc(bbdd, "/Profiles/yony1/Posts", "post1");
        getDoc(docRef)
        .then(descargaPostOK)
        .catch(descargaPostNOK);*/
 
    }

    function descargaPostsOK(postsDescargados){
        for(const post of postsDescargados.docs){
            console.log(post.id, " => ", post.data());
            arPosts.value.push(post.data());
        }
    }

    function descargarPostsNOK(error){
        console.log("ERROR--->>>> "+error);
    }

    function descargaPostOK(postDescargado){
        if (postDescargado.exists) {
            console.log("Document data:", postDescargado.data());
            arPosts.value.push(postDescargado.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    function descargaPostNOK(){

    }

    
</script>

<template>
    <div class="contenedor-home">

        <h1>HOME</h1>
        <div class="contenedor-agregar">
            <input v-model="sTitulo"/>
            <textarea v-model="sCuerpo"/>
            <input v-model="urlImg"/>
            <button @click="agregarPost">Agregar Post</button>
            <button @click="descargarPosts">Descargar Posts</button>
        </div>

        <div v-for="pepe in arPosts" :key="pepe.id" class="contenedor-pepe">

            <img v-bind:src="pepe.urlImg"/>
            <h1>{{ pepe.title }}</h1>
            <p>{{ pepe.body }}</p>
            <h2>{{ pepe.likes }}</h2>


        </div>
        


        


    </div>
</template>

<style scoped>

    .contenedor-home{
        background-color: cornsilk;
    }

    .contenedor-pepe{
        border: 3px solid;
    }

    .contenedor-agregar{
        display: flex;
        flex-direction: column;
    }

</style>
