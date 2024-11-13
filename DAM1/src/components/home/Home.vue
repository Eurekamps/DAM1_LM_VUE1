<script setup>
    import { ref } from 'vue';

    const arPosts = ref([
        {id:0,titulo:"Titulo Post 1",cuerpo: "Cuerpo Post 1"},
        {id:1,titulo:"Titulo Post 2",cuerpo: "Cuerpo Post 2"},
        {id:2,titulo:"Titulo Post 3",cuerpo: "Cuerpo Post 3"},
        {id:3,titulo:"Titulo Post 4",cuerpo: "Cuerpo Post 4"},
        {id:4,titulo:"Titulo Post 5",cuerpo: "Cuerpo Post 5"}

    ]);

    
</script>

<template>
    <div class="contenedor-home">

        <h1>HOME</h1>

        <div v-for="pepe in arPosts" :key="pepe.id" class="contenedor-pepe">

            <img src="https://media.licdn.com/dms/image/v2/C5603AQH4zLBGlQOfiA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1548413104846?e=2147483647&v=beta&t=2zEQPtmi4vZRkbGmm-GnLrE2AshlmVDozGjWAM0fjV0"/>
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
</style>
