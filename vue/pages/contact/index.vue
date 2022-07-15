<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-general">
      <contact />
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
import SiteMap from '~/components/Footer'
import Contact from '~/components/Forms/Contact'

export default {
  components: {
    'main-header': Header,
    'main-footer': SiteMap,
    Contact
  },
  head() {
    return {
      title: 'Contact | ' + brand.agency.desc
    }
  }
}
</script>
