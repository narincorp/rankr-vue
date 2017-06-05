<template>
    <div id="keyword-app">
        <section class="intro keyword-section">
            <div class="thumb"></div>
            <div class="content">
                <div class="content-wrapper ui container">
                    <!--<p align="center"><b>{{$route.params.search}}</b>(으)로 검색한 결과입니다.</p>-->
                    <div class="chart-wrapper">
                        <keyword-chart :data="chartRenderData"
                                       v-if="isInitialDataLoaded"></keyword-chart>
                    </div>
                </div>
            </div>
        </section>
        <section class="news keyword-section">
            <div class="ui container">
                <ul class="news-list">
                    <li v-for="news in newsData">
                        <article>
                            <div class="thumb" v-bind:style="{backgroundImage : news.thumb !=undefined ? 'url('+news.thumb+')' : ''}"></div>
                            <div class="content">
                                <a v-bind:href="news.link"><h4 class="title">{{news.title}}</h4></a>
                                <p class="description">{{news.description}}</p>
                                <p class="extra-content">
                                    <span class="author item"><i class="write icon"></i>{{news.author}}</span>
                                    <span class="date item"><i class="calendar outline icon"></i>{{news.pubDate}}</span>
                                </p>
                            </div>
                        </article>
                    </li>
                </ul>
            </div>
        </section>
    </div>
</template>

<script>
    module.exports = require('./keyword.ts').default.vueComponentOptions
</script>