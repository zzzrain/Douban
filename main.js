// 加载Vue
import Vue from "vue"
import VueRouter from "vue-router"
// 加载UI(单独引入css可否完善？？)
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// 加载jq
import $ from "jquery"
// 首页
import index from "./components/index.vue"
import hots from "./components/hots.vue"
import find from "./components/find.vue"
import user from "./components/user.vue"
// 影片分页
import played from "./components/played.vue"
import preview from "./components/preview.vue"
// 详情页
import detail from "./components/detail.vue"
// 评论页
import comments from "./components/comments.vue"
import reviews from "./components/reviews.vue"
// 注册登录
import login from "./components/login.vue"
import register from "./components/register.vue"
import success from "./components/success.vue"

Vue.use(VueRouter);
// Vue.use(iView);
window.$ = $;

var router = new VueRouter({
    routes: [{
        path: "/index",
        component: index,
        children: [{
            path: "hots",
            component: hots,
            children: [{
                path: "played",
                component: played,
            }, {
                path: "preview",
                component: preview
            }, {
                path: "/",
                redirect: "/index/hots/played"
            }]
        }, {
            path: "find",
            component: find,
        }, {
            path: "user",
            component: user,
        }]
    }, {
        path: "/detail/:id",
        component: detail,
        children: [{
            path: "comments",
            component: comments
        }, {
            path: "reviews",
            component: reviews
        }, {
            path: "/",
            redirect: "/detail/:id/comments"
        }]
    }, {
        path: "/login",
        component: login
    }, {
        path: "/register",
        component: register
    }, {
        path: "/success",
        component: success
    }, {
        path: "/",
        redirect: "/index/hots/played"
    }]
});

new Vue({
    el: "#demo",
    data: {
        test: "ok"
    },
    router
});
