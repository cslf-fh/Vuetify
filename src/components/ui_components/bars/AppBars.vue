<template>
  <v-card id="app-bars" flat class="background text-center">
    <v-card-title class="text-h5">App bars</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">v-navigation-drawer</code>
      と組み合わせることで、サイトナビゲーションを作れる。
      <br />
      <code class="text-subtitle-1">appとfixed</code
      >プロパティの違いはよく分かりませんでした。
      <br />
      各種スクロールプロパティに
      <code class="text-subtitle-1">scroll-threshold</code>
      を組み合わせると、いい感じになる。
      <br />
      <code class="text-subtitle-1">img</code>
      スロットがある。スロットプロパティには
      <code class="text-subtitle-1">props</code>
      を渡し、バインドして使用する。
      <br />
      サブコンポーネントには
      <code class="text-subtitle-1">v-app-bar-nav-iconとv-app-bar-title</code>
      がある。
      <br />
      <code class="text-subtitle-1">v-app-bar-nav-icon</code>
      はナビゲーションドロワーの制御に使う。
      <br />
      画面が小さい時
      <code class="text-subtitle-1">v-app-bar-title</code>
      は省略して表示されるので、
      <code class="text-subtitle-1">shrink-on-scroll</code>
      プロパティと併用する。
      <br />
      省略されるのが嫌な場合は
      <code class="text-subtitle-1">v-toolbar-title</code>
      を代わりに使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-app-bar
          class="mx-3"
          :absolute="absolute"
          :app="app"
          :bottom="bottom"
          :collapse="collapse"
          :collapse-on-scroll="collapseOnScroll"
          :color="computedColor"
          scroll-target="#scrolling-techniques"
          :dense="dense"
          :elevate-on-scroll="elevateOnScroll"
          :elevation="elevation"
          :extended="extended"
          :extension-height="extensionHeight"
          :fade-img-on-scroll="fadeImgOnScroll"
          :fixed="fixed"
          :flat="flat"
          :floating="floating"
          :hide-on-scroll="hideOnScroll"
          :inverted-scroll="invertedScroll"
          :outlined="outlined"
          :prominent="prominent"
          :rounded="rounded"
          :scroll-threshold="scrollThreshold"
          :shaped="shaped"
          :short="short"
          :shrink-on-scroll="shrinkOnScroll"
          :src="src ? srcImg : 'https://'"
          :tile="tile"
        >
          <template v-slot:img="{ props }">
            <v-img
              v-bind="props"
              :gradient="
                src
                  ? 'to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
                  : null
              "
            ></v-img>
          </template>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-app-bar-title>Page title</v-app-bar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </v-app-bar>
        <v-sheet
          id="scrolling-techniques"
          class="overflow-y-auto mx-3"
          max-height="600"
        >
          <v-container style="height: 1000px">
            <v-checkbox v-model="src" label="img slot"></v-checkbox>
          </v-container>
        </v-sheet>
        <div class="py-3"></div>
        <Code class="mx-3" tag="v-app-bar" :attr="computedAttr"></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="4">
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
          <template v-slot:switch4>
            <v-switch v-model="bottom" label="bottom" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="7">
          <template v-slot:switch1>
            <v-switch
              v-model="collapse"
              label="collapse"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="collapseOnScroll"
              label="collapse-on-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="elevateOnScroll"
              label="elevate-on-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="fadeImgOnScroll"
              label="fade-img-on-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch
              v-model="hideOnScroll"
              label="hide-on-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch
              v-model="invertedScroll"
              label="inverted-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="shrinkOnScroll"
              label="shrink-on-scroll"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="scroll-threshold"
              v-model="scrollThreshold"
              max="500"
              min="0"
              step="10"
              thumb-label
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="4">
          <template v-slot:switch1>
            <v-switch
              v-model="extended"
              label="extended"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="floating"
              label="floating"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="prominent"
              label="prominent"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="short" label="short" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="extension-height"
              v-model="extensionHeight"
              max="100"
              min="0"
              thumb-label
            ></v-slider>
          </template>
        </Grid>
        <Grid switch="6">
          <template v-slot:switch1>
            <v-switch v-model="dense" label="dense" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="flat" label="flat" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
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
          <template v-slot:slider
            ><v-slider
              label="color"
              v-model="color"
              :max="colors.length - 1"
              :tick-labels="colors"
            ></v-slider
            ><v-slider
              label="elevation"
              v-model="elevation"
              max="24"
              min="0"
              thumb-label
            ></v-slider
          ></template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'AppBars',
  data() {
    return {
      attr: [],
      absolute: false,
      app: false,
      bottom: false,
      collapse: false,
      collapseOnScroll: false,
      color: 0,
      colors: ['', 'primary', 'teal'],
      dense: false,
      elevateOnScroll: false,
      elevation: 4,
      extended: false,
      extensionHeight: 48,
      fadeImgOnScroll: false,
      fixed: false,
      flat: false,
      floating: false,
      hideOnScroll: false,
      invertedScroll: false,
      outlined: false,
      prominent: false,
      rounded: false,
      scrollThreshold: 0,
      shaped: false,
      short: false,
      shrinkOnScroll: false,
      src: false,
      srcImg: 'https://picsum.photos/1920/1080?random',
      tile: false,
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
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
      this.checkBoolean(attr, this.fixed, 'fixed');
      this.checkBoolean(attr, this.absolute, 'absolute');
      this.checkBoolean(attr, this.bottom, 'bottom');
      this.checkBoolean(attr, this.collapse, 'collapse');
      this.checkBoolean(attr, this.collapseOnScroll, 'coolapse-on-scroll');
      this.checkBoolean(attr, this.elevateOnScroll, 'elevate-on-scroll');
      this.checkBoolean(attr, this.fadeImgOnScroll, 'fade-img-on-scroll');
      this.checkBoolean(attr, this.hideOnScroll, 'hide-on-scroll');
      this.checkBoolean(attr, this.invertedScroll, 'inverted-scroll');
      this.checkBoolean(attr, this.shrinkOnScroll, 'shrink-on-scroll');
      this.checkValue(attr, this.scrollThreshold, 'scroll-threshold', 0);
      this.checkBoolean(attr, this.extended, 'extended');
      this.checkBoolean(attr, this.floating, 'floating');
      this.checkBoolean(attr, this.prominent, 'prominent');
      this.checkBoolean(attr, this.short, 'short');
      this.checkValue(attr, this.extensionHeight, 'extension-height', 48);
      this.checkBoolean(attr, this.dense, 'dense');
      this.checkBoolean(attr, this.flat, 'flat');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.elevation, 'elevation', 4);
      return attr;
    },
  },
};
</script>
