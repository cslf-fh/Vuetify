<template>
  <v-card id="badges" flat class="background text-center">
    <v-card-title class="text-h4">Badges</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">v-avatarやv-icon</code>
      を強調したり、通知等を表示したりするときに使用する。
      <br />
      <code class="text-subtitle-1">badge</code>
      スロットがある。真ん中は
      <code class="text-subtitle-1">badge</code>
      スロットを、右は
      <code class="text-subtitle-1">v-hover</code>
      を使用。
      <br />
      hover時のトランジションは
      <a href="http://localhost:8081/#/styles/#transitions" target="_blank">
        こちら
        <v-icon color="primary" small>mdi-open-in-new</v-icon>
      </a>
      を参照。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <div class="d-flex justify-space-around">
          <v-badge
            :bottom="bottom"
            :left="left"
            :avatar="avatar"
            :bordered="bordered"
            :content="content"
            :dot="dot"
            :icon="computedIcon"
            :inline="inline"
            :offsetX="offsetX"
            :offsetY="offsetY"
            :overlap="overlap"
            :tile="tile"
          >
            <v-icon large> mdi-vuetify </v-icon>
          </v-badge>
          <v-badge
            :bottom="bottom"
            :left="left"
            :avatar="avatar"
            :bordered="bordered"
            :content="content"
            :dot="dot"
            :inline="inline"
            :offsetX="offsetX"
            :offsetY="offsetY"
            :overlap="overlap"
            :tile="tile"
          >
            <template v-slot:badge>
              <v-avatar>
                <v-img
                  src="https://cdn.vuetifyjs.com/images/logos/v.png"
                ></v-img>
              </v-avatar>
            </template>
            <v-avatar size="40">
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-avatar>
          </v-badge>
          <v-badge
            :value="hover"
            :bottom="bottom"
            :left="left"
            :avatar="avatar"
            :bordered="bordered"
            :content="content"
            :dot="dot"
            :icon="computedIcon"
            :inline="inline"
            :offsetX="offsetX"
            :offsetY="offsetY"
            :overlap="overlap"
            :tile="tile"
          >
            <v-hover v-model="hover">
              <v-avatar>
                <span>Hover me</span>
              </v-avatar>
            </v-hover>
          </v-badge>
        </div>
        <div class="py-3"></div>
        <div class="d-flex justify-space-around">
          <v-btn @click="content++"> increase content </v-btn>
          <v-btn @click="content = 0"> reset content </v-btn>
        </div>
        <div class="py-3"></div>
        <Code class="mx-3 mb-3" tag="v-badge" :attr="computedAttr"></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="bottom" label="bottom" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="left" label="left" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="6">
          <template v-slot:switch1>
            <v-switch v-model="avatar" label="avatar" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="bordered"
              label="bordered"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="dot" label="dot" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="inline" label="inline" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="overlap" label="overlap" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch v-model="tile" label="tile" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="content"
              v-model="content"
              max="100"
              min="0"
              thumb-label
            ></v-slider>
            <v-slider
              label="icon"
              v-model="icon"
              :max="icons.length - 1"
              :tick-labels="icons"
            ></v-slider>
            <v-slider
              label="offset-x"
              v-model="offsetX"
              max="30"
              min="-30"
              thumb-label
            ></v-slider>
            <v-slider
              label="offset-y"
              v-model="offsetY"
              max="30"
              min="-30"
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
  name: 'Badges',
  data() {
    return {
      attr: [],
      hover: false,
      bottom: false,
      left: false,
      avatar: true,
      bordered: false,
      content: 0,
      dot: false,
      icon: 0,
      icons: ['', 'lock', 'vuetify'],
      inline: false,
      offsetX: 0,
      offsetY: 0,
      overlap: false,
      tile: false,
    };
  },
  computed: {
    computedIcon() {
      let icon = 'mdi';
      const icons = this.icons[this.icon];
      icons === '' ? (icon = '') : (icon += `-${icons}`);
      return icon;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.bottom, 'bottom');
      this.checkBoolean(attr, this.left, 'left');
      this.checkBoolean(attr, this.avatar, 'avatar');
      this.checkBoolean(attr, this.bordered, 'bordered');
      this.checkBoolean(attr, this.dot, 'dot');
      this.checkBoolean(attr, this.inline, 'inline');
      this.checkBoolean(attr, this.overlap, 'overlap');
      this.checkBoolean(attr, this.tile, 'tile');
      this.checkValue(attr, this.content, 'content', 0);
      this.checkValue(attr, this.computedIcon, 'icon', '');
      this.checkValue(attr, this.offsetX, 'offset-x', 0);
      this.checkValue(attr, this.offsetY, 'offset-y', 0);
      return attr;
    },
  },
};
</script>
