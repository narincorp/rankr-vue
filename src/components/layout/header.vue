<template lang="pug">
    header
        nav.ui.top.fixed.menu
            .ui.container
                .brand.item
                    img.nav-logo(src='images/nav-logo.svg')
                a.item About
                a.item Now
                a.item Analytics
                .right.item
                    a.item API Document
                    a.item(href='https://github.com/endlessdev/rankr')
                        i.github.icon
                        | Github Repository
</template>


<script>
    module.exports = require('./header.ts').default.vueComponentOptions
</script>
