<script setup>
    import { ref } from 'vue';

    const arPosts=ref([
        {id:1,titulo:"Titulo Post 1",cuerpo:"Cuerpo del post 1",imagen:""},
        {id:2,titulo:"Titulo Post 2",cuerpo:"Cuerpo del post 2",imagen:""},
        {id:3,titulo:"Titulo Post 3",cuerpo:"Cuerpo del post 3",imagen:""},
        {id:4,titulo:"Titulo Post 4",cuerpo:"Cuerpo del post 4",imagen:""},
    ]);


</script>

<template>
    <h1>HOME</h1>

    <div v-for="post in arPosts" v-bind:key="post.id" class="contenedor-post">
        <h2>{{ post.titulo }}</h2>
        <p>{{ post.cuerpo }}</p>
        <img :src="post.imagen"/>
    </div>



</template>

<style scoped>
    .contenedor-post{
        border: 2px solid;
        margin: 5px;
    }
</style>
