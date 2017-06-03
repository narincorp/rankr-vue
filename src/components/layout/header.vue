<template>
    <nav class="ui top fixed menu">
        <div class="ui container">
            <div class="brand item">
                <img class="nav-logo" src="images/nav-logo.svg">
            </div>
            <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="검색어를 입력해주세요." v-model="searchKeyword">
                    <i class="search icon"></i>
                </div>
            </div>
            <div class="right item">
                <a class="item">API Document</a>
                <a class="item"><i class="github icon"></i>Github Repository</a>
            </div>
        </div>
    </nav>
</template>


<script>
    module.exports = require('./header.ts').default.vueComponentOptions;


    Typed.new(".typing-text", {
        strings: [
            "Realtime Search Keyword",
            "What is happening <strong>now</strong>",
            "실시간 급상승 검색어",
            "현재 일어나고 있는 모든 일"
        ],
        contentType: 'html',
        typeSpeed: 70,
        loop: true,
        backDelay: 3000
    });
</script>
