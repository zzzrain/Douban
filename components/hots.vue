<template>
    <div>
        <header>
            <span>广州</span>
            <input type="text" placeholder="电影/电视剧/影人"/>
        </header>
        <nav>
            <a href="#/index/hots/played" class="navLeft">正在热映</a>
            <a href="#/index/hots/prevue">即将上映</a>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bottomNav: 'hots'
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }

    header {
        padding: 5px 5px;
        line-height: 30px;
        background: #40ffb1;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1;
        span {
            display: inline-block;
            width: 15%;
            text-align: center;
            color: #fff;
        }
        input {
            width: 75%;
            border-radius: 5px;
            padding: 1px 5px;
            background: #eee;
        }
    }

    nav {
        background: #40ffb1;
        position: fixed;
        top: 46px;
        left: 0;
        right: 0;
        font-size: 0;
        z-index: 1;
        a {
            display: inline-block;
            width: 50%;
            text-align: center;
            line-height: 50px;
            font-size: 14px;
        }
        .navLeft {
            border-right: 1px solid #ddd;
            box-sizing: border-box;
        }
    }

</style>
