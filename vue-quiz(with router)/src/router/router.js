import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import NewPage from '@/components/NewPage.vue' // импортируйте новый компонент

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/new-page',
      name: 'NewPage',
      component: NewPage // добавьте новый маршрут
    }
  ]
})
