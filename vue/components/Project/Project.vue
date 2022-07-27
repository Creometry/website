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
              v-model="project.email"
              label="Email*"
              v-if="project.billingAccountId==='1'"
              :rules="emailRules"
          >
          </v-text-field>
          <v-text-field
              v-model="project.phone"
              label="Phone number"
              v-if="project.billingAccountId==='1'"
          >
          </v-text-field>
           <v-checkbox
              v-model="isCompany"
              v-if="project.billingAccountId==='1'"
              label="Company"
          ></v-checkbox>
          <v-text-field
              v-model="companyName"
              label="Company name*"
              v-if="project.billingAccountId==='1' && isCompany"
              :rules="requiredRules"
          >
          </v-text-field>
          <v-text-field
              v-model="taxId"
              label="Tax ID*"
              v-if="project.billingAccountId==='1' && isCompany"
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
@import '../Forms/form-style.scss';
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
      isCompany : false,
      companyName: '',
      taxId: '',
      project: {
        name: '',
        billingAccountId: '',
        billingAccountName: '',
        email: '',
        phone: '',
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
      phoneNumberRules : [
        v => /^[0-9]{8}$/.test(v) || 'Phone number is invalid',
      ],
      requiredRules : [
        v => !!v || 'Required',
      ],
      emailRules : [
         v => !!v || 'Required',
        v => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) || 'Email is invalid'
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
       //make api call to get all the user's billing accounts
       //this.billingAccounts = response.data.data;
       axios.get('/api/getBillingAccountsByAdminUUID/'+Cookie.get('uuid')).then(response => {
         this.billingAccounts = [
            {
              id: '1',
              name: 'Create a new account',
            },
            ...response.data.data
          ]
       }).catch(error => {
         console.log(error)
         this.billingAccounts = [{
            id: '1',
            name: 'Create a new account',
          }]
       })
  },
  computed: {
      PAYMEE_URL() {
        return this.$config.PAYMEE_URL;
      },
    },
    methods: {
      selectBillingAccount(item) {
        this.project.billingAccountId = item.id;
      },
      checkPayment(event){
          if(event.data.event_id === 'paymee.complete') {
                  const paymentToken = event.data.payment_token;
                  console.log("paymentToken: ", paymentToken); 
                  // make post request to provision project here
                  axios.post('/api/provisionProject', {
                    projectName: this.project.name,
                    email: this.project.email,
                    phone: this.project.phone,
                    billingAccountId: this.project.billingAccountId,
                    plan: this.$route.query.plan,
                    gitRepoName: this.project.gitRepoName,
                    gitRepoUrl: this.project.gitRepoUrl,
                    gitRepoBranch: this.project.gitRepoBranch,
                    paymentToken: paymentToken,
                    userId : Cookie.get('userId'),
                    uuid : Cookie.get('uuid'),
                    companyName: this.companyName,
                    taxId: this.taxId,
                    isCompany:this.isCompany
                  }).then(response => {
                    console.log(response.data.projectId)
                    window.location.href = '/dashboard';
                  }).catch(error => {
                    console.log(error)
                    //window.location.href = '/dashboard';
                  })
                  //this.window.location.href = '/dashboard';
                  }else{
                    console.log(event.data)
                  }
                },
      handleSubmit() {
        if (this.project.billingAccountId===''|| this.project.billingAccountId===undefined) {
          this.project.billingAccountId ='1'
          return
        }
      else if (this.$refs.form.validate()) {
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
        axios.post('/api/paymee', {
          amount: amount,
        }).then(response => {
          console.log(response.data)
          this.token = response.data.data.token;
          console.log(this.token)
          window.addEventListener('message', this.checkPayment, { once: true });
          this.stage = 2;
        }).catch(error => {
          console.log(error);
        });
      }
      }
    },
}
</script>
