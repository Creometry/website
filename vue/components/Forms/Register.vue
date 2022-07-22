<template>
  <AuthFrame
    :title="$t('common.register_subtitle')"
    :subtitle="$t('common.auth_desc')"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile2 ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_create') }}
        </h3>
      </div>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row class="spacing3">
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="username"
              :label="$t('common.register_username')"
              :rules="requiredRules"
              color="secondary"
              name="Username"
              required
            />
          </v-col>
          <div v-if="this.password">
            Password : {{this.password}} <v-btn
            small
            color="primary"
            @click="copyPasswordToClipboard"
            >COPY AND CONTINUE</v-btn>
          </div>
        </v-row>
        <div class="btn-area flex">
          <div class="form-helper">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                :label="$t('common.form_terms')"
                :rules="requiredRules"
                color="secondary"
                required
              />
              <span>
                <a href="#" class="link">
                  {{ $t('common.form_privacy') }}
                </a>
              </span>
            </div>
          </div>
          <v-btn
            :block="isTablet || isMobile"
            large
            color="primary"
            @click="handleSubmit"
          >
            {{ $t('common.continue') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </AuthFrame>
</template>

<style lang="scss" scoped>
@import './form-style';
</style>

<script>
import AuthFrame from './AuthFrame'
import * as Cookie from 'js-cookie'
import axios from 'axios'

export default {
  components: {
    AuthFrame
  },
  data() {
    return {
      valid: true,
      email: '',
      username: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      confirmPassword: '',
      requiredRules: [v => !!v || 'This field is required'],
      passwordRules: [
        v => !!v || 'This field is required',
        v => v === this.password || 'Passwords do not match'
      ],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        console.log("making post request to go-provisioner/api/v1/register")
        // get password from api
        // on success: store username in local storage and go to the next step
         axios.post(this.INGRESS_URL+'/api/v1/register', {
          username: this.username,
        }).then(response => {
            Cookie.set('rancher_token', response.data.token)
            Cookie.set('userId', response.data.userId)
            Cookie.set('username', this.username)
            this.password = response.data.password
        }).catch(error => {
          console.log(error)
        })
        console.log('data submitted')
      }
    },
    copyPasswordToClipboard(){
      navigator.clipboard.writeText(this.password)
      // redirect to query paaram redirect
      window.location.href = this.$route.query.redirect
    }
  },
  computed: {
    isTablet() {
      const mdDown = this.$store.state.breakpoints.mdDown
      const mdUp = this.$store.state.breakpoints.mdUp
      return mdDown.indexOf(this.$mq) > -1 && mdUp.indexOf(this.$mq) > -1
    },
    isMobile() {
      const xsDown = this.$store.state.breakpoints.xsDown
      return xsDown.indexOf(this.$mq) > -1
    },
    isMobile2() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
    INGRESS_URL() {
        return this.$config.INGRESS_URL;
      },
  },
  mounted() {
     if (Cookie.get('rancher_token') !== undefined) {
        window.location.href = '/dashboard'
}
  }
}
</script>
