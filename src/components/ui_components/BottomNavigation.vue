<template>
  <v-card id="" flat class="background text-center">
    <v-card-title class="text-h4">Bottom navigation</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      スマホやタブレットのフッター的なものを作るときに使用する。
      <br />
      <code class="text-subtitle-1">horizontalとshift</code>
      プロパティを同時に設定するとレイアウトが崩れるので、どっちか1つにする。
      <br />
      表示、非表示を切り替えたいときは
      <code class="text-subtitle-1">input-value</code>
      プロパティをバインドし、トリガーを仕込む。
      <br />
      選択しているボタンによって背景色を変えたい場合は
      <code class="text-subtitle-1">v-model</code>
      を使用すると、選択したボタンによってvalueがバインドされるので、それを使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-card class="overflow-hidden mx-3" height="200">
          <v-bottom-navigation
            v-model="value"
            :absolute="absolute"
            :app="app"
            :background-color="computedBackgroundColor"
            :color="computedColor"
            :fixed="fixed"
            :grow="grow"
            :hide-on-scroll="hideOnScroll"
            :horizontal="horizontal"
            :input-value="inputValue"
            :mandatory="mandatory"
            :scroll-threshold="scrollThreshold"
            :shift="shift"
            scroll-target="#hide-on-scroll"
          >
            <v-btn text>
              <span>Recents</span>
              <v-icon>mdi-history</v-icon>
            </v-btn>
            <v-btn text>
              <span>Favorites</span>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn text>
              <span>Nearby</span>
              <v-icon>mdi-map-marker</v-icon>
            </v-btn>
          </v-bottom-navigation>
          <v-responsive
            id="hide-on-scroll"
            class="overflow-y-auto"
            max-height="600"
          >
            <v-responsive height="1500">
              <v-btn
                class="my-4"
                color="deep-purple"
                outlined
                @click="(inputValue = !inputValue), (active = 'active')"
              >
                Toggle Navigation
              </v-btn>
            </v-responsive>
          </v-responsive>
        </v-card>
        <div class="py-3"></div>
        <Code
          class="mx-3"
          tag="v-bottom-navigation"
          :attr="computedAttr"
        ></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="3">
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
        </Grid>
        <Grid switch="1">
          <template v-slot:switch1>
            <v-switch
              v-model="hideOnScroll"
              label="hide-on-scroll"
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
            <v-switch v-model="grow" label="grow" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="horizontal"
              label="horizontal"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="mandatory"
              label="mandatory"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="shift" label="shift" class="ma-0"></v-switch>
          </template>
        </Grid>
        <v-switch
          v-model="shiftBackground"
          label="shift background-color"
          class="ma-0"
        ></v-switch>
        <v-slider
          label="background-color"
          v-model="backgroundColor"
          :max="backgroundColors.length - 1"
          :tick-labels="backgroundColors"
        ></v-slider>
        <v-slider
          label="color"
          v-model="color"
          :max="colors.length - 1"
          :tick-labels="colors"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'BottomNavigation',
  data() {
    return {
      attr: [],
      absolute: true,
      app: false,
      backgroundColor: 0,
      backgroundColors: ['', 'primary', 'teal', 'red'],
      color: 0,
      colors: ['', 'primary', 'orange'],
      fixed: false,
      grow: false,
      hideOnScroll: false,
      horizontal: false,
      inputValue: true,
      active: null,
      mandatory: false,
      scrollThreshold: 0,
      shift: false,
      shiftBackground: false,
      value: 0,
    };
  },
  computed: {
    computedBackgroundColor() {
      let backgroundColor = '';
      let bg = this.backgroundColors[this.backgroundColor];
      let value = this.backgroundColors[this.value + 1];
      this.shiftBackground === true
        ? (backgroundColor = value)
        : (backgroundColor = bg);
      return backgroundColor;
    },
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
      let shiftBackground = this.shiftBackground;
      shiftBackground === true
        ? attr.push({ name: 'v-model', value: 'value' })
        : null;
      this.checkBoolean(attr, this.app, 'app');
      this.checkBoolean(attr, this.fixed, 'fixed');
      this.checkBoolean(attr, this.absolute, 'absolute');
      this.checkBoolean(attr, this.hideOnScroll, 'hide-on-scroll');
      this.checkValue(attr, this.scrollThreshold, 'scroll-threshold', 0);
      this.checkBoolean(attr, this.grow, 'grow');
      this.checkBoolean(attr, this.horizontal, 'horizontal');
      this.checkBoolean(attr, this.mandatory, 'mandatory');
      this.checkBoolean(attr, this.shift, 'shift');
      this.checkValuePrefix(attr, this.active, ':', 'input-value', null);
      this.checkValue(
        attr,
        this.computedBackgroundColor,
        'background-color',
        ''
      );
      this.checkValue(attr, this.computedColor, 'color', '');
      return attr;
    },
  },
};
</script>
