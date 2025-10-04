import { createApp } from 'vue'
import App from './App.vue'
import '../src/assets/style/style.scss';
import router from './router';

const app = createApp(App);

app.use(router).mount('#app')
