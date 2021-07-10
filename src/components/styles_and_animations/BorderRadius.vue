<template>
  <v-card id="border-radius" flat class="background text-center">
    <v-card-title class="text-h4">Border radius</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">.rounded-{infix}-{radius}</code>
      で使用する。infixとradiusを省略した場合は、それぞれallとmdを指定したのと同意。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-sheet
          :class="radius"
          :max-width="modelOne === 6 ? 128 : 256"
          class="mx-auto transition-swing primary"
          elevation="12"
          height="128"
          width="100%"
        ></v-sheet>
        <div class="py-3"></div>
        <code class="text-subtitle-1">.{{ radius }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="radius"
          v-model="modelOne"
          :max="rounded.length - 1"
          :tick-labels="rounded"
        ></v-slider>
        <v-slider
          label="infix"
          v-model="modelTwo"
          :max="infix.length - 1"
          :tick-labels="infix"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'BorderRadius',
  data() {
    return {
      modelOne: 3,
      rounded: ['0', 'sm', 'md', 'lg', 'xl', 'pill', 'circle'],
      modelTwo: 0,
      infix: ['all', 't', 'r', 'b', 'l', 'tl', 'tr', 'br', 'bl'],
    };
  },

  computed: {
    radius() {
      let rounded = 'rounded';
      const value = this.rounded[this.modelOne];
      const infix = this.infix[this.modelTwo];

      if (infix !== 'all') {
        rounded += `-${infix}`;
      }
      if (value !== 'md') {
        rounded += `-${value}`;
      }

      return rounded;
    },
  },
};
</script>
