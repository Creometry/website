<template>
  <nav class="user-menu">
    <v-btn
      :href="link.agency.register"
      v-if="isDesktop && !isLoggedIn"
      text
    >
      {{ $t('common.join') }}
    </v-btn>
    <v-btn
      v-if="isDesktop && isLoggedIn"
      text
      @click="logout"
    >
      Log out
    </v-btn>
    <v-btn
      v-if="isDesktop"
      :href="link.agency.login"
      color="primary"
    >
      {{ $t('common.dashboard') }}
    </v-btn>
    <v-spacer
      v-if="isDesktop"
      class="vertical-divider"
    />
    <setting-menu />
  </nav>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
import link from '~/static/text/link'
import Settings from './Settings'
import * as Cookie from 'js-cookie'

export default {
  data() {
    return {
      link: link
    }
  },
  components: {
    'setting-menu': Settings
  },
  computed: {
    isDesktop() {
      const smUp = this.$store.state.breakpoints.smUp
      return smUp.indexOf(this.$mq) > -1
    },
    isLoggedIn(){
      const rancher_token = Cookie.get('rancher_token')
      return rancher_token ? true : false
    }
  },
  methods: {
    logout(){
      Cookie.remove('rancher_token')
      Cookie.remove('userId')
      Cookie.remove('username')
      window.location.href = '/'
    }
  }
}
</script>
