<template>
  <v-card id="" flat class="background text-center">
    <v-card-title class="text-h4">Breadcrumbs</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      パンくずリストを作成するのに使用する。
      <code class="text-subtitle-1">items</code>
      プロパティに配列を渡してリストを表示する。
      <br />
      <code class="text-subtitle-1">dividerとitem</code>
      スロットがある。
      <code class="text-subtitle-1">item</code>
      スロットのスロットプロパティには
      <code class="text-subtitle-1">item</code>
      を渡す。
      <br />
      サブコンポーネントには
      <code class="text-subtitle-1">v-breadcrumbs-item</code>
      があり、
      <code class="text-subtitle-1">item</code>
      スロット内で使用する。
      <br />
      <code class="text-subtitle-1">v-breadcrumbs-item</code>
      のパス回りのプロパティはよくわからなかったので割愛。
    </v-card-subtitle>
    <v-expansion-panels class="mb-4" v-model="panel" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header
          >itemsプロパティの配列の中身
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Arrays class="mt-4" :arrays="itemsProps"></Arrays>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-breadcrumbs :items="items" :divider="computedDivider" :large="large">
          <template v-if="dividerSlot" v-slot:divider>
            <v-icon>{{ computedDividerForSlot }}</v-icon>
          </template>
          <template v-if="itemSlot" v-slot:item="{ item }">
            <v-breadcrumbs-item
              :to="linkForSlot === 0 ? item.to : null"
              :href="linkForSlot === 1 ? item.href : null"
              :disabled="disabled"
              :ripple="ripple"
              :target="computedTargetForSlot"
            >
              {{ item.text.toUpperCase() }}
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>
        <div class="d-flex flex-wrap justify-space-around mx-3">
          <v-checkbox v-model="dividerSlot" label="divider slot"></v-checkbox>
          <v-checkbox v-model="itemSlot" label="item slot"></v-checkbox>
        </div>
        <v-card class="background" flat tile>
          <div id="breadcrumbs-link1">Link 1</div>
          <div id="breadcrumbs-link2">Link 2</div>
          <div id="breadcrumbs-link3">Link 3</div>
        </v-card>
        <div class="py-3"></div>
        <Code
          class="mx-3 mb-3"
          tag="v-breadcrumbs"
          :attr="computedAttr"
          :nest="dividerSlot"
          :slots="true"
          slotName="divider"
          tagNest="v-icon"
          :textsNest="true"
          :textNest="computedDividerForSlot"
          :nest2="itemSlot"
          :slots2="true"
          slotName2="item"
          slotProps2="item"
          tagNest2="v-breadcrumbs-item"
          :textsNest2="true"
          :textNest2="'{{ item.text.toUpperCase() }}'"
          :attrNest2="computedAttrSlot2"
        ></Code>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="1">
          <template v-slot:switch1>
            <v-switch v-model="large" label="large" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="divider"
              v-model="divider"
              :max="dividers.length - 1"
              :tick-labels="dividers"
            ></v-slider>
          </template>
        </Grid>
        <div v-if="dividerSlot">
          <v-slider
            label="divider for slot"
            v-model="dividerForSlot"
            :max="dividersForSlot.length - 1"
            :tick-labels="dividersForSlot"
          ></v-slider>
        </div>
        <Grid v-if="itemSlot" switch="2">
          <template v-slot:switch1>
            <v-switch
              v-model="disabled"
              label="disabled"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="ripple" label="ripple" class="ma-0"></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="how to link"
              v-model="linkForSlot"
              :max="linksForSlot.length - 1"
              :tick-labels="linksForSlot"
            ></v-slider>
            <v-slider
              label="target"
              v-model="targetForSlot"
              :max="targetsForSlot.length - 1"
              :tick-labels="targetsForSlot"
              :disabled="linkForSlot === 0"
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  data() {
    return {
      attr: [],
      items: [
        {
          text: 'Link 1',
          disabled: false,
          exact: true,
          to: './#breadcrumbs-link1',
          href: './#/components/#breadcrumbs-link1',
        },
        {
          text: 'Link 2',
          disabled: false,
          to: './#breadcrumbs-link2',
          href: './#/components/#breadcrumbs-link2',
        },
        {
          text: 'Link 3',
          disabled: false,
          to: './#breadcrumbs-link3',
          href: './#/components/#breadcrumbs-link3',
        },
      ],
      divider: 0,
      dividers: ['/', '|', '.', ';', '>', '-'],
      large: false,
      dividerSlot: false,
      itemSlot: false,
      attrSlot: [],
      dividerForSlot: 0,
      dividersForSlot: ['forward', 'chevron-right'],
      disabled: false,
      ripple: false,
      attrSlot2: [],
      linkForSlot: 0,
      linksForSlot: ['to', 'href'],
      targetForSlot: 0,
      targetsForSlot: ['_blank', '_self', '_parent', '_top'],
      panel: false,
      itemsProps: [
        {
          disabled: 'boolean',
          exact: 'boolean',
          href: 'string',
          link: 'boolean',
          text: 'string | number',
          to: 'string | object',
        },
      ],
    };
  },
  computed: {
    computedDivider() {
      let divider = this.dividers[this.divider];
      return divider;
    },
    computedDividerForSlot() {
      let divider = 'mdi';
      const dividers = this.dividersForSlot[this.dividerForSlot];
      divider += `-${dividers}`;
      return divider;
    },
    computedLinkForSlot() {
      let link = this.linksForSlot[this.linkForSlot];
      return link;
    },
    computedTargetForSlot() {
      let target = this.targetsForSlot[this.targetForSlot];
      this.linkForSlot === 0 ? (target = '') : null;
      return target;
    },
    computedAttr() {
      return this.attrArray();
    },
    computedAttrSlot2() {
      return this.attrArraySlot2();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkValue(attr, 'items', ':items', '');
      this.checkBoolean(attr, this.large, 'large');
      this.dividerSlot === true
        ? null
        : this.checkValue(attr, this.computedDivider, 'divider', '/');
      return attr;
    },
    attrArraySlot2() {
      this.attrSlot2 = [];
      let attr = this.attrSlot2;
      this.checkBoolean(attr, this.disabled, 'disabled');
      this.checkBoolean(attr, this.ripple, 'ripple');
      this.checkValue(
        attr,
        'item.' + this.computedLinkForSlot,
        ':' + this.computedLinkForSlot,
        ''
      );
      this.linkForSlot === 1
        ? this.checkValue(attr, this.computedTargetForSlot, 'target', '')
        : null;
      return attr;
    },
  },
};
</script>
