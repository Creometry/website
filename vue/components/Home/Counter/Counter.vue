<template>
  <div class="counter-wrap">
    <v-container class="fixed-width">
      <v-row
        justify="center"
        align="center"
      >
        <v-col md="4">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +200
              </h3>
              <p class="use-text-subtitle">
                {{ $t('agency.about_employee') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +500
              </h3>
              <p class="use-text-subtitle">
                {{ $t('agency.about_projects') }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="4">
          <div class="counter-item">
            <div class="text">
              <h3 class="use-text-title">
                +300
              </h3>
              <p class="use-text-subtitle">
                {{ $t('agency.about_client') }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './counter-style.scss';
</style>
