import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Test},
    {path: '/xxx', component: Test2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
