<template>
   <v-card v-ripple class="blog-headline" dark>
    <v-img
      :src="imgAPI.photo[0]"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.8)"
      height="460px"
    >
      <a :href="link.agency.blogDetail" class="anchor-content">
        <v-card-title class="headline-title use-text-title">Pellentesque habitant morbi tristique senectus Proin pretium arcu eget.</v-card-title>
        <v-card-subtitle class="use-text-subtitle">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents. </v-card-subtitle>
      </a>
    </v-img>
  </v-card>
</template>

<style scoped lang="scss">
@import './blog-style.scss';
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      imgAPI: imgAPI,
      link: link
    }
  }
}
</script>
