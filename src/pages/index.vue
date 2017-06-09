<template lang='pug'>
    div#app
        section-intro()
        section-rank()
        section-analytics()
</template>

<script>
    module.exports = require('./index.ts').default.vueComponentOptions
</script>