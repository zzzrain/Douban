<template>
    <div class="content">
        <div class="movielist">
            <a v-for='key in movie' :href="'#/detail/'+key.id" class="movie">
                <div class="face">
                    <img :src="key.images.medium"/>
                </div>
                <div class="info">
                    <h3 v-text='key.title'></h3>
                    <p><span>评分：</span><span v-text='key.rating.average'></span></p>
                    <p><span>导演：</span><span v-text='key.directors[0].name'></span></p>
                    <p class="casts">
                        <span>主演：</span>
                        <span v-for='arr in key.casts' v-text='arr.name+" / "'></span>
                    </p>
                    <p><span v-text='key.collect_count'></span><span>人看过</span></p>
                </div>
            </a>
        </div>
        <div class="showmore" @click="showmore()" v-show='bool'>查看更多</div>
        <div class="loadmore" v-show='load'>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movie: [],
                bool: false,
                load: true,
                city: '广州',
                start: 0,
                count: 10,
            }
        },
        mounted() {
            this.showmore()
        },
        methods: {
            showmore(){
                $.ajax({
                    url: 'https://api.douban.com/v2/movie/in_theaters',
                    data: {
                        apikey: '0b2bdeda43b5688921839c8ecb20399b',
                        city: this.city,
                        start: this.start,
                        count: this.count,
                    },
                    dataType: 'jsonp',
                    success: function (data) {
                        console.log(data.subjects)
                        this.movie = this.movie.concat(data.subjects)
                        this.start += 10
                        this.bool = true
                        this.load = false
                    }.bind(this)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .movielist {
        padding-top: 96px;
        .movie {
            display: inline-block;
            margin: 20px 20px 0 20px;
            padding-bottom: 20px;
            text-align: left;
            border-bottom: 1px solid #ddd;
            color: #000;
            font-size: 0;
            .face {
                display: inline-block;
                width: 30%;
                vertical-align: top;
                img {
                    width: 80%;
                    height: 120px;
                }
            }
            .info {
                display: inline-block;
                width: 70%;
                vertical-align: top;
                font-size: 14px;
            }
        }
    }

    .showmore {
        text-align: center;
        line-height: 60px;
        color: plum;
        font-size: 1.5em;
        font-family: "微软雅黑";
        padding-bottom: 50px;
    }

    .loadmore {
        position: fixed;
        top: 50%;
        left: 50%;
        margin: -30px 0 0 -30px;
    }
</style>