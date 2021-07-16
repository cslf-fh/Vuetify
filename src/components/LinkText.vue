<template>
  <span>
    <v-btn
      class="px-0"
      color="primary"
      height="24"
      text
      :to="to"
      :href="href"
      :target="target"
    >
      <template v-slot>
        <span class="text-subtitle-1">{{ text }}</span>
        <v-icon color="primary" small>{{ icon }}</v-icon>
      </template>
    </v-btn>
  </span>
</template>

<script>
export default {
  name: 'LinkText',
  props: {
    link: String,
    url: String,
    text: String,
    icon: String,
  },
  data() {
    return {
      to: false,
      href: false,
      target: '',
    };
  },
  created() {
    this.$props.link === 'to'
      ? ((this.to = this.$props.url), (this.href = ''))
      : ((this.to = ''),
        (this.href = this.$props.url),
        (this.target = '_blank'));
  },
};
</script>
