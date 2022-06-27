<template>
  <div class="error-wrap">
    <v-container class="max-md">
      <v-row align="center">
        <v-col cols="12" md="5">
          <div class="flex">
            <div class="illustration">
              <img
                :src="imgAPI.agencyInner[9]"
                :data-2d="imgAPI.agencyInner[8]"
                :data-3d="imgAPI.agencyInner[9]"
                class="img-2d3d"
                alt="error"
              />
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="7">
          <div class="text">
            <h3>
              {{ errCode }}
            </h3>
            <h4 class="display-1">{{ text }}</h4>
            <p>
              {{ $t('common.404_subtitle') }}
            </p>
            <v-btn
              color="primary"
              :href="link.agency.home"
              large
              class="button"
            >
              {{ $t('common.back') }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './error-style.scss';
</style>

<script>
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      link: link,
      imgAPI: imgAPI
    }
  },
  props: {
    errCode: {
      type: Number,
      default: 404
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
