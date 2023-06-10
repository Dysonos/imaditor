import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';
const app = createApp(App)

app.use(router)

app.mount('#app')
