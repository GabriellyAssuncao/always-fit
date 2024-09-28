// // frontend/src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // importe o router

createApp(App)
  .use(router) // use o router
  .mount('#app');
