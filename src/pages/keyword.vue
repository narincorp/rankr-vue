<template>
    <div id="keyword-app">
        <section class="intro keyword-section">
            <div class="thumb"
                 v-bind:style="{backgroundImage : newsData[0].thumb !=undefined ? 'url('+newsData[0].thumb+')' : ''}">
                <div class="thumb-content">
                    <div class="thumb-content-wrapper">
                        <div class="ui container">
                            <h1 class="keyword">{{$route.params.search}}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="content-wrapper ui container">
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
                            <div class="thumb"
                                 v-bind:style="{backgroundImage : news.thumb !=undefined ? 'url('+news.thumb+')' : ''}"></div>
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