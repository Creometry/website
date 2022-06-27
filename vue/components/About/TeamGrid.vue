<template>
  <u-animate-container>
    <v-row justify="center">
      <v-col
        v-for="index in 9"
        :key="index"
        md="4"
        sm="6"
        cols="12"
        class="pa-5"
      >
        <u-animate
          :offset="-40"
          :delay="(0.2 + (0.1 * index)) + 's'"
          name="fadeInUpShort"
          duration="0.5s"
        >
          <div class="team-item">
            <profile-card
              :connection="100"
              :favorites="10"
              :albums="12"
              :cover="imgAPI.photo[40+index]"
              :avatar="imgAPI.avatar[index]"
              name="John Dalton"
              title="Web Designer"
              type="over"
              orientation="portrait"
            />
          </div>
        </u-animate>
      </v-col>
    </v-row>
  </u-animate-container>
</template>

<style scoped lang="scss">
@import './about-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import ProfileCard from '../Cards/ProfileCard'

export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      imgAPI: imgAPI
    }
  }
}
</script>
