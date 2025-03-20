<script setup>
    import { ref } from 'vue';
    import Login from './auth/Login.vue';
    import Register from './auth/Register.vue';
    import Home from './home/Home.vue';
    import PaypalCarrito from './payments/PaypalCarrito.vue';

    const blLoginVisible=ref(true);
    const blRegistroVisible=ref(false);
    const blHomeVisible=ref(false);
    const drawer=ref(false);
    const sumaPrecio=ref(0);
    const productosSeleccionados=ref([]);

    const products=ref([
        { id: 1, name: 'Product 1', price: 10.00, image: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Product 2', price: 20.00, image: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Product 3', price: 30.00, image: 'https://via.placeholder.com/150' },
        { id: 4, name: 'Product 4', price: 40.00, image: 'https://via.placeholder.com/150' },
        { id: 5, name: 'Product 5', price: 50.00, image: 'https://via.placeholder.com/150' }
    ]);

    function mostrarRegistro(){
        blLoginVisible.value=false;
        blRegistroVisible.value=true;
    }

    function mostrarLogin(){
        blLoginVisible.value=true;
        blRegistroVisible.value=false;
    }

    function mostrarHome(){
        blHomeVisible.value=true;
        blLoginVisible.value=false;
    }

    function agregarProductoCarrito(product){
        productosSeleccionados.value.push(product);
        sumaPrecio.value=sumaPrecio.value+product.price;
    }


</script>

<template>
    <div id="contenedor_principal">
        <h1> MI PRIMERA APP</h1>
        <Login v-if="blLoginVisible" @logeado="mostrarHome" @solicitaRegistro="mostrarRegistro"/>
        <Register v-if="blRegistroVisible" @cambiarALogin="mostrarLogin"/>
        <Home v-if="blHomeVisible"/>
        <v-btn @click="drawer = true" > DRAWER</v-btn>

    </div>

    <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >

    </v-navigation-drawer>


    <div class="product-grid">
        <div class="product" v-for="product in products" :key="product.id">
            <img :src="product.image" alt="Product image" class="product-image" />
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-price">${{ product.price.toFixed(2) }}</p>
            <button @click="agregarProductoCarrito(product)">Agregar a Carrito</button>
        </div>
    </div>


    <PaypalCarrito :total-amount="sumaPrecio" :cart-items="productosSeleccionados"/>
    

</template>

<style scoped>

    #contenedor_principal{
        background-color:rgb(134, 255, 176);
        max-width: 600px;

    }

    .product-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 16px;
        padding: 16px;
        }

        .product {
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 16px;
        text-align: center;
        }

        .product-image {
        width: 100%;
        height: auto;
        margin-bottom: 8px;
        }

        .product-name {
        font-size: 1.2em;
        margin: 0;
        }

        .product-price {
        color: #555;
        margin-top: 8px;
        }

</style>
