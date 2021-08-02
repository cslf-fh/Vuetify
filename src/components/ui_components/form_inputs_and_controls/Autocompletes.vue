<template>
  <v-card id="autocompletes" flat class="background text-center">
    <v-card-title class="text-h4">Autocompletes</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      オートコンプリートを作成するのに使用する。
      <code class="text-subtitle-1">items</code>
      プロパティに選択肢を設定する。
      <br />
      テキストと値を分けたい場合は
      <code class="text-subtitle-1">item-textとitem-value</code>
      プロパティを設定する。
      <br />
      <code class="text-subtitle-1">open-on-clear</code>
      プロパティは
      <code class="text-subtitle-1">clearable</code>
      プロパティ設定時に動作する。
      <br />
      <code class="text-subtitle-1">single-line</code>
      プロパティは
      <code class="text-subtitle-1">label</code>
      プロパティ設定時に動作する。
      <br />
      <code class="text-subtitle-1">filter</code>
      プロパティを設定することで、フィルタリングをカスタマイズできる。
      <br />
      <code class="text-subtitle-1">serch-input</code>
      プロパティは検索(入力)値で、
      <code class="text-subtitle-1">.sync</code>
      修飾子と共に使用する。APIから
      <code class="text-subtitle-1">items</code>
      プロパティを引っ張ってくるときに使用するとよさげ？
      <br />
      <code class="text-subtitle-1">cache-items</code>
      プロパティを設定すると、一度でも
      <code class="text-subtitle-1">items</code>
      プロパティに入った値をローカル変数で保持する。
      <br />
      よくわからないプロパティやスロットとイベントはたくさんあるので割愛。詳しくは
      <LinkText
        link="href"
        url="https://vuetifyjs.com/ja/api/v-autocomplete/"
        text="公式のドキュメント"
        icon="mdi-open-in-new"
      ></LinkText>
      を参照。
    </v-card-subtitle>
    <v-expansion-panels class="mb-4" v-model="panel" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header
          >itemsプロパティに渡す配列の中身
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Arrays class="mt-4" :arrays="exampleItems"></Arrays>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <v-autocomplete
            v-model="value"
            :items="items"
            :dark="dark"
            :light="light"
            :allow-overflow="allowOverflow"
            :autofocus="autofocus"
            :cache-items="cacheItems"
            :chips="chips"
            :clearable="clearable"
            :deletable-chips="deletableChips"
            :dense="dense"
            :disable-lookup="disableLookup"
            :disabled="disabled"
            :eager="eager"
            :error="error"
            :filled="filled"
            :flat="flat"
            :full-width="fullWidth"
            :hide-details="hideDetails"
            :hide-no-data="hideNoData"
            :hide-selected="hideSelected"
            :loading="loading"
            :multiple="multiple"
            :no-filter="noFilter"
            :open-on-clear="openOnClear"
            :outlined="outlined"
            :persistent-hint="persistentHint"
            :persistent-placeholder="persistentPlaceholder"
            :readonly="readonly"
            :return-object="returnObject"
            :reverse="reverse"
            :rounded="rounded"
            :shaped="shaped"
            :single-line="singleLine"
            :small-chips="smallChips"
            :solo="solo"
            :solo-inverted="soloInverted"
            :success="success"
            :validate-on-blur="validateOnBlur"
            :counter="counter"
            :error-count="errorCount"
            :loader-height="loaderHeight"
            :item-color="computedItemColor"
            :append-icon="computedAppendIcon"
            :append-outer-icon="computedAppendOuterIcon"
            :background-color="computedBackgroundColor"
            :clear-icon="computedClearIcon"
            :color="computedColor"
            :error-messages="computedErrorMessages"
            :hint="computedHint"
            :label="computedLabel"
            :messages="computedMessages"
            :no-data-text="computedNoDataText"
            :placeholder="computedPlaceholder"
            :prefix="computedPrefix"
            :prepend-icon="computedPrependIcon"
            :prepend-inner-icon="computedPrependInnerIcon"
            :success-messages="computedSuccessMessages"
            :suffix="computedSuffix"
            :type="computedType"
            :height="computedHeight"
          ></v-autocomplete>
          <div class="py-3"></div>
          <p>value : {{ value }}</p>
          <div class="py-3"></div>
          <Code tag="v-autocomplete" :attr="computedAttr"></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
          <template v-slot:switch1>
            <Switches
              :value="dark"
              label="dark"
              @getValue="dark = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch2>
            <Switches
              :value="light"
              label="light"
              @getValue="light = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
        </Grid>
        <Grid switch="25">
          <template v-slot:switch1>
            <Switches
              :value="allowOverflow"
              label="allow-overflow"
              bind=":"
              @getValue="allowOverflow = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch2>
            <Switches
              :value="autoSelectFirst"
              label="auto-select-first"
              @getValue="autoSelectFirst = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch3>
            <Switches
              :value="autofocus"
              label="auto-focus"
              @getValue="autofocus = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch4>
            <Switches
              :value="cacheItems"
              label="chche-items"
              @getValue="cacheItems = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch5>
            <Switches
              :value="chips"
              label="chips"
              @getValue="chips = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch6>
            <Switches
              :value="clearable"
              label="clearable"
              @getValue="clearable = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch7>
            <Switches
              :value="deletableChips"
              label="deletable-chips"
              @getValue="deletableChips = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch8>
            <Switches
              :value="disableLookup"
              label="disable-lookup"
              @getValue="disableLookup = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch9>
            <Switches
              :value="disabled"
              label="disabled"
              @getValue="disabled = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch10>
            <Switches
              :value="error"
              label="error"
              @getValue="error = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch11>
            <Switches
              :value="hideDetails"
              label="hide-details"
              @getValue="hideDetails = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch12>
            <Switches
              :value="hideNoData"
              label="hide-no-data"
              @getValue="hideNoData = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch13>
            <Switches
              :value="hideSelected"
              label="hide-selected"
              @getValue="hideSelected = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch14>
            <Switches
              :value="multiple"
              label="multiple"
              @getValue="multiple = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch15>
            <Switches
              :value="noFilter"
              label="no-filter"
              @getValue="noFilter = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch16>
            <Switches
              :value="openOnClear"
              label="open-on-clear"
              @getValue="openOnClear = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch17>
            <Switches
              :value="persistentHint"
              label="persistent-hint"
              @getValue="persistentHint = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch18>
            <Switches
              :value="persistentPlaceholder"
              label="persistent-placeholder"
              @getValue="persistentPlaceholder = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch19>
            <Switches
              :value="readonly"
              label="readonly"
              @getValue="readonly = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch20>
            <Switches
              :value="returnObject"
              label="return-object"
              @getValue="returnObject = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch21>
            <Switches
              :value="reverse"
              label="reverse"
              @getValue="reverse = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch22>
            <Switches
              :value="singleLine"
              label="single-line"
              @getValue="singleLine = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch23>
            <Switches
              :value="smallChips"
              label="small-chips"
              @getValue="smallChips = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch24>
            <Switches
              :value="success"
              label="success"
              @getValue="success = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch25>
            <Switches
              :value="validateOnBlur"
              label="validater-on-blur"
              @getValue="validateOnBlur = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:slider>
            <Sliders
              :value="appendIcon"
              label="apend-icon"
              :max="iconList.length - 1"
              :tick="iconList"
              pre="mdi-"
              @getValue="appendIcon = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="appendOuterIcon"
              label="append-outer-icon"
              :max="iconList.length - 1"
              :tick="iconList"
              pre="mdi-"
              @getValue="appendOuterIcon = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="clearIcon"
              label="clear-icon"
              :max="iconList.length - 1"
              :tick="iconList"
              pre="mdi-"
              @getValue="clearIcon = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="counter"
              label="counter"
              :max="50"
              :thumb="true"
              :default="25"
              @getValue="counter = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="errorCount"
              label="error-count"
              :max="3"
              :thumb="true"
              :default="1"
              @getValue="errorCount = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="errorMessages"
              label="error-messages"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="errorMessages = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="hint"
              label="hint"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="hint = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="label"
              label="label"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="label = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="messages"
              label="messages"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="messages = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="noDataText"
              label="no-data-text"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="noDataText = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="placeholder"
              label="placeholder"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="placeholder = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="prefix"
              label="prefix"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="prefix = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="prependIcon"
              label="prepend-icon"
              :max="iconList.length - 1"
              :tick="iconList"
              pre="mdi-"
              @getValue="prependIcon = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="prependInnerIcon"
              label="prepend-inner-icon"
              :max="iconList.length - 1"
              :tick="iconList"
              pre="mdi-"
              @getValue="prependInnerIcon = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="successMessages"
              label="success-messages"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="successMessages = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="suffix"
              label="suffix"
              :max="textList.length - 1"
              :tick="textList"
              @getValue="suffix = $event"
              @getObject="pushValue"
            ></Sliders>
          </template>
        </Grid>
        <Grid switch="13">
          <template v-slot:switch1>
            <Switches
              :value="dense"
              label="dense"
              @getValue="dense = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch2>
            <Switches
              :value="eager"
              label="eager"
              @getValue="eager = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch3>
            <Switches
              :value="filled"
              label="filled"
              @getValue="filled = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch4>
            <Switches
              :value="flat"
              label="flat"
              @getValue="flat = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch5>
            <Switches
              :value="fullWidth"
              label="full-width"
              @getValue="fullWidth = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch6>
            <Switches
              :value="loading"
              label="loading"
              @getValue="loading = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch7>
            <Switches
              :value="outlined"
              label="outlined"
              @getValue="outlined = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch8>
            <Switches
              :value="rounded"
              label="rounded"
              @getValue="rounded = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch9>
            <Switches
              :value="shaped"
              label="shaped"
              @getValue="shaped = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch10>
            <Switches
              :value="solo"
              label="solo"
              @getValue="solo = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:switch11>
            <Switches
              :value="soloInverted"
              label="solo-inverted"
              @getValue="soloInverted = $event"
              @getObject="pushProps"
            ></Switches>
          </template>
          <template v-slot:slider>
            <Sliders
              :value="backgroundColor"
              label="background-color"
              :max="colorList.length - 1"
              :tick="colorList"
              @getValue="backgroundColor = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="color"
              label="color"
              :max="colorList2.length - 1"
              :tick="colorList2"
              @getValue="color = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="itemColor"
              label="item-color"
              :max="colorList2.length - 1"
              :tick="colorList2"
              @getValue="itemColor = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="loaderHeight"
              label="loader-height"
              :max="10"
              :thumb="true"
              :default="2"
              @getValue="loaderHeight = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="type"
              label="type"
              :max="types.length - 1"
              :tick="types"
              @getValue="type = $event"
              @getObject="pushValue"
            ></Sliders>
            <Sliders
              :value="height"
              label="height"
              :max="heightList.length - 1"
              :tick="heightList"
              @getValue="height = $event"
              @getObject="pushValue"
            ></Sliders>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Switches from '@/components/Switches.vue';
import Sliders from '@/components/Sliders.vue';

export default {
  name: 'Autocompletes',
  components: {
    Switches,
    Sliders,
  },
  data() {
    return {
      attr: [{ name: 'v-model', value: 'value' }],
      dark: false,
      light: false,
      allowOverflow: true,
      appendIcon: 0,
      appendOuterIcon: 0,
      autoSelectFirst: false,
      autofocus: false,
      backgroundColor: 0,
      cacheItems: false,
      chips: false,
      clearIcon: 0,
      clearable: true,
      color: 0,
      counter: 25,
      deletableChips: false,
      dense: false,
      disableLookup: false,
      disabled: false,
      eager: false,
      error: false,
      errorCount: 1,
      errorMessages: 0,
      filled: false,
      flat: false,
      fullWidth: false,
      hideDetails: undefined,
      hideNoData: false,
      hideSelected: false,
      hint: 0,
      itemColor: 0,
      items: [
        { header: 'Group 1' },
        {
          text: 'foo text',
          value: 'foo value',
          disabled: false,
        },
        {
          text: 'bar text',
          value: 'bar value',
          disabled: false,
        },
        {
          text: 'baz text',
          value: 'baz value',
          disabled: false,
        },
        { divider: true },
        { header: 'Group 2' },
        {
          text: 'qux text',
          value: 'qux value',
          disabled: false,
        },
        {
          text: 'quux text',
          value: 'quux value',
          disabled: true,
        },
        {
          text: 'corge text',
          value: 'corge value',
          disabled: false,
        },
      ],
      label: 0,
      loaderHeight: 2,
      loading: false,
      messages: 0,
      multiple: false,
      noDataText: 0,
      noFilter: false,
      openOnClear: false,
      outlined: false,
      persistentHint: false,
      persistentPlaceholder: false,
      placeholder: 0,
      prefix: 0,
      prependIcon: 0,
      prependInnerIcon: 0,
      readonly: false,
      returnObject: false,
      reverse: false,
      rounded: false,
      shaped: false,
      singleLine: false,
      smallChips: false,
      solo: false,
      soloInverted: false,
      success: false,
      successMessages: 0,
      suffix: 0,
      type: 0,
      types: ['', 'name', 'email', 'hidden'],
      validateOnBlur: false,
      value: undefined,
      colorList: ['', 'primary', 'orange'],
      colorList2: ['', 'success', 'orange'],
      iconList: ['', 'chevron-down', 'city'],
      textList: ['', 'sample text'],
      height: 0,
      heightList: ['', '100px', '200px', '300px', '50%', '75%', '100%'],
      panel: false,
      exampleItems: [
        {
          text: 'string | number | object',
          value: 'string | number | object',
          disabled: 'boolean',
          divider: 'boolean',
          header: 'string',
        },
      ],
    };
  },
  computed: {
    computedItemColor() {
      let value = this.colorList2[this.itemColor];
      value ? null : (value = 'primary');
      return value;
    },
    computedAppendIcon() {
      let value = this.iconList[this.appendIcon];
      value ? (value = `mdi-${value}`) : (value = '$dropdown');
      return value;
    },
    computedAppendOuterIcon() {
      let value = this.iconList[this.appendOuterIcon];
      value ? (value = `mdi-${value}`) : null;
      return value;
    },
    computedBackgroundColor() {
      let value = this.colorList[this.backgroundColor];
      return value;
    },
    computedClearIcon() {
      let value = this.iconList[this.clearIcon];
      value ? (value = `mdi-${value}`) : (value = '$clear');
      return value;
    },
    computedColor() {
      let value = this.colorList[this.color];
      return value;
    },
    computedErrorMessages() {
      let value = this.textList[this.errorMessages];
      return value;
    },
    computedHint() {
      let value = this.textList[this.hint];
      return value;
    },
    computedLabel() {
      let value = this.textList[this.label];
      return value;
    },
    computedMessages() {
      let value = this.textList[this.messages];
      return value;
    },
    computedNoDataText() {
      let value = this.textList[this.noDataText];
      value ? null : (value = '$vuetify.noDataText');
      return value;
    },
    computedPlaceholder() {
      let value = this.textList[this.placeholder];
      return value;
    },
    computedPrefix() {
      let value = this.textList[this.prefix];
      return value;
    },
    computedPrependIcon() {
      let value = this.iconList[this.prependIcon];
      value ? (value = `mdi-${value}`) : null;
      return value;
    },
    computedPrependInnerIcon() {
      let value = this.iconList[this.prependInnerIcon];
      value ? (value = `mdi-${value}`) : null;
      return value;
    },
    computedSuccessMessages() {
      let value = this.textList[this.successMessages];
      return value;
    },
    computedSuffix() {
      let value = this.textList[this.suffix];
      return value;
    },
    computedType() {
      let value = this.types[this.type];
      value ? null : (value = 'text');
      return value;
    },
    computedHeight() {
      let value = this.heightList[this.height];
      return value;
    },
    computedAttr() {
      return this.attr;
    },
  },
  methods: {
    pushProps(arg) {
      let attr = this.attr;
      const index = attr.findIndex((obj) => obj.name === arg.name);
      if (!arg.value) {
        attr.push(arg);
      } else if (arg.value === 'false') {
        attr.push(arg);
      } else if (index !== -1) {
        attr.splice(index, 1);
      }
    },
    pushValue(arg) {
      let attr = this.attr;
      const index = attr.findIndex((obj) => obj.name === arg.name);
      if (arg.value) {
        if (index === -1) {
          attr.push(arg);
        } else {
          attr.splice(index, 1);
          attr.push(arg);
        }
      } else if (index !== -1) {
        attr.splice(index, 1);
      }
    },
  },
};
</script>
