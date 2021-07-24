<template>
  <v-card class="text-left px-4 py-3 code" flat tile outlined>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-btn
          class="mt-n2 mr-n2"
          absolute
          top
          right
          icon
          rounded
          @click="witeToClipboard()"
        >
          <v-icon :color="hover ? 'gray darken-1' : 'gray lighten-1'">{{
            btnIcon
          }}</v-icon>
        </v-btn>
      </template>
    </v-hover>
    <!--
    <v-snackbar v-model="snackbar" multi-line :timeout="timeout">
      {{ copied }}
      <template v-slot:action="{ attrs }">
        <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    -->
    <pre ref="copied" class="code__pre"><!--
   -->[<br /><!--
   -->&#9;{<br /><!--
   --><span v-for="(array, index) in arrays" :key="index"><!--
     --><span v-for="(i, key) in array" :key="key"><!--
       -->&#9;&#9;{{ key }}: <!--
       --><span v-if="i.indexOf('//') !== -1" class="code__attr--name">{{ i.slice(0, i.indexOf('//') -1) }}</span><!--
       --><span v-else class="code__attr--name">{{ i }}</span><!--
       -->,&#9;<!--
       --><span v-if="i.indexOf('//') !== -1" class="code__attr--comment">{{ i.slice(i.indexOf('//'), i.length) }}</span><br /><!--
     --></span><!--
   --></span><!--
   -->&#9;}<br /><!--
   -->]<!--
 --></pre>
  </v-card>
</template>

<script>
export default {
  name: 'Arrays',
  props: {
    arrays: Array,
  },
  data() {
    return {
      btnIcon: 'mdi-content-copy',
      /*
      snackbar: false,
      copied: 'Copied!',
      timeout: 3000,
      */
    };
  },
  methods: {
    witeToClipboard() {
      const copyText = this.$refs.copied.innerText;
      navigator.clipboard.writeText(copyText);
      //this.snackbar = true;
      const range = document.createRange();
      range.selectNodeContents(this.$refs.copied);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      this.btnIcon = 'mdi-check';
      setTimeout(
        function () {
          this.btnIcon = 'mdi-content-copy';
        }.bind(this),
        3000
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.code {
  background-color: #eee;
  color: rgba(0, 0, 0, 0.87);
  &__pre {
    font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
    white-space: pre;
    overflow-x: auto;
    overflow-y: hidden;
    tab-size: 2;
  }
  &__tag {
    color: #905;
  }
  &__attr {
    &--name {
      color: #690;
    }
    &--comment {
      color: #999;
    }
  }
}
</style>
