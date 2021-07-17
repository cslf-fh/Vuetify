<template>
  <v-card id="aspect-ratio" flat class="background text-center">
    <v-card-title class="text-h4">Aspect ratio</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      任意のセクションを特定のアスペクト比に固定する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-card class="primary">
            <v-responsive :aspect-ratio="x / y">
              <v-card-text>
                This card will always be {{ x }}:{{ y }} (unless you put more
                stuff in it)
              </v-card-text>
            </v-responsive>
          </v-card>
          <div class="py-3"></div>
          <Code tag="v-responseve" :attr="computedAttr"></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider label="x" v-model="x" max="20" min="1" thumb-label></v-slider>
        <v-slider label="y" v-model="y" max="20" min="1" thumb-label></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'AspectRatio',
  data() {
    return {
      attr: [],
      x: 16,
      y: 9,
    };
  },
  computed: {
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      let x = this.x;
      let y = this.y;
      attr.push({ name: ':aspect-ratio', value: x + '/' + y });
      return attr;
    },
  },
};
</script>
