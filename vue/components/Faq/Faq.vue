<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col md="6" class="pa-6">
          <h4
            class="use-text-primary use-text-title2 mb-3"
            :class="[isMobile ? 'text-center' : 'text-start']"
          >
            {{ $t('common.faq_title') }}
          </h4>
          <p
            class="text use-text-subtitle2"
            :class="[isMobile ? 'text-center' : 'text-start']"
          >
            {{ $t('common.faq_desc') }}
          </p>
          <hidden point="smDown">
            <div class="illustration">
              <img
                :src="imgAPI.agencyInner[7]"
                :data-2d="imgAPI.agencyInner[6]"
                :data-3d="imgAPI.agencyInner[7]"
                class="img-2d3d"
                alt="services 3d"
              />
            </div>
          </hidden>
        </v-col>
        <v-col md="6" cols="12" class="pa-6">
          <div class="accordion">
            <v-expansion-panels
              v-model="panel"
              active-class="expanded"
            >
              <v-expansion-panel
                v-for="(item, index) in faqData"
                :key="index"
                class="paper"
              >
                 <v-expansion-panel-header class="content">
                  <span class="heading">
                    {{ item.q }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content class="detail">
                  <span>
                    {{ item.a }}
                  </span>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './faq-style.scss';
</style>

<script>
import imgAPI from '~/static/images/imgAPI'
import Hidden from '../Hidden'
const faqData = [
  {
    q: 'What is serverless?',
    a:
      'Essentially, it means "no server operations". The classic definition of "server-less" refers to an arhitecture pattern known as (FaaS).'
  },
  {
    q: 'What is a container? ',
    a:
      ' A container is a standard unit of software that packages code with all of its dependencies, to be shipped to the cloud, deployed, and replicated together repeatedly. Containers can package all kinds of software from static HTML to an entire operating system.'
  },
  {
    q: 'What is GitOps? And Why do I need it? ',
    a:
      'GitOps is an operational framework that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.'
  },
  {
    q: 'What are serverless containers? ',
    a:
      'Containers can package any application. When cobined with serverless concepts, a function may be anything; a micro-service, a web-site, a data-base or even a monolithic application.'
  },
  {
    q: 'How is Creometry secure?',
    a:
      'Serverless automates infrastructure operations and removes human intervention by default, thus lowering the risk of error occurence. Additionally, all services get automatic TLS to encrypt traffic and default isolation to prevent them from talkng to other services when they are not supposed to.'
  },
  {
    q: 'How can I run serverless containers on my own servers?',
    a:
      "Whether your servers are on the cloud or on-premise, you can use creometry's stack to run containers on kubernetes. For assistance planning and executing your migration strategy, contact our sales team."
  }
]

export default {
  components: {
    Hidden
  },
  data() {
    return {
      imgAPI: imgAPI,
      panel: 0,
      faqData: faqData
    }
  },
  computed: {
    isMobile() {
      const smDown = this.$store.state.breakpoints.smDown
      return smDown.indexOf(this.$mq) > -1
    }
  }
}
</script>
