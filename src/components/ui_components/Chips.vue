<template>
  <v-card id="chips" flat class="background text-center">
    <v-card-title class="text-h4">Chips</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      小さな情報を伝えるのに使用する。
      <code class="text-subtitle-1">active</code>
      プロパティで表示を制御する。
      <br />
      <code class="text-subtitle-1">filter</code>
      プロパティを使用しアイコンを表示する場合は
      <code class="text-subtitle-1">input-value</code>
      プロパティを設定する。単にアイコンを表示する場合は
      <code class="text-subtitle-1">v-icon</code>
      コンポーネント等をラップして使う。
      <br />
      <code class="text-subtitle-1"
        >click, click:close, inputとupdate:active</code
      >
      イベントがある。下は
      <code class="text-subtitle-1">close</code>
      プロパティを使用してチップの表示を制御する場合に使用する。
    </v-card-subtitle>
    <v-card class="background text-left px-4" flat tile>
      <div id="chips-link" class="pb-4">Link</div>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-chip
            :dark="dark"
            :light="light"
            :active="active"
            :close="close"
            :disabled="disabled"
            :draggable="draggable"
            :filter="filter"
            :label="label"
            :large="large"
            :outlined="outlined"
            :pill="pill"
            :ripple="ripple"
            :small="small"
            :x-large="XLarge"
            :x-small="XSmall"
            :close-icon="computedCloseIcon"
            :color="computedColor"
            :filter-icon="computedFilterIcon"
            :text-color="computedTextColor"
            :input-value="inputValue"
            :to="link === 1 ? to : null"
            :href="link === 2 ? href : null"
            :target="computedTarget"
            @update:active="active = $event"
            >v-chip component
          </v-chip>
          <v-btn v-if="!active" @click="active = true">reset</v-btn>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="inputValue" label="active filter"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code tag="v-chip" :attr="computedAttr"></Code>
          <div class="py-3"></div>
          <Code
            tag="v-chip"
            :attr="[
              { name: '@click:close', value: 'active = false' },
              { name: '@update:active', value: 'active = $event' },
            ]"
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
        </Grid>
        <Grid switch="4">
          <template v-slot:switch1>
            <v-switch v-model="large" label="large" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="small" label="small" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="XLarge" label="x-large" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="XSmall" label="x-small" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="9">
          <template v-slot:switch1>
            <v-switch v-model="active" label="active" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="close" label="close" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="draggable"
              label="draggable"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="filter" label="filter" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="label" label="label" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch v-model="pill" label="pill" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch v-model="ripple" label="ripple" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="close-icon"
              v-model="closeIcon"
              :max="closeIcons.length - 1"
              :tick-labels="closeIcons"
            ></v-slider>
            <v-slider
              label="color"
              v-model="color"
              :max="colors.length - 1"
              :tick-labels="colors"
            ></v-slider>
            <v-slider
              label="filter-icon"
              v-model="filterIcon"
              :max="filterIcons.length - 1"
              :tick-labels="filterIcons"
            ></v-slider>
            <v-slider
              label="text-color"
              v-model="textColor"
              :max="textColors.length - 1"
              :tick-labels="textColors"
            ></v-slider>
            <v-slider
              label="how to link"
              v-model="link"
              :max="links.length - 1"
              :tick-labels="links"
            ></v-slider>
            <v-slider
              label="target"
              v-model="target"
              :max="targets.length - 1"
              :tick-labels="targets"
              :disabled="link !== 2"
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Chips',
  data() {
    return {
      attr: [],
      active: true,
      close: false,
      closeIcon: 0,
      closeIcons: ['', 'mdi-trash-can', 'aaaaaa'],
      /*
      closeLabel: 0,
      closeLabels: ['', 'dismiss'],
      */
      color: 0,
      colors: ['', 'primary', 'orange'],
      dark: false,
      light: false,
      disabled: false,
      draggable: false,
      filter: false,
      filterIcon: 0,
      filterIcons: ['', 'mdi-plus'],
      inputValue: undefined,
      label: false,
      large: false,
      outlined: false,
      pill: false,
      ripple: undefined,
      small: false,
      textColor: 0,
      textColors: ['', 'success', 'red'],
      XLarge: false,
      XSmall: false,
      link: 0,
      links: ['', 'to', 'href'],
      target: 0,
      targets: ['_blank', '_self', '_parent', '_top'],
      to: './#chips-link',
      href: './#/components/#chips-link',
    };
  },
  computed: {
    computedCloseIcon() {
      let prefix = 'mdi';
      let value = this.closeIcons[this.closeIcon];
      value ? (prefix += `-${value}`) : (value = '$delete');
      return value;
    },
    /*
    computedCloseLabel() {
      let value = this.closeLabels[this.closeLabel];
      value ? null : (value = '$vuetify.close');
      return value;
    },
    */
    computedColor() {
      const value = this.colors[this.color];
      return value;
    },
    computedFilterIcon() {
      let value = this.filterIcons[this.filterIcon];
      value ? null : (value = '$complete');
      return value;
    },
    computedTextColor() {
      const value = this.textColors[this.textColor];
      return value;
    },
    computedValue() {
      let value = 'value';
      const array = this.array[this.model];
      value += `${array}`;
      return value;
    },
    computedLink() {
      let link = this.links[this.link];
      return link;
    },
    computedTarget() {
      let target = this.targets[this.target];
      this.link === 1 ? (target = '') : null;
      return target;
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
      this.checkBoolean(attr, this.large, 'large');
      this.checkBoolean(attr, this.small, 'small');
      this.checkBoolean(attr, this.XLarge, 'x-large');
      this.checkBoolean(attr, this.XSmall, 'x-small');
      this.close === true
        ? this.checkValuePrefix(attr, this.active, ':', 'active', '')
        : this.checkValuePrefix(attr, this.active, ':', 'active', true);
      this.checkBoolean(attr, this.close, 'close');
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.draggable, 'draggable');
      this.checkBoolean(attr, this.filter, 'filter');
      this.checkBoolean(attr, this.label, 'label');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.pill, 'pill');
      this.checkBoolean(attr, this.ripple, 'ripple');
      this.checkValue(attr, this.computedCloseIcon, 'close-icon', '$delete');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(
        attr,
        this.computedFilterIcon,
        'filter-icon',
        '$complete'
      );
      this.checkValue(attr, this.computedTextColor, 'text-color', '');
      if (this.link === 1) {
        this.checkValue(attr, this.to, 'to', '');
      } else if (this.link === 2) {
        this.checkValue(attr, this.href, 'href', '');
        this.checkValue(attr, this.computedTarget, 'target', '');
      }
      return attr;
    },
  },
};
</script>
