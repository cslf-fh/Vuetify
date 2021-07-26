<template>
  <v-card id="dialogs" flat class="background text-center">
    <v-card-title class="text-h4">Dialogs</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      ダイアログを表示するのに使用する。
      <code class="text-subtitle-1">value</code>
      プロパティで表示を制御する。
      <br />
      <code class="text-subtitle-1">eager</code>
      プロパティはマウント時に強制レンダリングさせる。
      <br />
      <code class="text-subtitle-1">open-on-hover</code>
      プロパティを使用する場合は
      <code class="text-subtitle-1">hide-overlay</code>
      プロパティを設定する。
      <br />
      <code class="text-subtitle-1">close-delayとopen-delay</code>
      プロパティは
      <code class="text-subtitle-1">open-on-hover</code>
      プロパティを設定時に適用される。
      <br />
      <code class="text-subtitle-1">activator</code>
      スロットがある。
      <br />
      <code class="text-subtitle-1">click:outside</code>
      イベントがある。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-dialog
            v-model="value"
            :dark="dark"
            :light="light"
            :close-delay="closeDelay"
            :disabled="disabled"
            :eager="eager"
            :fullscreen="fullscreen"
            :hide-overlay="hideOverlay"
            :no-click-animation="noClickAnimation"
            :open-delay="openDelay"
            :open-on-hover="openOnHover"
            :origin="computedOrigin"
            :overlay-color="computedOverlayColor"
            :overlay-opacity="overlayOpacity"
            :persistent="persistent"
            :scrollable="scrollable"
            :transition="computedTransition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on"> Click Me </v-btn>
            </template>
            <v-card>
              <v-card-title class="text-h5">v-dialog</v-card-title>
              <v-card-text v-if="scroll">
                <v-list v-for="i in 3" :key="i">
                  <v-list-item
                    v-for="tile in tiles"
                    :key="tile.title"
                    @click="value = false"
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
              <v-card-text v-else>{{ cardText }}</v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="value = false"> close </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="scroll" label="test scrollable"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-dialog"
            :attr="computedAttr"
            :nest="true"
            :slots="true"
            slotName="activator"
            slotProps="on, attrs"
            tagNest="v-btn"
            :attrNest="[
              { name: 'v-bind', value: 'attrs' },
              { name: 'v-on', value: 'on' },
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
        <Grid switch="8">
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
            <v-switch
              v-model="noClickAnimation"
              label="no-click-animation"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch
              v-model="openOnHover"
              label="open-on-hover"
              :disabled="!hideOverlay"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="persistent"
              label="persistent"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch8>
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
              max="5000"
              step="500"
              thumb-label
            ></v-slider>
            <v-slider
              label="open-delay"
              v-model="openDelay"
              max="5000"
              step="500"
              thumb-label
            ></v-slider>
            <v-slider
              label="origin"
              v-model="origin"
              :max="origins.length - 1"
              :tick-labels="origins"
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
              step="0.1"
              thumb-label
            ></v-slider>
            <v-slider
              label="transition"
              v-model="transition"
              :max="transitions.length - 1"
              :tick-labels="transitions"
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Dialogs',
  data() {
    return {
      attr: [],
      cardTitle: 'Lorem ipsum',
      cardText:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      dark: false,
      light: false,
      closeDelay: 0,
      disabled: false,
      eager: false,
      fullscreen: false,
      hideOverlay: false,
      noClickAnimation: false,
      openDelay: 0,
      openOnHover: false,
      origin: 0,
      origins: ['', 'top left', '50px 50px', '100% 100%'],
      overlayColor: 0,
      overlayColors: [undefined, 'primary', 'orange'],
      overlayOpacity: 0.4,
      persistent: false,
      scrollable: false,
      transition: 0,
      transitions: ['', 'fab-transition'],
      value: undefined,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
      scroll: false,
    };
  },
  computed: {
    computedOrigin() {
      let value = this.origins[this.origin];
      value ? null : (value = 'center center');
      return value;
    },
    computedOverlayColor() {
      let value = this.overlayColors[this.overlayColor];
      return value;
    },
    computedTransition() {
      let value = this.transitions[this.transition];
      value ? null : (value = 'dialog-transition');
      return value;
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
      this.checkBoolean(attr, this.eager, 'eager');
      this.checkBoolean(attr, this.fullscreen, 'fullscreen');
      this.checkBoolean(attr, this.hideOverlay, 'hide-overlay');
      this.checkBoolean(attr, this.noClickAnimation, 'no-clock-animation');
      this.checkBoolean(attr, this.openOnHover, 'open-on-hover');
      this.checkBoolean(attr, this.persistent, 'presistent');
      this.checkBoolean(attr, this.scrollable, 'scrollable');
      this.checkValue(attr, this.closeDelay, 'close-delay', 0);
      this.checkValue(attr, this.openDelay, 'open-delay', 0);
      this.checkValue(attr, this.computedOrigin, 'origin', 'center center');
      this.checkValue(
        attr,
        this.computedOverlayColor,
        'overlay-color',
        undefined
      );
      this.checkValue(attr, this.overlayOpacity, 'overlay-opacity', 0.4);
      this.checkValue(
        attr,
        this.computedTransition,
        'transition',
        'dialog-transition'
      );
      return attr;
    },
  },
};
</script>
