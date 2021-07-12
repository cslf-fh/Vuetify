<template>
  <v-card id="" flat class="background text-center">
    <v-card-title class="text-h4">Bottom sheets</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      画面の下からスライドして表示されるダイアログを作るときに使用する。
      <br />
      <code class="text-subtitle-1">v-bottom-navigation</code>
      はボタンやアイコン、テキストを含むことができるのに対し、
      <code class="text-subtitle-1">v-bottom-sheet</code>
      は何でも含むことができる。
      <br />
      <code class="text-subtitle-1">eager</code>
      プロパティはマウント時に強制レンダリングさせる。
      <br />
      <code class="text-subtitle-1">open-on-hover</code>
      プロパティを使用する際は
      <code class="text-subtitle-1">hide-overlay</code>
      プロパティを設定しないと、意図した挙動にならない。
      <br />
      <code class="text-subtitle-1">close-delayとopen-delay</code>
      プロパティは
      <code class="text-subtitle-1">open-on-hover</code>
      プロパティを使用する際に必要であれば設定する。
      <br />
      <code class="text-subtitle-1">activator</code>
      スロットがある。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-bottom-sheet
          v-model="sheet"
          :close-delay="closeDelay"
          :disabled="disabled"
          :eager="eager"
          :fullscreen="fullscreen"
          :hide-overlay="hideOverlay"
          :inset="inset"
          :no-click-animation="noClickAnimation"
          :open-delay="openDelay"
          :open-on-hover="openOnHover"
          :overlay-color="computedOverlayColor"
          :overlay-opacity="overlayOpacity"
          :persistent="persistent"
          :scrollable="scrollable"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="my-4"
              color="deep-purple"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Open Playground
            </v-btn>
          </template>
          <v-card v-if="!scrollable">
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="sheet = false">
                Close
              </v-btn>
            </v-card-actions>
            <v-card-title>This is a bottom sheet</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 150px">
              <v-list v-for="i in 3" :key="i">
                <v-list-item
                  v-for="tile in tiles"
                  :key="tile.title"
                  @click="sheet = false"
                >
                  <v-list-item-avatar>
                    <v-avatar size="32px" tile>
                      <img
                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                        :alt="tile.title"
                      />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title>This is a bottom sheet</v-card-title>
          </v-card>
          <v-card v-else>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="sheet = false">
                Close
              </v-btn>
            </v-card-actions>
            <v-card-title>This is a bottom sheet</v-card-title>
            <v-divider></v-divider>
            <v-card-text style="height: 150px">
              <v-list v-for="i in 3" :key="i">
                <v-list-item
                  v-for="tile in tiles"
                  :key="tile.title"
                  @click="sheet = false"
                >
                  <v-list-item-avatar>
                    <v-avatar size="32px" tile>
                      <img
                        :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`"
                        :alt="tile.title"
                      />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>{{ tile.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-title>This is a bottom sheet</v-card-title>
          </v-card>
        </v-bottom-sheet>
        <div class="py-3"></div>
        <Code
          class="mx-3 mb-3"
          tag="v-bottom-sheet"
          :attr="computedAttr"
        ></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="9">
          <template v-slot:switch1>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="eager" label="eager" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="fullscreen"
              label="fullscreen"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="hideOverlay"
              label="hide-overlay"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch v-model="inset" label="inset" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch
              v-model="noClickAnimation"
              label="no-click-animation"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="openOnHover"
              label="open-on-hover"
              :disabled="!hideOverlay"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch8>
            <v-switch
              v-model="persistent"
              label="persistent"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch9>
            <v-switch
              v-model="scrollable"
              label="scrollable"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="close-delay"
              v-model="closeDelay"
              max="3000"
              min="0"
              step="100"
              thumb-label
            ></v-slider>
            <v-slider
              label="open-delay"
              v-model="openDelay"
              max="3000"
              min="0"
              step="100"
              thumb-label
            ></v-slider>
            <v-slider
              label="overlay-color"
              v-model="overlayColor"
              :max="overlayColors.length - 1"
              :tick-labels="overlayColors"
            ></v-slider>
            <v-slider
              label="overlay-opacity"
              v-model="overlayOpacity"
              max="1"
              min="0"
              step="0.01"
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
  name: 'BottomSheets',
  data() {
    return {
      attr: [],
      sheet: false,
      closeDelay: 0,
      disabled: false,
      eager: false,
      fullscreen: false,
      hideOverlay: false,
      inset: false,
      noClickAnimation: false,
      openDelay: 0,
      openOnHover: false,
      overlayColor: 0,
      overlayColors: ['', 'primary', 'teal'],
      overlayOpacity: 0.46,
      persistent: false,
      scrollable: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    };
  },
  computed: {
    computedOverlayColor() {
      let overlayColor = this.overlayColors[this.overlayColor];
      overlayColor === '' ? (overlayColor = '#212121') : null;
      return overlayColor;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.eager, 'eager');
      this.checkBoolean(attr, this.fullscreen, 'fullscreen');
      this.checkBoolean(attr, this.hideOverlay, 'hide-overlay');
      this.checkBoolean(attr, this.inset, 'inset');
      this.checkBoolean(attr, this.noClickAnimation, 'no-click-animation');
      this.checkBoolean(attr, this.openOnHover, 'open-on-hover');
      this.checkBoolean(attr, this.persistent, 'presistent');
      this.checkBoolean(attr, this.scrollable, 'scrollable');
      this.checkValue(attr, this.closeDelay, 'close-delay', 0);
      this.checkValue(attr, this.openDelay, 'open-delay', 0);
      this.checkValue(
        attr,
        this.computedOverlayColor,
        'overlay-color',
        '#212121'
      );
      this.checkValue(attr, this.overlayOpacity, 'overlay-opacity', 0.46);
      return attr;
    },
  },
};
</script>

<style lang="scss" scoped>
.test {
  overflow-y: scroll;
}
</style>
