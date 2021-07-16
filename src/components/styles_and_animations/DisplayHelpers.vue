<template>
  <v-card id="display-helpers" flat class="background text-center">
    <v-card-title class="text-h4">Display helpers</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      <code class="text-subtitle-1">.d-{breakpoint}-{value}</code>
      で使用する。breakpointを省略した場合はxsを指定したのと同意。
    </v-card-subtitle>
    <v-expansion-panels class="mb-4" v-model="panel" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header>
          Material Designブレークポイント
        </v-expansion-panel-header>
        <v-expansion-panel-content class="mt-4">
          <v-data-table
            :headers="headers"
            :items="items"
            disable-sort
            hide-default-footer
          >
            <template v-slot:[`item.name`]="{ item }">
              <v-icon class="mr-2">
                {{ item.icon }}
              </v-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-slot:footer>
              <v-card-subtitle class="text-center">
                *デスクトップにおけるブラウザスクロールバー(16px)
              </v-card-subtitle>
            </template>
          </v-data-table>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row no-gutter>
      <v-col cols="12" sm="8" lg="6">
        <v-card-text class="text--primary">
          <div :class="display" class="white--text">
            <div :class="display" class="primary pa-2">element1 1 of 3</div>
            <div :class="display" class="primary pa-2">element1 2 of 3</div>
            <div :class="display" class="primary pa-2">element1 3 of 3</div>
          </div>
          <div :class="display" class="success pa-2 white--text">element 2</div>
          <div :class="display" class="error pa-2 white--text">element 3</div>
        </v-card-text>
        <code class="text-subtitle-1">.{{ display }}</code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <v-slider
          label="breakpoint"
          v-model="modelOne"
          :max="breakpoint.length - 1"
          :tick-labels="breakpoint"
        ></v-slider>
        <v-slider
          label="value"
          v-model="modelTwo"
          :max="value.length - 1"
          :tick-labels="value"
        ></v-slider>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'DisplayHelpers',
  data() {
    return {
      panel: false,
      headers: [
        {
          text: 'デバイス',
          align: 'start',
          value: 'name',
        },
        { text: 'コード', value: 'code' },
        { text: 'タイプ', value: 'type' },
        { text: '範囲', value: 'range' },
      ],
      items: [
        {
          name: 'Extra small',
          icon: 'mdi-cellphone',
          code: 'xs',
          type: '小型から大型のスマホ',
          range: '< 600px',
        },
        {
          name: 'Small',
          icon: 'mdi-tablet',
          code: 'sm',
          type: '小型から中型のタブレット',
          range: '600px > < 960px',
        },
        {
          name: 'Medium',
          icon: 'mdi-laptop',
          code: 'md',
          type: '大型タブレットからノートパソコン',
          range: '960px > < 1264px*',
        },
        {
          name: 'Large',
          icon: 'mdi-monitor',
          code: 'lg',
          type: 'デスクトップ',
          range: '1264px > < 1904px*',
        },
        {
          name: 'Extra large',
          icon: 'mdi-desktop-mac',
          code: 'xl',
          type: '4kとウルトラワイド',
          range: '> 1904px*',
        },
      ],
      modelOne: 0,
      breakpoint: ['xs', 'sm', 'md', 'lg', 'xl'],
      modelTwo: 0,
      value: [
        'inline',
        'inline-block',
        'block',
        'table',
        'table-cell',
        'table-row',
        'flex',
        'inline-flex',
        'none',
      ],
    };
  },
  computed: {
    display() {
      let display = 'd';
      const breakpoint = this.breakpoint[this.modelOne];
      const value = this.value[this.modelTwo];

      if (breakpoint !== 'xs') {
        display += `-${breakpoint}`;
      }
      display += `-${value}`;

      return display;
    },
  },
};
</script>
