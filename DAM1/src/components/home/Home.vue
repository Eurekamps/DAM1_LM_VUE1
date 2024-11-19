<script setup>
    import { ref } from 'vue';

    const arPosts = ref([
        {id:0,titulo:"Titulo Post 1",cuerpo: "Cuerpo Post 1",urlImg:"https://media.licdn.com/dms/image/v2/C5603AQH4zLBGlQOfiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548413104846?e=2147483647&v=beta&t=2zEQPtmi4vZRkbGmm-GnLrE2AshlmVDozGjWAM0fjV0"}
    ]);

    const sTitulo = ref('');
    const sCuerpo = ref('');
    const urlImg = ref('');

    function agregarPost(){
        const postid=arPosts.value.length;
        arPosts.value.push({id:postid,titulo:sTitulo.value,cuerpo: sCuerpo.value,urlImg:urlImg.value});
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
        </div>

        <div v-for="pepe in arPosts" :key="pepe.id" class="contenedor-pepe">

            <img v-bind:src="pepe.urlImg"/>
            <h1>{{ pepe.titulo }}</h1>
            <p>{{ pepe.cuerpo }}</p>

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
