// 중괄호가 쳐져있으면, export된 항목중 하나만 선택하여 import
// 중괄호가 없으면 defalut(대표요소) 요소를 import
import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);
app.use(router)
app.mount('#app');
