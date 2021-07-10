<template>
  <v-container>
    <p class="text-h4">Styles and Animations</p>
    <BorderRadius class="mb-4"></BorderRadius>
    <Color class="mb-4"></Color>
    <Content class="mb-4"></Content>
    <DisplayHelpers class="mb-4"></DisplayHelpers>
    <Elevation class="mb-4"></Elevation>
    <Flex class="mb-4"></Flex>
    <Float class="mb-4"></Float>
    <Spacing class="mb-4"></Spacing>
    <TextAndTypography class="mb-4"></TextAndTypography>
    <Transitions class="mb-4"></Transitions>
  </v-container>
</template>

<script>
import BorderRadius from '@/components/styles_and_animations/BorderRadius.vue';
import Color from '@/components/styles_and_animations/Color.vue';
import Content from '@/components/styles_and_animations/Content.vue';
import DisplayHelpers from '@/components/styles_and_animations/DisplayHelpers.vue';
import Elevation from '@/components/styles_and_animations/Elevation.vue';
import Flex from '@/components/styles_and_animations/Flex.vue';
import Float from '@/components/styles_and_animations/Float.vue';
import Spacing from '@/components/styles_and_animations/Spacing.vue';
import TextAndTypography from '@/components/styles_and_animations/TextAndTypography.vue';
import Transitions from '@/components/styles_and_animations/Transitions.vue';

export default {
  name: 'StylesAndAnimations',
  components: {
    BorderRadius,
    Color,
    Content,
    DisplayHelpers,
    Elevation,
    Flex,
    Float,
    Spacing,
    TextAndTypography,
    Transitions,
  },
};
</script>
