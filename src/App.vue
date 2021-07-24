<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <v-card class="mx-auto overflow-hidden">
      <v-app-bar
        app
        elevate-on-scroll
        :hide-on-scroll="$vuetify.breakpoint.smAndDown"
      >
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-app-bar-title>Navi drawers</v-app-bar-title>
        <v-tabs color="primary" right>
          <v-tabs-slider color="primary"></v-tabs-slider>
          <v-tab
            @click="
              (drawerType = 'temporary'), (drawer = false), (mini = false)
            "
            >Temporary</v-tab
          >
          <v-tab @click="(drawerType = 'miniVariant'), (mini = true)"
            >Mini variant</v-tab
          >
          <v-tab @click="(drawerType = 'hover'), (mini = true)">Hover</v-tab>
        </v-tabs>
        <v-switch
          v-model="$vuetify.theme.dark"
          inset
          color="primary"
          class="mt-6 ml-6"
        ></v-switch>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        :temporary="drawerType === 'temporary'"
        :permanent="drawerType !== 'temporary'"
        :expand-on-hover="drawerType === 'hover'"
        :mini-variant.sync="mini"
      >
        <v-list nav dense>
          <v-btn
            v-if="drawerType === 'miniVariant'"
            icon
            @click.stop="mini = !mini"
          >
            <v-icon>{{
              mini ? 'mdi-chevron-right' : 'mdi-chevron-left'
            }}</v-icon>
          </v-btn>
          <template v-for="nav_list in nav_lists">
            <v-list-item
              v-if="!nav_list.lists"
              :to="nav_list.link"
              :key="nav_list.name"
              @click="menu_close"
            >
              <v-list-item-icon>
                <v-icon>{{ nav_list.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>
                  {{ nav_list.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              v-else
              no-action
              :prepend-icon="nav_list.icon"
              :key="nav_list.name"
              v-model="nav_list.active"
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ nav_list.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>
              <template v-for="list in nav_list.lists">
                <v-list-item
                  v-if="!list.lists"
                  :key="list.name"
                  :to="list.link"
                  @click="drawerType === 'miniVariant' ? (mini = true) : null"
                >
                  <v-list-item-title>
                    {{ list.name }}
                  </v-list-item-title>
                </v-list-item>
                <v-list-group
                  v-else
                  no-action
                  sub-group
                  :key="list.name"
                  v-model="list.active"
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>
                        {{ list.name }}
                      </v-list-item-title>
                    </v-list-item-content>
                  </template>
                  <template v-for="sub in list.lists">
                    <v-list-item
                      :key="sub.name"
                      :to="sub.link"
                      @click="
                        drawerType === 'miniVariant' ? (mini = true) : null
                      "
                    >
                      <v-list-item-title>
                        {{ sub.name }}
                      </v-list-item-title>
                    </v-list-item>
                  </template>
                </v-list-group>
              </template>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-main :class="{ 'ml-14': drawerType !== 'temporary' }">
      <router-view />
      <ScrollTop></ScrollTop>
    </v-main>
    <!-- footer -->
    <v-footer
      color="primary lighten-1"
      padless
      :class="{ 'ml-14': drawerType !== 'temporary' }"
    >
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          text
          rounded
          class="my-2"
        >
          {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
const STORAGE_KEY = 'darkmode';
const themeStorage = {
  fetch: function () {
    const theme = JSON.parse(localStorage.getItem(STORAGE_KEY) || false);
    return theme;
  },
  save: function (theme) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(theme));
  },
};

import ScrollTop from '@/components/ScrollTop.vue';

export default {
  name: 'App',
  components: {
    ScrollTop,
  },
  data() {
    return {
      activeIndex: this.$route.name,
      drawer: false,
      drawerType: 'temporary',
      mini: false,
      //navi
      nav_lists: [
        {
          name: 'home',
          icon: 'mdi-home',
          link: '/',
        },
        {
          name: 'Styles and Animations',
          icon: 'mdi-palette',
          link: '/styles',
          lists: [
            {
              name: 'Border radius',
              link: '/styles/#border-radius',
            },
            {
              name: 'Color',
              link: '/styles/#color',
            },
            {
              name: 'Content',
              link: '/styles/#content',
            },
            {
              name: 'Display helpers',
              link: '/styles/#display-helpers',
            },
            {
              name: 'Elevation',
              link: '/styles/#elevation',
            },
            {
              name: 'Flex',
              link: '/styles/#flex',
            },
            {
              name: 'Float',
              link: '/styles/#float',
            },
            {
              name: 'Spacing',
              link: '/styles/#spacing',
            },
            {
              name: 'Text and typography',
              link: '/styles/#text-and-typography',
            },
            {
              name: 'Transitions',
              link: '/styles/#transitions',
            },
          ],
        },
        {
          name: 'UI Components',
          icon: 'mdi-view-dashboard',
          link: '/components',
          lists: [
            {
              name: 'Alerts',
              link: '/components/#alerts',
            },
            {
              name: 'Aspect ratio',
              link: '/components/#aspect-ratio',
            },
            {
              name: 'Avatars',
              link: '/components/#avatars',
            },
            {
              name: 'Badges',
              link: '/components/#badges',
            },
            {
              name: 'Banners',
              link: '/components/#banners',
            },
            {
              name: 'Bars',
              link: '/components/#bars',
              lists: [
                {
                  name: 'App bars',
                  link: '/components/#app-bars',
                },
                {
                  name: 'System bars',
                  link: '/components/#system-bars',
                },
              ],
            },
            {
              name: 'Bottom navigation',
              link: '/components/#bottom-navigation',
            },
            {
              name: 'Bottom sheets',
              link: '/components/#bottom-sheets',
            },
            {
              name: 'Breadcrumbs',
              link: '/components/#breadcrumbs',
            },
            {
              name: 'Buttons',
              link: '/components/#buttons',
            },
            {
              name: 'Buttons: Floating Action Button',
              link: '/components/#buttons-fab',
            },
            {
              name: 'Calendars',
              link: '/components/#calendars',
            },
          ],
        },
      ],
      //footer
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
    };
  },
  created() {
    this.$vuetify.theme.dark = themeStorage.fetch();
  },
  mounted() {
    const routeInstance = this.$route;
    this.createTitleDesc(routeInstance);
  },
  methods: {
    createTitleDesc(routeInstance) {
      // タイトルを設定
      if (routeInstance.meta.title) {
        const setTitle = routeInstance.meta.title;
        document.title = setTitle;
      } else {
        document.title = 'title is not set';
      }
      // メタタグdescription設定
      if (routeInstance.meta.desc) {
        const setDesc = routeInstance.meta.desc;
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', setDesc);
      } else {
        document
          .querySelector("meta[name='description']")
          .setAttribute('content', 'description is not set');
      }
    },
    //navi
    menu_close() {
      this.nav_lists.forEach((nav_list) => (nav_list.active = false));
    },
  },
  watch: {
    $route(routeInstance) {
      this.createTitleDesc(routeInstance);
      this.activeIndex = this.$route.name;
    },
    theme: {
      handler(value) {
        value === 'dark' ? (value = true) : (value = false);
        themeStorage.save(value);
      },
      deep: true,
    },
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? 'dark' : 'light';
    },
  },
};
</script>

<style lang="scss">
::selection {
  text-shadow: none;
  background: rgba(33, 150, 243, 0.4);
}
</style>
