<template>
  <v-container>
    <p class="text-h4">UI Components</p>
    <Alerts id="alerts" class="mb-4"></Alerts>
    <AspectRatio id="aspect-ratio" class="mb-4"></AspectRatio>
    <Avatars id="avatars" class="mb-4"></Avatars>
    <Badges id="badges" class="mb-4"></Badges>
    <Banners id="banners" class="mb-4"></Banners>
    <Bars id="bars" class="mb-4"></Bars>
    <BottomNavigation id="bottom-navigation" class="mb-4"></BottomNavigation>
  </v-container>
</template>

<script>
import Alerts from '@/components/ui_components/Alerts.vue';
import AspectRatio from '@/components/ui_components/AspectRatio.vue';
import Avatars from '@/components/ui_components/Avatars.vue';
import Badges from '@/components/ui_components/Badges.vue';
import Banners from '@/components/ui_components/Banners.vue';
import Bars from '@/components/ui_components/bars/Bars.vue';
import BottomNavigation from '@/components/ui_components/BottomNavigation.vue';

export default {
  name: 'UIComponents',
  components: {
    Alerts,
    AspectRatio,
    Avatars,
    Badges,
    Banners,
    Bars,
    BottomNavigation,
  },
};
</script>
