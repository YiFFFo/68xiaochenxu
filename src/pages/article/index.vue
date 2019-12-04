<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>专业选择</span>
		</div>
        <bannerSwiper></bannerSwiper>
		<div class="a-title padding">
			<a href="#">
				<p>简章</p>
			</a>
			<a href="#">
				<p>计划</p>
			</a>
			<a href="#">
				<p>分数</p>
			</a>
			<a href="#">
				<p>条件</p>
			</a>
			<a href="#">
				<p>问答</p>
			</a>
		</div>
        <div class="a-body padding">
            <a href="/pages/article-info/main" v-for="(item, index) in listData" :key="index">
                <div class="img">
                    <!-- <img src="" alt=""> -->
                </div>

                <div class="con">
                    <h4 class="dot">{{ item.title }}</h4>
                    <p>{{ item.con }}</p>
                    <div>
                        <div>
                            <!-- <img src="" alt=""> -->
                            <span>浏览量：{{ item.num }}</span>
                        </div>
                        <div>
                            <!-- <img src="" alt=""> -->
                            <span>{{ index }}</span>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <pullLoad :dataList='listData' @newList='getData'></pullLoad>
		<footerF></footerF>
	</div>
</template>

<script>
import headF from "@/components/headF";
import footerF from "@/components/footerF";
import bannerSwiper from "@/components/bannerSwiper";
import pullLoad from "@/components/pullLoad";


export default {
	components: {
		headF,
		footerF,
        bannerSwiper,
        pullLoad
	},
	data() {
		return {
            // 列表数据
            listData:[
                {
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },{
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },{
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },{
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },{
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },{
                    title:'标题标题标题标题标题标题',
                    con:'内容两行内容两行内容两行内容两行内容两行内容两行内容两行',
                    num:2000,
                    timer:0
                },
            ]
		};
	},

	onLoad(options) {
        console.log(options);
		let app = getApp();
	},
	mounted() {},
	methods: {
        getData(data){
            this.listData = data
        }
    },
	
};
</script>

<style lang="less" scope>
.a-title {
    display: flex;
    padding-top: 20rpx;
    padding-bottom: 20rpx;
    border-bottom: 1rpx solid #f5f5f5;
	a {
        width: 20%;
        p{
            text-align: center;
            border-right: 1rpx solid #f5f5f5;
        }
    }
    a:last-of-type{
        p{
            border-right: none;;
        }
    }
}

.a-body{
    
    a{
        display: flex;
        padding: 30rpx 0;
        border-bottom: 1rpx solid #f5f5f5;
        .img{
            width: 220rpx;
            height:160rpx;
            background-color: #ccc;
            overflow: hidden;
            border-radius: 8rpx;
            flex-shrink: 0;
        }
        .con{
            flex: 1;
            min-width: 0;
            margin-left: 10rpx;
            h4{
                font-weight: bold;
            }
            p{
                font-size: 12px;
                color: #666;
                margin:10rpx 0;
            }
            &>div{
                display: flex;
                justify-content: space-between;
                span{
                    font-size: 12px;
                    color: #999;
                }
            }
        }
    }
    a:last-of-type{
        border-bottom: none;
    }
}
</style>