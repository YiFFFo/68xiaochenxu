<template>
	<div>
		<!-- 头部 -->
		<div class="h-head padding">
			<div class="logo">
				<img src="/static/images/icon/logo.png" mode="widthFix" @click="goHome"/>
			</div>

			<div class="city">
				<span>中专院校</span>
				<!-- <img src="/static/images/icon/right.png" mode="widthFix" alt /> -->
			</div>

			<div class="menu" @click.stop="showMenu">
				<img src="/static/images/icon/sousuo1.png" mode="widthFix" alt />
			</div>
			<MenuH v-if="mShow" @cMshow="getMshow"></MenuH>
		</div>

		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>中专院校</span>
		</div>

		<bannerSwiper></bannerSwiper>

		<!-- 热门学校 -->
		<div class="hot-sch padding">
			<a href="#" class="s-title">
				<span>热门学校</span>
				<div>
					<span>更多</span>
					<!-- <img src="" alt=""> -->
				</div>
			</a>

			<div class="s-body">
				<a :href="item.url" v-for="(item, index) in hotSchool" :key="index">
					<div class="img">
						<!-- <img src="" alt=""> -->
					</div>
					<p class="name dot">{{ item.name }}</p>
					<div class="time">
						<span>成立于:{{ item.age}}年</span>
						<span>{{ item.address }}</span>
					</div>
				</a>

				<a href="#" class="l-more" style="width:100%">查看更多热门学校</a>
			</div>
		</div>

		<div class="zhanwei"></div>

		<!-- 热门专业 -->
		<div class="hot-major padding">
			<a href="#" class="s-title">
				<span>热门专业</span>
				<div>
					<span>更多</span>
					<!-- <img src="" alt=""> -->
				</div>
			</a>

			<div class="s-body">
				<a href="#" v-for="(item, index) in hotMajor" :key="index">
					<div class="img">
						<!-- <img src="" alt=""> -->
					</div>
					<p class="name dot">{{ item.name }}</p>
				</a>

				<a href="#" class="l-more" style="width:100%">查看更多热门学校</a>
			</div>
		</div>

		<div class="zhanwei"></div>

		<div class="article-wrap padding" style="margin-bottom:40rpx;">
			<div class="a-title">
				<p
					v-for="(item, index) in articleTitle"
					:key="index"
					:style="{width:(100 / articleTitle.length)+'%'}"
                    @click="changeSelectIndex(index)" 
                    :class="articleBodySelectIndex == index ? 'active' : 'none'"
				>{{ item }}</p>
			</div>

			<div class="a-body">
				<div class="b-list" :style="{display:articleBodySelectIndex == index ? 'block' : 'none'}" v-for="(item, index) in articleBody" :key="index">
					<a href="#" class="link" v-for="(v,i) in item" :key="i">
						<p class="dot" >{{ v.text }}</p>
						<span>{{ v.time }}</span>
					</a>
                    <a href="#" class="l-more" style="margin-top:20rpx;">查看更多</a>
				</div>
			</div>
		</div>
		<footerF></footerF>
	</div>
</template>

<script>
import footerF from "@/components/footerF";
import bannerSwiper from "@/components/bannerSwiper";
import MenuH from "@/components/MenuH";

export default {
	components: {
		footerF,
		bannerSwiper,
		MenuH
	},
	data() {
		return {
			mShow: false,
			hotSchool: [
				{
					name: "四川文化传媒职业学院",
					age: "2005",
					address: "四川-成都市",
					imgSrc: "",
					url: "/pages/sch-index/main"
				},
				{
					name: "四川省卫生学校",
					age: "2000",
					address: "四川-成都市",
					imgSrc: "",
					url: ""
				},
				{
					name: "成都市天府新区职业学校",
					age: "2000",
					address: "四川-成都市",
					imgSrc: "",
					url: ""
				},
				{
					name: "成都市现代职业技术学校",
					age: "1965",
					address: "四川-成都市",
					imgSrc: "",
					url: ""
				}
			],
			hotMajor: [
				{
					name: "电子商务专业",
					url: "",
					imgSrc: ""
				},
				{
					name: "护理专业",
					url: "",
					imgSrc: ""
				},
				{
					name: "学前教育专业",
					url: "",
					imgSrc: ""
				},
				{
					name: "幼儿教育专业",
					url: "",
					imgSrc: ""
				}
			],
            articleTitle: ["新闻", "简章", "计划", "条件", "分数", "问答"],
            articleBody:[
                [
                    {
                        text:'文章标题文章标题文章标题文章标题文章标题',
                        url:'',
                        time:'09-24'
                    },{
                        text:'文章标题1文章标题1文章标题1文章标题1文章标题1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'文章标题2文章标题2文章标题2文章标题2文章标题2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'文章标题3文章标题3文章标题3文章标题3文章标题3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'文章标题4文章标题4文章标题4文章标题4文章标题4',
                        url:'',
                        time:'09-24'
                    },
                ],
                [
                    {
                        text:'这是标题这是标题这是标题这是标题这是标题',
                        url:'',
                        time:'09-24'
                    },{
                        text:'这是标题1这是标题1这是标题1这是标题1这是标题1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'这是标题2这是标题2这是标题2这是标题2这是标题2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'这是标题3这是标题3这是标题3这是标题3这是标题3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'这是标题4这是标题4这是标题4这是标题4这是标题4',
                        url:'',
                        time:'09-24'
                    },
                ],
                [
                    {
                        text:'我是标题我是标题我是标题我是标题我是标题',
                        url:'',
                        time:'09-24'
                    },{
                        text:'我是标题1我是标题1我是标题1我是标题1我是标题1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'我是标题2我是标题2我是标题2我是标题2我是标题2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'我是标题3我是标题3我是标题3我是标题3我是标题3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'我是标题4我是标题4我是标题4我是标题4我是标题4',
                        url:'',
                        time:'09-24'
                    }
                ],
                [
                    {
                        text:'??标题??标题??标题??标题??标题',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题1??标题1??标题1??标题1??标题1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题2??标题2??标题2??标题2??标题2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题3??标题3??标题3??标题3??标题3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题4??标题4??标题4??标题4??标题4',
                        url:'',
                        time:'09-24'
                    },
                ],
                 [
                    {
                        text:'??标题a??标题a??标题a??标题a??标题a',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题a1??标题a1??标题a1??标题a1??标题a1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题a2??标题a2??标题a2??标题a2??标题a2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题a3??标题a3??标题a3??标题a3??标题a3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题a4??标题a4??标题a4??标题a4??标题a4',
                        url:'',
                        time:'09-24'
                    },
                ],
                 [
                    {
                        text:'??标题bbb??标题bbb??标题bbb??标题bbb??标题bbb',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题bbb1??标题bbb1??标题bbb1??标题bbb1??标题bbb1',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题bbb2??标题bbb2??标题bbb2??标题bbb2??标题bbb2',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题bbb3??标题bbb3??标题bbb3??标题bbb3??标题bbb3',
                        url:'',
                        time:'09-24'
                    },{
                        text:'??标题bbb4??标题bbb4??标题bbb4??标题bbb4??标题bbb4',
                        url:'',
                        time:'09-24'
                    },
                ],
            ],
            articleBodySelectIndex:0,
		};
	},

	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {
        goHome(){
            mpvue.switchTab({
                url:'/pages/index/main',
                success:res =>{
                    console.log('success');
                },
                fail:err=>{
                    console.log('fail');
                }
            })
        },
		showMenu() {
			this.mShow = !this.mShow;
		},
		getMshow(data) {
			this.mShow = data;
        },
        changeSelectIndex(index){
            this.articleBodySelectIndex = index;
        }
	}
};
</script>

<style scoped lang="less">
.h-head {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
    display: flex;
    align-items: center;
	height: 100rpx;
	justify-content: space-between;
	padding-top: 10rpx;
	padding-bottom: 10rpx;
	z-index: 99;
	.logo {
		width: 375rpx;
		display: flex;
		align-items: center;
		image {
			width: 300rpx;
		}
	}

	.city {
		flex: 1;
		width: 200rpx;
		display: flex;
		align-items: center;
		image {
			width: 10rpx;
		}
	}

	.menu {
		width: 100rpx;
		display: flex;
		position: relative;
		image {
			width: 46rpx;
			margin: auto;
		}
	}
}

.l-more {
	width: 100%;
	height: 60rpx;
	color: #656565;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
}

.hot-sch,
.hot-major,
.article-wrap {
	padding-top: 40rpx;
}
.s-title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-sizing: border-box;
	padding-left: 20rpx;
	padding-bottom: 20rpx;
	border-bottom: 1rpx solid #f5f5f5;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 4rpx;
		left: 0;
		width: 4rpx;
		height: 60%;
		background-color: #29a1e5;
	}
	& > span {
		font-size: 16px;
	}
	div {
		display: flex;
		align-items: center;
	}
}

.s-body {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	padding-top: 20rpx;

	a {
		width: 48%;
		margin-bottom: 20rpx;
		.img {
			width: 100%;
			height: 200rpx;
			background-color: #ccc;
		}
		.name {
			margin: 10rpx 0;
			font-size: 16px;
		}
		.time {
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 12px;
			color: #999;
		}
	}
}

.a-title {
	display: flex;
	p {
        text-align: center;
        padding-bottom: 20rpx;
        box-sizing: border-box;
    }
    .active{
        border-bottom: 2rpx solid #eb361d;
        color: #eb361d;
    }
}

.a-body {
    .b-list{
        display: none;
        padding-top: 30rpx;
    }
	.link {
		padding: 10rpx 0;
		display: flex;
        justify-content: space-between;
        margin-bottom: 16rpx;
		p {
			width: 80%;
		}
		span {
			color: #999;
		}
	}
}
</style>
