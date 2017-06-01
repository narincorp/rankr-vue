<template>
    <div class="rank-list-wrapper">
        <img class="logo" :src="`images/logos/${type}-logo.svg`">
        <ul class="rank-list">
            <li v-for="rank in rankData">
                <article class="rank-item">
                    <span class="rank"><a class="ui red circular label">{{rank.rank}}</a></span>
                    <a class="title"><span>{{rank.title}}</span></a>
                    <span class="status" v-if="rank.status"><i class="angle up icon"
                                                               v-if="rank.status == 'up'"></i>{{rank.status == 'new' ? 'NEW' : rank.value}}</span>
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
    module.exports = require('./rank-list.ts').default.vueComponentOptions;
</script>