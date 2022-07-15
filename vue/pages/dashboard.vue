<template>
  <div class="main-wrap">
    <main-header :buttons="true" text="home"/>
    <div class="container-general">
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
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
  },
  data() {
    return {
      link: link,
    }
  },
  head() {
    return {
      title: 'Dashboard | ' + brand.agency.desc
    }
  }
}
</script>
