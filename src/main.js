import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
  .use(store)
  .mount('#app')
