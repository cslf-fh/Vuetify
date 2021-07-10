<template>
  <v-card class="text-left px-4 py-3 code" flat tile outlined>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-btn absolute right icon @click="witeToClipboard()">
          <v-icon :color="hover ? 'gray' : 'gray lighten-1'"
            >mdi-content-copy</v-icon
          >
        </v-btn>
      </template>
    </v-hover>
    <v-snackbar v-model="snackbar" multi-line :timeout="timeout">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div ref="copied">
      <div>
        &lt;<span class="code__tag">{{ tag }}</span>
      </div>
      <div class="ml-4" v-for="(attr, index) in attr" :key="index">
        <span class="code__attr--name">{{ attr.name }}</span
        ><span v-if="attr.value">="</span
        ><span class="code__attr--value">{{ attr.value }}</span
        ><span v-if="attr.value">"</span>
      </div>
      <div>
        &gt;&lt;<span class="code__tag">{{ tag }}</span
        >&gt;
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: 'Code',
  props: {
    tag: String,
    attr: Array,
  },
  data() {
    return {
      snackbar: false,
      text: 'Copied!',
      timeout: 3000,
    };
  },
  methods: {
    witeToClipboard() {
      const copyText = this.$refs.copied.innerText;
      navigator.clipboard.writeText(copyText);
      this.snackbar = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.code {
  background-color: #e0e0e0;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  color: rgba(0, 0, 0, 0.87);
  &__tag {
    color: #905;
  }
  &__attr {
    &--name {
      color: #690;
    }
    &--value {
      color: #07a;
    }
  }
}
</style>
