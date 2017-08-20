<template>
    <div id="app">
        <div class="banner">
            <img src="./assets/banner.png">
        </div>
        <router-view></router-view>
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
input {
    margin: .1rem auto;
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
</style>
