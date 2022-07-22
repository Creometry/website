<template>
    <div
    class="full-form-wrap flex-column"
    >
    <div
      v-if="stage===1"
    class="centerdiv flex-column"
      
      >
      <h1>Fill project data</h1>
      <v-form
          ref="form"
          v-model="valid"
          class="w"
      >
          <v-text-field
              v-model="project.name"
              label="Name*"
              :rules="projectNameRules"
          ></v-text-field>
           <v-menu 
            transition="slide-y-transition"
    bottom
           >
    <template v-slot:activator="{on}">
      <v-btn
        color="primary"
        dark
        v-bind="project.billingAccountId"
        v-on="on"
      >
        {{ project.billingAccountId ? billingAccounts.find((el)=> el.id==project.billingAccountId).name:'Choose billing account' }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item) in billingAccounts"
        :key="item.id"
        @click="selectBillingAccount(item)"
      >
        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
          <v-text-field
              v-model="project.billingAccountName"
              label="Billing account name*"
              v-if="project.billingAccountId==='1'"
              :rules="requiredRules"
          >
          </v-text-field>
          <v-text-field
              v-model="project.gitRepoUrl"
              label="Repo URL"
          ></v-text-field>
          <v-text-field
              v-model="project.gitRepoName"
              label="Name"
          ></v-text-field>
          <v-text-field
              v-model="project.gitRepoBranch"
              label="Branch"
          ></v-text-field>
          <v-btn
              color="primary"
              class="mt-3"
              large
              block
              @click="handleSubmit"
          >
            Proceed to payment
          </v-btn>
      </v-form>
    </div>
    <div
    v-if="stage===2"
    class="centerdiv"
    >
      <iframe :src="PAYMEE_URL+'/gateway/'+token"
      width="450px" height="500px" frameborder="1"></iframe>
    </div>
    </div>
</template>
<style lang="scss" scoped>
@import './Forms/form-style.scss';
.centerdiv {
  display: flex;
  justify-content: center;
  align-items: center;
}
.w{
  width: 800px;
}
</style>

<script>
import * as Cookie from 'js-cookie'
import axios from 'axios'

export default {
  data() {
    return {
      stage:1,
      valid:true,
      token:'',
      project: {
        name: '',
        billingAccountId: '',
        billingAccountName: '',
        gitRepoName: '',
        gitRepoUrl: '',
        gitRepoBranch: '',
      },
      urlRules : [
        v => /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(v) || 'URL is invalid',
      ],
      projectNameRules : [
        v => !!v || 'Name is required',
        v => /^[a-z-]+$/.test(v) || 'Invalid project name',
      ],
      requiredRules : [
        v => !!v || 'Required',
      ],
      billingAccounts: [
        {
          id: '1',
          name: 'Create a new account',
        },
        {
          id: '2',
          name: 'Agency 1',
        },
        {
          id: '3',
          name: 'Agency 2',
        },
        {
          id: '4',
          name: 'Agency 3',
        },
      ],
    }
  },
  mounted() {
      // check if user is logged in (using cookies)
      // if not, redirect to login page
      if (Cookie.get('rancher_token') === undefined) {
        window.location.href = '/login?redirect=/en/project?plan=' + this.$route.query.plan;
      }
      window.addEventListener('message', function(event) {
      if(event.data.event_id === 'paymee.complete') {
        const paymentToken = event.data.payment_token;
        console.log("paymentToken: ", paymentToken); 
        // make post request to provision project here
        const pr =  JSON.parse(this.localStorage.getItem('project'));
        const plan = this.localStorage.getItem('plan')
        const url = this.localStorage.getItem('url')
         axios.post(url+'/api/v1/provisionProject', {
           projectName: pr.name,
           billingAccountId: pr.billingAccountId,
           plan: plan,
           gitRepoName: pr.gitRepoName,
           gitRepoUrl: pr.gitRepoUrl,
           gitRepoBranch: pr.gitRepoBranch,
           paymentToken: paymentToken,
           userId : Cookie.get('userId')
         }).then(response => {
           console.log(response.data.projectId)
           this.localStorage.removeItem('project')
           this.localStorage.removeItem('plan')
           this.localStorage.removeItem('url')
           window.location.href = '/dashboard';
         }).catch(error => {
           console.log(error)
           this.localStorage.removeItem('project')
           this.localStorage.removeItem('plan')
           this.localStorage.removeItem('url')
           // window.location.href = '/dashboard';
         })
        //this.window.location.href = '/dashboard';
        
        }else{
          console.log(event.data)
          this.localStorage.removeItem('project')
           this.localStorage.removeItem('plan')
           this.localStorage.removeItem('url')
        }
      }, false)
       //make api call to get all the user's billing accounts
       //this.billingAccounts = response.data.data;
       axios.get('http://go-billing.default.svc/api/v1/getBillingAccounts/admin/'+Cookie.get('userId')).then(response => {
         this.billingAccounts = response.data.data;
       }).catch(error => {
         console.log(error)
       })
  },
  computed: {
      PAYMEE_URL() {
        return this.$config.PAYMEE_URL;
      },
      PAYMEE_API_KEY() {
        return this.$config.PAYMEE_API_KEY;
      },
      VENDOR() {
        return this.$config.VENDOR;
      },
      INGRESS_URL() {
        return this.$config.INGRESS_URL;
      },

    },
    methods: {
      selectBillingAccount(item) {
        this.project.billingAccountId = item.id;
      },
      handleSubmit() {
      if (this.$refs.form.validate()) {
        if (this.project.billingAccountId=== '1') {
          // make post request to billing service to create a new account
          // and get the id
          // axios.post('go-billing/api/v1/billingAccounts', {
          //   name: this.project.billingAccountName,
          // }).then(response => {
          //   console.log(response)
          //   this.project.billingAccountId = response.data.id;
          //   this.stage = 2;
          // }).catch(error => {
          //   console.log(error)
          // })
        }
        localStorage.setItem('project', JSON.stringify(this.project));
        localStorage.setItem('plan', this.$route.query.plan);
        localStorage.setItem('url',this.INGRESS_URL)
        // switch amount by plan
        const plan = this.$route.query.plan;
        let amount = 0;
        switch (plan) {
          case 'Starter':
            amount = 49;
            break;
          case 'Pro':
            amount = 99;
            break;
          case 'Elite':
            amount = 149;
            break;
          default:
            amount = 0;
            break;
        }
        axios.post(this.PAYMEE_URL+'/api/v1/payments/create', {
          vendor: this.VENDOR,
          amount: amount,
          note: 'Project ' + this.project.name,
        }, {
          headers: {
            Authorization: 'Token ' + this.PAYMEE_API_KEY,
          },
        }).then(response => {
          console.log(response.data)
          this.token = response.data.data.token;
          console.log(this.token)
          this.stage = 2;
        }).catch(error => {
          console.log(error);
        });
      }
      }
    },
}
</script>
