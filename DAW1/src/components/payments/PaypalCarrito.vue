<script setup>
    import { ref,onMounted,defineProps } from 'vue';


    const props = defineProps({
      totalAmount: 0,
      cartItems : []
    });


    //ESTA FUNCION SIEMPRE SE EJECUTA AL PINTAR UN COMPONENTE EN LA PANTALLA
    onMounted(() => {
        // Dynamically load the PayPal script if it hasn't been loaded yet.
        if (!document.getElementById('paypal-sdk')) {
            const script = document.createElement('script');
            script.id = 'paypal-sdk';
            script.src = 'https://www.paypal.com/sdk/js?client-id=AfoMfZ8grLg1zeDJbSfN-QDtCF_-bG9cxvRLCGtUdNl55Vk2VvCsv_YGII7_TO7xWi4NBg9fSbSECK-k&currency=EUR';
            //script.onload = initializePaypalButton;
            document.head.appendChild(script);
        } else {
            //initializePaypalButton();
        }
    });

    function initializePaypalButton() {

      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // Create the order with the dynamic total from your shopping cartç
          //const totalAmount = arProductos.value.reduce((sum, item) => sum + item.price, 0).toFixed(2);
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: props.totalAmount // Total amount from your computed property
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(details => {
            // Show a success message to your buyer
            console.log('Transaction completed by ' + details.payer.name.given_name);

            const collectionRefPosts=collection(db,"Profiles/"+auth.currentUser.uid+"/Pagos");
            //setDoc(documentoRefPostNuevo,datosNuevoPost)
            addDoc(collectionRefPosts,datosNuevoPost)
            .then(postInsertadoOK)
            .catch(postInsertadoNOK);

            // Here you can also clear the cart or update your backend
          });
        },
        onError: (err) => {
          console.error('PayPal Checkout error', err);
          // Handle errors as needed
        }
      }).render('#paypal-button-container'); // Render the PayPal button into the container
    }


</script>

<template>

  <div class="shopping-cart">
    <h2>Your Shopping Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index" class="cart-item">
        <span class="item-name">{{ item.name }}</span>
        <span class="item-price">\${{ item.price.toFixed(2) }}</span>
      </li>
    </ul>
    <div class="total">
      Total: \${{ totalAmount }}
    </div>

    <button @click="initializePaypalButton">Pagar</button>

    <div id="paypal-button-container"></div>

  </div>

</template>

<style scoped>

  .shopping-cart {
    max-width: 400px;
    margin: 20px auto;
    padding: 16px;
    border: 1px solid #121212;
    border-radius: 4px;
    font-family: Arial, sans-serif;
  }
  h2 {
    text-align: center;
    margin-bottom: 16px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #eee;
  }
  .cart-item:last-child {
    border-bottom: none;
  }
  .total {
    font-weight: bold;
    margin-top: 16px;
    text-align: right;
    font-size: 1.1em;
  }


</style>