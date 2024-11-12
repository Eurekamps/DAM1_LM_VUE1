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


        


    </div>
</template>

<style scoped>

    .contenedor-home{
        background-color: cornsilk;
    }
</style>
