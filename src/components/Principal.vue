<script>
export default {

    data() {
      return {
       sMessage: 'Hello, Vue!'
      };
    },
    methods: {
      changeMessage() {
        this.sMessage = 'You clicked the button!';
      }
    }

};
</script>


<template>
    <h1> HOLA ESTA ES LA PAGINA PRINCIPAL {{ sMessage }}</h1>
    <p>Que tal es una app bla bla {{ sMessage }}</p>

    <h1>{{ sMessage }}</h1>
    <button @click="changeMessage">Click Me</button>

</template>


<style scoped>

</style>
