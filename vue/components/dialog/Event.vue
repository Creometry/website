<template>
    <v-row justify="center">
    
        <v-dialog v-model="dialog" persistent max-width="800px">
    
            <template v-slot:activator="{ on, attrs }">
    
            <v-btn
              :small="orientation === 'landscape'"
              outlined
              class="action-btn"
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              @click="getPaymentToken"   
            >
              {{ $t('common.btn_join_us') }}
    
            </v-btn>
</template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ event.Summary }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
            ref="form"
            v-model="valid"
          >
            <v-row>
              <v-col cols="5">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="email"
                      :rules="emailRules"
                      :label="$t('common.form_email')"
                      color="grey"
                      required
                    />
                  </v-col>
                <v-col>
                  <small>*indicates required field</small>
                </v-col>
              </v-row>
              </v-col> 
              <v-col cols="7" v-if="/.+@.+\..+/.test(email) && event.Price > 0">
                <iframe :src="'https://sandbox.paymee.tn/gateway/'+this.token" class="paymee" />  
              </v-col>   
            </v-row>
            </v-form>
          </v-container>
          
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="closeDialog"
          >
            Close
          </v-btn>
          
          <v-btn
            v-if="event.Price == 0"
            color="blue darken-1"
            text
            :disabled="! /.+@.+\..+/.test(email)"
            @click="validate"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from 'axios'
export default {
    props: {
        event: {
            type: Object,
            required: true
        }
    },
    mounted: function() {

    },
    data: () => ({
        dialog: false,
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
        ],
        email: "",
        token: null
    }),
    methods: {
        //check if payment succeeded
        checkPayment(event) {
            if (event.data.event_id === 'paymee.complete') {
                axios.put(process.env.EVENTS_URL, { eventId: this.event._id, email: this.email, paymentToken: event.data.payment_token }).then(res => {
                    if (res.data == "email added") {
                        this.closeDialog()
                    }
                })
            }
        },
        //initiate payment token from paymee 
        getPaymentToken() {
            if (this.event.Price > 0) {
                axios.post(process.env.PAYMEE_URL+'/api/v1/payments/create', {
                    vendor: process.env.VENDOR,
                    amount: this.event.Price,
                    note: "",
                }, {
                    headers: {
                        Authorization: 'Token '+process.env.PAYMEE_API_KEY,
                    },
                }).then(response => {
                    this.token = response.data.data.token;
                    window.addEventListener('message', this.checkPayment, { once: true });
                }).catch(error => {
                    console.log(error);
                });
            }

        },
        //save email in DB (Free)
        validate() {
            if (this.$refs.form.validate()) {
                axios.put(process.env.EVENTS_URL, { eventId: this.event._id, email: this.email }).then(res => {
                    if (res.data == "email added") {
                        this.closeDialog()
                    }
                })
            }
        },
        //remove event listener to avoid multiple receptors
        closeDialog() {
            window.removeEventListener("message", this.checkPayment, { once: true })
            this.dialog = false
        }
    }
}
</script>

<style scoped>
.paymee {
    width: 100%;
    height: 300px;
}
</style>