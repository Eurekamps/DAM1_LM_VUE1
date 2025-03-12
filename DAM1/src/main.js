/*
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
//import './assets/main.css'
import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
// the file we created above with `database`, `firestore` and other exports
import { firebaseApp } from './firebase'
import ToastService from 'primevue/toastservice';

// Import PrimeVue and PrimeFlex styles
//import 'primevue/resources/themes/saga-blue/theme.css'  // or your preferred theme
//import 'primevue/resources/primevue.min.css'
//import 'primeicons/primeicons.css'
//import 'primeflex/primeflex.css'  // for responsive grid layouts


const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});

app.use(PrimeVue, {
  theme: {
      preset: Aura
  }
});

app.use(ToastService);

app.mount('#app')