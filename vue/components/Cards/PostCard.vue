<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="img"
        class="white--text"
        height="200px"
      />
    </div>
    <div class="properties">
      
        <v-row>
          
          <v-col md="10">
            <strong class="use-text-subtitle text-truncate">
             <span>
          {{ event.summary }}
        </span>
        </strong>
          </v-col>
          <v-col>
            <strong v-if="event.price > 0">TND {{ event.price }}</strong>
            <strong v-else>FREE</strong>
          </v-col>
        </v-row>
       
      <p>
       From: {{ event.startTime }}
      </p>
      <p>
       To: {{ event.endTime }}
      </p>
      <v-card-text class="desc">
        <span class="text--primary">
          <span>{{ event.description }}</span>
        </span>
        
      </v-card-text>
      <v-card-actions>
        <dialog-event 
        :event="event"
        />
      </v-card-actions>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import './post-news-card';
</style>

<script>
import Dialog from '~/components/dialog/Event'
export default {
  components: {
    "dialog-event": Dialog
  },
  props: {
    img: {
      type: String,
      required: true
    },
    orientation: {
      type: String,
      default: 'portrait'
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    href: {
      type: String,
      default: '#'
    },
    event: {
      type: Object,
      required: false
    }
  }
}
</script>
