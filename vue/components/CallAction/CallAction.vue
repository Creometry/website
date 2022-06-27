<template>
  <v-container :class="{ 'fixed-width': mdUp }">
    <u-animate-container>
      <div class="root">
        <u-animate
          :offset="40"
          name="fadeInUpShort"
          delay="0.3s"
          duration="0.5s"
        >
          <v-card class="paper">
            <v-row align="center">
              <v-col cols="12" lg="9" md="8">
                <h4 class="display-1 pb-2">
                  {{ $t('common.about_ready') }}
                </h4>
                <p>
                  Let's build the next big thing together!
                </p>
              </v-col>
              <v-col cols="12" lg="3" md="4" class="ps-sm-8">
                <div class="d-flex align-center justify-center">
                  <v-btn
                    :href="link.agency.contact"
                    block
                    color="white"
                    class="button"
                  >
                    {{ $t('common.btn_contact') }}
                    &nbsp;
                    <v-icon class="icon">mdi-send</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </u-animate>
      </div>
    </u-animate-container>
  </v-container>
</template>

<style lang="scss" scoped>
@import './action-style.scss';
</style>

<script>
import link from '~/static/text/link'

export default {
  data() {
    return {
      link: link
    }
  },
  computed: {
    mdUp() {
      return this.$mq === 'mdDown' || this.$mq === 'lgDown' || this.$mq === 'xl'
    }
  }
}
</script>
