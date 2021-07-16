import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import StylesAndAnimations from '../views/StylesAndAnimations.vue';
import UIComponents from '../views/UIComponents.vue';
import Test from '../views/Test.vue';
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
      path: '/test',
      name: 'Test',
      component: Test,
      meta: { title: 'test | vue_spa', desc: 'test' },
    },
  ],
});
