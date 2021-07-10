<template>
  <v-card id="flex" flat class="background text-center">
    <v-card-title class="text-h4">Flex</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">display</code>
      ユーティリティを使用し、任意の要素をフレックスボックスコンテナに変換して、フレックスアイテムに変換できる。
      <br />
      <code class="text-subtitle-1"
        >flex, direction, justify, align, flex wrapとalign content</code
      >
      は親要素に、
      <code class="text-subtitle-1">align-selfとauto margins</code>
      は子要素にあてる。
      <br />
      <code class="text-subtitle-1">align content</code>
      を使用する場合は
      <code class="text-subtitle-1">.flex-wrap</code>
      をあてないと想定した挙動にならないので注意。
      <br />
      <code class="text-subtitle-1">breakpoint</code>
      は接頭辞の後に記述する。ex.
      <code class="text-subtitle-1">.justify-{breakpoint}-{value}</code>
      <br />
      以下のItemにチェックを入れると、
      <code class="text-subtitle-1">align-selfとauto margins</code>
      の挙動を確認できる。
      <br />
      <code class="text-subtitle-1">order, flex-growとflex-shrink</code>
      は割愛。
    </v-card-subtitle>
    <v-row no-gutter>
      <v-col cols="12" sm="8" lg="6">
        <v-card
          :class="[flex, direction, justify, align, wrap, alignContent]"
          :color="$vuetify.theme.dark ? 'grey lighten-3' : 'grey darken-1'"
          flat
          tile
          :height="
            flexAlign[modelFour] !== '' ||
            flexAlignSelf[modelFive] !== '' ||
            flexAlignContent[modelEight] !== ''
              ? 250
              : null
          "
        >
          <v-card
            v-for="n in flexItem"
            :key="n"
            :class="[
              flexItems[n - 1] && alignSelf,
              flexItems[n - 1] && margin,
              flexItems[n - 1] && 'primary',
            ]"
            outlined
            tile
            class="pa-2"
          >
            <v-checkbox
              v-model="flexItems[n - 1]"
              dense
              hide-details
              color="secondary"
              class="my-auto"
            >
              <template v-slot:label> Item {{ n }} </template>
            </v-checkbox>
          </v-card>
        </v-card>
        <div class="py-3"></div>
        <div class="d-flex justify-space-around">
          <v-btn @click="increase">increase</v-btn>
          <v-btn @click="decrease">decrease</v-btn>
        </div>
        <div class="py-3"></div>
        <span>flex</span>
        <code class="text-subtitle-1">.{{ flex }}</code>
        <br />
        <span>direction</span>
        <code class="text-subtitle-1">.{{ direction }}</code>
        <br />
        <span>justify</span>
        <code class="text-subtitle-1">.{{ justify }}</code>
        <br />
        <span>align</span>
        <code class="text-subtitle-1">.{{ align }}</code>
        <br />
        <span>align-self</span>
        <code class="text-subtitle-1">.{{ alignSelf }}</code>
        <br />
        <span>auto margins</span>
        <code class="text-subtitle-1">.{{ margin }}</code>
        <br />
        <span>flex wrap</span>
        <code class="text-subtitle-1">.{{ wrap }}</code>
        <br />
        <span>align content</span>
        <code class="text-subtitle-1">.{{ alignContent }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="flex"
          v-model="modelOne"
          :max="flexbox.length - 1"
          :tick-labels="flexbox"
        ></v-slider>
        <v-slider
          label="direction"
          v-model="modelTwo"
          :max="flexDirection.length - 1"
          :tick-labels="flexDirection"
        ></v-slider>
        <v-slider
          label="justify"
          v-model="modelThree"
          :max="flexJustify.length - 1"
          :tick-labels="flexJustify"
        ></v-slider>
        <v-slider
          label="align"
          v-model="modelFour"
          :max="flexAlign.length - 1"
          :tick-labels="flexAlign"
        ></v-slider>
        <v-slider
          label="align-self"
          v-model="modelFive"
          :max="flexAlignSelf.length - 1"
          :tick-labels="flexAlignSelf"
        ></v-slider>
        <v-slider
          label="auto margins"
          v-model="modelSix"
          :max="autoMargins.length - 1"
          :tick-labels="autoMargins"
        ></v-slider>
        <v-slider
          label="flex wrap"
          v-model="modelSeven"
          :max="flexWrap.length - 1"
          :tick-labels="flexWrap"
        ></v-slider>
        <v-slider
          label="align content"
          v-model="modelEight"
          :max="flexAlignContent.length - 1"
          :tick-labels="flexAlignContent"
          :disabled="modelSeven !== 2"
        ></v-slider>
        <v-btn @click="reset">reset</v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      flexItem: 5,
      flexItems: [],
      modelOne: 0,
      flexbox: ['flex', 'inline-flex'],
      modelTwo: 0,
      flexDirection: ['', 'row', 'row-reverse', 'column', 'column-reverse'],
      modelThree: 0,
      flexJustify: [
        '',
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
      ],
      modelFour: 0,
      flexAlign: ['', 'start', 'end', 'center', 'baseline', 'stretch'],
      modelFive: 0,
      flexAlignSelf: [
        '',
        'start',
        'end',
        'center',
        'baseline',
        'auto',
        'stand',
      ],
      modelSix: 0,
      autoMargins: ['', 'ma', 'mt', 'mr', 'mb', 'ml'],
      modelSeven: 0,
      flexWrap: ['', 'nowrap', 'wrap', 'wrap-reverse'],
      modelEight: 0,
      flexAlignContent: [
        '',
        'start',
        'end',
        'center',
        'space-between',
        'space-around',
        'stretch',
      ],
    };
  },
  created() {
    for (let i = 0; i < this.flexItem; i++) {
      this.flexItems.push(false);
    }
  },
  computed: {
    flex() {
      let flex = 'd';
      const flexbox = this.flexbox[this.modelOne];
      flex += `-${flexbox}`;
      return flex;
    },
    direction() {
      let direction = 'flex';
      const flexDirection = this.flexDirection[this.modelTwo];
      flexDirection === ''
        ? (direction = '')
        : (direction += `-${flexDirection}`);
      return direction;
    },
    justify() {
      let justify = 'justify';
      const flexJustify = this.flexJustify[this.modelThree];
      flexJustify === '' ? (justify = '') : (justify += `-${flexJustify}`);
      return justify;
    },
    align() {
      let align = 'align';
      const flexAlign = this.flexAlign[this.modelFour];
      flexAlign === '' ? (align = '') : (align += `-${flexAlign}`);
      return align;
    },
    alignSelf() {
      let alignSelf = 'align-self';
      const flexAlignSelf = this.flexAlignSelf[this.modelFive];
      flexAlignSelf === ''
        ? (alignSelf = '')
        : (alignSelf += `-${flexAlignSelf}`);
      return alignSelf;
    },
    margin() {
      let margin = '-auto';
      let autoMargins = this.autoMargins[this.modelSix];
      autoMargins === '' ? (margin = '') : (autoMargins = `${autoMargins}`);
      autoMargins += margin;
      return autoMargins;
    },
    wrap() {
      let wrap = 'flex';
      const flexWrap = this.flexWrap[this.modelSeven];
      flexWrap === '' ? (wrap = '') : (wrap += `-${flexWrap}`);
      return wrap;
    },
    alignContent() {
      let alignContent = 'align-content';
      const flexAlignContent = this.flexAlignContent[this.modelEight];
      flexAlignContent === ''
        ? (alignContent = '')
        : (alignContent += `-${flexAlignContent}`);
      return alignContent;
    },
  },
  methods: {
    reset() {
      this.modelOne =
        this.modelTwo =
        this.modelThree =
        this.modelFour =
        this.modelFive =
        this.modelSix =
        this.modelSeven =
        this.modelEight =
          0;
      this.flexItem = 5;
      this.flexItems = [];
      for (let i = 0; i < this.flexItem; i++) {
        this.flexItems.push(false);
      }
    },
    increase() {
      this.flexItem++;
      this.flexItems.push(false);
    },
    decrease() {
      this.flexItem--;
      this.flexItems.pop();
    },
  },
};
</script>
