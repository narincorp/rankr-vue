<template lang="pug">
    footer
        .ui.vertical.footer.segment
            .ui.center.aligned.container
                .ui.stackable.grid
                    .three.wide.column
                        h4.ui.header Community
                        .ui.link.list
                            a.item(href='https://www.transifex.com/organization/semantic-org/', target='_blank')
                                | Help
                                | Translate
                            a.item(href='https://github.com/Semantic-Org/Semantic-UI/issues', target='_blank')
                                | Submit
                                | an Issue
                            a.item(href='https://gitter.im/Semantic-Org/Semantic-UI', target='_blank')
                                | Join our
                                | Chat
                            a.item(href='/cla.html', target='_blank') CLA
                    .three.wide.column
                        h4.ui.header Network
                        .ui.link.list
                            a.item(href='https://github.com/Semantic-Org/Semantic-UI', target='_blank')
                                | GitHub
                                | Repo
                            a.item(href='http://forums.semantic-ui.com', target='_blank') User Forums
                            a.item(href='http://1.semantic-ui.com') 1.x Docs
                            a.item(href='http://legacy.semantic-ui.com') 0.x Docs
                    .three.wide.column
                        h4.ui.header Learn
                        .ui.link.list
                            a.item(href='#') Example Layouts
                            a.item(href='#') The Project
                            a.item(href='#') Roadmap
                            a.item(href='#') About the Author
                    .seven.wide.right.floated.column
                        h4.ui.teal.header Help Preserve This Project
                        p
                            | Support for the continued development of Semantic UI comes directly from the community.
                        form(action='https://www.paypal.com/cgi-bin/webscr', method='post', target='_top')
                            input(type='hidden', name='cmd', value='_s-xclick')
                            input(type='hidden', name='hosted_button_id', value='7ZAF2Q8DBZAQL')
                            button.ui.large.teal.button(type='submit') Donate Today
                .ui.inverted.section.divider
                img.ui.centered.small.image(src='images/nav-logo.svg')
                .ui.horizontal.small.link.list
                    a.item(href='http://semantic-ui.mit-license.org/', target='_blank')
                        | Free & Open Source
                        | (MIT)
                    br
                    span.item Copyright © 2017 Narin Inc. All rights reserved.
</template>

<script>
    module.exports = require('./footer.ts').default.vueComponentOptions
</script>
