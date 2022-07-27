<template>
  <AuthFrame
    :title="$t('common.login_subtitle')"
    :subtitle="$t('common.auth_desc')"
    type="login"
  >
    <div>
      <div class="head">
        <h3 :class="isMobile ? 'use-text-title use-text-primary' : 'use-text-subtitle'">
          {{ $t('common.login_title') }}
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
          <v-col cols="12" sm="12" class="px-3">
            <v-text-field
              v-model="password"
              :label="$t('common.login_password')"
              :rules="requiredRules"
              color="secondary"
              type="password"
              name="email"
              required
            />
          </v-col>
        </v-row>
        <div class="form-helper">
          <div class="form-control-label">
            <v-checkbox
              v-model="checkbox"
              :label="$t('common.login_remember')"
              color="secondary"
            />
          </div>
          <v-btn
            small
            class="button-link"
            text
            href="#"
          >
            {{ $t('common.login_forgot') }}
          </v-btn>
        </div>
        <div class="btn-area">
          <v-btn
            large
            block
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
import SocialAuth from './SocialAuth'
import AuthFrame from './AuthFrame'
import * as Cookie from 'js-cookie'
import axios from 'axios'

export default {
  components: {
    SocialAuth,
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
      requiredRules: [v => !!v || 'This field is required'],
      checkbox: false
    }
  },
  methods: {
    handleSubmit() {
      if (this.$refs.form.validate()) {
        // make post request to go-provisioner to login and 
        // get rancher_token and userId
        axios.post('/api/login', {
          username: this.username,
          password: this.password
        }).then(response => {
            Cookie.set('rancher_token', response.token)
            Cookie.set('userId', response.userId)
            Cookie.set('username', this.username)
            // redirect to project page
            window.location.href = this.$route.query.redirect
        }).catch(error => {
          console.log(error)
        })
        console.log('data submitted')
      }
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    },
  },
  mounted() {
     if (Cookie.get('rancher_token') !== undefined) {
        window.location.href = '/dashboard'
      }
}
}
</script>

