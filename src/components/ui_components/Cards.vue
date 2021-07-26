<template>
  <v-card id="cards" flat class="background text-center">
    <v-card-title class="text-h4">Cards</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      汎用性の高いコンポーネント。カードを作るのにも使えるし、ラッパーとしても使える。
      <br />
      <code class="text-subtitle-1">progress</code>
      スロットがある。
      <code class="text-subtitle-1">click</code>
      イベントがある。
      <br />
      サブコンポーネントには
      <code class="text-subtitle-1">
        v-card-title, v-card-subtitle, v-card-textとv-card-actions
      </code>
      がある。
    </v-card-subtitle>
    <v-card class="background text-left px-4" flat tile>
      <div id="cards-link" class="pb-4">Link</div>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-card
            class="text-left"
            :dark="dark"
            :light="light"
            :color="computedColor"
            :disabled="disabled"
            :elevation="computedElevation"
            :flat="flat"
            :hover="hover"
            :img="computedImg"
            :loader-height="loaderHeight"
            :loading="computedLoading"
            :outlined="outlined"
            :raised="raised"
            :ripple="ripple"
            :rounded="rounded"
            :shaped="shaped"
            :tile="tile"
            :height="computedHeight"
            :width="computedWidth"
            :to="link === 1 ? to : null"
            :href="link === 2 ? href : null"
            :target="computedTarget"
          >
            <template v-if="progress" slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>
            <v-img
              v-if="vImg"
              src="https://picsum.photos/1920/1080?random"
              height="200px"
            ></v-img>
            <v-card-title>v-card-title</v-card-title>
            <v-card-subtitle>v-card-subtitile</v-card-subtitle>
            <v-card-text>v-card-text</v-card-text>
            <v-card-subtitle>v-card-subtitile</v-card-subtitle>
            <v-card-text>v-card-text</v-card-text>
            <v-card-text>v-card-text</v-card-text>
            <v-card-actions>
              <v-btn>v-card-actions</v-btn>
              <v-btn @click="reserve"> loading action </v-btn>
            </v-card-actions>
          </v-card>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="progress" label="progress slot"></v-checkbox>
            <v-checkbox v-model="vImg" label="use v-img"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-card"
            :attr="computedAttr"
            :nest="progress"
            :slots="true"
            slotName="progress"
            tagNest="v-progress-linear"
            :attrNest="[
              { name: 'color', value: 'deep-purple' },
              { name: 'height', value: '10' },
              { name: 'indeterminate' },
            ]"
            :nest2="vImg"
            tagNest2="v-img"
            :attrNest2="[
              { name: 'src', value: 'https://picsum.photos/1920/1080?random' },
              { name: 'height', value: '200px' },
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
        <Grid switch="10">
          <template v-slot:switch1>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="flat" label="flat" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="hover" label="hover" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="img" label="img" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch
              v-model="outlined"
              label="outlined"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="raised" label="raised" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch v-model="ripple" label="ripple" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch v-model="shaped" label="shaped" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch10>
            <v-switch v-model="tile" label="tile" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="loading"
              v-model="loading"
              :max="loadings.length - 1"
              :tick-labels="loadings"
            ></v-slider>
            <v-slider
              label="loader-height"
              v-model="loaderHeight"
              max="10"
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
        <v-slider
          label="elevation"
          v-model="elevation"
          max="25"
          thumb-label
        ></v-slider>
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
          :disabled="link === 0"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Cards',
  data() {
    return {
      attr: [],
      dark: false,
      light: false,
      color: 0,
      colors: ['', 'primary', 'orange'],
      disabled: false,
      elevation: 25,
      flat: false,
      hover: false,
      img: false,
      imgs: 'https://picsum.photos/1920/1080?random',
      loaderHeight: 4,
      loading: 0,
      loadings: ['', true, 'success', 'orange'],
      outlined: false,
      raised: false,
      ripple: undefined,
      rounded: false,
      shaped: false,
      tile: false,
      height: 0,
      heightList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
      width: 0,
      widthList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
      progress: false,
      vImg: false,
      link: 0,
      links: ['', 'to', 'href'],
      target: 0,
      targets: ['_blank', '_self', '_parent', '_top'],
      to: './#cards-link',
      href: './#/components/#cards-link',
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
    },
    computedImg() {
      let img = this.imgs;
      this.img ? null : (img = '');
      return img;
    },
    computedHeight() {
      let height = this.heightList[this.height];
      return height;
    },
    computedWidth() {
      let width = this.widthList[this.width];
      return width;
    },
    computedElevation() {
      let elevation = this.elevation;
      this.raised ? (elevation = 8) : null;
      return elevation;
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
    computedLoading() {
      let loading = this.loadings[this.loading];
      loading === '' ? (loading = false) : null;
      return loading;
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
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.flat, 'flat');
      this.checkBoolean(attr, this.hover, 'hover');
      this.checkValue(attr, this.computedImg, 'img', '');
      this.checkBoolean(attr, this.outlined, 'outlined');
      this.checkBoolean(attr, this.raised, 'raised');
      this.checkBoolean(attr, this.ripple, 'ripple');
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.shaped, 'shaped');
      this.checkBoolean(attr, this.tile, 'tile');
      this.computedLoading === true
        ? this.checkBoolean(attr, this.computedLoading, 'loading')
        : this.checkValue(attr, this.computedLoading, 'loading', false);
      this.checkValue(attr, this.loaderHeight, 'loader-height', 4);
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.elevation, 'elevation', 25);
      this.checkValue(attr, this.computedHeight, 'height', '');
      this.checkValue(attr, this.computedWidth, 'width', '');
      if (this.link === 1) {
        this.checkValue(attr, this.to, 'to', '');
      } else if (this.link === 2) {
        this.checkValue(attr, this.href, 'href', '');
        this.checkValue(attr, this.computedTarget, 'target', '');
      }
      return attr;
    },
    reserve() {
      this.loading = true;
      this.disabled = true;
      setTimeout(() => ((this.loading = false), (this.disabled = false)), 2000);
    },
  },
};
</script>
