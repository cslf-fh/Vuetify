<template>
  <v-card id="" flat class="background text-center">
    <v-card-title class="text-h5">System bars</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      スマホやタブレットのシステムバー的なものを作るときに使用する。
      <br />
      <code class="text-subtitle-1">app</code>
      プロパティを指定すると、
      <code class="text-subtitle-1">v-app-bar</code>
      より上部に表示される(<code class="text-subtitle-1">fixed</code>
      プロパティは
      <code class="text-subtitle-1">v-app-bar</code>
      と同じ高さになる)。
      <br />
      <code class="text-subtitle-1">windowはheight</code>
      プロパティに上書きされる。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-system-bar
          class="mx-3"
          :absolute="absolute"
          :app="app"
          :color="computedColor"
          :fixed="fixed"
          :height="computedHeight"
          :lights-out="lightsOut"
          :window="window"
        >
          <v-spacer></v-spacer>
          <v-icon>mdi-wifi-strength-4</v-icon>
          <v-icon>mdi-signal-cellular-outline</v-icon>
          <v-icon>mdi-battery</v-icon>
          <span>12:30</span>
        </v-system-bar>
        <div class="py-3"></div>
        <Code class="mx-3" tag="v-system-bar" :attr="computedAttr"></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="3">
          <template v-slot:switch1>
            <v-switch v-model="app" label="app" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="fixed" label="fixed" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="absolute"
              label="absolute"
              class="ma-0"
            ></v-switch>
          </template>
        </Grid>
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch
              v-model="lightsOut"
              label="lights-out"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="window" label="window" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="height"
              v-model="height"
              max="50"
              min="0"
              thumb-label
            ></v-slider>
          </template>
        </Grid>
        <v-slider
          label="color"
          v-model="color"
          :max="colors.length - 1"
          :tick-labels="colors"
        ></v-slider>
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
      absolute: false,
      app: false,
      color: 0,
      fixed: false,
      colors: ['', 'primary', 'orange'],
      height: 24,
      lightsOut: false,
      window: false,
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
    },
    computedHeight() {
      let height = this.height;
      height === 24 ? (height = 0) : null;
      return height;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.absolute, 'absolute');
      this.checkBoolean(attr, this.app, 'app');
      this.checkBoolean(attr, this.fixed, 'fixed');
      this.checkBoolean(attr, this.lightsOut, 'lights-out');
      this.checkBoolean(attr, this.window, 'window');
      this.checkValue(attr, this.height, 'height', 24);
      this.checkValue(attr, this.computedColor, 'color', '');
      return attr;
    },
  },
};
</script>
