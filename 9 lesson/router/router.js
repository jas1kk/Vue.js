import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import Main from './components/Main.vue'
import Gallery from './components/Gallery.vue'
import Contacts from './components/Contacts.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      component: Main
    },
    {
      path: '/gallery/:id',
      component: Gallery
    },
    {
      path: '/contacts',
      component: Contacts
    }
  ],
  render: h => h(App)
})