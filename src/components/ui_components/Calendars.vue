<template>
  <v-card id="calendars" flat class="background text-center">
    <v-card-title class="text-h4">Calendars</v-card-title>
    <v-card-subtitle class="text--primary text-left text-subtitle-1 mt-0">
      カレンダーを表示するのに使用する。イベントを表示することができる。
      <br />
      <code class="text-subtitle-1">value</code>
      プロパティでカレンダーを表示する期間を指定する。空文字列を返せば今日を表示する。
      <br />
      スロットがいっぱいある。removeチェックボックスは
      <code class="text-subtitle-1">locale</code>
      プロパティを
      <code class="text-subtitle-1">ja</code>
      にしたとき表示される”日”をどうにかしたい場合の
      <code class="text-subtitle-1">day-label</code>
      スロットの例。
      <br />
      関数もいっぱいある。下は現在の表示形式に合わせて戻る
      <code class="text-subtitle-1">prev</code>
      関数の例。
      <br />
      クリックイベントの仕込み、その他スロットや関数についてはまだ全然理解も把握もしていないので、
      <LinkText
        link="href"
        url="https://vuetifyjs.com/ja/components/calendars/"
        text="公式のドキュメント"
        icon="mdi-open-in-new"
      ></LinkText>
      をよく読んで勉強しましょう。
    </v-card-subtitle>
    <v-expansion-panels class="mb-4" v-model="panel" focusable>
      <v-expansion-panel>
        <v-expansion-panel-header
          >eventsプロパティに渡す配列の中身の例
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <Arrays class="mt-4" :arrays="exampleEvents"></Arrays>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-row no-gutters>
      <v-col cols="12" sm="8" lg="6">
        <v-banner class="banner-sticky" app shaped>
          <div class="d-flex justify-space-between align-center pb-3">
            <v-btn icon @click="$refs.calendar.prev()">
              <v-icon>mdi-chevron-left</v-icon>
            </v-btn>
            <v-btn @click="value = ''">today</v-btn>
            <span>today : {{ date }} / value : {{ value }}</span>
            <v-btn icon @click="$refs.calendar.next()">
              <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
          <v-calendar-monthly></v-calendar-monthly>
          <v-sheet height="450">
            <v-calendar
              ref="calendar"
              class="text-left"
              v-model="value"
              :color="computedColor"
              :dark="dark"
              :light="light"
              :type="computedType"
              :weekdays="computedWeekday"
              :firstInterval="firstInterval"
              :first-time="computedFirstTime"
              :hide-header="hideHeader"
              :interval-count="intervalCount"
              :interval-height="intervalHeight"
              :interval-minutes="intervalMinutes"
              :interval-width="intervalWidth"
              :short-intervals="shortIntervals"
              :short-months="shortMonths"
              :short-weekdays="shortWeekdays"
              :show-month-on-first="showMonthOnFirst"
              :show-week="showWeek"
              :categories="categories"
              category-show-all
              :category-days="categoryDays"
              :events="showEvents === true ? events : []"
              :event-color="computedEventColor"
              :event-height="eventHeight"
              :event-margin-bottom="eventMarginBottom"
              :event-more="eventMore"
              :event-overlap-mode="computedEventOverlapMode"
              :event-overlap-threshold="eventOverlapThreshold"
              :eventRipple="eventRipple"
              :event-text-color="computedEventTextColor"
              @change="getEvents"
              :locale="computedLocale"
              @click:event="showEvent"
              @click:more="viewDay"
              @click:date="viewDay"
            >
              <template v-if="remove" v-slot:day-label="{ day, present }">
                <v-btn
                  fab
                  small
                  elevation="0"
                  :color="present ? 'primary' : 'transparent'"
                >
                  {{ day }}
                </v-btn>
              </template>
            </v-calendar>
            <!-- start showEvents window -->
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-btn icon>
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    Cancel
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>
            <!-- end showEvents window -->
          </v-sheet>
          <div class="d-flex justify-space-around">
            <v-checkbox v-model="showEvents" label="show events"></v-checkbox>
            <v-checkbox
              v-model="remove"
              :disabled="computedLocale === 'en'"
              label="remove '日'"
            ></v-checkbox>
          </div>
          <div class="py-3"></div>
          <Code
            tag="v-calendar"
            :attr="computedAttr"
            :nest="remove"
            :slots="true"
            slotName="day-label"
            slotProps="day, present"
            tagNest="v-btn"
            :attrNest="[
              { name: 'fab' },
              { name: 'small' },
              { name: 'elevation', value: '0' },
              { name: ':color', value: 'present ? `primary` : `transparent`' },
            ]"
            :textsNest="true"
            :textNest="'{{ day }}'"
          ></Code>
          <div class="py-3"></div>
          <Code
            tag="v-btn"
            :attr="[{ name: '@click', value: '$refs.calendar.prev()' }]"
          ></Code>
        </v-banner>
      </v-col>
      <v-col cols="12" sm="4" lg="6">
        <Grid switch="2">
          <template v-slot:switch1>
            <v-switch v-model="dark" label="dark" class="ma-0"></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch v-model="light" label="light" class="ma-0"></v-switch>
          </template>
        </Grid>
        <Grid switch="7">
          <template v-slot:switch1>
            <v-switch
              v-model="eventMore"
              label="event-more"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-switch
              v-model="eventRipple"
              label="event-ripple"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch3>
            <v-switch
              v-model="hideHeader"
              label="hide-header"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="shortMonths"
              label="short-months"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch5>
            <v-switch
              v-model="shortWeekdays"
              label="short-weekdays"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch6>
            <v-switch
              v-model="showMonthOnFirst"
              label="show-month-on-first"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch7>
            <v-switch
              v-model="showWeek"
              label="show-week"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="type"
              v-model="type"
              :max="types.length - 1"
              :tick-labels="types"
            ></v-slider>
            <v-slider
              label="weekday"
              v-model="weekday"
              :max="weekdays.length - 1"
              :tick-labels="weekdaysText"
            ></v-slider>
            <v-slider
              label="category-days"
              v-model="categoryDays"
              max="7"
              thumb-label
            ></v-slider>
            <v-slider
              label="color"
              v-model="color"
              :max="colorList.length - 1"
              :tick-labels="colorList"
            ></v-slider>
            <v-slider
              label="event-color"
              v-model="eventColor"
              :max="eventColors.length - 1"
              :tick-labels="eventColors"
            ></v-slider>
            <v-slider
              label="event-height"
              v-model="eventHeight"
              max="50"
              thumb-label
            ></v-slider>
            <v-slider
              label="event-margin-bottom"
              v-model="eventMarginBottom"
              max="10"
              thumb-label
            ></v-slider>
            <v-slider
              label="event-text-color"
              v-model="eventTextColor"
              :max="eventTextColors.length - 1"
              :tick-labels="eventTextColors"
            ></v-slider>
            <v-slider
              label="locale"
              v-model="locale"
              :max="locales.length - 1"
              :tick-labels="locales"
            ></v-slider>
          </template>
        </Grid>
        <div class="text-left py-3">props for day in type</div>
        <Grid switch="4">
          <template v-slot:switch1>
            <v-switch
              v-model="firstTime"
              label="first-time"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:switch2>
            <v-slider
              label="hour"
              v-model="hour"
              max="24"
              thumb-label
              :disabled="!firstTime"
            ></v-slider>
          </template>
          <template v-slot:switch3>
            <v-slider
              label="minute"
              v-model="minute"
              max="60"
              thumb-label
              :disabled="!firstTime"
            ></v-slider>
          </template>
          <template v-slot:switch4>
            <v-switch
              v-model="shortIntervals"
              label="short-intervals"
              class="ma-0"
            ></v-switch>
          </template>
          <template v-slot:slider>
            <v-slider
              label="event-overlap-mode"
              v-model="eventOverlapMode"
              :max="eventOverlapModes.length - 1"
              :tick-labels="eventOverlapModes"
            ></v-slider>
            <v-slider
              label="event-overlap-threshold"
              v-model="eventOverlapThreshold"
              max="100"
              thumb-label
            ></v-slider>
            <v-slider
              label="first-interval"
              v-model="firstInterval"
              max="24"
              thumb-label
            ></v-slider>
            <v-slider
              label="interval-count"
              v-model="intervalCount"
              max="30"
              thumb-label
            ></v-slider>
            <v-slider
              label="interval-height"
              v-model="intervalHeight"
              max="100"
              thumb-label
            ></v-slider>
            <v-slider
              label="interval-minutes"
              v-model="intervalMinutes"
              max="90"
              step="15"
              thumb-label
            ></v-slider>
            <v-slider
              label="interval-width"
              v-model="intervalWidth"
              max="100"
              thumb-label
            ></v-slider>
          </template>
        </Grid>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      attr: [],
      value: '',
      date: '',
      color: 0,
      colorList: ['', 'primary', 'orange'],
      dark: false,
      light: false,
      type: 0,
      types: [
        'month',
        'week',
        'day',
        '4day',
        'custom-weekly',
        'custom-daily',
        'category',
      ],
      weekday: 0,
      weekdays: [
        [0, 1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6, 0],
        [1, 2, 3, 4, 5],
        [1, 3, 5],
      ],
      weekdaysText: ['Sun - Sat', 'Mon - Sun', 'Mon - Fri', 'Mon, Wed, Fri'],
      firstInterval: 0,
      firstTime: false,
      hour: 15,
      minute: 30,
      hideHeader: false,
      intervalCount: 24,
      intervalHeight: 48,
      intervalMinutes: 60,
      intervalWidth: 60,
      shortIntervals: true,
      shortMonths: true,
      shortWeekdays: true,
      showMonthOnFirst: true,
      showWeek: false,
      categories: ['category 1', 'category 2'],
      categoryDays: 1,
      showEvents: false,
      events: [],
      colors: [
        'blue',
        'indigo',
        'deep-purple',
        'cyan',
        'green',
        'orange',
        'grey darken-1',
      ],
      names: [
        'Meeting',
        'Holiday',
        'PTO',
        'Travel',
        'Event',
        'Birthday',
        'Conference',
        'Party',
      ],
      eventColor: 0,
      eventColors: ['primary', 'orange', 'random'],
      eventHeight: 20,
      eventMarginBottom: 1,
      eventMore: true,
      eventOverlapMode: 0,
      eventOverlapModes: ['stack', 'column'],
      eventOverlapThreshold: 60,
      eventRipple: true,
      eventTextColor: 0,
      eventTextColors: ['white', 'success', 'red'],
      locale: 0,
      locales: ['en', 'ja'],
      remove: false,
      exampleEvents: [
        {
          name: 'string //名前',
          start:
            'new Data(dateString | year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]) //開始時刻',
          end: 'new Data(dateString | year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]) //終了時刻',
          color: 'string //ラベルの色',
          timed: 'boolean //終日ならfalse',
          category: 'string //カテゴリー表示する場合',
        },
      ],
      panel: false,
      //data for showEvent methods
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
    };
  },
  created() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    this.date += `${year}-${month}-${date}`;
  },
  mounted() {
    this.$refs.calendar.checkChange();
  },
  computed: {
    computedColor() {
      let color = this.colorList[this.color];
      return color;
    },
    computedType() {
      let type = this.types[this.type];
      return type;
    },
    computedWeekday() {
      const weekday = this.weekdays[this.weekday];
      return weekday;
    },
    computedFirstTime() {
      let firstTime = '';
      const hour = this.hour;
      const minute = this.minute;
      this.firstTime === true
        ? (firstTime += `${hour}:${minute}`)
        : (firstTime = undefined);
      return firstTime;
    },
    computedEventColor() {
      let events = this.events;
      let eventColor = this.eventColors[this.eventColor];
      for (let i = 0; i < events.length; i++) {
        eventColor === 'random'
          ? (events[i].color = this.colors[this.rnd(0, this.colors.length - 1)])
          : (events[i].color = eventColor);
      }
      eventColor === 'random' ? (eventColor = 'primary') : null;
      return eventColor;
    },
    computedEventOverlapMode() {
      let eventOverlapMode = this.eventOverlapModes[this.eventOverlapMode];
      return eventOverlapMode;
    },
    computedEventTextColor() {
      let eventTextColor = this.eventTextColors[this.eventTextColor];
      return eventTextColor;
    },
    computedLocale() {
      let locale = this.locales[this.locale];
      return locale;
    },
    computedAttr() {
      return this.attrArray();
    },
  },
  methods: {
    attrArray() {
      this.attr = [];
      let attr = this.attr;
      this.checkValueAsText(attr, true, 'calendar', 'ref', false);
      this.checkValueAsText(attr, true, 'value', 'v-model', false);
      this.checkValueAsText(
        attr,
        this.showEvents,
        'eventsArray',
        ':events',
        false
      );
      this.checkBoolean(attr, this.dark, 'dark');
      this.checkBoolean(attr, this.light, 'light');
      this.checkValuePrefix(attr, this.eventMore, ':', 'event-more', true);
      this.checkValuePrefix(attr, this.eventRipple, ':', 'event-ripple', true);
      this.checkBoolean(attr, this.hideHeader, 'hide-header');
      this.checkValuePrefix(attr, this.shortMonths, ':', 'short-months', true);
      this.checkValuePrefix(
        attr,
        this.shortWeekdays,
        ':',
        'short-weekdays',
        true
      );
      this.checkValuePrefix(
        attr,
        this.showMonthOnFirst,
        ':',
        'show-month-on-first',
        true
      );
      this.checkBoolean(attr, this.showWeek, 'show-week');
      this.checkValue(attr, this.computedType, 'type', 'month');
      this.checkValueAsText(
        attr,
        this.computedWeekday,
        `[${this.computedWeekday}]`,
        ':weekday',
        this.weekdays[0]
      );
      this.checkValue(attr, this.categoryDays, 'category-days', 1);
      this.checkValue(attr, this.computedColor, 'color', '');
      this.checkValue(attr, this.computedEventColor, 'event-color', 'primary');
      this.checkValue(attr, this.eventHeight, 'event-height', 20);
      this.checkValue(attr, this.eventMarginBottom, 'event-margin-bottom', 1);
      this.checkValue(
        attr,
        this.computedEventTextColor,
        'event-text-color',
        'white'
      );
      this.checkValue(attr, this.computedLocale, 'locale', 'en');
      this.checkValue(attr, this.computedFirstTime, 'first-time', undefined);
      this.checkValuePrefix(
        attr,
        this.shortIntervals,
        ':',
        'short-intervals',
        true
      );
      this.checkValue(
        attr,
        this.computedEventOverlapMode,
        'event-overlap-mode',
        'stack'
      );
      this.checkValue(
        attr,
        this.eventOverlapThreshold,
        'event-overlap-threshold',
        60
      );
      this.checkValue(attr, this.firstInterval, 'first-interval', 0);
      this.checkValue(attr, this.intervalCount, 'interval-count', 24);
      this.checkValue(attr, this.intervalHeight, 'interval-height', 48);
      this.checkValue(attr, this.intervalMinutes, 'interval-minutes', 60);
      this.checkValue(attr, this.intervalWidth, 'interval-width', 60);
      return attr;
    },
    //get random events
    getEvents({ start, end }) {
      const events = [];
      const min = new Date(`${start.date}T00:00:00`);
      const max = new Date(`${end.date}T23:59:59`);
      const days = (max.getTime() - min.getTime()) / 86400000;
      const eventCount = this.rnd(days, days + 20);
      for (let i = 0; i < eventCount; i++) {
        const allDay = this.rnd(0, 3) === 0;
        const firstTimestamp = this.rnd(min.getTime(), max.getTime());
        const first = new Date(firstTimestamp - (firstTimestamp % 900000));
        const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000;
        const second = new Date(first.getTime() + secondTimestamp);
        events.push({
          name: this.names[this.rnd(0, this.names.length - 1)],
          start: first,
          end: second,
          timed: !allDay,
          category: this.categories[this.rnd(0, this.categories.length - 1)],
        });
      }
      this.events = events;
    },
    rnd(a, b) {
      return Math.floor((b - a + 1) * Math.random()) + a;
    },
    //move day in type
    viewDay({ date }) {
      this.focus = date;
      this.type = 'day';
    },
    //open window for events
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        requestAnimationFrame(() =>
          requestAnimationFrame(() => (this.selectedOpen = true))
        );
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        requestAnimationFrame(() => requestAnimationFrame(() => open()));
      } else {
        open();
      }

      nativeEvent.stopPropagation();
    },
  },
};
</script>
