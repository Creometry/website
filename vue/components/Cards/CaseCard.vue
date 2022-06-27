<template>
  <v-btn
    :class="setSize"
    class="case-card"
    @click="showImg"
  >
    <span class="figure">
      <img
        :src="[simple ? logo : bg]"
        alt="img"
      >
    </span>
    <span
      :class="{ 'full-hide': simple }"
      class="property"
    >
      <span class="title">
        <span
          v-if="!simple"
          class="logo"
        >
          <img
            :src="logo"
            alt="logo"
          >
        </span>
        <span class="text">
          <span class="title">
            {{ title }}
          </span>
          <span class="desc">
            {{ desc }}
          </span>
        </span>
      </span>
    </span>
  </v-btn>
</template>

<style lang="scss" scoped>
@import './case-card.scss';
</style>

<script>
export default {
  props: {
    bg: {
      type: String,
      default: ''
    },
    logo: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'medium'
    },
    simple: {
      type: Boolean,
      default: false
    },
    showImg: {
      type: Function,
      default: function() {
        return false
      }
    }
  },
  computed: {
    setSize: function() {
      switch (this.size) {
        case 'small':
          return 'small'
        case 'big':
          return 'big'
        default:
          return 'medium'
      }
    }
  }
}
</script>
