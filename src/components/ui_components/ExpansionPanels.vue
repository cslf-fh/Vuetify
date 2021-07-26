<template>
  <v-card id="expansion-panels" flat class="background text-center">
    <v-card-title class="text-h4">Expansion panels</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      エキスパンションパネル(アコーディオン)を表示するのに使用する。
      <br />
      <code class="text-subtitle-1">value</code>
      プロパティで表示を制御できる。
      <code class="text-subtitle-1">multiple</code>
      プロパティを使用する場合、
      <code class="text-subtitle-1">value</code>
      プロパティには配列を渡さなければならないので注意。
      <br />
      サブコンポーネントには
      <code class="text-subtitle-1"
        >v-expansion-panel,
        v-expansion-panel-headerとv-expansion-panel-content</code
      >
      がある。
      <code class="text-subtitle-1">headerとcontent</code>
      コンポーネントは
      <code class="text-subtitle-1">panel</code>
      コンポーネントでラップする。
      <br />
      <code class="text-subtitle-1">v-expansion-panel</code>
      コンポーネントには
      <code class="text-subtitle-1">changeとclick</code>
      イベントがある。
      <br />
      <code class="text-subtitle-1">v-expansion-panel-header</code>
      コンポーネントには
      <code class="text-subtitle-1">actions</code>
      スロットと
      <code class="text-subtitle-1">click</code>
      イベントがある。
      <code class="text-subtitle-1"></code>
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-expansion-panels
            class="text-left"
            v-model="value"
            :dark="dark"
            :light="light"
            :accordion="accordion"
            :disabled="disabled"
            :flat="flat"
            :focusable="focusable"
            :hover="hover"
            :inset="inset"
            :mandatory="mandatory"
            :max="max"
            :multiple="multiple"
            :popout="popout"
            :readonly="readonly"
            :tile="tile"
          >
            <v-expansion-panel
              v-for="(item, i) in 5"
              :key="i"
              :disabled="i % 2 === 1 ? disabledSub : null"
              :readonly="i % 2 === 1 ? readonlySub : null"
            >
              <v-expansion-panel-header
                :color="computedColorHeader"
                :disable-icon-rotate="disableIconRotate"
                :expand-icon="computedExpandIcon"
                :hide-actions="hideActions"
                :ripple="ripple"
              >
                <template v-if="actions" v-slot:actions>
                  <v-icon color="error"> mdi-alert-circle </v-icon>
                </template>
                Item
              </v-expansion-panel-header>
              <v-expansion-panel-content
                :color="computedColorContent"
                :eager="eager"
              >
                {{ text }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <div class="d-flex justify-space-around align-center">
            <v-btn @click="value = []">close all panel</v-btn>
            <v-checkbox v-model="actions" label="actions slot"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-expansion-panels"
            :attr="computedAttr"
            :nest="true"
            tagNest="v-expansion-panel"
            :attrNest="computedAttrNest"
          ></Code>
          <div class="py-3"></div>
          <Code
            tag="v-expansion-panel-header"
            :attr="computedAttr2"
            :nest="actions"
            :slots="true"
            slotName="actions"
            tagNest="v-icon"
            :attrNest="[{ name: 'color', value: 'error' }]"
            tag2="v-expansion-panel-content"
            :attr2="computedAttr3"
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
        <Grid switch="11">
          <template v-slot:switch1>
            <v-switch
              v-model="accordion"
              label="accordion"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="flat" label="flat" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="focusable"
              label="focusable"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="hover" label="hover" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="inset" label="inset" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="mandatory"
              label="mandatory"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch
              v-model="multiple"
              label="multiple"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch v-model="popout" label="popout" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch10>
            <v-switch
              v-model="readonly"
              label="readonly"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch11>
            <v-switch v-model="tile" label="tile" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider label="max" v-model="max" max="6" thumb-label></v-slider>
          </template>
        </Grid>
        <div class="text-left pb-3">props for v-expansion-panel</div>
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch
              v-model="disabledSub"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="readonlySub"
              label="readonly"
              class="ma-0"
            ></v-switch>
          </template>
        </Grid>
        <div class="text-left pb-3">props for v-expansion-header</div>
        <Grid switch="3">
          <template v-slot:switch1>
            <v-switch
              v-model="disableIconRotate"
              label="disable-icon-rotate"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="hideActions"
              label="hide-actions"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="ripple" label="ripple" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="color"
              v-model="colorHeader"
              :max="colorHeaders.length - 1"
              :tick-labels="colorHeaders"
            ></v-slider>
            <v-slider
              label="expand-icon"
              v-model="expandIcon"
              :max="expandIcons.length - 1"
              :tick-labels="expandIcons"
            ></v-slider>
          </template>
        </Grid>
        <div class="text-left pb-3">props for v-expansion-content</div>
        <v-switch v-model="eager" label="eager" class="ma-0"></v-switch>
        <v-slider
          label="color"
          v-model="colorContent"
          :max="colorContents.length - 1"
          :tick-labels="colorContents"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'ExpansionPanels',
  data() {
    return {
      attr: [],
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      value: [],
      dark: false,
      light: false,
      accordion: false,
      disabled: false,
      flat: false,
      focusable: false,
      hover: false,
      inset: false,
      mandatory: false,
      max: 6,
      multiple: false,
      popout: false,
      readonly: false,
      tile: false,
      attrNest: [],
      disabledSub: false,
      readonlySub: false,
      attr2: [],
      colorHeader: 0,
      colorHeaders: ['', 'primary', 'orange'],
      disableIconRotate: false,
      expandIcon: 0,
      expandIcons: ['', 'menu-down', 'check'],
      hideActions: false,
      ripple: false,
      actions: false,
      attr3: [],
      colorContent: 0,
      colorContents: ['', 'primary', 'orange'],
      eager: false,
    };
  },
  computed: {
    computedColorHeader() {
      const value = this.colorHeaders[this.colorHeader];
      return value;
    },
    computedExpandIcon() {
      let pre = 'mdi';
      let value = this.expandIcons[this.expandIcon];
      value ? (value = pre += `-${value}`) : (value = '$expand');
      return value;
    },
    computedColorContent() {
      const value = this.colorContents[this.colorContent];
      return value;
    },
    computedAttr() {
      return this.attrArray();
    },
    computedAttrNest() {
      return this.attrArrayNest();
    },
    computedAttr2() {
      return this.attrArray2();
    },
    computedAttr3() {
      return this.attrArray3();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.dark, 'dark');
      this.checkBoolean(attr, this.light, 'light');
      this.checkBoolean(attr, this.accordion, 'accordion');
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.flat, 'flat');
      this.checkBoolean(attr, this.focusable, 'focusable');
      this.checkBoolean(attr, this.hover, 'hover');
      this.checkBoolean(attr, this.inset, 'inset');
      this.checkBoolean(attr, this.mandatory, 'mandatory');
      this.checkBoolean(attr, this.multiple, 'multiple');
      this.checkBoolean(attr, this.popout, 'popout');
      this.checkBoolean(attr, this.readonly, 'readonly');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.max, 'max', 6);
      return attr;
    },
    attrArrayNest() {
      this.attrNest = [];
      let attr = this.attrNest;
      this.checkBoolean(attr, this.disabledSub, 'disabled');
      this.checkBoolean(attr, this.readonlySub, 'readonly');
      return attr;
    },
    attrArray2() {
      this.attr2 = [];
      let attr = this.attr2;
      this.checkBoolean(attr, this.disableIconRotate, 'disable-icon-rotate');
      this.checkBoolean(attr, this.hideActions, 'hide-actions');
      this.checkBoolean(attr, this.ripple, 'ripple');
      this.checkValue(attr, this.computedColorHeader, 'color', '');
      this.checkValue(attr, this.computedExpandIcon, 'expand-icon', '$expand');
      return attr;
    },
    attrArray3() {
      this.attr3 = [];
      let attr = this.attr3;
      this.checkBoolean(attr, this.eager, 'eager');
      this.checkValue(attr, this.computedColorContent, 'color', '');
      return attr;
    },
  },
};
</script>
