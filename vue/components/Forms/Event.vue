<template>
  <div class="page-wrap">
    <form-deco />
    <v-snackbar :timeout="4000" top right v-model="snackbar" class="notification" :color="color">
      <div class="action">
        {{ message }}
      </div>
      <v-btn text icon @click="snackbar = false">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-snackbar>
    <v-container class="inner-wrap max-md">
      <div class="full-form-wrap">
        <div class="form">
          <v-form ref="form" v-model="valid">
            <v-row class="spacing6">
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="summary" :rules="emptyRules" :label="$t('common.form_summary')" color="grey" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="description" :rules="emptyyRules" :label="$t('common.form_description')" color="grey" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="imageLink" :rules="emptyyRules" :label="$t('common.form_image_link')" color="grey" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-text-field v-model="price" :rules="emptyyRules" type="number" :label="$t('common.form_price')" color="grey" required />
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field :rules="emptyRules" v-model="dateStart" :label="$t('common.form_start_day')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="dateStart" :min="(new Date()).toISOString().substr(0, 10)" @change="saveStart"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu ref="menu2" v-model="menu2" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="timeStart" :label="$t('common.form_start_time')" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="menu2" v-model="timeStart" full-width @click:minute="$refs.menu2.save(timeStart)"></v-time-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" class="px-6">
                <v-menu ref="menu3" v-model="menu3" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="dateEnd" :label="$t('common.form_end_day')" prepend-icon="mdi-calendar" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-date-picker v-model="dateEnd" :min="(new Date()).toISOString().substr(0, 10)" @change="saveEnd"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu ref="menu4" v-model="menu4" :close-on-content-click="false" :nudge-right="40" :return-value.sync="time" transition="scale-transition" offset-y max-width="290px" min-width="290px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field v-model="timeEnd" :label="$t('common.form_start_day')" prepend-icon="mdi-clock-time-four-outline" readonly v-bind="attrs" v-on="on"></v-text-field>
                  </template>
                  <v-time-picker v-if="menu4" v-model="timeEnd" full-width @click:minute="$refs.menu4.save(timeEnd)"></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
            <div class="btn-area">
              <v-btn :block="isMobile" color="primary" @click="validate" large>
                Create event
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
import FormDeco from '../Decoration/FormDeco'
import Hidden from '../Hidden'
import axios from "axios"
export default {
    components: {
        Hidden,
        FormDeco
    },
    data() {
        return {
            valid: true,
            snackbar: false,
            summary: '',
            imageLink: '',
            price: 0,
            emptyRules: [v => !!v || 'Field is required'],
            description: '',
            color: "",
            message: "",
            dateStart: null,
            timeStart: null,
            dateEnd: null,
            timeEnd: null,
            menu1: false,
            menu2: false,
            menu3: false,
            menu4: false
        }
    },
    methods: {
        saveStart(date) {
            this.$refs.menu1.save(date)
        },
        saveEnd(date) {
            this.$refs.menu3.save(date)
        },
        validate() {
            if (this.$refs.form.validate()) {
                axios.post(`http://localhost:5001/events`, {
                        summary: this.summary,
                        description: this.description,
                        price: parseFloat(this.price) ,
                        imageLink: this.imageLink,
                        startTime: this.dateStart+"T"+this.timeStart+":00",
                        endTime: this.dateEnd+"T"+this.timeEnd+":00",
                        
                })
                .then(res => {
                        if (res.data.InsertedID) {
                            this.snackbar = true
                            this.color = "green"
                            this.message = "Event Added"
                        }
                }).catch(err => {
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
