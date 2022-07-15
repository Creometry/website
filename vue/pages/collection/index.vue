<template>
  <div class="main-wrap">
    <main-header />
    <div class="container-wrap">
      <search v-model="keyword" />
      <div class="search-content">
        <v-container>
          <v-row align="start" justify="center">
            <v-col md="8" cols="12" class="px-4">
              <div id="profile_portrait" class="space-top-short">
                <h4 class="use-text-primary use-text-subtitle">
                  Profile Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="6" cols="12" v-for="index in 2" :key="index">
                    <profile-card
                      :connection="100"
                      :favorites="10"
                      :albums="12"
                      :cover="imgAPI.photo[41]"
                      :avatar="imgAPI.avatar[2]"
                      name="Jihan Doe"
                      title="Web Designer"
                      type="over"
                      orientation="portrait"
                    />
                  </v-col>
                </v-row>
              </div>
              <div id="profile_l" class="space-top-short">
                <h4 class="use-text-primary use-text-subtitle">
                  Profile Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <fragment v-for="index in 3" :key="index">
                      <profile-card
                        :connection="100"
                        :favorites="10"
                        :albums="12"
                        :cover="imgAPI.photo[43]"
                        :avatar="imgAPI.avatar[5]"
                        name="John Dalton"
                        title="Web Designer"
                        type="over"
                        orientation="landscape"
                      />
                      <br /><br />
                    </fragment>
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="product_p">
                <h4 class="use-text-primary use-text-subtitle">
                  Product Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="4" cols="12" v-for="index in 3" :key="index">
                    <product-card
                      :rating="3"
                      :price="20"
                      :img="imgAPI.photo[29]"
                      title="Sed lacinia velit"
                      desc="Proin pretium arcu eget metus porta consecteturc"
                      orientation="portrait"
                      type="over"
                    />
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="product_l">
                <h4 class="use-text-primary use-text-subtitle">
                  Product Cards Landscape
                </h4>
                <fragment v-for="index in 3" :key="index">
                  <product-card
                    :rating="3"
                    :price="20"
                    :img="imgAPI.photo[25]"
                    title="Sed lacinia velit"
                    desc="Proin pretium arcu eget metus porta consecteturc"
                    orientation="landscape"
                    type="over"
                  />
                  <br /><br />
                </fragment>
              </div>
              <div class="space-top-short" id="media_video">
                <h4 class="use-text-primary use-text-subtitle">
                  Video Cards
                </h4>
                <v-row>
                  <v-col sm="6" cols="12" v-for="index in 2" :key="index">
                    <media-card
                      :thumb="imgAPI.photo[9]"
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="video"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="media_photo">
                <h4 class="use-text-primary use-text-subtitle">
                  Image Cards
                </h4>
                <v-row>
                  <v-col sm="6" cols="12" v-for="index in 2" :key="index">
                    <media-card
                      :thumb="imgAPI.photo[10]"
                      title="Sed lacinia velit, ut malesuada eros interdum a"
                      orientation="portrait"
                      type="photo"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="news_p">
                <h4 class="use-text-primary use-text-subtitle">
                  News Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="4" cols="12" v-for="index in 3" :key="index">
                    <news-card
                      :img="imgAPI.photo[34]"
                      title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                      headline="news"
                      orientation="portrait"
                      type="over"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="news_l">
                <h4 class="use-text-primary use-text-subtitle">
                  News Cards Landscape
                </h4>
                <v-row> 
                  <v-col md="12">
                    <fragment v-for="index in 3" :key="index">
                      <news-card
                        :img="imgAPI.photo[37]"
                        title="Ut sed eros finibus, placerat orci id, dapibus mauris. Vestibulum consequat hendrerit lacus."
                        headline="news"
                        orientation="landscape"
                        type="over"
                        href="#"
                      />
                      <br /><br />
                    </fragment>
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="post_p">
                <h4 class="use-text-primary use-text-subtitle mb-3">
                  Post Cards Portrait
                </h4>
                <v-row>
                  <v-col sm="4" cols="12" v-for="index in 3" :key="index">
                    <post-card
                      :img="imgAPI.photo[36]"
                      title="Maecenas rutrum dolor sed nisi"
                      desc="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="portrait"
                      type="over"
                      href="#"
                    />
                  </v-col>
                </v-row>
              </div>
              <div class="space-top-short" id="post_l">
                <h4 class="use-text-primary use-text-subtitle">
                  Post Cards Landscape
                </h4>
                <v-row>
                  <v-col md="12">
                    <fragment v-for="index in 3" :key="index">
                      <post-card
                        :img="imgAPI.photo[32]"
                        title="Maecenas rutrum dolor sed nisi"
                        desc="Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant. Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti. Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                        date="12 Nov 2020"
                        orientation="landscape"
                        type="over"
                        href="#"
                      />
                    </fragment>
                  </v-col>
                </v-row>
              </div>
            </v-col>
            <v-col md="4" cols="12" class="px-4">
              <sidebar />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <main-footer />
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import Search from '~/components/Filter/Search'
import PostCard from '~/components/Cards/PostCard'
import NewsCard from '~/components/Cards/NewsCard'
import MediaCard from '~/components/Cards/MediaCard'
import ProductCard from '~/components/Cards/ProductCard'
import ProfileCard from '~/components/Cards/ProfileCard'
import Sidebar from '~/components/List/Sidebar'
import imgAPI from '~/static/images/imgAPI'

export default {
  data() {
    return {
      imgAPI: imgAPI,
      keyword: ''
    }
  },
  components: {
    'main-header': Header,
    'main-footer': Footer,
    Search,
    PostCard,
    NewsCard,
    MediaCard,
    ProductCard,
    ProfileCard,
    Sidebar
  },
  head() {
    return {
      title: 'Collection | ' + brand.agency.desc
    }
  }
}
</script>
