<template>
  <v-card
    :class="{ bg: title === 'Pro'}"
    class="center-box price-card"
  >
    <v-card-title class="price-header justify-center">
      <h5
        :class="title === 'Free' ? 'secondary--text' : ''"
        class="text-xs-center"
      >
        {{ title }}
      </h5>
      <v-icon
        v-if="title === 'Pro'"
        class="icon"
      >
        mdi-star-outline
      </v-icon>
      <div class="card-pricing">
        <h2
          :class="title === 'Free' ? 'use-text-secondary' : 'use-text-primary'"
          class="use-text-title text-xs-center"
        >
          DT{{ price }}
        </h2>
        <h6 class="title">
          &nbsp;/ mo
        </h6>
      </div>
    </v-card-title>
    <v-card-text class="pa-4">
      <ul>
        <li
          v-for="(line, index) in description"
          :key="index"
          class="text-center subtitle-1"
        >
          {{ line }}
        </li>
      </ul>
    </v-card-text>
    <div class="btn-area" :class="title === 'Free' ? 'secondary-color' : 'primary-color'">
      <p>{{ info }}</p>
      <v-btn
        :color="title === 'Proceed' ? 'secondary' : 'primary'"
        block
        @click="redirect"
      >
        {{ $t('common.' + buttonText) }}
      </v-btn>
      
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './pricing-card';
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    subheader: {
      type: String,
      default: ''
    },
    price: {
      type: String,
    },
    description: {
      type: Array,
      required: true
    },
    info: {
      type: String,
      default: ''
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonVariant: {
      type: String,
      default: 'outlined'
    }
  },
  methods: {
    redirect() {
      window.location.href = '/project?plan='+this.title;
    }
  },
}
</script>
