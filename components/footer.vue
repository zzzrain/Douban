<template>
    <footer>
        <div @click="handleChange('hots')">热门</div>
        <div @click="handleChange('find')">发现</div>
        <div @click="handleChange('user')">个人中心</div>
    </footer>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            handleChange(val) {
                switch (val) {
                    case 'hots':
                        window.location.href = "#/index/hots";
                        break;
                    case 'find':
                        window.location.href = "#/index/find";
                        break;
                    case 'user':
                        window.location.href = "#/index/user";
                        break;
                }
            }
        }
    }

</script>

<style scoped lang="scss">
    footer {
        width: 100%;
        background: #fff;
        font-size: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        div {
            display: inline-block;
            width: 33%;
            text-align: center;
            line-height: 50px;
            font-size: 14px;
        }
    }
</style>
