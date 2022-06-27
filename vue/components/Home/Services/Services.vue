<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <h4 class="title-primary">
          {{ $t('agency.services_title') }}
        </h4>
        <v-btn
          :href="link.agency.product"
          color="primary"
          text
          class="view-all"
        >
          {{ $t('common.btn_seeall') }}
          <v-icon>mdi-arrow-right</v-icon>
        </v-btn>
      </v-container>
      <div class="carousel-handle">
        <div v-if="loaded" class="carousel-wrap">
          <slick
            ref="slick"
            :options="slickOptions"
            @afterChange="handleAfterChange"
          >
            <div
              v-for="(item, index) in servicesList"
              :key="index"
              class="item"
            >
              <card
                :title="item.title"
                :desc="item.desc"
                :img="item.img"
                :rating="item.raitng"
                type="over"
              />
            </div>
            <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div>
          </slick>
        </div>
      </div>
      <div class="floating-artwork">
        <v-container class="fixed-width">
          <div class="artwork">
            <slider-art :fade="fade">
              <u-animate
                :offset="-60"
                name="fadeInLeftShort"
                delay="0.3s"
                duration="0.5s"
              >
                <div>
                  <img
                    :src="imgAPI.agency[17]"
                    :data-2d="imgAPI.agency[16]"
                    :data-3d="imgAPI.agency[17]"
                    class="img-2d3d"
                    alt="services 3d"
                  />
                </div>
              </u-animate>
            </slider-art>
            <nav class="arrow">
              <v-btn
                fab
                small
                aria-label="next"
                class="margin"
                @click="next()"
              >
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-btn
                fab
                small
                aria-label="prev"
                class="margin"
                @click="prev()"
              >
                <v-icon>mdi-arrow-right</v-icon>
              </v-btn>
            </nav>
          </div>
        </v-container>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './services-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import link from '~/static/text/link'
import Card from '../../Cards/ProductCard'
import SliderArt from '../SliderArt'

export default {
  components: {
    Card,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false,
      imgAPI: imgAPI,
      link: link,
      fade: false,
      slickOptions: {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      },
      servicesList: [
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.agency[2]
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.agency[3]
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.agency[4]
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgAPI.agency[2]
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgAPI.agency[3]
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgAPI.agency[4]
        }
      ]
    }
  },
  mounted() {
    this.loaded = true
    const props = 1
    const lastSlide = Math.floor(this.servicesList.length + props - this.slickOptions.slidesToShow)
    setTimeout(() => {
      if (window.innerWidth > 1200) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    next: function() {
      this.$refs.slick.next()
    },
    prev: function() {
      this.$refs.slick.prev()
    },
    handleAfterChange(event, slick, currentSlide) {
      const edge = this.servicesList.length - 1 - this.slickOptions.slidesToShow
      if (currentSlide <= edge) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  }
}
</script>
