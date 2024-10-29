<script>
export default {

    data() {
      return {
        message: 'Hello, Vue!'
      };
    },
    methods: {
      changeMessage() {
        this.message = 'You clicked the button!';
      }
    }

};
</script>


<template>
    <h1> HOLA ESTA ES LA PAGINA PRINCIPAL</h1>
    <p>Que tal es una app bla bla </p>

    <h1>{{ message }}</h1>
    <button @click="changeMessage">Click Me</button>
    
</template>


<style scoped>

</style>
