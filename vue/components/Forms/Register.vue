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
            <v-text-field
              v-model="email"
              :label="$t('common.register_email')"
              :rules="emailRules"
              color="secondary"
              name="Email"
              required
            />
          </v-col>
            <v-banner
              v-if="this.message"
              color="primary"
              rounded
            >
            <div style="
            color : white;
            ">
              {{this.message}}
            </div>
      </v-banner>
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
      message: '',
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
      this.message = ''
      if (this.$refs.form.validate()) {
         axios.post('/api/register', {
          username: this.username,
          email: this.email,
        }).then(response => {   
          console.log(response.data.message)        
            this.message = "Registration successful. Please check your email to find your password."
            this.username=""
            this.email=""
        }).catch(error => {
            this.message = error.message
            this.username=""
            this.email=""
        })
        console.log('data submitted')
        
      }
    },
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
  },
  mounted() {
     if (Cookie.get('rancher_token') !== undefined) {
        window.location.href = '/dashboard'
}
  }
}
</script>
