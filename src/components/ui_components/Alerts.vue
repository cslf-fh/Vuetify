<template>
  <v-card id="alerts" flat class="background text-center">
    <v-card-title class="text-h4">Alerts</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">type</code>
      からバリエーションを選ぶ。色を変えたい場合は
      <code class="text-subtitle-1">color</code>
      で上書き。
      <br />
      <code class="text-subtitle-1">denseとprominent</code>
      プロパティの両方を設定すると、
      <code class="text-subtitle-1">dense</code>
      プロパティを適用していない場合のサイズで、アイコンを強調できる。
      <br />
      <code class="text-subtitle-1">prepend, appendとclose</code>
      スロットがある。それぞれ左側、右側と
      <code class="text-subtitle-1">dismissible</code>
      プロパティをカスタマイズするスロット。
      <br />
      <code class="text-subtitle-1">close</code>
      スロットではスロットプロパティに
      <code class="text-subtitle-1">toggle</code
      >を渡し、クリックイベントを挟むとアラートを閉じることができる。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-alert
            v-model="alert"
            :dark="dark"
            :light="light"
            :color="computedColor"
            :type="computedType"
            :border="computedBorder !== '' ? computedBorder : null"
            :colored-border="coloredBorder"
            :dense="dense"
            :dismissible="dismissible"
            :elevation="elevation"
            :icon="computedIcon !== '' ? computedIcon : null"
            :outlined="outlined"
            :rounded="rounded"
            :prominent="prominent"
            :shaped="shaped"
            :text="text"
            :transition="computedTransition"
            :width="computedWidth"
            >I'm an Alert Usage Example
            <template v-if="prepend" v-slot:prepend>
              <v-icon left>mdi-arrow-left-bold</v-icon>
            </template>
            <template v-if="append" v-slot:append>
              <v-icon right>mdi-arrow-right-bold</v-icon>
            </template>
            <template v-if="close" v-slot:close="{ toggle }">
              <v-btn text @click="toggle">toggle</v-btn>
            </template>
          </v-alert>
          <v-btn
            v-if="!alert"
            color="deep-purple accent-4"
            dark
            @click="alert = true"
          >
            Reset
          </v-btn>
          <div class="d-flex flex-wrap justify-space-around mx-3">
            <v-checkbox v-model="prepend" label="prepend slot"></v-checkbox>
            <v-checkbox v-model="append" label="append slot"></v-checkbox>
            <v-checkbox v-model="close" label="close slot"></v-checkbox>
          </div>
          <Code
            tag="v-alert"
            :attr="computedAttr"
            :nest="prepend"
            :slots="true"
            slotName="prepend"
            tagNest="v-icon"
            :textsNest="true"
            textNest="mdi-arrow-left-bold"
            :nest2="append"
            :slots2="true"
            slotName2="append"
            tagNest2="v-icon"
            :textsNest2="true"
            textNest2="mdi-arrow-right-bold"
            :nest3="close"
            :slots3="true"
            slotName3="close"
            slotProps3="toggle"
            tagNest3="v-btn"
            :textsNest3="true"
            textNest3="toggle"
            :attrNest3="[{ name: '@click', value: 'toggle' }]"
          ></Code>
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
          <template v-slot:slider>
            <v-slider
              label="color"
              v-model="color"
              :max="colors.length - 1"
              :tick-labels="colors"
            ></v-slider>
            <v-slider
              label="type"
              v-model="type"
              :max="types.length - 1"
              :tick-labels="types"
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="5">
          <template v-slot:switch1>
            <v-switch
              v-model="coloredBorder"
              label="colored-border"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="dense" label="dense" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="dismissible"
              label="dismissible"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="prominent"
              label="prominent"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="text" label="text" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="border"
              v-model="border"
              :max="borders.length - 1"
              :tick-labels="borders"
            ></v-slider>
            <v-slider
              label="icon"
              v-model="icon"
              :max="icons.length - 1"
              :tick-labels="icons"
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="3">
          <template v-slot:switch1>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="shaped" label="shaped" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="elevation"
              v-model="elevation"
              max="24"
              min="0"
              thumb-label
            ></v-slider>
            <v-slider
              label="transition"
              v-model="transition"
              :max="transitions.length - 1"
              :tick-labels="transitions"
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
  name: 'Alerts',
  data() {
    return {
      attr: [],
      alert: true,
      prepend: false,
      append: false,
      close: false,
      dark: false,
      light: false,
      color: 0,
      colors: ['', 'red', 'orange', 'yellow', 'green', 'blue', 'purple'],
      type: 0,
      types: ['', 'success', 'info', 'warning', 'error'],
      border: 0,
      borders: ['', 'top', 'right', 'bottom', 'left'],
      coloredBorder: false,
      dense: false,
      dismissible: false,
      elevation: 0,
      icon: 0,
      icons: ['', 'firework', 'material-design', 'vuetify'],
      outlined: false,
      rounded: false,
      prominent: false,
      shaped: false,
      text: false,
      transition: 0,
      transitions: ['', 'fade', 'scale'],
      width: 0,
      widthList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
    },
    computedType() {
      let type = this.types[this.type];
      type === '' ? (type = undefined) : null;
      return type;
    },
    computedBorder() {
      let border = this.borders[this.border];
      return border;
    },
    computedIcon() {
      let icon = 'mdi';
      const icons = this.icons[this.icon];
      icons === '' ? (icon = '') : (icon += `-${icons}`);
      return icon;
    },
    computedTransition() {
      let transition = 'transition';
      let transitions = this.transitions[this.transition];
      transitions === ''
        ? (transition = '')
        : (transitions += `-${transition}`);
      return transitions;
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
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.computedType, 'type', undefined);
      this.checkBoolean(attr, this.coloredBorder, 'colored-border');
      this.checkBoolean(attr, this.dense, 'dense');
      this.checkBoolean(attr, this.dismissible, 'dismissible');
      this.checkBoolean(attr, this.prominent, 'prominent');
      this.checkBoolean(attr, this.text, 'text');
      this.checkValue(attr, this.computedBorder, 'border', '');
      this.checkValue(attr, this.computedIcon, 'icon', '');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkValue(attr, this.computedTransition, 'transition', '');
      this.checkValue(attr, this.elevation, 'elevation', 0);
      this.checkValue(attr, this.computedWidth, 'width', '');
      return attr;
    },
  },
};
</script>
