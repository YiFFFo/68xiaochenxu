<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页> 院校选择</span>
		</div>

		<schHead :schName='schName'></schHead>

		<div class="padding xxjj">
			<div class="wrap-head" style="border-color:#efb02a">
				<div class="b" style="border-color:#efb02a">
					<p class="t">学校简介</p>
					<p class="f">School profile</p>
				</div>
			</div>

			<div class="x-body">
				<div class="text">{{ text }}</div>
				<a href="#" class="more-btn">查看更多</a>
				<p class="nature">
					院校性质：
					<span v-for="(item, index) in yxxz" :key="index">{{ item }}</span>
				</p>
				<p>联系电话：{{ tel }}</p>
				<p>学校地址：{{ address }}</p>
			</div>
		</div>

		<div class="zhanwei"></div>

		<div class="rzzy padding">
			<div class="wrap-head" style="border-color:#1c9be3">
				<div class="b" style="border-color:#1c9be3">
					<p class="t">学校热招专业</p>
					<p class="f">School hot recruitment major</p>
				</div>
			</div>

			<div class="list-wrap">
				<div class="b-list">
					<a href="#" class="r-list" v-for="(item, index) in major" :key="index">
						<div class="img">
							<!-- <img src="" alt=""> -->
						</div>

						<div class="con">
							<p class="title dot">{{ item.title }}</p>
							<p>招生对象:</p>
							<p>
								<span>学制:{{ item.xz }}</span>
								<span>招生人数:</span>
							</p>
							<div class="list-btn">
								<p>报名咨询</p>
								<p>查看详情</p>
							</div>
						</div>
					</a>
				</div>
				<a href="#" class="more-btn" style="background-color:#1c9be3">查看更多</a>
			</div>
		</div>

		<div class="zhanwei"></div>

		<div class="xxxw padding">
			<div class="wrap-head" style="border-color:#efb02a">
				<div class="b" style="border-color:#efb02a">
					<p class="t">学校新闻</p>
					<p class="f">School news</p>
				</div>
			</div>

			<div class="x-body">
				<div class="news-list">
					<a href="#" v-for="(item, index) in news" :key="index">
						<div class="img">
							<!-- <img src="" alt=""> -->
						</div>
						<div class="con">
							<h4 class="dot">{{ item.title }}</h4>
							<p>{{ item.con }}</p>
							<div class="time">
								<div>
									<!-- <img src="" alt=""> -->
									<span>{{ item.time }}</span>
								</div>

								<div>
									<!-- <img src="" alt=""> -->
									<span>{{ index }}</span>
								</div>
							</div>
						</div>
					</a>
				</div>
				<a href="#" class="more-btn">查看更多</a>
			</div>
		</div>

		<div class="zhanwei"></div>

		<forms></forms>
		<footerF></footerF>
	</div>
</template>

<script>
import footerF from "@/components/footerF";
import headF from "@/components/headF";
import schHead from "@/components/schHead";
import forms from "@/components/forms";

export default {
	components: {
		footerF,
		headF,
		schHead,
		forms
	},
	data() {
		return {
            schName:'四川文化传媒学校',
			text:"四川文化传媒职业学院学校简介★学校性质：四川文化传媒职业学院是一所经四川省人民政府批准、国家教育部备案、纳入国家计划内统一招生、具有独立颁发国家承认大学专科学历文凭资格的全日制普通高等职业院校。★历史沿革：学...",
			yxxz: ["中专院校", "五年制大专", "国家级重点"],
			tel: "132-5827-6830",
			address: "四川省成都市崇州学苑东路22号",
			major: [
				{
					title: "电子商务专业",
					xz: "三年制"
				},
				{
					title: "美术设计与制作专业",
					xz: "三年制"
				},
				{
					title: "播音与节日主持专业",
					xz: "三年制"
				},
				{
					title: "舞蹈表演专业",
					xz: "三年制"
				}
			],
			news: [
				{
					title: "产教融合行公益 康复生产暖童心",
					con:
						"为夯实学院康复专业生产性实训基地培训人才、服务社会的基本功能，筑牢产教融合、校企合作的育人高地，9月29日，由…",
					time: "2019-10-10"
				},
				{
					title: "同学们请注意——防止寝室上铺同学坠地情况发生",
					con:
						"同学们不知道以前听说过没有学校寝室上铺同学从床上掉下来的情况。近日，这样的事…",
					time: "2019-07-14"
				},
				{
					title: "关于民办非学历教育培训机构清理整顿工作的通知",
					con: "关于民办非学历教育培训机构清理整顿工作的通知",
					time: "2019-10-10"
				},
				{
					title:
						"我校将按照相关规定执行四川39个县市区贫困生享受特别资助.",
					con:
						"我校将按照相关规定执行四川39个县市区贫困生享受特别资助",
					time: "2019-10-10"
				}
			]
		};
	},
	created() {
        let app = getApp();
    },
    
	mounted() {},
	methods: {}
};
</script>

<style scoped lang="less">
.xxjj {
	.x-body {
		.text {
			text-indent: 2em;
			line-height: 1.8;
		}
		.nature {
			span {
				padding: 4rpx 16rpx;
				border-radius: 20rpx;
				line-height: 1;
				font-size: 12px;
				margin-right: 6rpx;
			}
			span:nth-of-type(1) {
				border: 1rpx solid #ea3e22;
				color: #ea3e22;
			}
			span:nth-of-type(2) {
				border: 1rpx solid #d06030;
				color: #d06030;
			}
			span:nth-of-type(3) {
				border: 1rpx solid #eb7a27;
				color: #eb7a27;
			}
		}
		p {
			margin-bottom: 20rpx;
		}
	}
}

.rzzy {
	.b-list {
		a:last-of-type {
			border-bottom: none;
		}
	}
	.r-list {
		display: flex;
		padding: 20rpx 0;
		border-bottom: 1rpx solid #f5f5f5;

		.img {
			width: 200rpx;
			height: 160rpx;
			background-color: #ccc;
			overflow: hidden;
			border-radius: 10rpx;
		}
		.con {
			flex: 1;
			margin-left: 20rpx;
			position: relative;
			.title {
				font-size: 16px;
			}
			& > p:nth-of-type(2) {
				margin: 20rpx 0;
			}
			.list-btn {
				position: absolute;
				bottom: 0;
				right: 0;
				width: 120rpx;
				height: 100rpx;
				display: flex;
				flex-direction: column;
				align-content: center;
				justify-content: space-between;
				p {
					width: 100%;
					height: 40rpx;
					color: #fff;
					font-size: 12px;
					border-radius: 6rpx;
					display: flex;
					align-items: center;
					justify-content: center;
				}
				p:nth-of-type(1) {
					background-color: #eb8920;
				}
				p:nth-of-type(2) {
					background-color: rgb(58, 148, 240);
				}
			}
		}
	}
}

.xxxw {
	.x-body {
		.big {
			padding-bottom: 20rpx;
			border: 1rpx solid #f5f5f5;
			.img {
				width: 100%;
				height: 280rpx;
				background-color: #ccc;
				overflow: hidden;
				margin-bottom: 20rpx;
			}
		}

		.news-list {
			& > a:nth-of-type(1) {
				display: block;
				.img {
					width: 100%;
					height: 280rpx;
					background-color: #ccc;
					overflow: hidden;
				}
				h4 {
					margin-top: 10rpx;
				}
			}
			a {
				display: flex;
				padding: 20rpx 0;
				border-bottom: 1rpx solid #f5f5f5;
				&:last-of-type {
					border-bottom: none;
				}
				.con {
					flex: 1;
					min-width: 0;
					margin-left: 10rpx;
					
					p {
						color: #666;
						text-indent: 2em;
						margin: 16rpx 0;
					}
					.time {
						display: flex;
						div {
							display: flex;
							align-items: center;
							span {
								color: #666;
								font-size: 12px;
							}
						}
					}
				}

				.img {
					flex-shrink: 0;
					width: 200rpx;
					height: 160rpx;
					overflow: hidden;
					background-color: #ccc;
				}
			}
		}
	}
}
</style>
