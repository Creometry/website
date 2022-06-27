<template>
  <fragment>
    <vue-easy-lightbox
      v-if="loaded"
      :visible="visible"
      :imgs="imgs"
      :index="index"
      @hide="handleHide"
    />
    <v-container>
      <div class="gallery-root">
        <h4 class="use-text-title2 mb-3 use-text-primary">
          {{ $t('common.about_gallery') }}
        </h4>
        <p class="use-text-subtitle2">Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div class="carousel" v-if="loaded">
          <v-btn
            icon
            class="nav prev"
            @click="slickPrev()"
          >
            <v-icon large>mdi-arrow-left</v-icon>
          </v-btn>
          <slick
            ref="slider"
            :options="slickOptions"
          >
            <div
              v-for="(index) in 6"
              :key="index"
              class="item px-3"
              @click="() => showImg(index - 1)"
            >
              <media-card
                :thumb="imgAPI.photo[10 + index]"
                title="Sed lacinia velit, ut malesuada eros interdum a"
                orientation="portrait"
                type="photo"
              />
            </div>
          </slick>
          <v-btn
            icon
            class="nav next"
            @click="slickNext()"
          >
            <v-icon large>mdi-arrow-right</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </fragment>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import MediaCard from '../Cards/MediaCard'
import imgAPI from '~/static/images/imgAPI'

export default {
  components: {
    MediaCard,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      imgAPI: imgAPI,
      visible: false,
      index: 0,
      item: 0,
      loaded: false,
      imgs: [
        imgAPI.photo[11],
        imgAPI.photo[12],
        imgAPI.photo[13],
        imgAPI.photo[14],
        imgAPI.photo[15],
        imgAPI.photo[16]
      ],
      slickOptions: {
        dots: false,
        arrows: false,
        slidesToShow: 3,
        infinite: false,
        autoplay: false,
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    }
  },
  mounted() {
    this.loaded = true
  },
  methods: {
    slickNext() {
      this.$refs.slider.next()
    },
    slickPrev() {
      this.$refs.slider.prev()
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>
