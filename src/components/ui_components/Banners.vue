<template>
  <v-card id="banners" flat class="background text-center">
    <v-card-title class="text-h4">Banners</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">app</code>
      プロパティは
      <code class="text-subtitle-1">v-toolbar</code>
      と
      <code class="text-subtitle-1">v-system-bar</code>
      の高さを考慮してスクロール追従する。
      <br />
      <code class="text-subtitle-1">sticky</code>
      プロパティは
      <code class="text-subtitle-1">top: 0px</code>
      でスクロール追従する。
      <br />
      <code class="text-subtitle-1">actionsとicon</code>
      スロットがある。
      <code class="text-subtitle-1">actions</code>
      スロットではスロットプロパティに
      <code class="text-subtitle-1">dismiss</code>
      を渡し、クリックイベントを挟むとバナーを閉じることができる。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner
          class="mx-3 text-left"
          v-model="banner"
          :app="app"
          :color="computedColor"
          :elevation="elevation"
          :icon="computedIcon"
          :icon-color="computedIconColor"
          :outlined="outlined"
          :rounded="rounded"
          :shaped="shaped"
          :single-line="singleLine"
          :sticky="sticky"
          :tile="tile"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed turpis id est lacinia sagittis vitae id quam.
          <template v-if="actions" v-slot:actions="{ dismiss }">
            <v-btn text @click="dismiss">DISMISS</v-btn>
          </template>
        </v-banner>
        <v-btn
          v-if="!banner"
          color="deep-purple accent-4"
          dark
          @click="banner = true"
        >
          Reset
        </v-btn>
        <div class="d-flex flex-wrap justify-space-around">
          <v-checkbox v-model="actions" label="actions slot"></v-checkbox>
        </div>
        <Code
          class="mx-3 mb-3"
          tag="v-banner"
          :attr="computedAttr"
          :nest="actions"
          :slots="true"
          slotName="actoins"
          slotProps="dismiss"
          tagNest="v-btn"
          :attrNest="[{ name: '@click', value: 'dismiss' }]"
          :textsNest="true"
          textNest="dismiss"
        ></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="app" label="app" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="sticky" label="sticky" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="singleLine"
              label="single-line"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="icon"
              v-model="icon"
              :max="icons.length - 1"
              :tick-labels="icons"
            ></v-slider>
            <v-slider
              label="icon-color"
              v-model="iconColor"
              :max="iconColors.length - 1"
              :tick-labels="iconColors"
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="3">
          <template v-slot:switch1>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="shaped" label="shaped" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="tile" label="tile" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="color"
              v-model="color"
              :max="colors.length - 1"
              :tick-labels="colors"
            ></v-slider>
            <v-slider
              label="elevation"
              v-model="elevation"
              max="24"
              min="0"
              thumb-label
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Banners',
  data() {
    return {
      attr: [],
      actions: false,
      banner: true,
      app: false,
      color: 0,
      colors: ['', 'primary', 'success'],
      elevation: 0,
      icon: 0,
      icons: ['', 'account', 'vuetify'],
      iconColor: 0,
      iconColors: ['', 'white', 'orange'],
      outlined: false,
      rounded: false,
      shaped: false,
      singleLine: false,
      sticky: false,
      tile: false,
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
    },
    computedIcon() {
      let icon = 'mdi';
      const icons = this.icons[this.icon];
      icons === '' ? (icon = '') : (icon += `-${icons}`);
      return icon;
    },
    computedIconColor() {
      let iconColor = this.iconColors[this.iconColor];
      return iconColor;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.app, 'app');
      this.checkBoolean(attr, this.sticky, 'sticky');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.singleLine, 'single-line');
      this.checkValue(attr, this.computedIcon, 'icon', '');
      this.checkValue(attr, this.computedIconColor, 'icon-color', '');
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.elevation, 'elevation', 0);
      return attr;
    },
  },
};
</script>
