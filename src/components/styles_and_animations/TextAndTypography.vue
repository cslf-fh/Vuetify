<template>
  <v-card id="text-and-typography" flat class="background text-center">
    <v-card-title class="text-h4">Text and typography</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">.text-{breakpoint}-{value}</code>
      で使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <div
          class="mx-3 text-none"
          :class="[
            computedTypography,
            computedEmphasis,
            computedPlacement,
            computedDecoration,
            computedOpacity,
            computedTransform,
            computedwrap,
            computedOverflow,
          ]"
        >
          {{ text }}
        </div>
        <div class="py-3"></div>
        <span>typography</span>
        <code class="text-subtitle-1">.{{ computedTypography }}</code>
        <br />
        <span>emphasis</span>
        <code class="text-subtitle-1">.{{ computedEmphasis }}</code>
        <br />
        <span>placement</span>
        <code class="text-subtitle-1">.{{ computedPlacement }}</code>
        <br />
        <span>decoration</span>
        <code class="text-subtitle-1">.{{ computedDecoration }}</code>
        <br />
        <span>opacity</span>
        <code class="text-subtitle-1">.{{ computedOpacity }}</code>
        <br />
        <span>transform</span>
        <code class="text-subtitle-1">.{{ computedTransform }}</code>
        <br />
        <span>wrap</span>
        <code class="text-subtitle-1">.{{ computedwrap }}</code>
        <br />
        <span>overflow</span>
        <code class="text-subtitle-1">.{{ computedOverflow }}</code>
        <br />
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="typography"
          v-model="typography"
          :max="typographies.length - 1"
          :tick-labels="typographies"
        ></v-slider>
        <v-slider
          label="emphasis"
          v-model="emphasis"
          :max="emphasises.length - 1"
          :tick-labels="emphasises"
        ></v-slider>
        <v-slider
          label="placement"
          v-model="placement"
          :max="placements.length - 1"
          :tick-labels="placements"
        ></v-slider>
        <v-slider
          label="decoration"
          v-model="decoration"
          :max="decorations.length - 1"
          :tick-labels="decorations"
        ></v-slider>
        <v-slider
          label="opacity"
          v-model="opacity"
          :max="opacityLists.length - 1"
          :tick-labels="opacityLists"
        ></v-slider>
        <v-slider
          label="transform"
          v-model="transform"
          :max="transformLists.length - 1"
          :tick-labels="transformLists"
        ></v-slider>
        <v-switch v-model="wrap" label="wrap" class="ma-0"></v-switch>
        <v-switch v-model="overflow" label="overflow" class="ma-0"></v-switch>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'TextAndTypography',
  data() {
    return {
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.',
      typography: 5,
      typographies: [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle-1',
        'subtitle-2',
        'body-1',
        'body-2',
        'button',
        'caption',
        'overline',
      ],
      emphasis: 3,
      emphasises: [
        'black',
        'bold',
        'medium',
        'regular',
        'light',
        'thin',
        'italic',
      ],
      placement: 0,
      placements: ['justify', 'left', 'center', 'right'],
      decoration: 0,
      decorations: ['none', 'line-through', 'overline', 'underline'],
      opacity: 0,
      opacityLists: ['primary', 'secondary', 'disabled'],
      transform: 0,
      transformLists: ['none', 'lowercase', 'uppercase', 'capitalize'],
      wrap: true,
      overflow: false,
    };
  },
  computed: {
    computedTypography() {
      let typography = 'text';
      const typographies = this.typographies[this.typography];
      typography += `-${typographies}`;
      return typography;
    },
    computedEmphasis() {
      let emphasis = 'font-weight';
      const emphasises = this.emphasises[this.emphasis];
      emphasises === 'italic' ? (emphasis = 'font') : null;
      emphasis += `-${emphasises}`;
      return emphasis;
    },
    computedPlacement() {
      let placement = 'text';
      const placements = this.placements[this.placement];
      placement += `-${placements}`;
      return placement;
    },
    computedDecoration() {
      let decoration = 'text-decoration';
      const decorations = this.decorations[this.decoration];
      decoration += `-${decorations}`;
      return decoration;
    },
    computedOpacity() {
      let opacity = 'text';
      const opacityLists = this.opacityLists[this.opacity];
      opacity += `--${opacityLists}`;
      return opacity;
    },
    computedTransform() {
      let transform = 'text';
      const transformLists = this.transformLists[this.transform];
      transform += `-${transformLists}`;
      return transform;
    },
    computedwrap() {
      let wrap = '';
      this.wrap === true ? null : (wrap = 'text-no-wrap');
      return wrap;
    },
    computedOverflow() {
      let overflow = '';
      this.overflow === true ? (overflow = 'text-truncate') : null;
      return overflow;
    },
  },
};
</script>
