<template>
    <div class="main-wrap">
        <main-header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <v-container>
            <v-btn color="blue" @click="getCSV">Get CSV</v-btn>
        </v-container>
        <main-footer />
    </div>
</template>

<style scoped lang="scss">
@import '~/assets/pages';
</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import axios from 'axios'

export default ({
    components: {
        'main-header': Header,
        'main-footer': Footer,
    },
    methods: {
        getCSV: function() {
            axios.get("http://localhost:5000/newsletter", {responseType: 'blob'}).then((response) => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'subscription.csv'); //or any other extension
                document.body.appendChild(link);
                link.click();
            });
        }
    }
})
</script>