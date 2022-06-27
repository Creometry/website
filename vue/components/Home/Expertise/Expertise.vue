<template>
  <fragment>
    <div class="root">
      <v-container>
        <v-row class="spacing8">
          <v-col cols="12" lg="1" v-if="isDesktop" />
          <v-col cols="12" md="4" class="px-6">
            <div class="title-deco">
              <svg
                v-if="isDesktop"
                fill="#cccccc"
                width="845px"
                height="1099px"
                class="decoration"
              >
                <use xlink:href="/images/agency/wave_decoration.svg#main" />
              </svg>
              <title-deco :text="$t('agency.expertise_title')" />
            </div>
            <u-animate-container>
              <u-animate
                :offset="-50"
                name="zoomInShort"
                delay="0.3s"
                duration="0.3s"
              >
                <div class="illustration-wrap" v-if="loaded">
                  <div>
                    <span class="icon-green" />
                  </div>
                  <div>
                    <span class="icon-violet" />
                  </div>
                  <div>
                    <span class="icon-blue" />
                  </div>
                </div>
              </u-animate>
            </u-animate-container>
          </v-col>
          <v-col
            cols="12"     
            lg="7"
            md="8"
            class="px-6"
          >
            <h4 class="use-text-subtitle">
              {{ $t('agency.expertise_subtitle') }}
            </h4>
            <p class="desc use-text-paragraph">
              {{ $t('agency.expertise_paragraph') }}
            </p>
            <div class="list">
              <v-row>
                <v-col sm="6" cols="12">
                  <div class="desc-icon icon-primary">
                    <v-icon>mdi-checkbox-marked-circle-outline</v-icon>
                  </div>
                  <h3 class="use-text-subtitle">Nulla lobortis nunc</h3>
                  <p class="use-text-paragraph">Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                </v-col>
                <v-col sm="6" cols="12">
                  <div class="desc-icon icon-secondary">
                    <v-icon>mdi-target</v-icon>
                  </div>
                  <h3 class="use-text-subtitle">Vestibulum faucibus</h3>
                  <p class="use-text-paragraph">In id nisi id neque venenatis molestie Quisque lacinia purus ut libero facilisis.</p>
                </v-col>
                <v-col sm="6" cols="12">
                  <div class="desc-icon icon-accent">
                    <v-icon>mdi-speedometer</v-icon>
                  </div>
                  <h3 class="use-text-subtitle">Suspendisse porttitor</h3>
                  <p class="use-text-paragraph">Unc quis sem quis velit tincidunt congue a sit amet ante.</p>
                </v-col>
                <v-col sm="6" cols="12">
                  <div class="desc-icon icon-accent2">
                    <v-icon>mdi-lightbulb-outline</v-icon>
                  </div>
                  <h3 class="use-text-subtitle">Ut sed eros</h3>
                  <p class="use-text-paragraph">In hac habitasse platea dictumst. In mi nulla, fringilla vestibulum finibus et.</p>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </fragment>
</template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../../Title/title-style.scss';
</style>

<script>
import TitleDeco from '../../Title/WithDecoration'

export default {
  components: {
    TitleDeco,
    Slick: () => import('vue-slick')
  },
  data() {
    return {
      loaded: false
    }
  },
  mounted() {
    this.loaded = true
  },
  computed: {
    isDesktop() {
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
