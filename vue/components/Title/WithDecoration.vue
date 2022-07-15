<template>
  <div>
    <div class="title-deco">
      <h3>
        {{ text }}
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
