<template>
  <v-card id="elevation" flat class="background text-center">
    <v-card-title class="text-h4">Elevation</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      elevationプロパティで使用する。プロパティがない場合はクラスで使用する。
      <code class="text-subtitle-1">.elevation-{n}</code>
    </v-card-subtitle>
    <v-row no-gutter>
      <v-col cols="12" sm="8" lg="6">
        <div class="d-flex justify-space-around">
          <v-hover v-for="i in 3" :key="i">
            <template v-slot:default="{ hover }">
              <v-sheet
                :elevation="hover ? HoverElevation : elevation"
                max-width="256"
                class="mx-auto transition-swing primary"
                height="128"
                width="128"
              ></v-sheet>
            </template>
          </v-hover>
        </div>
        <div class="py-3"></div>
        <span>elevation</span>
        <code class="text-subtitle-1">elevation="{{ elevation }}"</code>
        <br />
        <span>elevation(hover)</span>
        <code class="text-subtitle-1"
          >:elevation="hover ? {{ HoverElevation }} : {{ elevation }}"</code
        >
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="elevation"
          v-model="elevation"
          max="24"
          min="0"
          thumb-label
        ></v-slider>
        <v-slider
          label="elevation(hover)"
          v-model="HoverElevation"
          max="24"
          min="0"
          thumb-label
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      elevation: 6,
      HoverElevation: 18,
    };
  },
};
</script>
