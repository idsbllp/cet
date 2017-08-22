<template>
    <div class="index">
        <input type="text" class="username" v-model="username" placeholder="请输入姓名">
        <input type="text" class="admission" v-model="admission" placeholder="请输入准考证号">
        <input type="button" class="submit" @click="submit" value="提交">
    </div>
</template>

<script>
    import swlt from 'sweetalert'
    export default {
        data() {
            return {
                username: '',
                admission: ''
            }
        },
        methods: {
            submit() {
                // const urlPrefix = 'http://hongyan.cqupt.edu.cn/llp.php?'
                const urlPrefix = 'http://jx3536.s1.natapp.link/index.php?'
                // const urlPrefix = 'http://115.28.50.25/index.php?'
                // const urlPrefix = 'http://jx3536.s1.natapp.link/index.php?'
                if (!this.username) {
                    return swlt('请输入姓名', '', 'error')
                }
                if (!this.admission || !Number(this.admission)) {
                    return swlt('准考证输入有误', '', 'error')
                }
                this.$http.get(`${urlPrefix}xm=${encodeURI(this.username)}&zkzh=${this.admission}`).then(res => {
                    res = res.body
                    if (res.Status !== 200) {
                        return swlt('暂无数据哦', '', 'error')
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
        margin-top: .2rem;
        font-size: 0.4rem;
        overflow: hidden;
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