<template lang='pug'>
    div#app
        layout-header()
        router-view()
        layout-footer()
</template>

<script>
    module.exports = require('./app.ts').default.vueComponentOptions
</script>