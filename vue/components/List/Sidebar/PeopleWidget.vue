<template>
  <paper title="You may know" icon="mdi-account-group" subtitle="Donec commodo convallis ligula eget suscipit orci.">
    <div>
      <v-list
        subheader
        two-line
      >
        <v-list-item v-for="(item, index) in people" :key="index">
          <v-list-item-avatar>
            <v-img :src="item.img" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.title }}</v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn small outlined color="primary">
              follow
            </v-btn>
          </v-list-item-action>
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
      people: [
        {
          img: imgAPI.avatar[6],
          name: 'John Doe',
          title: 'Web Designer'
        },
        {
          img: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Executive Merketing'
        },
        {
          img: imgAPI.avatar[7],
          name: 'Jim Doe',
          title: 'Dev Ops'
        },
        {
          img: imgAPI.avatar[2],
          name: 'Jihan Doe',
          title: 'Director'
        },
        {
          img: imgAPI.avatar[0],
          name: 'Jena Doe',
          title: 'CEO'
        },
        {
          img: imgAPI.avatar[9],
          name: 'Johan Doe',
          title: 'iOS Developer'
        }
      ]
    }
  }
}
</script>
