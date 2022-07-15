<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          :small="orientation === 'landscape'"
          outlined
          class="action-btn"
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ $t('common.btn_join_us') }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ event.summary }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
            ref="form"
            v-model="valid"
          >
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
            </v-row>
            </v-form>
          </v-container>
          <small>*indicates required field</small>
          <br />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <form
            v-if="event.price > 0"
            method="post" action="https://sandbox.paymee.tn/gateway/">
            <input type="hidden" name="payment_token" value="5d41404b2a76b9719c592e6f84b68d92">
            <input type="hidden" name="url_ok" value="https://example.com/ok.php">
            <input type="hidden" name="url_ko" value="https://example.com/ko.php">
            <v-btn
            color="blue darken-1"
            text
            >
            Save
          </v-btn>
          </form>
          <v-btn
            v-else
            color="blue darken-1"
            text
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
    data: () => ({
      dialog: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      email: ""
    }),
    methods: {
      validate() {
        if (this.$refs.form.validate()) {
          axios.put('http://localhost:5000/events', {eventId: this.event.id, email: this.email}).then(res=>{
            if(res.data == "email added"){
              console.log("going great")
              this.dialog = false
            }
          })
        }
      }
    }
  }
</script>