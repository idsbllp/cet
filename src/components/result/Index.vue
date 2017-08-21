<template>
    <ul class="result">
        <li class="list-control" v-for="list in common">
            <div class="left">{{ list.key }}</div>
            <div class="right">{{ list.value }}</div>
        </li>
        <div v-if="speaking.length" class="speaking">
            <li class="list-control">
                <div class="left highlight">口语：</div>
            </li>
            <li class="list-control" v-for="list in speaking">
                <div class="left">{{ list.key }}</div>
                <div class="right">{{ list.value }}</div>
            </li>
        </div>
        <div v-if="writting.length" class="writting">
            <li class="list-control">
                <div class="left highlight">笔试：</div>
            </li>
            <li class="list-control" v-for="list in writting">
                <div class="left">{{ list.key }}</div>
                <div class="right">{{ list.value }}</div>
            </li>
        </div>
        <input type="button" class="submit" @click="submit" value="返回">
    </ul>
</template>

<script>
    import { ls, lg } from '../../utils'
    export default {
        data() {
            return {
                common: [],
                speaking: [],
                writting: [],

                commonMap: new Map([
                   ['college', '学校'],
                   ['name', '姓名'],
                   ['rank', '等级']
               ]),
               speakingMap: new Map([
                   ['id', '考号'],
                   ['rank', '等级']
               ]),
               writtingMap: new Map([
                   ['id', '考号'],
                   ['listening', '听力'],
                   ['comprehension', '阅读'],
                   ['writing', '写作'],
                   ['score', '总分']
               ])
            }
        },
        mounted() {
            let result = this.$store.state.result
            if (result) {
                this.parseData(result)
            } else if (lg('common')) {
                this.common = lg('common')
                this.speaking = lg('speaking')
                this.writting = lg('writting')
            } else {
                return this.$router.push('/')
            }
        },
        methods: {
            parseData(data) {
                for (let key in data) {
                    if (key === 'speaking') {
                        this.parseSpeakingData(data[key])
                    } else if (key === 'written') {
                        this.parseWrittingData(data[key])
                    } else {
                        this.common.push({
                            key: this.commonMap.get(key),
                            value: data[key]
                        })
                    }
                }
                ls('common', this.common)
            },
            parseSpeakingData(data) {
                for (let key in data) {
                    if (data[key] === '--') return
                    this.speaking.push({
                        key: this.speakingMap.get(key),
                        value: data[key]
                    })
                }
                ls('speaking', this.speaking)
            },
            parseWrittingData(data) {
                for (let key in data) {
                    if (data[key] === '--') return
                    this.writting.push({
                        key: this.writtingMap.get(key),
                        value: data[key]
                    })
                }
                ls('writting', this.writting)
            },
            submit() {
                this.$router.push('/')
            }
        }
    }
</script>

<style lang="less">
    .result {
        margin: 0 auto;
        padding: 0;
    }
    .list-control {
        margin-top: .3rem;
        width: 100%;
        height: .8rem;
        border-bottom: 1px solid #fff;
        list-style: none;
        font-size: .3rem;
        line-height: .8rem;
    }
    .left, .right {
        float: left;
        height: 100%;
    }
    .left {
        width: 15%;
    }
    .right {
        width: 85%;
    }
    .highlight {
        padding-left: .2rem;
        color: #339900;
        font-weight: 700;
        font-size: .4rem;
    }
</style>