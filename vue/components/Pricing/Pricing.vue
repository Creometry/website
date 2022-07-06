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
          class="px-lg-2 px-6"
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
      <br>
      <pricing-card
            :title="entrepriseTier.title"
            :subheader="entrepriseTier.subheader"
            :price="entrepriseTier.price"
            :description="entrepriseTier.description"
            :info="entrepriseTier.info"
            :button-text="entrepriseTier.buttonText"
            :button-variant="entrepriseTier.buttonVariant"
          />
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
          title: 'Starter',
          price: '49',
          description: [
            '1 CPU',
            '2GB RAM',
            '30GB Storage',
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'outlined'
        },
        {
          title: 'Pro',
          price: '99',
          description: [
            '2 CPU',
            '4GB RAM',
            '80GB Storage',
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'outlined'
        },
        {
          title: 'Elite',
          subheader: 'Most popular',
          price: '149',
          description: [
            '4 CPU',
            '8GB RAM',
            '120GB Storage',
            'Chat Support',
          ],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'pricing_buy',
          buttonVariant: 'contained'
        },
        
      ],
      entrepriseTier : {
          title: 'Enterprise',
          description: [],
          info: 'Interdum et malesuada fames ac ante ipsum primis in faucibus.',
          buttonText: 'btn_contact',
          buttonVariant: 'outlined'
      }
    }
  }
}
</script>
