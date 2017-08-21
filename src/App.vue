<template>
    <div id="app">
        <div class="banner">
            <img src="./assets/banner.png">
        </div>
        <router-view></router-view>
        <footer>
            <p>2017年6月考试成绩将于2017年8月22日上午9点可查</p>
            <p>2017 ©️ 红岩网校</p>
            <a href="mailto::web@redrock.team">意见反馈 @红岩网校</a>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
* {
    box-sizing: border-box;
}
body {
    margin: 0;
    background: #eee;
    -webkit-tap-highlight-color: transparent;
}
.banner {
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        max-height: 4.5rem;
        max-width: 18rem;
    }
}
input,
.result {
    margin: .3rem auto;
    display: block;
    max-width: 14rem;
}
.submit {
    max-width: 10rem;
    line-height: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
footer {
    font-size: .3rem;
}
</style>
