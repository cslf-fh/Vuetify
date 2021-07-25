<template>
  <v-card class="text-left mb-3 px-4 py-3 code" flat tile outlined>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-fab-transition>
          <v-btn
            v-if="btnIcon"
            class="mt-n2 mr-n2"
            absolute
            top
            right
            icon
            rounded
            :color="hover ? 'gray darken-1' : 'gray lighten-1'"
            @click="witeToClipboard()"
          >
            <v-icon>mdi-content-copy</v-icon>
          </v-btn>
        </v-fab-transition>
      </template>
    </v-hover>
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-fab-transition>
          <v-btn
            v-if="!btnIcon"
            class="mt-n2 mr-n2"
            absolute
            top
            right
            icon
            rounded
            :color="hover ? 'gray darken-1' : 'gray lighten-1'"
            @click="witeToClipboard()"
          >
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </v-fab-transition>
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
   -->&lt;<!--
   --><span class="code__tag">{{ tag }}</span><!--
   --><span v-if="!attr.length">&gt;</span><!--
   --><span v-if="attr.length"><br /></span><!--
   --><span v-for="(attr, index) in attr" :key="index"><!--
     -->&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
     --><span v-if="attr.value"><!--
       -->="<!--
       --><span class="code__attr--value">{{ attr.value }}</span><!--
       -->"<!--
     --></span><!--
     --><br /><!--
   --></span><!--
   --><span v-if="attr.length">&gt;</span><!--
   --><span v-if="nest"><!--
     --><br /><!--
     --><span v-if="slots"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">template </span><!--
       --><span class="code__attr--name">v-slot:{{ slotName }}</span><!--
       --><span v-if="slotProps"><!--
         -->="<!--
         --><span class="code__attr--value">{ {{ slotProps }} }</span><!--
         -->"<!--
       --></span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest }}</span><!--
       --><span v-if="!attrNest">&gt;</span><!--
       --><br v-if="attrNest"><!--
       --><span  v-for="(attr, index) in attrNest" :key="index"><!--
         -->&#9;&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest">&#9;&#9;&gt;</span><!--
       --><span v-if="textsNest"><br />&#9;&#9;&#9;{{ textNest }}<br />&#9;&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest }}</span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&lt;/<!--
       --><span class="code__tag">template</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
     --><span v-if="!slots"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest }}</span><!--
       --><span v-if="!attrNest">&gt;</span><!--
       --><span v-if="attrNest"><br /></span><!--
       --><span v-for="(attr, index) in attrNest" :key="index"><!--
         -->&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest">&#9;&gt;</span><!--
       --><span v-if="textsNest"><br />&#9;&#9;{{ textNest }}<br />&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest }}</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
   --></span><!--
   --><span v-if="nest2"><!--
     --><br /><!--
     --><span v-if="slots2"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">template </span><!--
       --><span class="code__attr--name">v-slot:{{ slotName2 }}</span><!--
       --><span v-if="slotProps2"><!--
         -->="<!--
         --><span class="code__attr--value">{ {{ slotProps2 }} }</span><!--
         -->"<!--
       --></span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest2 }}</span><!--
       --><span v-if="!attrNest2">&gt;</span><!--
       --><br v-if="attrNest2"><!--
       --><span  v-for="(attr, index) in attrNest2" :key="index"><!--
         -->&#9;&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest2">&#9;&#9;&gt;</span><!--
       --><span v-if="textsNest2"><br />&#9;&#9;&#9;{{ textNest2 }}<br />&#9;&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest2 }}</span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&lt;/<!--
       --><span class="code__tag">template</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
     --><span v-if="!slots2"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest2 }}</span><!--
       --><span v-if="!attrNest2">&gt;</span><!--
       --><span v-if="attrNest2"><br /></span><!--
       --><span v-for="(attr, index) in attrNest2" :key="index"><!--
         -->&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest2">&#9;&gt;</span><!--
       --><span v-if="textsNest2"><br />&#9;&#9;{{ textNest2 }}<br />&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest2 }}</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
   --></span><!--
   --><span v-if="nest3"><!--
     --><br /><!--
     --><span v-if="slots3"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">template </span><!--
       --><span class="code__attr--name">v-slot:{{ slotName3 }}</span><!--
       --><span v-if="slotProps3"><!--
         -->="<!--
         --><span class="code__attr--value">{ {{ slotProps3 }} }</span><!--
         -->"<!--
       --></span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest3 }}</span><!--
       --><span v-if="!attrNest3">&gt;</span><!--
       --><br v-if="attrNest3"><!--
       --><span  v-for="(attr, index) in attrNest3" :key="index"><!--
         -->&#9;&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest3">&#9;&#9;&gt;</span><!--
       --><span v-if="textsNest3"><br />&#9;&#9;&#9;{{ textNest3 }}<br />&#9;&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest3 }}</span><!--
       -->&gt;<!--
       --><br /><!--
       -->&#9;&lt;/<!--
       --><span class="code__tag">template</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
     --><span v-if="!slots3"><!--
       -->&#9;&lt;<!--
       --><span class="code__tag">{{ tagNest3 }}</span><!--
       --><span v-if="!attrNest3">&gt;</span><!--
       --><span v-if="attrNest3"><br /></span><!--
       --><span v-for="(attr, index) in attrNest3" :key="index"><!--
         -->&#9;&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
         --><span v-if="attr.value"><!--
           -->="<!--
           --><span class="code__attr--value">{{ attr.value }}</span><!--
           -->"<!--
         --></span><!--
         --><br /><!--
       --></span><!--
       --><span v-if="attrNest3">&#9;&gt;</span><!--
       --><span v-if="textsNest3"><br />&#9;&#9;{{ textNest3 }}<br />&#9;</span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tagNest3 }}</span><!--
       -->&gt;<!--
       --><br /><!--
     --></span><!--
   --></span><!--
   --><span><!--
     --><span v-if="texts"><br />&#9;{{ text }}<br /></span><!--
     -->&lt;/<!--
     --><span class="code__tag">{{ tag }}</span><!--
     -->&gt;<!--
   --></span><!--
   --><div v-if="tag2"><!--
     --><br />&lt;<!--
     --><span class="code__tag">{{ tag2 }}</span><!--
     --><span v-if="!attr2.length">&gt;</span><!--
     --><span v-if="attr2.length"><br /></span><!--
     --><span v-for="(attr, index) in attr2" :key="index"><!--
       -->&#9;<span class="code__attr--name">{{ attr.name }}</span><!--
       --><span v-if="attr.value"><!--
         -->="<!--
         --><span class="code__attr--value">{{ attr.value }}</span><!--
         -->"<!--
       --></span><!--
       --><br /><!--
     --></span><!--
     --><span v-if="attr2.length">&gt;</span><!--
     --><span><!--
       --><span v-if="texts2"><br />&#9;{{ text2 }}<br /></span><!--
       -->&lt;/<!--
       --><span class="code__tag">{{ tag2 }}</span><!--
       -->&gt;<!--
     --></span><!--
   --></div><!--
 --></pre>
  </v-card>
</template>

<script>
export default {
  name: 'Code',
  props: {
    tag: String,
    attr: Array,
    texts: Boolean,
    text: String,
    nest: Boolean,
    slots: Boolean,
    slotName: String,
    slotProps: String,
    tagNest: String,
    attrNest: Array,
    textsNest: Boolean,
    textNest: String,
    nest2: Boolean,
    slots2: Boolean,
    slotName2: String,
    slotProps2: String,
    tagNest2: String,
    attrNest2: Array,
    textsNest2: Boolean,
    textNest2: String,
    nest3: Boolean,
    slots3: Boolean,
    slotName3: String,
    slotProps3: String,
    tagNest3: String,
    attrNest3: Array,
    textsNest3: Boolean,
    textNest3: String,
    tag2: String,
    attr2: Array,
    texts2: Boolean,
    text2: String,
  },
  data() {
    return {
      btnIcon: true,
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
      this.btnIcon = false;
      setTimeout(
        function () {
          this.btnIcon = true;
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
    &--value {
      color: #07a;
    }
  }
}
</style>
