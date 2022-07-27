<template>
<div class="main-wrap">
    
        <main-header  home />
    
        <div class="container-general">
    
            <event />
        </div>
    
        <div id="footer">
    
            <main-footer />
    
        </div>
    
    </div>
</template>

<script>
import BlogHeader from '~/components/Header'
import Event from '~/components/Forms/Event'
import Footer from '~/components/Footer'

export default {
    components: {
        'main-header': BlogHeader,
        'main-footer': Footer,
        'event': Event,
    }
}

</script>