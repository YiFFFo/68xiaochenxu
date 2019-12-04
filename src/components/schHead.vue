<template>
	<div>
		<div class="sch-head">
			<div class="img">
				<img mode="widthFix" src="http://www.68jiaoyu.com/file/upload/201910/14/164533451011.jpg" alt="">
			</div>

			<div class="con">
				<p>{{ schName }}</p>
				<div class="time">
					<p>建校时间：1995年</p>
					<p>关注人数：2365</p>
				</div>
				<div style="display:block">
					<p>学校等级：国家级重点</p>
				</div>
                <div style="display:block">
                    <p>学校类型：中专院校 五年制大专</p>
                </div>
			</div>
		</div>

		<div class="zhanwei"></div>

		<div class="nav-wrap padding">
			<a target="self" open-type="redirect" :href="item.url" v-for="(item, index) in nav" :key="index" :class="item.url == navIndex ? 'active' : ''">{{ item.text }}</a>
		</div>
		<div class="zhanwei"></div>

	
	</div>
</template>
<script>
import getUrl from '@/utils/getUrl'

export default {
    props:{
        schName:String,
        schAge:String,
        peopleNum:Number,
        schGrade:String,
        schGenre:String
    },
	data() {
		return {
            nav:[
                {
                    text:'学校首页',
                    url:'/pages/sch-index/main'
                },
                {
                    text:'学校简介',
                    url:'/pages/sch-synopsis/main'
                },
                {
                    text:'学校新闻',
                    url:'/pages/sch-news/main'
                },
                {
                    text:'招考信息',
                    url:'/pages/sch-information/main'
                },
                {
                    text:'招生专业',
                    url:'/pages/sch-major/main'
                },
                {
                    text:'学校环境',
                    url:'/pages/sch-photo/main'
                },
                {
                    text:'招生问答',
                    url:'/pages/sch-QA/main'
                },
                {
                    text:'联系方式',
                    url:'/pages/sch-contact/main'
                },
            ],
            navIndex:''
		};
    },
    onLoad(){
        this.navIndex ='/' + getUrl.getCurrentPageUrl();
    },
};
</script>
<style lang="less" scope>
.sch-head {
	width: 100%;
	height: 200rpx;
    display: flex;
    align-items: center;
	background-color: #3c92c3;
	.img {
        width: 160rpx;
		height: 160rpx;
        flex-shrink: 0;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
        }
	}
	.con {
		flex: 1;
		box-sizing: border-box;
		padding: 14rpx;
		p {
			color: #fff;
		}
		& > p {
            font-size: 16px;
            margin-bottom: 14rpx;
		}
		.time {
			display: flex;
            p {
				width: 50%;
				font-size: 12px;
			}
        }
        div{
            margin-bottom:14rpx;
            p{
                font-size: 12px;
            }
        }
		// div {
		// 	display: flex;
		// 	p {
		// 		width: 50%;
		// 		font-size: 12px;
		// 	}
		// }
	}
}

.nav-wrap {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 20rpx;
	padding-bottom: 10rpx;
    .active{
        background-color: #efb02a;
        color: #fff;
    }
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 24%;
		height: 60rpx;
		background-color: #f0f0f0;
		border-radius: 6rpx;
		margin-bottom: 10rpx;
	}
	.active {
		background-color: #efb02a;
		color: #fff;
	}
}

</style>