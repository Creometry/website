<template>
  <div class="main-wrap">
    <main-header :href="redirect" text="register" />
    <div class="container-general">
      <login-form />
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header/Basic'
import Footer from '~/components/Footer'
import LoginForm from '~/components/Forms/Login'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    LoginForm
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Login | ' + brand.agency.desc
    }
  },
  computed: {
    redirect() {
      const r = this.$route.query.redirect
      if (r && r!=='/dashboard'){
        return '/register?redirect=' + r
      }else{
        return link.agency.register
      }
    }
  },
}
</script>
