<template>
  <v-card id="" flat class="background text-center">
    <v-card-title class="text-h4"></v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1"></code>
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <div class="py-3"></div>
          <Code tag="" :attr="computedAttr"></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="dark" label="dark" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="light" label="light" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="">
          <template v-slot:switch></template>
          <template v-slot:slider></template>
        </Grid>
        <v-slider
          label=""
          v-model="model"
          :max="array.length - 1"
          :tick-labels="array"
        ></v-slider>
        <v-switch v-model="model" label="" class="ma-0"></v-switch>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      attr: [],
      dark: false,
      light: false,
      model: 0,
      array: [],
    };
  },
  computed: {
    computedValue() {
      let value = 'value';
      const array = this.array[this.model];
      value += `${array}`;
      return value;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr);
      this.checkValue(attr);
      return attr;
    },
  },
};
</script>
