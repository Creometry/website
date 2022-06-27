<template>
  <div class="deco">
    <div
      v-if="isDesktop"
      :class="{fade: fade}"
      class="figure"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './slider-art-style';
</style>

<script>
export default {
  props: {
    fade: {
      type: Boolean,
      default: false
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
