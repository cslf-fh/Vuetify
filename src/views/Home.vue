<template>
  <v-container>
    <v-card class="background" flat>
      <v-card-title class="text-h4">
        Vuetifyのコンポーネントのプロパティをいじってなんやかんやするやつ
      </v-card-title>
      <v-card-text class="text--primary text-subtitle-1">
        上記の通りです。公式ドキュメントにあるようなやつを、VueとVuetifyの学習を兼ねて作成しました。
        <br />
        まだ理解が浅いので間違っている所や割愛している部分があろうかと思うので、その際はご指摘いただけると幸いです。
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-tabs background-color="background" icons-and-text>
          <v-tab to="./">
            Home
            <v-icon>mdi-home</v-icon>
          </v-tab>
          <v-tab to="./styles">
            Styles and Animations
            <v-icon>mdi-palette</v-icon>
          </v-tab>
          <v-tab to="./components">
            UI Components
            <v-icon>mdi-view-dashboard</v-icon>
          </v-tab>
        </v-tabs>
      </v-card-actions>
      <v-divider></v-divider>
    </v-card>
    <v-card class="background" flat>
      <v-card-actions>
        <v-btn
          color="primary"
          text
          href="https://vuetifyjs.com/ja/"
          target="_blank"
        >
          公式ドキュメント
          <v-icon small>mdi-open-in-new</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'home',
};
</script>
