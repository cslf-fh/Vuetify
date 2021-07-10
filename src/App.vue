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
              <v-list-item
                v-for="list in nav_list.lists"
                :key="list.name"
                :to="list.link"
                @click="drawerType === 'miniVariant' ? (mini = true) : null"
              >
                <v-list-item-title>
                  {{ list.name }}
                </v-list-item-title>
              </v-list-item>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <v-main :class="{ 'ml-14': drawerType !== 'temporary' }">
      <router-view />
      <!-- bottom-navigation -->
      <v-card class="mx-auto overflow-hidden">
        <v-bottom-navigation
          absolute
          color="white"
          hide-on-scroll
          horizontal
          scroll-target="#scroll-threshold-example"
          scroll-threshold="100"
        >
          <v-btn>
            <span>Recents</span>
            <v-icon>mdi-history</v-icon>
          </v-btn>
          <v-btn>
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn>
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
          </v-btn>
        </v-bottom-navigation>
        <v-sheet
          id="scroll-threshold-example"
          class="overflow-y-auto pb-16"
          max-height="200"
        >
          <v-responsive height="300"></v-responsive>
        </v-sheet>
      </v-card>
      <v-bottom-navigation v-model="value" shift>
        <v-btn>
          <span>Video</span>
          <v-icon>mdi-television-play</v-icon>
        </v-btn>
        <v-btn>
          <span>Music</span>
          <v-icon>mdi-music-note</v-icon>
        </v-btn>
        <v-btn>
          <span>Book</span>
          <v-icon>mdi-book</v-icon>
        </v-btn>
        <v-btn>
          <span>Image</span>
          <v-icon>mdi-image</v-icon>
        </v-btn>
      </v-bottom-navigation>
      <!-- bottom-sheet -->
      <v-bottom-sheet inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="red" dark v-bind="attrs" v-on="on"> Open Player </v-btn>
        </template>
        <v-card tile>
          <v-progress-linear
            :value="50"
            class="my-0"
            height="3"
          ></v-progress-linear>

          <v-list>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>The Walker</v-list-item-title>
                <v-list-item-subtitle
                  >Fitz & The Trantrums</v-list-item-subtitle
                >
              </v-list-item-content>

              <v-spacer></v-spacer>

              <v-list-item-icon>
                <v-btn icon>
                  <v-icon>mdi-rewind</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-pause</v-icon>
                </v-btn>
              </v-list-item-icon>

              <v-list-item-icon
                class="ml-0"
                :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }"
              >
                <v-btn icon>
                  <v-icon>mdi-fast-forward</v-icon>
                </v-btn>
              </v-list-item-icon>
            </v-list-item>
          </v-list>
        </v-card>
      </v-bottom-sheet>
      <!-- breadcrumbs -->
      <v-breadcrumbs :items="items" divider="-"></v-breadcrumbs>
      <!-- btn -->
      <v-row align="center" justify="space-around">
        <v-btn>Normal</v-btn>
        <v-btn depressed color="primary"> Primary </v-btn>
        <v-btn class="mx-2" fab dark color="teal">
          <v-icon dark> mdi-format-list-bulleted-square </v-icon>
        </v-btn>
        <v-btn icon color="deep-orange">
          <v-icon>mdi-thumb-up</v-icon>
        </v-btn>
        <v-btn class="ma-2" outlined color="indigo"> Outlined Button </v-btn>
        <v-btn text color="error"> Error </v-btn>
        <!-- btn-float -->
        <v-speed-dial
          v-model="fab"
          bottom
          right
          direction="top"
          transition="slide-y-reverse-transition"
        >
          <template v-slot:activator>
            <v-btn v-model="fab" color="blue darken-2" dark fab>
              <v-icon v-if="fab"> mdi-close </v-icon>
              <v-icon v-else> mdi-account-circle </v-icon>
            </v-btn>
          </template>
          <v-btn fab dark small color="green">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn fab dark small color="indigo">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <v-btn fab dark small color="red">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-speed-dial>
      </v-row>
      <!-- card -->
      <v-card elevation="2" outlined shaped class="mx-auto my-12">
        <v-card-title>Card title</v-card-title>
        <v-card-subtitle>Subtitle text</v-card-subtitle>
        <v-card-text
          >Greyhound divisively hello coldly wonderfully marginally far upon
          excluding.</v-card-text
        >
        <v-divider class="mx-1"></v-divider>
        <v-card-text
          >Greyhound divisively hello coldly wonderfully marginally far upon
          excluding.</v-card-text
        >
        <v-card-actions>
          <v-btn>action</v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="mx-auto" max-width="344">
        <v-card-text>
          <div>Word of the Day</div>
          <p class="display-1 text--primary">el·ee·mos·y·nar·y</p>
          <p>adjective</p>
          <div class="text--primary">
            relating to or dependent on charity; charitable.<br />
            "an eleemosynary educational institution."
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="teal accent-4" @click="reveal = true">
            Learn More
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <v-card
            v-if="reveal"
            class="transition-fast-in-fast-out v-card--reveal"
            style="height: 100%"
          >
            <v-card-text class="pb-0">
              <p class="display-1 text--primary">Origin</p>
              <p>
                late 16th century (as a noun denoting a place where alms were
                distributed): from medieval Latin eleemosynarius, from late
                Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
              </p>
            </v-card-text>
            <v-card-actions class="pt-0">
              <v-btn text color="teal accent-4" @click="reveal = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-expand-transition>
      </v-card>
      <v-card class="mx-auto" max-width="344">
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="200px"
        ></v-img>

        <v-card-title> Top western road trips </v-card-title>

        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>

        <v-card-actions>
          <v-btn color="orange lighten-2" text> Explore </v-btn>

          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he
              could deliver. You won't have time for sleeping, soldier, not with
              all the bed making you'll be doing. Then we'll go with that data
              file! Hey, you add a one and two zeros to that or we walk! You're
              going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
      <!-- carousel -->
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
      <!-- chip -->
      <div class="text-center">
        <v-btn
          v-if="!chip1 && !chip2 && !chip3 && !chip4"
          close
          color="primary"
          dark
          @click="
            (chip1 = true), (chip2 = true), (chip3 = true), (chip4 = true)
          "
        >
          Reset Chips
        </v-btn>

        <v-chip v-if="chip1" class="ma-2" close @click:close="chip1 = false">
          Closable
        </v-chip>

        <v-chip
          v-if="chip2"
          class="ma-2"
          close
          color="red"
          text-color="white"
          @click:close="chip2 = false"
        >
          Remove
        </v-chip>

        <v-chip
          v-if="chip3"
          class="ma-2"
          close
          color="green"
          outlined
          @click:close="chip3 = false"
        >
          Success
        </v-chip>

        <v-chip
          v-if="chip4"
          class="ma-2"
          close
          color="orange"
          label
          outlined
          @click:close="chip4 = false"
        >
          Complete
        </v-chip>
      </div>
      <!-- divider -->
      <v-divider></v-divider>
      <!-- expansion-panels -->
      <v-row justify="center" class="my-4">
        <v-expansion-panels accordion focusable>
          <v-expansion-panel v-for="(item, i) in 5" :key="i">
            <v-expansion-panel-header
              :expand-icon="i % 2 === 0 ? 'mdi-menu-down' : 'mdi-chevron-down'"
              >Item</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-row>
      <!-- grid -->
      <div>
        <v-container
          v-for="align in alignments"
          :key="align"
          class="grey lighten-5 mb-6"
        >
          <v-row :align="align" no-gutters style="height: 150px">
            <v-col v-for="n in 3" :key="n">
              <v-card class="pa-2" outlined tile> One of three columns </v-card>
            </v-col>
          </v-row>
        </v-container>

        <v-container class="grey lighten-5">
          <v-row no-gutters style="height: 150px">
            <v-col v-for="align in alignments" :key="align" :align-self="align">
              <v-card class="pa-2" outlined tile> One of three columns </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <!-- icon -->
      <v-card>
        <v-row justify="space-around" class="ma-0">
          <v-icon large color="green darken-2"> mdi-domain </v-icon>
          <v-icon large color="blue darken-2"> mdi-message-text </v-icon>
          <v-icon large color="purple darken-2"> mdi-dialpad </v-icon>
          <v-icon large color="teal darken-2"> mdi-email </v-icon>
          <v-icon large color="blue-grey darken-2"> mdi-call-split </v-icon>
          <v-icon large color="orange darken-2">
            mdi-arrow-up-bold-box-outline
          </v-icon>
        </v-row>
      </v-card>
      <!-- image, lazy -->
      <v-container fluid>
        <div class="d-flex flex-column justify-space-between align-center">
          <v-slider
            v-model="width"
            class="align-self-stretch"
            min="200"
            max="500"
            step="1"
          ></v-slider>
          <v-lazy
            v-model="isActive"
            :options="{
              threshold: 0.5,
            }"
            transition="fade-transition"
          >
            <v-img
              :aspect-ratio="16 / 9"
              :width="width"
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
          </v-lazy>
        </div>
        <v-row justify="space-around">
          <v-col cols="5">
            <div class="title mb-1">Default (cover)</div>
            <div class="subheading">Matching</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
              gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
            ></v-img>
            <div class="subheading pt-4">Too high</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
            ></v-img>
            <div class="subheading pt-4">Too low</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.4"
            ></v-img>
          </v-col>

          <v-col cols="5">
            <div class="title mb-1">Contain</div>
            <div class="subheading">Matching</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.7"
              contain
            ></v-img>
            <div class="subheading pt-4">Too high</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="2"
              contain
            ></v-img>
            <div class="subheading pt-4">Too low</div>
            <v-img
              src="https://picsum.photos/510/300?random"
              aspect-ratio="1.4"
              contain
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <!-- menu -->
      <v-row justify="space-around">
        <v-menu
          bottom
          origin="center center"
          transition="scale-transition"
          offset-x
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Scale Transition
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in menus" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
          transition="slide-x-transition"
          bottom
          right
          rounded="lg"
          offset-y
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="deep-orange"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Slide X Transition
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-for="(item, i) in menus" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-menu
          transition="slide-y-transition"
          bottom
          rounded="0"
          open-on-hover
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="purple" color="primary" dark v-bind="attrs" v-on="on">
              Slide Y Transition
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, i) in menus" :key="i">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-row>
      <!-- overlay -->
      <div class="text-center">
        <v-btn
          v-click-outside="onClickOutside"
          color="error"
          @click="overlay = !overlay"
        >
          Show Overlay
        </v-btn>
        <v-overlay :value="overlay" opacity="0.5"></v-overlay>
      </div>
      <v-hover>
        <template v-slot:default="{ hover }">
          <v-card class="mx-auto" max-width="344">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"
            ></v-img>

            <v-card-text>
              <h2 class="text-h6 primary--text">Magento Forests</h2>
              Travel to the best outdoor experience on planet Earth. A vacation
              you will never forget!
            </v-card-text>

            <v-card-title>
              <v-rating
                :value="4"
                dense
                color="orange"
                background-color="orange"
                hover
                class="mr-2"
              ></v-rating>
              <span class="primary--text text-subtitle-2">64 Reviews</span>
            </v-card-title>

            <v-fade-transition>
              <v-overlay v-if="hover" absolute color="#036358">
                <v-btn>See more info</v-btn>
              </v-overlay>
            </v-fade-transition>
          </v-card>
        </template>
      </v-hover>
      <!-- pagenation -->
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="15"
          :total-visible="7"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
      <!-- parallax -->
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      ></v-parallax>
      <!-- color picker -->
      <v-color-picker
        class="ma-2"
        show-swatches
        swatches-max-height="100px"
      ></v-color-picker>
      <!-- date picker -->
      <v-row align="center">
        <v-checkbox v-model="landscape" label="Landscape"></v-checkbox>
        <v-date-picker
          v-model="picker"
          :landscape="landscape"
          show-adjacent-months
          readonly
        ></v-date-picker>
      </v-row>
      <!-- time picker -->
      <v-row justify="space-around" align="center">
        <v-time-picker v-model="timePicker" scrollable></v-time-picker>
      </v-row>
      <!-- progress circular -->
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <!-- progress liner -->
      <div>
        <v-progress-linear color="pink" value="15"></v-progress-linear>
        <v-progress-linear color="lime" indeterminate></v-progress-linear>
        <v-progress-linear
          buffer-value="55"
          color="success"
          stream
          value="30"
        ></v-progress-linear>
      </div>
      <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        color="deep-purple accent-4"
      ></v-progress-linear>
      <v-container style="height: 282px">
        <v-row class="fill-height" align="center" justify="center">
          <v-scale-transition>
            <div v-show="!loading" class="text-center">
              <v-btn
                v-click-outside="onClickOutsideLoading"
                color="primary"
                @click="loading = true"
              >
                Start loading
              </v-btn>
            </div>
          </v-scale-transition>
        </v-row>
      </v-container>
      <!-- rating -->
      <div class="text-center mt-12">
        <v-rating
          v-model="rating"
          color="yellow darken-3"
          background-color="grey darken-1"
          empty-icon="$ratingFull"
          half-increments
          hover
          large
        ></v-rating>
      </div>
      <!-- sheet -->
      <v-sheet
        color="warning"
        elevation="1"
        height="135"
        rounded
        width="149"
      ></v-sheet>
      <!-- skeleton loaders -->
      <v-sheet
        :color="`primary ${$vuetify.theme.dark ? 'darken-2' : 'lighten-4'}`"
        class="pa-3"
      >
        <v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-sheet>
      <!-- snackbars -->
      <div class="text-center ma-2">
        <v-btn dark @click="snackbar = true"> Open Snackbar </v-btn>
        <v-snackbar v-model="snackbar">
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="primary"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
      <!-- steppers -->
      <v-stepper v-model="e1">
        <v-stepper-header>
          <v-stepper-step :complete="e1 > 1" step="1">
            Name of step 1
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step :complete="e1 > 2" step="2">
            Name of step 2
          </v-stepper-step>

          <v-divider></v-divider>

          <v-stepper-step step="3"> Name of step 3 </v-stepper-step>
        </v-stepper-header>

        <v-stepper-items>
          <v-stepper-content step="1">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 2"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="2">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 3"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="e1 = 1"> Continue </v-btn>

            <v-btn text> Cancel </v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
      <v-stepper v-model="e6" vertical>
        <v-stepper-step :complete="e6 > 1" step="1">
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 2" step="2">
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="e6 > 3" step="3">
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4"> View setup instructions </v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
          <v-btn text> Cancel </v-btn>
        </v-stepper-content>
      </v-stepper>
      <!-- subheader -->
      <v-subheader inset> Subheader </v-subheader>
      <!-- tooltips -->
      <div class="text-center d-flex align-center justify-space-around">
        <v-tooltip left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Left </v-btn>
          </template>
          <span>Left tooltip</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Top </v-btn>
          </template>
          <span>Top tooltip</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on">
              Bottom
            </v-btn>
          </template>
          <span>Bottom tooltip</span>
        </v-tooltip>

        <v-tooltip right>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark v-bind="attrs" v-on="on"> Right </v-btn>
          </template>
          <span>Right tooltip</span>
        </v-tooltip>
      </div>
      <Calendar></Calendar>
      <Dialog></Dialog>
      <Hover></Hover>
      <Todo></Todo>
      <Sparklines></Sparklines>
      <ScrollTop></ScrollTop>
      <DataIterators></DataIterators>
      <SimpleTables></SimpleTables>
      <DataTables></DataTables>
      <Tab></Tab>
      <Timelines></Timelines>
      <Treeview></Treeview>
      <VirtualScroller></VirtualScroller>
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

import Calendar from '@/components/Calendar.vue';
import Dialog from '@/components/Dialog.vue';
import Hover from '@/components/Hover.vue';
import Todo from '@/components/Todo.vue';
import ScrollTop from '@/components/ScrollTop.vue';
import Sparklines from '@/components/Sparklines.vue';
import DataIterators from '@/components/DataIterators.vue';
import SimpleTables from '@/components/SimpleTables.vue';
import DataTables from '@/components/DataTables.vue';
import Tab from '@/components/Tab.vue';
import Timelines from '@/components/Timelines.vue';
import Treeview from '@/components/Treeview.vue';
import VirtualScroller from '@/components/VirtualScroller.vue';

export default {
  name: 'App',
  components: {
    Dialog,
    Calendar,
    Hover,
    Todo,
    ScrollTop,
    Sparklines,
    DataIterators,
    SimpleTables,
    DataTables,
    Tab,
    Timelines,
    Treeview,
    VirtualScroller,
  },
  data() {
    return {
      activeIndex: this.$route.name,
      drawer: false,
      drawerType: 'temporary',
      mini: false,
      //test
      value: 1, //bottom navigation
      //breadcrumbs
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/#/',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: '/#/',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: '/#/',
        },
      ],
      fab: false, //fab component
      //card
      reveal: false,
      show: false,
      //corousel
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green'],
      slides: ['First', 'Second', 'Third', 'Fourth', 'Fifth'],
      //chip
      chip1: true,
      chip2: true,
      chip3: true,
      chip4: true,
      //footer
      links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
      //grid
      alignments: ['start', 'center', 'end'],
      //image
      width: 300,
      //lazy
      isActive: false,
      //menu
      menus: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
      //overlay
      overlay: false,
      //pagenation
      page: 1,
      //date picker
      picker: new Date().toISOString().substr(0, 7),
      landscape: false,
      //time picker
      timePicker: null,
      //progress linear
      loading: false,
      //rating
      rating: 4.5,
      //snackbars
      snackbar: false,
      text: `Hello, I'm a snackbar`,
      //steppers
      e1: 1,
      e6: 1,
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
        },
        {
          name: 'Directives',
          icon: 'mdi-function',
          link: '/directives',
        },
        {
          name: 'Preminum themes',
          icon: 'mdi-vuetify',
          link: '/preminum_themes',
        },
      ],
    };
  },
  inject: {
    //skeleton-loaders
    inject: {
      theme: {
        default: { isDark: false },
      },
    },
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
    //overlay
    onClickOutside() {
      this.overlay = false;
    },
    //
    onClickOutsideLoading() {
      this.loading = false;
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
//card
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>
