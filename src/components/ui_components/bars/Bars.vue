<template>
  <v-card flat class="background text-center">
    <v-card-title class="text-h4">Bars</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      ヘッダーを表示するのに使用する。
      <br />
      <code class="text-subtitle-1">v-toolbar</code>
      については
      <code class="text-subtitle-1">v-abb-bar</code>
      でできることと大体変わらないと思うので割愛。
    </v-card-subtitle>
    <AppBars class="mb-4"></AppBars>
    <SystemBars class="mb-4"></SystemBars>
  </v-card>
</template>

<script>
import AppBars from '@/components/ui_components/bars/AppBars.vue';
import SystemBars from '@/components/ui_components/bars/SystemBars.vue';

export default {
  name: 'Bars',
  components: { AppBars, SystemBars },
};
</script>
