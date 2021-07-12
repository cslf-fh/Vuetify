<template>
  <div>
    <v-row no-gutters>
      <v-col v-for="i in switches" :key="'switch' + i" cols="4" sm="6" lg="4">
        <slot :name="'switch' + i"></slot>
      </v-col>
      <v-col cols="12">
        <slot name="slider"></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'Grid',
  props: {
    switch: [Number, String],
  },
  data() {
    return {
      switches: Number(this.$props.switch),
    };
  },
};
</script>
