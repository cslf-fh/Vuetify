<template>
  <v-card id="carousels" flat class="background text-center">
    <v-card-title class="text-h4">Carousels</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      カルーセルを作るのに使用する。
      <br />
      <code class="text-subtitle-1">v-model</code>
      を使用すれば、
      <code class="text-subtitle-1">value</code>
      プロパティでカルーセルを移動できる。
      <br />
      <code class="text-subtitle-1">prevとnext</code>
      スロットがある。スロット内で
      <code class="text-subtitle-1">v-btn</code>
      コンポーネントを使用する場合
      <code class="text-subtitle-1">color</code>
      プロパティか何かを設定しないと、ホバー時のアニメーションが意図したものにならない(
      <code class="text-subtitle-1">prev</code>
      スロットにはプロパティ未設定)。
      <br />
      サブコンポーネントには
      <code class="text-subtitle-1">v-carousel-item</code>
      がある。
      <code class="text-subtitle-1">disabled</code>
      プロパティはスライド送りに適用される(デリミタは適用外)。
    </v-card-subtitle>
    <v-card class="background text-left px-4" flat tile>
      <div id="carousels-link1" class="pb-4">Link 1</div>
      <div id="carousels-link2" class="pb-4">Link 2</div>
      <div id="carousels-link3" class="pb-4">Link 3</div>
      <div id="carousels-link4" class="pb-4">Link 4</div>
      <div id="carousels-link5" class="pb-4">Link 5</div>
    </v-card>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-carousel
            v-model="value"
            :continuous="continuous"
            :cycle="cycle"
            :dark="dark"
            :light="light"
            :delimiter-icon="computedDelimiterIcon"
            :hide-delimiter-background="hideDelimiterBackground"
            :hide-delimiters="hideDelimiters"
            :interval="interval"
            :mandatory="mandatory"
            :next-icon="computedNextIcon"
            :prev-icon="computedPrevIcon"
            :progress="progress"
            :progress-color="computedProgressColor"
            :reverse="reverse"
            :show-arrows="showArrows"
            :show-arrows-on-hover="showArrowsOnHover"
            :vertical="vertical"
            :vertical-delimiters="computedVerticalDelimiters"
          >
            <template v-if="prevSlot" v-slot:prev="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">Previous slide</v-btn>
            </template>
            <template v-if="nextSlot" v-slot:next="{ on, attrs }">
              <v-btn color="primary" v-bind="attrs" v-on="on">Next slide</v-btn>
            </template>
            <v-carousel-item
              v-for="(slide, i) in slides"
              :key="i"
              :disabled="disabled"
              :transition="computedTransition"
              :reverse-transition="computedReverseTransition"
              :to="link === 1 ? computedId[0] : null"
              :href="link === 2 ? computedId[1] : null"
              :target="computedTarget"
            >
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <div class="text-h2">{{ slide }} Slide</div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="prevSlot" label="prev slot"></v-checkbox>
            <v-checkbox v-model="nextSlot" label="next slot"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-caroussel"
            :attr="computedAttr"
            :nest="prevSlot"
            :slots="true"
            slotName="prev"
            slotProps="on, attrs"
            tagNest="v-btn"
            :attrNest="[
              { name: 'v-bind', value: 'attrs' },
              { name: 'v-on', value: 'on' },
            ]"
            :nest2="nextSlot"
            :slots2="true"
            slotName2="next"
            slotProps2="on, attrs"
            tagNest2="v-btn"
            :attrNest2="[
              { name: 'color', value: 'primary' },
              { name: 'v-bind', value: 'attrs' },
              { name: 'v-on', value: 'on' },
            ]"
            :nest3="true"
            tagNest3="v-carousel-item"
            :attrNest3="computedAttrNest"
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
              v-model="continuous"
              label="continuous"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="cycle" label="cycle" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="hideDelimiterBackground"
              label="hide-delimiter-background"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="hideDelimiters"
              label="hide-delimiters"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch
              v-model="mandatory"
              label="mandatory"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch
              v-model="progress"
              label="progress"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch v-model="reverse" label="reverse" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch
              v-model="showArrows"
              label="show-arrows"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch
              v-model="showArrowsOnHover"
              label="show-arrows-on-hover"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch10>
            <v-switch
              v-model="touchless"
              label="touchless"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch11>
            <v-switch
              v-model="vertical"
              label="vertical"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="delimiter-icon"
              v-model="delimiterIcon"
              :max="delimiterIcons.length - 1"
              :tick-labels="delimiterIcons"
            ></v-slider>
            <v-slider
              label="interval"
              v-model="interval"
              max="10000"
              step="500"
              thumb-label
            ></v-slider>
            <v-slider
              label="next-icon"
              v-model="nextIcon"
              :max="nextIcons.length - 1"
              :tick-labels="nextIcons"
            ></v-slider>
            <v-slider
              label="prev-icon"
              v-model="prevIcon"
              :max="prevIcons.length - 1"
              :tick-labels="prevIcons"
            ></v-slider>
            <v-slider
              label="progress-color"
              v-model="progressColor"
              :max="progressColors.length - 1"
              :tick-labels="progressColors"
            ></v-slider>
            <v-slider
              label="value"
              v-model="value"
              :max="slides.length - 1"
              :tick-labels="slides"
            ></v-slider>
            <v-slider
              label="vertical-delimiters"
              v-model="verticalDelimiters"
              :max="verticalDelimitersList.length - 1"
              :tick-labels="verticalDelimitersList"
            ></v-slider>
          </template>
        </Grid>
        <div class="text-left py-3">props for sub component</div>
        <Grid switch="1">
          <template v-slot:switch1>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="transition"
              v-model="transition"
              :max="transitions.length - 1"
              :tick-labels="transitions"
            ></v-slider>
            <v-slider
              label="reverse-transition"
              v-model="reverseTransition"
              :max="reverseTransitions.length - 1"
              :tick-labels="reverseTransitions"
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
  name: 'Carousels',
  data() {
    return {
      attr: [],
      value: 0,
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      continuous: true,
      cycle: false,
      dark: false,
      light: false,
      delimiterIcon: 0,
      delimiterIcons: ['', 'minus'],
      hideDelimiterBackground: false,
      hideDelimiters: false,
      interval: 6000,
      mandatory: true,
      nextIcon: 0,
      nextIcons: ['', 'arrow-right'],
      prevIcon: 0,
      prevIcons: ['', 'arrow-left'],
      progress: false,
      progressColor: 0,
      progressColors: [undefined, 'success', 'orange'],
      reverse: false,
      showArrows: true,
      showArrowsOnHover: false,
      touchless: false,
      vertical: false,
      verticalDelimiters: 0,
      verticalDelimitersList: [undefined, 'true'],
      prevSlot: false,
      nextSlot: false,
      link: 0,
      links: ['', 'to', 'href'],
      target: 0,
      targets: ['_blank', '_self', '_parent', '_top'],
      to: './#carousels-link',
      href: './#/components/#carousels-link',
      transition: 0,
      transitions: ['', 'fade', 'scale'],
      reverseTransition: 0,
      reverseTransitions: ['', 'fade', 'scale'],
      disabled: false,
      attrNest: [],
    };
  },
  computed: {
    computedDelimiterIcon() {
      let value = 'mdi';
      let delimiterIcon = this.delimiterIcons[this.delimiterIcon];
      value += `-${delimiterIcon}`;
      value === 'mdi-' ? (value = '$delimiter') : null;
      return value;
    },
    computedNextIcon() {
      let value = 'mdi';
      let nextIcon = this.nextIcons[this.nextIcon];
      value += `-${nextIcon}`;
      value === 'mdi-' ? (value = '$next') : null;
      return value;
    },
    computedPrevIcon() {
      let value = 'mdi';
      let prevIcon = this.prevIcons[this.prevIcon];
      value += `-${prevIcon}`;
      value === 'mdi-' ? (value = '$prev') : null;
      return value;
    },
    computedProgressColor() {
      let progressColor = this.progressColors[this.progressColor];
      return progressColor;
    },
    computedVerticalDelimiters() {
      let verticalDelimiters =
        this.verticalDelimitersList[this.verticalDelimiters];
      return verticalDelimiters;
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
    computedId() {
      let value = this.value + 1;
      let to = this.to;
      let href = this.href;
      to += value;
      href += value;
      return [to, href];
    },
    computedTransition() {
      let transition = 'transition';
      let transitions = this.transitions[this.transition];
      transitions === ''
        ? (transitions = undefined)
        : (transitions += `-${transition}`);
      return transitions;
    },
    computedReverseTransition() {
      let transition = 'transition';
      let transitions = this.reverseTransitions[this.reverseTransition];
      transitions === ''
        ? (transitions = undefined)
        : (transitions += `-${transition}`);
      return transitions;
    },
    computedAttr() {
      return this.attrArray();
    },
    computedAttrNest() {
      return this.attrArrayNest();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkValueAsText(attr, true, 'value', 'v-model', false);
      this.checkBoolean(attr, this.dark, 'dark');
      this.checkBoolean(attr, this.light, 'light');
      this.checkValuePrefix(attr, this.continuous, ':', 'continuous', true);
      this.checkBoolean(attr, this.cycle, 'cycle');
      this.checkBoolean(
        attr,
        this.hideDelimiterBackground,
        'hide-delimiter-background'
      );
      this.checkBoolean(attr, this.hideDelimiters, 'hide-delimiters');
      this.checkValuePrefix(attr, this.mandatory, ':', 'mandatory', true);
      this.checkBoolean(attr, this.progress, 'progress');
      this.checkBoolean(attr, this.reverse, 'reverse');
      this.checkValuePrefix(attr, this.showArrows, ':', 'showArrows', true);
      this.checkBoolean(attr, this.showArrowsOnHover, 'show-arrows-on-hover');
      this.checkBoolean(attr, this.touchless, 'touchless');
      this.checkBoolean(attr, this.vertical, 'vertical');
      this.checkValue(
        attr,
        this.computedDelimiterIcon,
        'delimiter-icon',
        '$delimiter'
      );
      this.checkValue(attr, this.interval, 'interval', 6000);
      this.checkValue(attr, this.computedNextIcon, 'next-icon', '$next');
      this.checkValue(attr, this.computedPrevIcon, 'prev-icon', '$prev');
      this.checkValue(
        attr,
        this.computedProgressColor,
        'progress-color',
        undefined
      );
      let check = this.verticalDelimiters;
      check === 1 ? (check = true) : null;
      this.checkBoolean(attr, check, 'vertical-delimiters');
      return attr;
    },
    attrArrayNest() {
      this.attrNest = [];
      let attr = this.attrNest;
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkValue(attr, this.computedTransition, 'transition', undefined);
      this.checkValue(
        attr,
        this.computedReverseTransition,
        'reverse-transition',
        undefined
      );
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
