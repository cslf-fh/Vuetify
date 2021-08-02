<template>
  <v-slider
    v-model="newValue"
    :label="label"
    :max="max"
    :tick-labels="tick"
    :thumb-label="thumb"
    @change="getObject()"
  ></v-slider>
</template>

<script>
export default {
  name: 'Sliders',
  props: {
    value: Number,
    label: String,
    bind: String,
    max: [Array, Number],
    tick: Array,
    thumb: Boolean,
    default: [String, Number],
    pre: String,
  },
  mounted() {
    this.getObject();
  },
  computed: {
    newValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('getValue', value);
      },
    },
  },
  methods: {
    getObject() {
      const label = this.label;
      let bind = this.bind;
      bind ? null : (bind = '');
      let pre = this.pre;
      pre ? null : (pre = '');
      let value = '';
      this.tick ? (value = this.tick[this.newValue]) : (value = this.newValue);
      if (value === this.default || value === '') {
        this.$emit('getObject', { name: String(bind + label) });
      } else {
        this.$emit('getObject', {
          name: String(bind + label),
          value: String(pre + value),
        });
      }
    },
  },
};
</script>
