<template>
  <v-card id="transitions" flat class="background text-center">
    <v-card-title class="text-h4">Transitions</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      transitionプロパティを使うと、簡単にトランジションを加えられる。
      <br />
      <code class="text-subtitle-1">expand-transition</code>
      以外はタグとクラスの両方で使用できる。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-row justify="center">
          <v-col class="shrink">
            <v-btn class="ma-2" color="primary" @click="expand = !expand">
              {{ computedTag }}
            </v-btn>
            <v-expand-transition>
              <v-card
                v-if="expand && tag === 0"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-expand-transition>
            <v-expand-x-transition>
              <v-card
                v-if="expand && tag === 1"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-expand-x-transition>
            <v-fab-transition>
              <v-card
                v-if="expand && tag === 2"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-fab-transition>
            <v-fade-transition>
              <v-card
                v-if="expand && tag === 3"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-fade-transition>
            <v-scale-transition>
              <v-card
                v-if="expand && tag === 4"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-scale-transition>
            <v-scroll-x-transition>
              <v-card
                v-if="expand && tag === 5"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-scroll-x-transition>
            <v-scroll-x-reverse-transition>
              <v-card
                v-if="expand && tag === 6"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-scroll-x-reverse-transition>
            <v-scroll-y-transition>
              <v-card
                v-if="expand && tag === 7"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-scroll-y-transition>
            <v-scroll-y-reverse-transition>
              <v-card
                v-if="expand && tag === 8"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-scroll-y-reverse-transition>
            <v-slide-x-transition>
              <v-card
                v-if="expand && tag === 9"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-slide-x-transition>
            <v-slide-x-reverse-transition>
              <v-card
                v-if="expand && tag === 10"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-slide-x-reverse-transition>
            <v-slide-y-transition>
              <v-card
                v-if="expand && tag === 11"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-slide-y-transition>
            <v-slide-y-reverse-transition>
              <v-card
                v-if="expand && tag === 12"
                height="100"
                width="100"
                class="mx-auto success"
              ></v-card>
            </v-slide-y-reverse-transition>
          </v-col>
        </v-row>
        <div class="py-3"></div>
        <code class="text-subtitle-1"
          >&lt;v-{{ computedTag }}&gt;&lt;/v-{{ computedTag }}&gt;</code
        >
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="tag"
          v-model="tag"
          :max="tagLists.length - 1"
          :tick-labels="tagLists"
        ></v-slider>
      </v-col>
    </v-row>
    <div class="py-3"></div>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-menu :transition="computedTransition">
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark color="primary" v-bind="attrs" v-on="on">
              {{ computedTransition }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="n in 5" :key="n">
              <v-list-item-title v-text="'Item ' + n"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div class="py-3"></div>
        <code class="text-subtitle-1">.{{ computedTransition }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="class"
          v-model="transition"
          :max="transitions.length - 1"
          :tick-labels="transitions"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Transitions',
  data() {
    return {
      expand: false,
      tag: 0,
      tagLists: [
        'expand',
        'expand-x',
        'fab',
        'fade',
        'scale',
        'scroll-x',
        'scroll-x-reverse',
        'scroll-y',
        'scroll-y-reverse',
        'slide-x',
        'slide-x-reverse',
        'slide-y',
        'slide-y-reverse',
      ],
      transition: 0,
      transitions: [
        'fab',
        'fade',
        'scale',
        'scroll-x',
        'scroll-x-reverse',
        'scroll-y',
        'scroll-y-reverse',
        'slide-x',
        'slide-x-reverse',
        'slide-y',
        'slide-y-reverse',
      ],
    };
  },
  computed: {
    computedTag() {
      const transition = 'transition';
      let tag = this.tagLists[this.tag];
      tag += `-${transition}`;
      return tag;
    },
    computedTransition() {
      const transition = 'transition';
      let transitions = this.transitions[this.transition];
      transitions += `-${transition}`;
      return transitions;
    },
  },
};
</script>
