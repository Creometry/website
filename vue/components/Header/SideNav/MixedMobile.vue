<template>
  <fragment>
    <v-list dense>
      <v-list-item
        v-for="(item, index) in menuPrimary"
        :key="index"
        :href="singleNav ? item.link : '/' + item.link"
        :class="{ current: curURL === (curOrigin+langPath+item.link)}"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">
            {{ $t('agency.header_'+item.name) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group class="group-child">
        <template v-slot:activator>
          <v-list-item class="has-child">
            <v-list-item-title class="menu-list">
              {{ $t('common.header_sample_page') }}
            </v-list-item-title>
          </v-list-item>
        </template>
        <v-list
          v-for="(subitem, index) in menuSecondary"
          :key="index"
        >
          <v-subheader class="title-mega">{{ subitem.name }}</v-subheader>
          <v-list-item-group>
            <v-list-item
              v-for="(item, index) in subitem.child"
              :key="index"
              :href="item.link"
              :class="{ current: curURL === (curOrigin+langPath+item.link)}"
            >
              <v-list-item-content>
                <v-list-item-title class="menu-list" v-text="$t('common.header_'+item.name)" />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-list-group>
    </v-list>
    <v-divider />
    <v-list dense v-if="!isLoggedIn">
      <v-list-item
        v-for="(item, index) in ['login', 'register']"
        :key="index"
        :href="link.agency[item]"
        :class="{ current: curURL === (curOrigin+langPath+item)}"
        link
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{ $t('common.header_'+item) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list dense v-if="isLoggedIn">
      <v-list-item
        v-for="(item, index) in ['Dashboard', 'Logout']"
        :key="index"
        :class="{ current: curURL === (curOrigin+langPath+item)}"
        link
        @click="change(item)"
      >
        <v-list-item-content>
          <v-list-item-title class="menu-list">{{item}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </fragment>
</template>

<style scoped lang="scss">
@import '../sidenav-style';
</style>

<script>
import link from '~/static/text/link'
import * as Cookie from 'js-cookie'

export default {
  data() {
    return {
      link: link,
      isOpen: false,
      curURL: '',
      curOrigin: '',
      langPath: ''
    }
  },
  computed: {
    isLoggedIn() {
      return Cookie.get('rancher_token') ? true : false
    }
  },
  mounted() {
    this.curURL = window.location.href
    this.curOrigin = window.location.origin
    this.langPath = '/' + this.$i18n.locale
  },
  methods: {
    change(item) {
      if (item === 'Logout') {
        Cookie.remove('rancher_token')
        Cookie.remove('userId')
        Cookie.remove('username')
        window.location.href = '/'
      } else {
        window.location.href = '/dashboard'
      }
    }
  },
  props: {
    menuPrimary: {
      type: Array,
      required: true
    },
    menuSecondary: {
      type: Array,
      required: true
    },
    singleNav: {
      type: Boolean,
      default: false
    }
  }
}
</script>
