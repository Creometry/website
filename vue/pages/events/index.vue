<template>
    <div class="main-wrap">
    
        <main-header />
    
        <div class="container-general">
    
            <v-container>

                <v-row class="mt-6">
    
                    <v-col md="12">
    
                        <div v-for="event in events" :key="event.id" :class="{ 'mt-15': true }">
    
                            <post-card orientation="portrait" type="over" :event="event" />
    
                        </div>
        
                    </v-col>
    
                </v-row>
    
            </v-container>
    
        </div>
    
        <div id="footer">
    
            <main-footer />
    
        </div>
    
    </div>
</template>

<style lang="scss" scoped>
@import '~/assets/pages';
</style>

<script>
import brand from '~/static/text/brand'
import BlogHeader from '~/components/Header/BlogHeader'
import Headline from '~/components/Blog/Headline'
import PostCard from '~/components/Cards/PostCard'
import Sidebar from '~/components/Blog/Sidebar'
import Footer from '~/components/Footer'
import axios from "axios"
export default {
    components: {
        'main-header': BlogHeader,
        'main-footer': Footer,
        Headline,
        Sidebar,
        PostCard,
    },
    data() {
        return {
            events: []
        }
    },
    async fetch() {
        let query = this.$route.query.q ? "?q="+this.$route.query.q : ""
        this.events = (await axios.get(`${process.env.EVENTS_URL}/events${query}`)).data
    },
    head() {
        return {
            title: 'Blog Home | ' + brand.agency.desc
        }
    }
}
</script>
