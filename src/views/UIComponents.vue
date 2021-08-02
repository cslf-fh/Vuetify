<template>
  <v-container>
    <h1 class="text-h3">UI Components</h1>
    <Alerts class="mb-4"></Alerts>
    <AspectRatio class="mb-4"></AspectRatio>
    <Avatars class="mb-4"></Avatars>
    <Badges class="mb-4"></Badges>
    <Banners class="mb-4"></Banners>
    <Bars class="mb-4"></Bars>
    <BottomNavigation class="mb-4"></BottomNavigation>
    <BottomSheets class="mb-4"></BottomSheets>
    <Breadcrumbs class="mb-4"></Breadcrumbs>
    <Buttons class="mb-4"></Buttons>
    <ButtonsFab class="mb-4"></ButtonsFab>
    <Calendars class="mb-4"></Calendars>
    <Cards class="mb-4"></Cards>
    <Carousels class="mb-4"></Carousels>
    <Chips class="mb-4"></Chips>
    <Dialogs class="mb-4"></Dialogs>
    <Dividers class="mb-4"></Dividers>
    <ExpansionPanels class="mb-4"></ExpansionPanels>
    <Footers class="mb-4"></Footers>
    <FormInputsAndControls class="mb-4"></FormInputsAndControls>
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
import BottomSheets from '@/components/ui_components/BottomSheets.vue';
import Breadcrumbs from '@/components/ui_components/Breadcrumbs.vue';
import Buttons from '@/components/ui_components/Buttons.vue';
import ButtonsFab from '@/components/ui_components/ButtonsFab.vue';
import Calendars from '@/components/ui_components/Calendars.vue';
import Cards from '@/components/ui_components/Cards.vue';
import Carousels from '@/components/ui_components/Carousels.vue';
import Chips from '@/components/ui_components/Chips.vue';
import Dialogs from '@/components/ui_components/Dialogs.vue';
import Dividers from '@/components/ui_components/Dividers.vue';
import ExpansionPanels from '@/components/ui_components/ExpansionPanels.vue';
import Footers from '@/components/ui_components/Footers.vue';
import FormInputsAndControls from '@/components/ui_components/form_inputs_and_controls/FormInputsAndControls.vue';

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
    BottomSheets,
    Breadcrumbs,
    Buttons,
    ButtonsFab,
    Calendars,
    Cards,
    Carousels,
    Chips,
    Dialogs,
    Dividers,
    ExpansionPanels,
    Footers,
    FormInputsAndControls,
  },
};
</script>

<style lang="scss">
.banner-sticky {
  .v-banner__wrapper {
    padding: 0 !important;
    .v-banner__content {
      padding: 0 12px;
    }
  }
}
</style>
