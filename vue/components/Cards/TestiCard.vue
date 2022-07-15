<template>
  <div class="testi-card">
    <v-card class="paper">
      <p>
        {{ text }}
      </p>
      <div class="rating">
        <v-icon
          v-for="index in star"
          :key="'active' + index"
          class="star-icon"
        >
          mdi-star
        </v-icon>
        <v-icon
          v-for="index in 5 - star"
          :key="'inactive' + index"
          class="star-icon-disable"
        >
          mdi-star
        </v-icon>
      </div>
    </v-card>
    <div class="person">
      <v-avatar class="avatar">
        <img
          :alt="name"
          :src="avatar"
        >
      </v-avatar>
      <div class="name">
        <h6 class="title">
          {{ name }}
        </h6>
        <span class="caption">
          {{ title }}
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-card.scss';
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    star: {
      type: Number,
      required: true
    }
  }
}
</script>
