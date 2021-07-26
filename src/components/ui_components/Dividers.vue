<template>
  <v-card id="dividers" flat class="background text-center">
    <v-card-title class="text-h4">Dividers</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      セパレータを表示するのに使用する。
    </v-card-subtitle>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-card :class="{ 'd-flex align-center': vertical }" height="100">
            <v-card-text>text</v-card-text>
            <v-divider
              :dark="dark"
              :light="light"
              :inset="inset"
              :vertical="vertical"
            ></v-divider>
            <v-card-text>text</v-card-text>
          </v-card>
          <div class="py-3"></div>
          <Code tag="v-divider" :attr="computedAttr"></Code>
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
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="inset" label="inset" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="vertical"
              label="vertical"
              class="ma-0"
            ></v-switch>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Dividers',
  data() {
    return {
      attr: [],
      dark: false,
      light: false,
      inset: false,
      vertical: false,
    };
  },
  computed: {
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
      this.checkBoolean(attr, this.inset, 'inset');
      this.checkBoolean(attr, this.vertical, 'vertical');
      return attr;
    },
  },
};
</script>
