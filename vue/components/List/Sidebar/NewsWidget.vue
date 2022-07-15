<template>
  <paper title="Headline News" icon="mdi-newspaper" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item
          v-for="(item, index) in news"
          :key="index"
        >
          <v-list-item-avatar rounded="lg" width="60">
            <v-img :src="item.img" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.source }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-btn text block color="primary">See all</v-btn>
    </div>
  </paper>
</template>

<script>
import imgAPI from '~/static/images/imgAPI'
import Paper from '../../Paper'

export default {
  components: {
    Paper
  },
  data() {
    return {
      news: [
        {
          img: imgAPI.photo[13],
          title: 'Vestibulum bibendum nisi eget magna',
          source: 'the-news.com'
        },
        {
          img: imgAPI.photo[14],
          title: 'Quisque a consequat ante',
          source: 'the-news.com'
        },
        {
          img: imgAPI.photo[15],
          title: 'Donec dignissim, odio ac imperdiet luctus',
          source: 'the-news.com'
        },
        {
          img: imgAPI.photo[16],
          title: 'Suspendisse eleifend nunc non',
          source: 'the-news.com'
        },
        {
          img: imgAPI.photo[17],
          title: 'Vestibulum a massa vestibulum',
          source: 'the-news.com'
        }
      ]
    }
  }
}
</script>
