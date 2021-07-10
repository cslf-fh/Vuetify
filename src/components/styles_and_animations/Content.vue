<template>
  <v-card id="content" flat class="background text-center">
    <v-card-title class="text-h4">Content styles</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0"
      >以下のタグにはデフォルトでスタイルが与えられている。</v-card-subtitle
    >
    <v-row no-gutter>
      <v-col cols="12" sm="8" lg="6">
        <v-card-text class="text--primary text-left text-subtitle-1">
          <blockquote v-if="tag === 0" class="blockquote">
            {{ text }}
          </blockquote>
          <p v-if="tag === 1">{{ text }}</p>
          <p v-if="tag === 1">{{ text }}</p>
          <code v-if="tag === 2">{{ text }}</code>
          <var v-if="tag === 3">{{ text }}</var>
          <kbd v-if="tag === 4">{{ text }}</kbd>
        </v-card-text>
        <code class="text-subtitle-1"
          >&lt;{{ tags }}&gt;&lt;/{{ tags }}&gt;</code
        >
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="tag"
          v-model="tag"
          :max="tagList.length - 1"
          :tick-labels="tagList"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Content',
  data() {
    return {
      tag: 0,
      tagList: ['blockquote', 'p', 'code', 'var', 'kbd'],
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at.',
    };
  },
  computed: {
    tags() {
      const tagName = this.tagList[this.tag];
      return tagName;
    },
  },
};
</script>
