<template>
    <footer>
        <div class="ui vertical footer segment">
            <div class="ui center aligned container">
                <div class="ui stackable grid">
                    <div class="three wide column">
                        <h4 class="ui  header">오픈소스</h4>
                        <div class="ui  link list">
                            <a class="item">프로젝트 기여</a>
                            <a class="item">이슈트래커</a>
                            <a class="item">라이센스</a>
                            <a class="item">라이센스</a>
                            <a class="item">글로벌화</a>
                        </div>
                    </div>
                    <div class="three wide column">
                        <h4 class="ui  header">연구활동</h4>
                        <div class="ui link list">
                            <a href="#" class="item">데이터 마이닝</a>
                            <a href="#" class="item">뉴럴 네트워크</a>
                            <a href="#" class="item">뉴럴 네트워크</a>
                            <a href="#" class="item">활용 사례</a>
                            <a href="#" class="item">기대 효과</a>
                        </div>
                    </div>
                    <div class="eight wide right floated column">
                        <h4 class="ui teal header">프로젝트 후원하기</h4>
                        <p>이 프로젝트를 아래의 가상화폐 지갑을 통해 후원할 수 있습니다.<br>후원 자금은 서버 유지비<del>와 개발자의 사리사욕</del>을 위해 사용됩니다.</p>
                        <a class="ui image label" style="margin-bottom:5px;">
                            <img src="https://bitcoin.org/img/icons/opengraph.png">
                            Bitcoin
                            <div class="detail">1J9kYjLznSyKhuLPNj9d6eVZ9sJUueg4Y9</div>
                        </a><br>
                         <a class="ui image label">
                            <img src="https://maxcdn.icons8.com/Share/icon/color/Logos//ethereum1600.png">
                            Ethereum
                            <div class="detail">0xb31d4ec46cd1245d338bb02fb1f2fbdcf11f01f2</div>
                        </a>
                    </div>
                </div>
                <div class="ui inverted section divider"></div>
                <img src="images/nav-logo.svg" class="ui centered small image">
                <div class="ui horizontal small link list">
                    <a class="item" href="http://semantic-ui.mit-license.org/" target="_blank">Free &amp; Open Source
                        (MIT)</a><br>
                    <span class="item">Copyright © 2017 Narin Inc. All rights reserved.</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    module.exports = require('./footer.ts').default.vueComponentOptions
</script>
