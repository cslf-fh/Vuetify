<template>
  <v-card id="color" flat class="background text-center">
    <v-card-title class="text-h4">Color</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      Material Design仕様の色を使える。詳しくは
      <LinkText
        link="href"
        url="https://vuetifyjs.com/ja/styles/colors/#section-30de30c630ea30a230eb30ab30e930fc"
        text="公式ドキュメント"
        icon="mdi-open-in-new"
      ></LinkText>
      を参照。そのまま使用するとbackground、
      <code class="text-subtitle-1">--text</code>
      を追加するとtextに適用される。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-sheet class="ma-3" :class="background + ' ' + lighten">
          <span :class="text">Lorem ipsum</span>
        </v-sheet>
        <div class="py-3"></div>
        <span>background/contrast</span>
        <code class="text-subtitle-1">.{{ background + ' ' + lighten }}</code>
        <br />
        <span>text</span>
        <code class="text-subtitle-1">.{{ text }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="background"
          v-model="model"
          :max="bgColor.length - 1"
          :tick-labels="bgColor"
        ></v-slider>
        <v-slider
          label="contrast"
          v-model="modelTwo"
          :max="lighteness.length - 1"
          :tick-labels="lighteness"
        ></v-slider>
        <v-slider
          label="text"
          v-model="modelThree"
          :max="textColor.length - 1"
          :tick-labels="textColor"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Color',
  data() {
    return {
      model: 0,
      bgColor: [
        'primary',
        'secondary',
        'accent',
        'error',
        'info',
        'success',
        'warning',
      ],
      modelTwo: 0,
      lighteness: [
        'none',
        'lighten-1',
        'lighten-2',
        'lighten-3',
        'lighten-4',
        'lighten-5',
        'darken-1',
        'darken-2',
        'darken-3',
        'darken-4',
      ],
      modelThree: 0,
      textColor: [
        '',
        'white--text',
        'black--text',
        'red--text',
        'green--text',
        'blue--text',
      ],
    };
  },
  computed: {
    background() {
      const bgColor = this.bgColor[this.model];
      return bgColor;
    },
    lighten() {
      let lighteness = this.lighteness[this.modelTwo];
      if (lighteness === 'none') {
        lighteness = '';
      }
      return lighteness;
    },
    text() {
      const textColor = this.textColor[this.modelThree];
      return textColor;
    },
  },
};
</script>
