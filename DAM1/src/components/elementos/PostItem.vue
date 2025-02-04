<script setup>

defineProps({
        title: String,
        body: String,
        likes: Number
    });

</script>

<template>

<div class="div-post">
        <h2>{{ title }}</h2>
        <p>{{ body }}</p>
        <h3>{{ likes }}</h3>
    </div>

</template>

<style scoped>

</style>
