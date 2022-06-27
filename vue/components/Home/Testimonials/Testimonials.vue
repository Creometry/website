<template>
  <div class="root">
    <u-animate-container>
      <v-container class="carousel-header">
        <h4 class="title-primary">
          {{ $t('agency.testimonial_title') }}
        </h4>
      </v-container>
      <div v-if="loaded" class="carousel">
        <slick
          ref="slick"
          :options="slickOptions"
          @afterChange="handleAfterChange"
        >
          <div
            v-for="(item, index) in testiContent"
            :key="index"
            class="item"
          >
            <testimonial-card
              :avatar="item.avatar"
              :title="item.title"
              :name="item.name"
              :text="item.text"
              :star="item.rating"
            />
          </div>
          <div class="item" v-if="isDesktop">
            <div class="item-props-last" />
          </div>
        </slick>
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
                <img
                  :src="imgAPI.agency[19]"
                  :data-2d="imgAPI.agency[18]"
                  :data-3d="imgAPI.agency[19]"
                  class="img-2d3d"
                  alt="services 3d"
                />
              </u-animate>
            </slider-art>
          </div>
        </v-container>
      </div>
    </u-animate-container>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import TestimonialCard from '../../Cards/TestiCard'
import SliderArt from '../SliderArt'

export default {
  components: {
    TestimonialCard,
    SliderArt,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      loaded: false,
      fade: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe',
          title: 'Graphic Designer',
          rating: 4
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 3
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe',
          title: 'CEO Software House',
          rating: 5
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin Doe',
          title: 'Senior Graphic Designer',
          rating: 5
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'John Doe',
          title: 'Senior Graphic Designer',
          rating: 4
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Chief Digital Officer',
          rating: 5
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Chief Digital Officer',
          rating: 4
        }
      ],
      slickOptions: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              dots: false,
              slidesToShow: 3,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
    const props = window.innerWidth > 1400 ? 0 : 1 // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.slidesToShow)
    setTimeout(() => {
      if (window.innerWidth > 1279) {
        this.$refs.slick.goTo(lastSlide)
      }
    }, 100)
  },
  methods: {
    handleAfterChange(event, slick, currentSlide) {
      const edge = this.testiContent.length - 1 - this.slickOptions.slidesToShow
      if (currentSlide <= edge) {
        this.fade = true
      } else {
        this.fade = false
      }
    }
  },
  computed: {
    isDesktop() {
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
