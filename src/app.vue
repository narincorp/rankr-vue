<template lang='pug'>
    div#app
        layout-header()
        index()
        layout-footer()
</template>

<script>
    module.exports = require('./app.ts').default.vueComponentOptions
</script>