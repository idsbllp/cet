<template>
    <div class="index">
        <input type="text" class="username" v-model="username" placeholder="请输入姓名">
        <input type="text" class="admission" v-model="admission" placeholder="请输入准考证号">
        <input type="button" class="submit" @click="submit" v-model="sub">
    </div>
</template>

<script>
    import swlt from 'sweetalert'
    export default {
        data() {
            return {
                username: '',
                admission: '',
                sub: '提交',
                loading: false
            }
        },
        methods: {
            submit(e) {
                const target = e.currentTarget
                target.style.cursor = 'not-allowed'
                const urlPrefix = 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/InquiryExam/InquiryExam/getCETScore&'

                if (!this.username) {
                    return swlt('请输入姓名', '', 'error')
                }
                if (!this.admission || !Number(this.admission)) {
                    return swlt('准考证输入有误', '', 'error')
                }
                this.sub = '查询中...'
                this.$http.get(`${urlPrefix}xm=${encodeURI(this.username)}&zkzh=${this.admission}`).then(res => {
                    res = res.body
                    this.username = ''
                    this.admission = ''
                    this.sub = '提交'
                    target.style.cursor = 'pointer'
                    if (res.Status !== 200) {
                        swlt(res.Message, '', 'error')
                        return
                    }
                    this.$store.commit('submit', res.data)
                    this.$router.push('/result')
                })
            }
        }
    }
</script>

<style lang="less">
    .index {
        position: relative;
        margin-top: .2rem;
        font-size: 0.4rem;
        overflow: hidden;
    }
    .loader {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        img {
            animation: loading 5s infinite
        }
    }
    @keyframes loading {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: 34px;
        margin-left: 25px;
    }
    
    .loading-bar {
        display: inline-block;
        width: 4px;
        height: 18px;
        border-radius: 4px;
        animation: loading 1s ease-in-out infinite;
    }
    
    .loading-bar:nth-child(1) {
        background-color: #3498db;
        animation-delay: 0;
    }
    
    .loading-bar:nth-child(2) {
        background-color: #c0392b;
        animation-delay: 0.09s;
    }
    
    .loading-bar:nth-child(3) {
        background-color: #f1c40f;
        animation-delay: .18s;
    }
    
    .loading-bar:nth-child(4) {
        background-color: #27ae60;
        animation-delay: .27s;
    }
    
    @keyframes loading {
        0% {
            transform: scale(1);
        }
        20% {
            transform: scale(1, 1.3);
        }
        40% {
            transform: scale(1);
        }
    }
    input {
        padding: .4rem;
        width: 98%;
        border: 1px solid #ddd;
        outline: 0;
        -webkit-appearance: none;
        background-color: transparent;
        font-size: inherit;
        height: .8rem;
    }
    .submit {
        margin-top: .3rem;
        width: 80%;
        background: #390;
        color: #fff;
        height: 1rem;
        letter-spacing: 4px;
        border-radius: 5px;
        cursor: pointer;
        font-size: .4rem;
    }
</style>