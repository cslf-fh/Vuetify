<template>
  <v-card id="spacing" flat class="background text-center">
    <v-card-title class="text-h4">Spacing</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1"
        >.{property}{direction}-{breakpoint}-{size}</code
      >で使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-row no-gutters class="mx-3">
          <v-col cols="12">
            <v-sheet
              class="primary lighten-1 mx-auto"
              height="100"
              max-width="200"
            ></v-sheet>
          </v-col>
          <v-col class="orange lighten-3 pa-0" cols="12">
            <v-sheet :class="[computedMargin]" elevation="4" rounded>
              <div :class="[computedPadding]" class="light-green lighten-3">
                <div class="white text-center py-6"></div>
              </div>
            </v-sheet>
          </v-col>
        </v-row>
        <div class="py-3"></div>
        <span>margin</span>
        <code class="text-subtitle-1">.{{ computedMargin }}</code>
        <br />
        <span>padding</span>
        <code class="text-subtitle-1">.{{ computedPadding }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-card-text class="pa-0">margin</v-card-text>
        <v-slider
          label="direction"
          v-model="marginDirection"
          :max="directions.length - 1"
          :tick-labels="directions"
        ></v-slider>
        <v-slider
          label="size"
          v-model="marginSize"
          :max="marginSizes.length - 1"
          :tick-labels="marginSizes"
        ></v-slider>
        <v-switch
          v-model="negativeMargin"
          label="negative"
          class="ma-0"
        ></v-switch>
        <v-card-text class="pa-0">padding</v-card-text>
        <v-slider
          label="direction"
          v-model="paddingDirection"
          :max="directions.length - 1"
          :tick-labels="directions"
        ></v-slider>
        <v-slider
          label="size"
          v-model="paddingSize"
          :max="paddingSizes.length - 1"
          :tick-labels="paddingSizes"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Spacing',
  data() {
    const spacers = Array.from({ length: 17 }, (val, i) => `${i}`);
    const defaults = [...spacers, 'auto'];

    return {
      directions: ['t', 'b', 'l', 'r', 'x', 'y', 'a'],
      marginDirection: 6,
      marginSize: 2,
      marginSizes: defaults,
      negativeMargin: false,
      paddingDirection: 6,
      paddingSize: 6,
      paddingSizes: defaults,
    };
  },
  computed: {
    computedPadding() {
      const paddingDirection = this.directions[this.paddingDirection];
      let paddingSize = this.paddingSizes[this.paddingSize];
      paddingSize === 17 ? (paddingSize = 'auto') : null;
      return `p${paddingDirection}-${paddingSize}`;
    },
    computedMargin() {
      const marginDirection = this.directions[this.marginDirection];
      let marginSize = this.marginSizes[this.marginSize];
      let negativeMargin = this.negativeMargin;
      marginSize === 17 ? (marginSize = 'auto') : null;
      negativeMargin === true ? (negativeMargin = 'n') : (negativeMargin = '');
      return `m${marginDirection}-${negativeMargin}${marginSize}`;
    },
  },
};
</script>
