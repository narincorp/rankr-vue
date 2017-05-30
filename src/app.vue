<template lang='pug'>
    div#app
        layout-header()
        section-intro()
        section-rank()
        section-analytics()
        layout-footer()
</template>

<script>
    module.exports = require('./app.ts').default.vueComponentOptions

</script>