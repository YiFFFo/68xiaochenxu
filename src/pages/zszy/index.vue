<template>
	<div>
		<headF @setFixed="getMshow" ></headF>
		<div :class="mShow ? 'bottom-fixed' : ''">
			<div class="now-pos padding">
				<!-- <img src="" alt=""> -->
				<span>当前位置：首页>专业选择</span>
			</div>
			<!-- 专业导航 -->
			<div class="major-nav">
				<a :href="item.url" v-for="(item, index) in majorNav" :key="index">
					<img :src="item.src" alt mode="widthFix" />
					<p>{{ item.text }}</p>
				</a>
			</div>

			<cascade
				:navList="headList"
				@selectClassifyIndex="getSelectClassifyIndex"
				:classifyData="classifyArray[classifyIndex]"
			></cascade>

			<div class="major-wrap padding">
				<a :href="item.url" v-for="(item, index) in majorList" :key="index">
					<div class="img">
						<img src alt />
					</div>

					<div class="con">
						<h3>{{ item.title }}</h3>
						<p>
							专业性质:
							<span v-for="(value,sub) in item.nature" :key="sub">{{ value }}</span>
						</p>
						<div>
							<!-- <img src="" alt=""> -->
							学校:
							<span>{{ item.address }}</span>
						</div>
					</div>
				</a>
			</div>
			<pullLoad :dataList="majorList" @newList="getData"></pullLoad>
			<footerF></footerF>
		</div>
	</div>
</template>

<script>
import headF from "@/components/headF";
import cascade from "@/components/cascade";
import footerF from "@/components/footerF";
import pullLoad from "@/components/pullLoad";

export default {
	components: {
		headF,
		cascade,
		footerF,
		pullLoad
	},
	data() {
		return {
            mShow:false,
            top:0,
			majorNav: [
				{
					text: "师范类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/1.png",
					url: ""
				},
				{
					text: "航空高铁类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/2.png",
					url: ""
				},
				{
					text: "财经类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/3.png",
					url: ""
				},
				{
					text: "建筑类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/4.png",
					url: ""
				},
				{
					text: "医学类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/5.png",
					url: ""
				},
				{
					text: "汽车类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/6.png",
					url: ""
				},
				{
					text: "旅游类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/7.png",
					url: ""
				},
				{
					text: "全部分类",
					src:
						"https://m.68jiaoyu.com/skin/image/navico/majorIcon/8.png",
					url: ""
				}
			],

			//分类数据
			headList: ["专业", "地区", "类型"],
			classifyArray: [
				[
					{
						text: "全部",
						url: ""
					},
					{
						text: "师范类",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "学前教育",
								url: ""
							},
							{
								text: "小学教育",
								url: ""
							},
							{
								text: "幼儿教育",
								url: ""
							},
							{
								text: "特殊教育",
								url: ""
							}
						]
					}
				],
				[
					{
						text: "全部",
						url: ""
					},
					{
						text: "四川",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							}
						]
					},
					{
						text: "贵州",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "贵阳市",
								url: ""
							},
							{
								text: "六盘水市",
								url: ""
							},
							{
								text: "遵义市",
								url: ""
							},
							{
								text: "安顺市",
								url: ""
							}
						]
					}
				],
				[
					{
						text: "类型不限",
						url: ""
					},
					{
						text: "中专院校",
						url: ""
					},
					{
						text: "技工学校",
						url: ""
					}
				]
			],
			classifyIndex: 0,
			//专业列表数据
			majorList: [
				{
					title:
						"专业标题专业标题专业标题专业标题专业标题专业标题专业标题",
					nature: ["中专", "3年制"],
					address: "学校地址学校地址",
					url: "/pages/zszy-info/main"
				},
				{
					title:
						"专业标题专业标题专业标题专业标题专业标题专业标题专业标题",
					nature: ["中专", "3年制"],
					address: "学校地址学校地址"
				},
				{
					title:
						"专业标题专业标题专业标题专业标题专业标题专业标题专业标题",
					nature: ["中专", "3年制"],
					address: "学校地址学校地址"
				},
				{
					title:
						"专业标题专业标题专业标题专业标题专业标题专业标题专业标题",
					nature: ["中专", "3年制"],
					address: "学校地址学校地址"
				}
            ],

            
		};
	},
	methods: {
		getSelectClassifyIndex(index) {
			this.classifyIndex = index;
		},
		getData(data) {
			this.majorList = data;
        },
        getMshow(data){
            this.mShow = data;
        }
	}
};
</script>

<style lang="less" scope>
.major-nav {
	display: flex;
	flex-wrap: wrap;
	padding-top: 30rpx;
	a {
		width: 25%;
		margin-bottom: 30rpx;
		display: flex;

		flex-flow: column wrap;
		align-items: center;
		justify-content: center;

		img {
			width: 100rpx;
			margin: 0 auto;
		}
	}
}

.major-wrap {
	padding-top: 30rpx;
	a {
		display: flex;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #f5f5f5;
		&:last-of-type {
			border-bottom: none;
		}
		.img {
			width: 200rpx;
			height: 150rpx;
			background-color: #ccc;
			flex-shrink: 0;
			border-radius: 10rpx;
			overflow: hidden;
		}
		.con {
			flex: 1;
			margin-left: 20rpx;
			min-width: 0;
			h3 {
				font-size: 16px;
				font-weight: bold;
			}
			p {
				span {
					padding: 0 12rpx;
					border: 1rpx solid;
					border-radius: 20rpx;
					margin-right: 10rpx;
					font-size: 12px;
				}
				span:nth-of-type(1) {
					border-color: #ed602f;
					color: #ed602f;
				}
				span:nth-of-type(2) {
					border-color: #06b4fc;
					color: #06b4fc;
				}
			}
			div {
				span {
					font-size: 12px;
					color: #666;
				}
			}
		}
	}
}
</style>