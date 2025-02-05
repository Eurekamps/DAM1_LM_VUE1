<script setup>
    import { ref,onMounted } from 'vue';
    import { useFirestore,useFirebaseAuth } from 'vuefire';
    import { doc, getDoc, collection, getDocs,setDoc,addDoc,query, where } from "firebase/firestore";
    import PostItem from '../elementos/PostItem.vue';
    import { InputText } from 'primevue';


    const auth = useFirebaseAuth();

    const bbdd=useFirestore();

    const arPosts = ref([]);

    const sTitulo = ref('');
    const sCuerpo = ref('');
    const urlImg = ref('');
    const sTextoBusqueda = ref('');

    const sNombrePerfil=ref('');
    const sUrlAvatar=ref('');

    //ESTA FUNCION SIEMPRE SE EJECUTA AL PINTAR UN COMPONENTE EN LA PANTALLA
    onMounted(() => {
        descargarPerfil();
    });

    function agregarPost(){
        //const postid=arPosts.value.length;
        //arPosts.value.push({id:postid,titulo:sTitulo.value,cuerpo: sCuerpo.value,urlImg:urlImg.value});
        
        // SET DOC PARA CREAR DOCUMENTO CON ID PREESTABLECIDO O PARA ACTUALIZAR DOCUMENTOS
        /*const postsRef = collection(bbdd, "/Profiles/yony1/Posts");
        const postRef=doc(postsRef, Date.now()+"");
        setDoc(postRef,{title:sTitulo.value,body:sCuerpo.value,likes:0})
        .then(insertNuevoPostOK)
        .catch(insertNuevoPostNOK);*/
        
        //alert("EL UID DEL USUARIO ACTUAL ES: "+auth.currentUser.uid);
        const ruta="/Profiles/"+auth.currentUser.uid+"/Posts";

        const postsRef = collection(bbdd, ruta);
        addDoc(postsRef,{title:sTitulo.value,body:sCuerpo.value,likes:0})
        .then(insertNuevoPostOK)
        .catch(insertNuevoPostNOK);


    }

    function insertNuevoPostOK(docRef){
        descargarPosts();
        //alert("documento Nuevo creado, con ID: "+docRef.id);
    }

    function insertNuevoPostNOK(error){
        
    }

    function descargarPosts(){
        //alert("EL UID DEL USUARIO ACTUAL ES: "+auth.currentUser.uid);
        const ruta="/Profiles/"+auth.currentUser.uid+"/Posts";

        const postsRef = collection(bbdd, ruta);

        //const consulta = query(postsRef, where("title", ">=", sTextoBusqueda.value));
        //const consulta = query(postsRef, where("likes", ">", 70));
        const consulta = query(postsRef, where("tags", "array-contains", sTextoBusqueda.value));

        getDocs(consulta)
        .then(descargaPostsOK)
        .catch(descargarPostsNOK);

        /*const docRef = doc(bbdd, "/Profiles/yony1/Posts", "post1");
        getDoc(docRef)
        .then(descargaPostOK)
        .catch(descargaPostNOK);*/
 
    }

    function descargaPostsOK(postsDescargados){
        arPosts.value.splice(0,arPosts.value.length);
        
        for(const post of postsDescargados.docs){
            console.log(post.id, " => ", post.data());
            //arPosts.value.push(post.data());
            arPosts.value.push({id:post.id,title:post.data().title,body:post.data().body,likes:post.data().likes});
            //arPosts.value.push(post);
        }

        //console.log("ARRAY RESULTANTE: "+JSON.stringify(arPosts.value));
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

    function descargarPerfil(){
        const docRef = doc(bbdd, "/Profiles/", auth.currentUser.uid);
        getDoc(docRef)
        .then(descargaPerfiltOK)
        .catch(descargaPerfilNOK);
    }

    function descargaPerfiltOK(perfilDescargado){
        if (perfilDescargado.exists) {
            console.log("Datos del Perfil:", perfilDescargado.data());
            sNombrePerfil.value=perfilDescargado.data().nombre;
            sUrlAvatar.value=perfilDescargado.data().urlavatar;
            
        } else {
            // doc.data() will be undefined in this case
            console.log("Perfil NO EXISTA");
        }
    }

    function descargaPerfilNOK(){

    }

    
</script>

<template>
    <div class="contenedor-home">

        <h1>HOME</h1>

        <h2>{{ sNombrePerfil }}</h2>
        <img v-bind:src="sUrlAvatar" width="50" height="50"/>

        <div class="contenedor-agregar">
            <input v-model="sTitulo"/>
            <textarea v-model="sCuerpo"/>
            <!--<input v-model="urlImg"/>-->
            
            <InputText type="text" v-model="sTextoBusqueda" placeholder="Texto de Busqueda"/>

            <button @click="agregarPost">Agregar Post</button>
            <button @click="descargarPosts">Descargar Posts</button>
        </div>



        <div v-for="post in arPosts" :key="post.id">
            
            <PostItem :title="post.title" :body="post.body" :likes="post.likes"></PostItem>

        </div>

    </div>
</template>

<style scoped>

    .contenedor-home{
        background-color: cornsilk;
    }

    

    .contenedor-agregar{
        display: flex;
        flex-direction: column;
    }

</style>
