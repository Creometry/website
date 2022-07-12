<template>
  <div class="page-wrap">
    <form-deco />
    <v-snackbar
      :timeout="4000"
      top
      right
      v-model="snackbar"
      class="notification"
      :color="color"
    >
      <div class="action">
        {{ message }}
      </div>
      <v-btn
        text
        icon
        @click="snackbar = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="text-center">
          <h3 class="use-text-title use-text-primary pb-3 text-center">
            {{ $t('common.contact_title2') }}
          </h3>
          <p class="desc use-text-subtitle2 text-center">
            {{ $t('common.contact_subtitle') }}
          </p>
        </div>
        <div class="form">
          <v-form
            ref="form"
            v-model="valid"
          >
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field
                  v-model="name"
                  :rules="nameRules"
                  :label="$t('common.form_name')"
                  color="white"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  :label="$t('common.form_email')"
                  color="white"
                  required
                />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field
                  v-model="phone"
                  :label="$t('common.form_phone')"
                  color="white"
                />
              </v-col>
              <v-col cols="12" sm="12" class="px-6">
                <v-text-field
                  v-model="title"
                  :rules="titleRules"
                  :label="$t('common.form_title')"
                  color="white"
                  required
                />
              </v-col>
              <v-col cols="12" class="px-6">
                <v-textarea
                  v-model="body"
                  :rules="bodyRules"
                  rows="6"
                  color="white"
                  :label="$t('common.form_message')"
                  required
                />
              </v-col>
            </v-row>
            <div class="btn-area">
              <div class="form-control-label">
                <v-checkbox
                  ref="checkbox"
                  v-model="checkbox"
                  color="primary"
                  :label="$t('common.subscribe_title')"
                />
              </div>
              <v-btn
                :block="isMobile"
                color="primary"
                @click="validate"
                large
              >
                {{ $t('common.form_send') }}
              </v-btn>
            </div>
          </v-form>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
</style>

<script>
import logo from '~/static/images/agency-logo.svg'
import brand from '~/static/text/brand'
import link from '~/static/text/link'
import FormDeco from '../Decoration/FormDeco'
import Hidden from '../Hidden'
import axios from 'axios'
export default {
  components: {
    Hidden,
    FormDeco
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      nameRules: [v => !!v || 'Name is required'],
      bodyRules: [v => !!v || 'Body is required'],
      titleRules: [v => !!v || 'Title is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      phone: '',
      title: '',
      message: '',
      checkbox: false,
      logo: logo,
      brand: brand,
      routeLink: link,
      body: "",
      color: ""
    }
  },
  methods: {
    validate() {
      console.log(process.env.SUBSCRIPTION_URL)
      if (this.$refs.checkbox.inputValue){
        axios.post(`${process.env.SUBSCRIPTION_URL}/newsletter`, { email: this.email, name: this.name })
        .catch(err=> console.log(err))
      }
      if (this.$refs.form.validate()) {

        axios.post(`${process.env.SUBSCRIPTION_URL}/mail`, {
          adress: this.email,
          body: this.body,
          title: this.title,
          name: this.name,
          number: this.phone
        })
        .then(res=>{
            if(res.data == "sent"){
                this.snackbar = true
                this.color = "green"
                this.message = "Thank you for contacting us"
            }
        }).catch(err=> {
                this.snackbar = true
                this.color = "red"
                this.message = "Server Error: Please try again later"
        })
      }
    }
  },
  computed: {
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
