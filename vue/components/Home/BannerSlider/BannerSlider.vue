<template>
  <div class="banner-wrap">
    <div class="carousel" v-if="loaded">
      <slick
        class="slider-deco"
        ref="sliderDeco"
        :options="slickOptionsDeco"
      >
        <div class="slide" :class="{ cur: currentSlide === 0 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s1">&nbsp;</div>
              <div class="deco top s1">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 1 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s2">&nbsp;</div>
              <div class="deco top s2">&nbsp;</div>
            </div>
          </div>
        </div>
        <div class="slide" :class="{ cur: currentSlide === 2 }">
          <div class="inner">
            <div class="deco-wrap">
              <div class="deco bottom s3">&nbsp;</div>
              <div class="deco top s3">&nbsp;</div>
            </div>
          </div>
        </div>
      </slick>
      <slick
        class="slider"
        ref="slider"
        :options="slickOptions"
        @afterChange="handleAfterChange"
      >
        <div class="slide" id="slide1">
          <div class="inner">
            <v-container>
              <v-row>
                <v-col md="7" lg="6" cols="12" class="px-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('agency.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('agency.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        outlined
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        color="primary"
                        :href="link.agency.register"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col md="5" lg="6" cols="12">
                  <div class="img">
                    <img
                      :src="imgAPI.agency[11]"
                      :data-2d="imgAPI.agency[10]"
                      :data-3d="imgAPI.agency[11]"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide" id="slide2">
          <div class="inner">
            <v-container>
              <v-row justify="end" :class="[isMobile ? 'column-reverse' : 'row']">
                <v-col md="5" lg="6" cols="12">
                  <div class="img">
                    <img
                      :src="imgAPI.agency[13]"
                      :data-2d="imgAPI.agency[12]"
                      :data-3d="imgAPI.agency[13]"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
                <v-col md="7" lg="6" cols="12" class="px-6 d-flex align-center">
                  <div class="text">
                    <h4 class="use-text-title">{{ $t('agency.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('agency.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        outlined
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        color="primary"
                        :href="link.agency.register"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
        <div class="slide center-content" id="slide3">
          <div class="inner">
            <v-container>
              <v-row justify="end">
                <v-col cols="12" class="px-12">
                  <div class="text text-center">
                    <h4 class="use-text-title">{{ $t('agency.banner_title') }}</h4>
                    <h5 class="use-text-subtitle">{{ $t('agency.banner_subtitle') }}</h5>
                    <div class="btn-area">
                      <v-btn
                        outlined
                        large
                        color="primary"
                        href="#"
                        class="button"
                      >
                        {{ $t('common.btn_detail') }}
                      </v-btn>
                      <v-btn
                        large
                        color="primary"
                        :href="link.agency.register"
                        class="button"
                      >
                        {{ $t('common.btn_get') }}
                      </v-btn>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12">
                  <div class="img h-banner">
                    <img
                      :src="imgAPI.agency[15]"
                      :data-2d="imgAPI.agency[14]"
                      :data-3d="imgAPI.agency[15]"
                      class="img-2d3d"
                      alt="banner 1 3D"
                    />
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </div>
      </slick>
    </div>
    <hidden point="smDown">
      <v-container class="max-md">
        <nav class="slide-nav">
          <v-btn
            :class="{ active: currentSlide === 0 }"
            @click="gotoSlide(0)"
            text
          >
            <strong>First Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 1 }"
            @click="gotoSlide(1)"
            text
          >
            <strong>Second Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
          <v-divider class="divider" vertical inset />
          <v-btn
            :class="{ active: currentSlide === 2 }"
            @click="gotoSlide(2)"
            text
          >
            <strong>Third Slide</strong>
            Interdum et malesuada fames ac ante
          </v-btn>
        </nav>
      </v-container>
    </hidden>
  </div>
</template>

<style scoped lang="scss">
@import './banner-styles';
</style>

<script>
import Hidden from '../../Hidden'
import link from '~/static/text/link'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    Hidden,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      currentSlide: 0,
      link: link,
      imgAPI: imgAPI,
      slickOptions: {
        dots: false,
        arrows: false,
        speed: 800,
        slidesToShow: 1,
        infinite: true,
        autoplay: false,
        cssEase: 'ease-out',
        asNavFor: '.slider-deco',
        responsive: [
          {
            breakpoint: 960,
            settings: {
              dots: true,
              fade: true
            }
          }
        ]
      },
      slickOptionsDeco: {
        dots: false,
        arrows: false,
        slidesToShow: 1,
        infinite: true,
        fade: true,
        cssEase: 'ease-out',
        autoplay: false
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      this.currentSlide = currentSlide
    },
    gotoSlide(index) {
      this.$refs.slider.goTo(index)
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
