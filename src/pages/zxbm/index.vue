<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>院校选择</span>
		</div>

		<bannerSwiper></bannerSwiper>

		

        <forms></forms>
		<footerF></footerF>
	</div>
</template>

<script>
import headF from "@/components/headF";
import footerF from "@/components/footerF";
import bannerSwiper from "@/components/bannerSwiper";
import forms from "@/components/forms";

export default {
	components: {
		headF,
		footerF,
        bannerSwiper,
        forms
	},
	data() {
		return {
			//分类数据
			headList: ["类别", "地区", "等级"],
			classifyArray: [
				[
					{
						text: "类别不限",
						url: ""
					},
					{
						text: "中专院校",
						url: ""
					},
					{
						text: "技工院校",
						url: ""
					},
					{
						text: "职业高中",
						url: ""
					},
					{
						text: "普通高中",
						url: ""
					},
					{
						text: "五年制大专",
						url: ""
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
						text: "等级不限",
						url: ""
					},
					{
						text: "国家级示范",
						url: ""
					},
					{
						text: "国家级重点",
						url: ""
					},
					{
						text: "省级示范",
						url: ""
					},
					{
						text: "省级重点",
						url: ""
					},
					{
						text: "普通院校",
						url: ""
					},
					{
						text: "市级示范",
						url: ""
					}
				]
			],
			classifyIndex: 0,
			//专业列表数据
			schList: [
				{
					title: "学校名称学校名称学校名称学校名称",
					nature: ["中专院校", "国家级重点"],
                    address: "学校地址学校地址",
                    hotMajor:["电子商务","美术设计与制作"]
				},
				{
					title: "学校名称学校名称学校名称学校名称",
					nature: ["中专院校", "国家级重点"],
                    address: "学校地址学校地址",
                    hotMajor:["电子商务","美术设计与制作"]
				},
				{
					title: "学校名称学校名称学校名称学校名称",
					nature: ["中专院校", "国家级重点"],
                    address: "学校地址学校地址",
                    hotMajor:["电子商务","美术设计与制作"]
				},
				{
					title: "学校名称学校名称学校名称学校名称",
					nature: ["中专院校", "国家级重点"],
                    address: "学校地址学校地址",
                    hotMajor:["电子商务","美术设计与制作"]
				}
			],
		};
	},

	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {
		getSelectClassifyIndex(index) {
			this.classifyIndex = index;
        },
        getData(data){
            this.schList = data
        }
	}
};
</script>

<style lang="less" scope>
.body-tab {
    &>div:last-of-type{
        border-bottom: none;
    }
	.tab-list {
		padding-top: 30rpx;
		padding-bottom: 10rpx;
        border-bottom: 1rpx solid #f5f5f5;
		.list-a {
			display: flex;
			.img {
				width: 200rpx;
				height: 150rpx;
				background-color: #ccc;
				flex-shrink: 0;
				border-radius: 10rpx;
				overflow: hidden;

				img {
					width: 100%;
				}
			}
			.con {
				flex: 1;
				margin-left: 20rpx;
				min-width: 0;
				h4 {
					font-size: 16px;
				}
				.sch-xz {
					// background-color: #ccc;
					margin: 10rpx 0;
					span {
						border-radius: 40rpx;
						margin-right: 10rpx;
						font-size: 12px;
					}
					.xz_1 {
						padding: 0 10rpx;
						border: 1rpx solid #ed5d2b;
						color: #ed5d2b;
					}
					.xz_2 {
						padding: 0 10rpx;
						border: 1rpx solid #00b2fc;
						color: #00b2fc;
					}
				}

				.hot-zy {
					font-size: 12px;
					display: flex;
					white-space: nowrap;
					flex-wrap: wrap;
					span {
						margin-right: 10px;
						color: #666;
					}
				}
			}
		}

		.sch-adress {
			width: fit-content;
			padding: 4rpx 20rpx;
			background-color: #f5f5f5;
			border-radius: 40rpx;
			margin-top: 10rpx;

			span {
				font-size: 12px;
				color: #999;
			}
		}
	}
}
</style>