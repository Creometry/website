<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <div class="mt-5">
        <pricing />
      </div>
      <div class="space-top-short">
        <faq />
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Pricing from '~/components/Pricing'
import Faq from '~/components/Faq'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Pricing,
    Faq
  },
  head() {
    return {
      title: brand.agency.name + ' - Pricing'
    }
  }
}
</script>
