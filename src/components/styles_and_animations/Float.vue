<template>
  <v-card id="float" flat class="background text-center">
    <v-card-title class="text-h4">Float</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">.float-{breakpoint}-{direction}</code>
      で使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-sheet :class="float" class="primary white--text mx-3">
          Float item
        </v-sheet>
        <div class="py-1"></div>
        <code class="text-subtitle-1">.{{ float }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="radius"
          v-model="model"
          :max="floats.length - 1"
          :tick-labels="floats"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Float',
  data() {
    return {
      model: 0,
      floats: ['left', 'right', 'start', 'end', 'none'],
    };
  },
  computed: {
    float() {
      let float = 'float';
      const floats = this.floats[this.model];
      float += `-${floats}`;
      return float;
    },
  },
};
</script>
