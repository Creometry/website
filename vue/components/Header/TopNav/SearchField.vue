<template>
  <div class="search" id="search" :class="{ short: short}">
    <v-text-field
      :placeholder="$t('common.header_search')"
      outlined
      color="primary"
      single-line
      v-model="search"
    />
    <v-icon class="search-icon" @click="goTo">mdi-magnify</v-icon>
  </div>
</template>

<style lang="scss" scoped>
@import '../header-style.scss';
</style>

<script>
export default {
  props: {
    short: {
      type: Boolean,
      default: false
    }
  },
  mounted(){
    document.getElementById('search').addEventListener('keypress', this.press);
  },
  data: function(){
    return{
      search: ""
    }
  },
  methods:{
    goTo(){
      window.location.href = window.location.origin + window.location.pathname + "?q=" + this.search
    },
    press(event){
      if (event.keyCode == 13) {
          this.goTo()
        }
    }
  }
}
</script>
