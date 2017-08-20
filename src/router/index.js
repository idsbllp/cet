import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/Index.vue'
import Result from '@/components/result/Index.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/result',
            name: 'Result',
            component: Result
        }
    ]
})
