<script setup>
    import { ref,onMounted } from 'vue';

    const arProductos=ref([
        { name: 'Product A', price: 5.00 },
        { name: 'Product B', price: 5.00 }
    ]);

    //ESTA FUNCION SIEMPRE SE EJECUTA AL PINTAR UN COMPONENTE EN LA PANTALLA
    onMounted(() => {
        // Dynamically load the PayPal script if it hasn't been loaded yet.
        if (!document.getElementById('paypal-sdk')) {
            const script = document.createElement('script');
            script.id = 'paypal-sdk';
            script.src = 'https://www.paypal.com/sdk/js?client-id=AfoMfZ8grLg1zeDJbSfN-QDtCF_-bG9cxvRLCGtUdNl55Vk2VvCsv_YGII7_TO7xWi4NBg9fSbSECK-k&currency=EUR';
            script.onload = this.initializePaypalButton;
            document.head.appendChild(script);
        } else {
            initializePaypalButton();
        }
    });

    function initializePaypalButton() {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          // Create the order with the dynamic total from your shopping cartç
          const totalAmount = arProductos.value.reduce((sum, item) => sum + item.price, 0).toFixed(2);
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: totalAmount // Total amount from your computed property
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          // Capture the funds from the transaction
          return actions.order.capture().then(details => {
            // Show a success message to your buyer
            console.log('Transaction completed by ' + details.payer.name.given_name);
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

  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <!-- This div is where PayPal renders the button -->
        <div id="paypal-button-container"></div>
      </v-col>
      <v-col cols="12" md="6">
        <!-- You can use Vuetify components to display your shopping cart here -->
        <v-card>
          <v-card-title>Your Shopping Cart</v-card-title>
          <v-card-text>
            <!-- List your cart items dynamically -->
            <v-list>
              <v-list-item v-for="(item, index) in arProductos" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>\${{ item.price }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <div>Total: \${{ totalAmount }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<style scoped>

</style>