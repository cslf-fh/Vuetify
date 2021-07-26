<template>
  <v-card id="footers" flat class="background text-center">
    <v-card-title class="text-h4">Footers</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      フッターを作成するのに使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-footer
            :dark="dark"
            :light="light"
            :absolute="absolute"
            :app="app"
            :color="computedColor"
            :elevation="elevation"
            :fixed="fixed"
            :inset="inset"
            :outlined="outlined"
            :padless="padless"
            :rounded="rounded"
            :shaped="shaped"
            :tile="tile"
            :height="computedHeight"
            :width="computedWidth"
          >
            <v-row
              justify="space-around"
              align="center"
              no-gutters
              style="height: 100%"
            >
              <v-btn v-for="icon in icons" :key="icon" text icon>
                <v-icon>{{ icon }}</v-icon>
              </v-btn>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-col>
            </v-row>
          </v-footer>
          <v-sheet height="200"></v-sheet>
          <div class="py-3"></div>
          <Code tag="v-footer" :attr="computedAttr"></Code>
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
        <Grid switch="3">
          <template v-slot:switch1>
            <v-switch
              v-model="absolute"
              label="absolute"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="app" label="app" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="fixed" label="fixed" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="6">
          <template v-slot:switch1>
            <v-switch v-model="inset" label="inset" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="padless" label="padless" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="shaped" label="shaped" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="tile" label="tile" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="color"
              v-model="color"
              :max="colors.length - 1"
              :tick-labels="colors"
            ></v-slider>
            <v-slider label="elevation" v-model="elevation" max="25"></v-slider>
            <v-slider
              label="height"
              v-model="height"
              :max="heightList.length - 1"
              :tick-labels="heightList"
            ></v-slider>
            <v-slider
              label="width"
              v-model="width"
              :max="widthList.length - 1"
              :tick-labels="widthList"
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Footers',
  data() {
    return {
      attr: [],
      icons: ['mdi-home', 'mdi-email', 'mdi-calendar', 'mdi-delete'],
      dark: false,
      light: false,
      absolute: false,
      app: false,
      color: 0,
      colors: ['', 'primary', 'orange'],
      elevation: 25,
      fixed: false,
      inset: false,
      outlined: false,
      padless: false,
      rounded: false,
      shaped: false,
      tile: false,
      height: 0,
      heightList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
      width: 0,
      widthList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
    };
  },
  computed: {
    computedColor() {
      const value = this.colors[this.color];
      return value;
    },
    computedHeight() {
      let height = this.heightList[this.height];
      return height;
    },
    computedWidth() {
      let width = this.widthList[this.width];
      return width;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.dark, 'dark');
      this.checkBoolean(attr, this.light, 'light');
      this.checkBoolean(attr, this.absolute, 'absolute');
      this.checkBoolean(attr, this.app, 'app');
      this.checkBoolean(attr, this.fixed, 'fixed');
      this.checkBoolean(attr, this.inset, 'inset');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.padless, 'padless');
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.elevation, 'elevation', 25);
      this.checkValue(attr, this.computedHeight, 'height', '');
      this.checkValue(attr, this.computedWidth, 'width', '');
      return attr;
    },
  },
};
</script>
