<template>
    <div class="main-wrap">
        <main-header />
        <v-container>
            <div class="container-wrap">
                <v-data-table :headers="headers" :items="transactions" :items-per-page="5" class="elevation-1"></v-data-table>
            </div>
        </v-container>
        <main-footer />
    </div>
</template>
<style scoped lang="scss">
@import '~/assets/pages';
.container{
    margin-top: 150px;
}

</style>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import axios from 'axios'

export default {
    components: {
        'main-header': Header,
        'main-footer': Footer,
    },
    async fetch(){
        this.transactions = (await axios.get(`${process.env.EVENTS_URL}/transactions`)).data
    },
    data() {

        return {
            headers: [{
                    text: 'Email',
                    align: 'start',
                    value: 'Email',
                },
                { text: 'Token', value: 'Token' },
                { text: 'BuyerId', value: 'BuyerId' },
                { text: 'TransactionID', value: 'TransactionID' },
                { text: 'Amount', value: 'Amount' },
                { text: 'Date', value: 'Date' },
                { text: 'Calendar ID', value: 'CalendarId' },
            ],
            transactions: [],
        }
    },
}
</script>