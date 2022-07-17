<template>
  <div class="main-wrap">
    <main-header :href="redirect" text="login" />
    <div class="container-general">
      <register-form />
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
import RegisterForm from '~/components/Forms/Register'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    RegisterForm
  },
  data() {
    return {
      link: link
    }
  },
  head() {
    return {
      title: 'Register | ' + brand.agency.desc
    }
  },
  computed: {
    redirect() {
      const r = this.$route.query.redirect
      if (r && r!=='/dashboard'){
        return '/login?redirect=' + r
      }else{
        return link.agency.login
      }
    }
  },
}
</script>
