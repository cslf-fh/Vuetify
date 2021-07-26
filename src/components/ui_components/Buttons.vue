<template>
  <v-card id="buttons" flat class="background text-center">
    <v-card-title class="text-h4">Buttons</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      ボタンを作るコンポーネント。
      <br />
      <code class="text-subtitle-1">disabled</code>
      プロパティを使用する場合に
      <code class="text-subtitle-1">darkかlight</code>
      プロパティを設定していると、背景によっては見えずらくなるので注意。
      <br />
      <code class="text-subtitle-1">loader</code>
      スロットがある。
      <code class="text-subtitle-1">click</code>
      イベントがある。
      <br />
      クリック時のローディングギミックは
      <LinkText
        link="href"
        url="https://vuetifyjs.com/ja/components/buttons/#loading"
        text="公式のドキュメント"
        icon="mdi-open-in-new"
      ></LinkText>
      を参照。
    </v-card-subtitle>
    <v-card class="background text-left px-4" flat tile>
      <div id="buttons-link" class="pb-4">Link</div>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-btn
            class="pa-4"
            :absolute="absolute"
            :block="block"
            :bottom="bottom"
            :color="computedColor"
            :dark="dark"
            :depressed="depressed"
            :disabled="disabled"
            :elevation="elevation"
            :fab="fab"
            :fixed="fixed"
            :icon="icon"
            :input-value="inputValue"
            :large="large"
            :left="left"
            :light="light"
            :loading="loading"
            :outlined="outlined"
            :plain="plain"
            :retain-focus-on-click="retainFocusOnClick"
            :right="right"
            :ripple="ripple"
            :rounded="rounded"
            :shaped="shaped"
            :small="small"
            :text="text"
            :tile="tile"
            :top="top"
            :type="computedType"
            :width="computedWidth"
            :x-large="xLarge"
            :x-small="xSmall"
            :to="link === 1 ? to : null"
            :href="link === 2 ? href : null"
            :target="computedTarget"
            ><span v-if="!vIcon">v-btn</span>
            <v-icon v-if="vIcon">{{ computedVIcon }}</v-icon>
            <template v-if="loaderSlot" v-slot:loader>
              <span>Loading...</span>
            </template>
          </v-btn>
          <div class="d-flex justify-center">
            <v-checkbox v-model="loaderSlot" label="loader slot"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            class="mx-3 mb-3"
            tag="v-btn"
            :attr="computedAttr"
            :nest="vIcon !== 0"
            tagNest="v-icon"
            :textsNest="true"
            :textNest="computedVIcon"
            :nest2="loaderSlot"
            :slots2="true"
            slotName2="loader"
            tagNest2="span"
            :textsNest2="true"
            textNest2="loading..."
          ></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="6">
          <template v-slot:switch1>
            <v-switch
              v-model="absolute"
              label="absolute"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="fixed" label="fixed" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="top" label="top" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="bottom" label="bottom" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="left" label="left" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="right" label="right" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="14">
          <template v-slot:switch1>
            <v-switch v-model="dark" label="dark" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="light" label="light" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="depressed"
              label="depressed"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="fab" label="fab" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="icon" label="icon" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch v-model="loading" label="loading" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch
              v-model="retainFocusOnClick"
              label="retain-focus-on-click"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch10>
            <v-switch v-model="ripple" label="ripple" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch11>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch12>
            <v-switch v-model="shaped" label="shaped" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch13>
            <v-switch v-model="text" label="text" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch14>
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
              max="25"
              min="0"
              thumb-label
            ></v-slider>
            <v-slider
              label="v-icon"
              v-model="vIcon"
              :max="vIcons.length - 1"
              :tick-labels="vIcons"
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="5">
          <template v-slot:switch1>
            <v-switch v-model="block" label="block" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="large" label="large" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="small" label="small" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="xLarge" label="x-large" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="xSmall" label="x-small" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="width"
              v-model="width"
              :max="widthList.length - 1"
              :tick-labels="widthList"
            ></v-slider>
          </template>
        </Grid>
        <v-switch
          v-model="inputValue"
          label="input-value"
          class="ma-0"
        ></v-switch>
        <v-slider
          label="type"
          v-model="type"
          :max="types.length - 1"
          :tick-labels="types"
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
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Buttons',
  data() {
    return {
      attr: [],
      absolute: false,
      block: false,
      bottom: false,
      color: 0,
      colors: ['', 'primary', 'orange'],
      dark: false,
      depressed: false,
      disabled: false,
      elevation: 25,
      fab: false,
      fixed: false,
      icon: false,
      inputValue: false,
      large: false,
      left: false,
      light: false,
      loading: false,
      outlined: false,
      plain: false,
      retainFocusOnClick: false,
      right: false,
      ripple: true,
      rounded: false,
      shaped: false,
      small: false,
      text: false,
      tile: false,
      top: false,
      type: 0,
      types: ['button', 'submit', 'reset'],
      width: 0,
      widthList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
      xLarge: false,
      xSmall: false,
      vIcon: 0,
      vIcons: ['', 'minus', 'heart', 'pencil'],
      app: true,
      loaderSlot: false,
      link: 0,
      links: ['', 'to', 'href'],
      target: 0,
      targets: ['_blank', '_self', '_parent', '_top'],
      to: './#buttons-link',
      href: './#/components/#buttons-link',
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
    },
    computedType() {
      let type = this.types[this.type];
      return type;
    },
    computedWidth() {
      let width = this.widthList[this.width];
      return width;
    },
    computedVIcon() {
      let icon = 'mdi';
      const icons = this.vIcons[this.vIcon];
      icons === '' ? (icon = '') : (icon += `-${icons}`);
      return icon;
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
      this.checkBoolean(attr, this.absolute, 'absolute');
      this.checkBoolean(attr, this.fixed, 'fixed');
      this.checkBoolean(attr, this.top, 'top');
      this.checkBoolean(attr, this.bottom, 'bottom');
      this.checkBoolean(attr, this.left, 'left');
      this.checkBoolean(attr, this.right, 'right');
      this.checkBoolean(attr, this.dark, 'dark');
      this.checkBoolean(attr, this.light, 'light');
      this.checkBoolean(attr, this.depressed, 'depressed');
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.fab, 'fab');
      this.checkBoolean(attr, this.icon, 'icon');
      this.checkBoolean(attr, this.loading, 'loading');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.retainFocusOnClick, 'retain-on-focus-click');
      this.checkValuePrefix(attr, this.ripple, ':', 'ripple', true);
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkBoolean(attr, this.text, 'text');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.elevation, 'elevation', 25);
      this.checkBoolean(attr, this.block, 'block');
      this.checkBoolean(attr, this.large, 'large');
      this.checkBoolean(attr, this.small, 'small');
      this.checkBoolean(attr, this.xLarge, 'x-large');
      this.checkBoolean(attr, this.xSmall, 'x-small');
      this.checkValue(attr, this.computedWidth, 'width', '');
      this.checkBoolean(attr, this.inputValue, 'input-value');
      this.checkValue(attr, this.computedType, 'type', 'button');
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
