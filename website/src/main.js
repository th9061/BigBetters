import Vue from 'vue'
import Navbar from './Navbar.vue'
import Home from './Home.vue'
import Social from './Social.vue'
import NotFound from './NotFound.vue'

// Format of vue app
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

// Basic routing

const notFoundPage = NotFound
const homePage = Home
const socialPage = Social

const routes = {
  '/': homePage,
  '/home': homePage,
  '/social': socialPage
}

new Vue({
  el: '#navbar',
  render: h => h(Navbar)
})

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || notFoundPage
    }
  },
  render (h) { return h(this.ViewComponent) }
})
