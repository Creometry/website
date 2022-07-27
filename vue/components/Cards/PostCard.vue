<template>
  <v-card
    :class="[orientation, type]"
    class="post-card mx-auto"
    max-width="1000"
  >
    <div class="figure">
      <v-img
        :src="event.ImageLink"
        class="white--text"
        height="200px"
      />
    </div>
    <div class="properties">
      
        <v-row>
          
          <v-col md="10">
            <strong class="use-text-subtitle text-truncate">
             <span>
          {{ event.Summary }}
        </span>
        </strong>
          </v-col>
          <v-col>
            <strong v-if="event.Price > 0">TND {{ event.Price }}</strong>
            <strong v-else>FREE</strong>
          </v-col>
        </v-row>
       
      <p>
       From: {{ event.StartTime.substr(0, 10) }} at {{ event.StartTime.substr(11, 5) }}
      </p>
      <p>
       To: {{ event.EndTime.substr(0, 10) }} at {{ event.EndTime.substr(11, 5) }}
      </p>
      <v-card-text class="desc">
        <span class="text--primary">
          <span>{{ event.Description }}</span>
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
import Dialog from '~/components/Dialog/Event'
export default {
  components: {
    "dialog-event": Dialog
  },
  props: {
    orientation: {
      type: String,
      default: 'portrait'
    },
    type: {
      type: String,
      default: 'full' // available props: full, rounded, over, oval
    },
    event: {
      type: Object,
      required: false
    }
  }
}
</script>
