<script setup>
  import Login from './Login.vue';
  import Registro from './Registro.vue';
  import { ref } from 'vue';
  import Home from './home/Home.vue';
  import Drawer from 'primevue/drawer';
  import Button from "primevue/button";
import ProgressSpinner from 'primevue/progressspinner';
import Chip from 'primevue/chip';

import Menubar from 'primevue/menubar';


const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Features',
        icon: 'pi pi-star'
    },
    {
        label: 'Projects',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    }
    ]);


  const sTitle = ref('Mi Primera App');

  const blLoginVisible=ref(true);
  const blRegistroVisible=ref(false);
  const blHomeVisible=ref(false);
  const blDrawerVisible=ref(false);

  // Methods
  function changeMessage() {
    sTitle.value = 'You clicked the button!';
  }

  function loginARegistro() {
    blLoginVisible.value=false;
    blRegistroVisible.value=true;
  }

  function registroALogin(){
    //alert("PASO 2");
    blLoginVisible.value=true;
    blRegistroVisible.value=false;
  }

  function loginConExito(){
    blLoginVisible.value=false;
    blRegistroVisible.value=false;
    blHomeVisible.value=true;
  }

</script>


<template>

  <h1>TITULO: {{ sTitle }}</h1>
  <br/> <br/>
  <Menubar :model="items" />

  <Login v-if="blLoginVisible" @cambioARegistro="loginARegistro" @loginConExito="loginConExito"/>
  <Registro v-if="blRegistroVisible" @cambioALogin="registroALogin"/>
  <Home v-if="blHomeVisible"></Home>
  <div class="card flex justify-center">
    <Drawer v-model:visible="blDrawerVisible" header="Drawer">
        <Button>OPCION1</Button>
        <Button>OPCION2</Button>
        <Button>OPCION3</Button>
        <Button>OPCION4</Button>
    </Drawer>
    <Button icon="pi pi-arrow-right" @click="blDrawerVisible = true" />
    <ProgressSpinner></ProgressSpinner>
    <!--div class="card flex flex-wrap gap-2">
        <Chip label="Apple" icon="pi pi-apple" removable/>
        <Chip label="Facebook" icon="pi pi-facebook" removable/>
        <Chip label="Google" icon="pi pi-google" removable/>
        <Chip label="Microsoft" icon="pi pi-microsoft" removable />
    </div-->

    
  </div>


  
</template>


<style scoped>



</style>
