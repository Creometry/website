<template>
  <v-container>
    <h3 class="use-text-title use-text-primary text-capitalize text-center mb-4">
      {{ $t('common.pricing_title') }}
    </h3>
    <p class="use-text-subtitle2 text-center mb-4">
      {{ $t('common.pricing_desc') }}
    </p>
    <div class="pricing-wrap">
      <v-row align="center">
        <v-col
          v-for="(tier, index) in tiers"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-lg-2 px-1"
        >
          <pricing-card
            :title="tier.title"
            :subheader="tier.subheader"
            :price="tier.price"
            :description="tier.description"
            :info="tier.info"
            :button-text="tier.buttonText"
            :button-variant="tier.buttonVariant"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import './pricing-style';
</style>

<script>
import PricingCard from '../Cards/PricingCard'

export default {
  components: {
    PricingCard
  },
  data() {
    return {
      tiers: [
        {
          title: 'Free',
          price: '0',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_free',
          buttonVariant: 'outlined'
        },
        {
          title: 'Personal',
          price: '5',
          description: [
            '15 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'outlined'
        },
        {
          title: 'Pro',
          subheader: 'Most popular',
          price: '15',
          description: [
            '20 users included',
            '10 GB of storage',
            'Help center access',
            'Priority email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'contained'
        },
        {
          title: 'Enterprise',
          price: '30',
          description: [
            '50 users included',
            '30 GB of storage',
            'Help center access',
            'Priority email support', 
            'Phone & email support'
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'btn_contact',
          buttonVariant: 'outlined'
        }
      ]
    }
  }
}
</script>
