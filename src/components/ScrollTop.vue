<template>
  <transition name="fade">
    <v-btn
      v-scroll="onScroll"
      v-show="fab"
      fab
      dark
      fixed
      bottom
      right
      color="primary"
      @click="toTop"
    >
      <v-icon>mdi-chevron-double-up</v-icon>
    </v-btn>
  </transition>
</template>
<script>
export default {
  data: () => {
    return {
      fab: false,
      options: {
        duration: 500,
        offset: 0,
        easing: 'easeOutQuad',
      },
    };
  },
  methods: {
    onScroll(e) {
      if (typeof window === 'undefined') return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 500;
    },
    toTop() {
      this.$vuetify.goTo(0, this.options);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
