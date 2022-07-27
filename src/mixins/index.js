import axios from "axios";
import Vue from 'vue'
// import { BASE_URL } from '@/config'
// console.log(BASE_URL)
Vue.mixin({
    methods: {
        $get(url, params) {
            return axios.get(url, {
                params
            })
        },
        $post(url, data) {
            return axios.post(url, data)
        }
    }
})