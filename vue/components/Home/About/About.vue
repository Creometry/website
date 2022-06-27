<template>
  <div class="root">
    <v-container class="fixed-width">
      <u-animate-container>
        <v-row>
          <v-col cols="12" md="5" class="py-6 ps-lg-15">
            <div class="ms-md-15">
              <title-deco :text="$t('agency.about_title')" />
              <u-animate
                :offset="180"
                name="zoomInShort"
                delay="0.1s"
                duration="0.3s"
              >
                <div class="puzzle" v-if="isDesktop">
                  <div class="piece-small-top">
                    <span />
                  </div>
                  <div class="piece-small-bottom">
                    <span />
                  </div>
                </div>
              </u-animate>
              <u-animate
                :offset="180"
                name="zoomInShort"
                delay="0.3s"
                duration="0.5s"
              >
                <div class="deco">
                  <div class="big" />
                  <div class="medium" />
                  <div class="small" />
                </div>
              </u-animate>
            </div>
          </v-col>
          <v-col cols="12" md="7" class="px-6">
            <div>
              <h4 class="title-default use-text-subtitle">
                {{ $t('agency.about_subtitle') }}
              </h4>
              <counter />
            </div>
          </v-col>
        </v-row>
      </u-animate-container>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../../Title/title-style';
</style>

<script>
import Counter from '../Counter'
import TitleDeco from '../../Title/WithDecoration'

export default {
  components: {
    Counter,
    TitleDeco
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
      const lgUp = this.$store.state.breakpoints.lgUp
      return lgUp.indexOf(this.$mq) > -1
    }
  }
}
</script>
