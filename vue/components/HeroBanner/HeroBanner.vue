<template>
  <div class="hero-banner-wrap">
    <div class="left-deco">
      <div class="big" />
      <div class="small" />
    </div>
    <div class="deco-wrap">
      <div class="deco bottom s1">&nbsp;</div>
      <div class="deco top s1">&nbsp;</div>
    </div>
    <v-container>
      <slot />
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import './hero-banner-style.scss';
</style>
