import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import StylesAndAnimations from '../views/StylesAndAnimations.vue';
import UIComponents from '../views/UIComponents.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import goTo from 'vuetify/lib/services/goto';

Vue.use(VueRouter);

export default new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    let scrollTo = 0;

    if (to.hash) {
      scrollTo = to.hash;
    } else if (savedPosition) {
      scrollTo = savedPosition.y;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(goTo(scrollTo));
      }, 0);
    });
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { title: 'home | vue_spa', desc: 'home' },
    },
    {
      path: '/styles',
      name: 'StylesAndAnimations',
      component: StylesAndAnimations,
      meta: {
        title: 'Styles and Animations | vue_spa',
        desc: 'Styles and Animations',
      },
    },
    {
      path: '/components',
      name: 'UIComponents',
      component: UIComponents,
      meta: {
        title: 'UI Components | vue_spa',
        desc: 'UI Components',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: { title: 'about | vue_spa', desc: 'about' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: { title: 'contact | vue_spa', desc: 'contact' },
    },
  ],
});
