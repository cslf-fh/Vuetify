<template>
  <v-switch
    v-model="newValue"
    :label="label"
    @change="getObject()"
    class="ma-0"
  ></v-switch>
</template>

<script>
export default {
  name: 'Switches',
  props: {
    value: Boolean,
    label: String,
    bind: String,
  },
  mounted() {
    this.getObjectDefault();
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
      let bind = this.bind;
      if (bind) {
        this.$emit('getObject', {
          name: String(bind + this.label),
          value: String(!this.newValue),
        });
      } else {
        if (this.newValue !== true) {
          this.$emit('getObject', {
            name: String(this.label),
          });
        } else {
          this.$emit('getObject', {
            name: String(this.label),
            value: String(this.newValue),
          });
        }
      }
    },
    getObjectDefault() {
      let bind = this.bind;
      if (!bind && this.newValue === true) {
        this.$emit('getObject', {
          name: String(this.label),
        });
      }
    },
  },
};
</script>
