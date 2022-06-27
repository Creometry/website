<template>
  <hero-banner>
    <div class="banner-wrap">
      <div class="inner">
        <v-container>
          <v-row align="center" justify="center">
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="text">
                <h4 class="use-text-title">The 'cloud' made easy! </h4>
                <h5 class="use-text-subtitle2">Serverless-style containers across clouds and edge</h5>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="px-sm-5 px-0">
              <div class="img">
                <slot />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </hero-banner>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import HeroBanner from '../HeroBanner'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    HeroBanner
  },
  data() {
    return {
      imgAPI
    }
  }
}
</script>
