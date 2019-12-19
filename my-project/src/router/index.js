import FirstPage from '@/components/FirstPage'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FirstPart from '@/components/homecomponents/FirstPart'
import SecondPart from '@/components/homecomponents/SecondPart'
import SecondPage from '@/components/SecondPage'
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'FirstPart',
          component: FirstPart
        },
        {
          path: 'SecondPart',
          name: 'SecondPart',
          component: SecondPart
        }
      ]
    },
    {
      path: '/FirstPage',
      name: 'FirstPage',
      component: FirstPage
    },
    {
      path: '/SecondPage',
      name: 'SecondPage',
      component: SecondPage
    }
  ]
})
