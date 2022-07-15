<template>
  <div class="main-wrap">
    <main-header :buttons="false"/>
    <div class="container-general">
        <project-desc/>
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
import Project from '~/components/Project'
import link from '~/static/text/link'

export default {
  components: {
    'main-header': Header,
    'main-footer': Footer,
    'project-desc': Project
  },
  data() {
    return {
      link: link,
    }
  },
  head() {
    return {
      title: 'Project | ' + brand.agency.desc
    }
  }
}
</script>
