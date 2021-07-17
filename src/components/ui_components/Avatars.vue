<template>
  <v-card id="avatars" flat class="background text-center">
    <v-card-title class="text-h4">Avatars</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      プロフィール画像等を表示するのに使用する。
      <br />
      <code class="text-subtitle-1">v-avatar</code>
      コンポーネント内には、
      <code class="text-subtitle-1">v-icon, v-img</code>
      やテキストを追加する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <div class="d-flex justify-space-around">
            <v-avatar
              class="white--text"
              :color="computedColor"
              :size="size"
              :rounded="rounded"
              :tile="tile"
              :width="computedWidth"
              ><v-icon dark> mdi-account-circle </v-icon>
            </v-avatar>
            <v-avatar
              class="white--text"
              :color="computedColor"
              :size="size"
              :rounded="rounded"
              :tile="tile"
              :width="computedWidth"
              ><img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              />
            </v-avatar>
            <v-avatar
              class="white--text"
              :color="computedColor"
              :size="size"
              :rounded="rounded"
              :tile="tile"
              :width="computedWidth"
              ><span>VJ</span>
            </v-avatar>
          </div>
          <div class="py-3"></div>
          <Code tag="v-avatar" :attr="computedAttr"></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="size"
          v-model="size"
          max="128"
          min="25"
          thumb-label
        ></v-slider>
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="rounded" label="rounded" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
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
  name: 'Avatars',
  data() {
    return {
      attr: [],
      size: 48,
      rounded: false,
      tile: false,
      color: 0,
      colors: ['primary', 'accent', 'warning', 'teal', 'gray'],
      width: 0,
      widthList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
    };
  },
  computed: {
    computedColor() {
      let color = this.colors[this.color];
      return color;
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
      this.checkValue(attr, this.size, 'size', 48);
      this.checkBoolean(attr, this.rounded, 'rounded');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.computedWidth, 'width', '');
      return attr;
    },
  },
};
</script>
