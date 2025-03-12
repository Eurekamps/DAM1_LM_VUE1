<script setup>
    import card from 'primevue/card';
    import { ref, onMounted } from 'vue';

    /*const cartItems=ref([
        { name: 'Product A', price: 5.00 },
        { name: 'Product B', price: 5.00 }
    ]);*/

    defineProps({
      cartItems: [],
      totalAmount: Number
    });



    //ESTA FUNCION SIEMPRE SE EJECUTA AL PINTAR UN COMPONENTE EN LA PANTALLA
    onMounted(() => {
        // Dynamically load the PayPal SDK if it isn't already loaded.
        if (!document.getElementById('paypal-sdk')) {
            const script = document.createElement('script');
            script.id = 'paypal-sdk';
            script.src = 'https://www.paypal.com/sdk/js?client-id=AfoMfZ8grLg1zeDJbSfN-QDtCF_-bG9cxvRLCGtUdNl55Vk2VvCsv_YGII7_TO7xWi4NBg9fSbSECK-k&currency=EUR';
            script.onload = initializePaypalButton;
            document.head.appendChild(script);
        } else {
            initializePaypalButton();
        }
    });

    function initializePaypalButton() {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: { value: 40 }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            console.log('Transaction completed by ' + details.payer.name.given_name);
            // Here you can clear the cart or update your backend as needed.
          });
        },
        onError: (err) => {
          console.error('PayPal Checkout error', err);
          // Implement error handling as needed.
        }
      }).render('#paypal-button-container');
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
