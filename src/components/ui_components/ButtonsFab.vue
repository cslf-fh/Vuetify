<template>
  <v-card id="buttons-fab" flat class="background">
    <v-card-title class="text-h4">Buttons: Floating Action Button</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">v-btn</code>
      コンポーネントを使ってFAB(フローティングアクションボタン)を作れる。下は
      <code class="text-subtitle-1">v-speed-dial</code>
      コンポーネントを使用した例。
      <br />
      FABを初めて表示する時はアニメーションさせて表示する。
      <br />
      ページ内にFABはなるべく1つにし、その画面でもっとも一般的な動作を促すために使う。
      <br />
      <code class="text-subtitle-1">activator</code>
      スロットがある。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-card flat height="200">
            <v-fab-transition>
              <v-speed-dial
                v-if="!hide"
                v-model="fab"
                :absolute="absolute"
                :fixed="fixed"
                :top="top"
                :bottom="bottom"
                :right="right"
                :left="left"
                :direction="computedDirection"
                :open-on-hover="openOnHover"
                :transition="computedTransition"
              >
                <template v-slot:activator>
                  <v-btn v-model="fab" fab color="primary">
                    <v-icon> mdi-account-circle </v-icon>
                  </v-btn>
                </template>
                <v-btn fab dark small color="indigo">
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
                <v-btn fab dark small color="red">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-speed-dial>
            </v-fab-transition>
          </v-card>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="hide" label="hide button"></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-speed-dial"
            :attr="computedAttr"
            :nest="true"
            :slots="true"
            slotName="activator"
            tagNest="v-btn"
            :attrNest="[{ name: 'fab' }]"
            :nest2="true"
            tagNest2="v-btn"
            :attrNest2="[{ name: 'fab' }, { name: 'small' }]"
          ></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
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
        </Grid>
        <Grid switch="4">
          <template v-slot:switch1>
            <v-switch v-model="top" label="top" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="bottom" label="bottom" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch v-model="left" label="left" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch v-model="right" label="right" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="1">
          <template v-slot:switch1>
            <v-switch
              v-model="openOnHover"
              label="open-on-hover"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="direction"
              v-model="direction"
              :max="directions.length - 1"
              :tick-labels="directions"
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
  name: 'ButtonsFab',
  data() {
    return {
      attr: [],
      fab: false,
      top: false,
      bottom: true,
      left: false,
      right: true,
      openOnHover: false,
      absolute: true,
      fixed: false,
      direction: 0,
      directions: ['top', 'right', 'bottom', 'left'],
      transition: 0,
      transitions: ['scale', 'fade', 'slide-x', 'slide-y'],
      hide: false,
    };
  },
  computed: {
    computedDirection() {
      let direction = this.directions[this.direction];
      return direction;
    },
    computedTransition() {
      let transition = 'transition';
      let transitions = this.transitions[this.transition];
      transitions += `-${transition}`;
      return transitions;
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
      this.checkBoolean(attr, this.openOnHover, 'open-on-hover');
      this.checkValue(attr, this.computedDirection, 'direction', 'top');
      this.checkValue(
        attr,
        this.computedTransition,
        'transition',
        'scale-transition'
      );
      return attr;
    },
  },
};
</script>
