<template>
    <div>
        
    </div>
</template>
<script>
import * as Cookie from 'js-cookie'
export default {
    mounted() {
      // check if user is logged in (using cookies)
      // if not, redirect to login page
      if (Cookie.get('rancher_token') === undefined) {
        window.location.href = '/login?redirect=/en/project?plan=' + this.$route.query.plan;
      }
    }
}
</script>
