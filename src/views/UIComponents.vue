<template>
  <v-container>
    <p class="text-h4">UI Components</p>
    <Alerts class="mb-4"></Alerts>
    <AspectRatio class="mb-4"></AspectRatio>
    <Avatars class="mb-4"></Avatars>
    <Badges class="mb-4"></Badges>
    <Banners class="mb-4"></Banners>
    <Bars class="mb-4"></Bars>
  </v-container>
</template>

<script>
import Alerts from '@/components/ui_components/Alerts.vue';
import AspectRatio from '@/components/ui_components/AspectRatio.vue';
import Avatars from '@/components/ui_components/Avatars.vue';
import Badges from '@/components/ui_components/Badges.vue';
import Banners from '@/components/ui_components/Banners.vue';
import Bars from '@/components/ui_components/bars/Bars.vue';

export default {
  name: 'UIComponents',
  components: { Alerts, AspectRatio, Avatars, Badges, Banners, Bars },
};
</script>
