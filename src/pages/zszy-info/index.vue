<template>
	<div>
		<headF></headF>

		<h2>{{ title }}</h2>
		<div class="title padding">
			<div>
				<div class="left">
					<p>
						<!-- <img src="" alt=""> -->
						<span>招生人数：{{ people }}</span>
					</p>
					<p>
						<!-- <img src="" alt=""> -->
						<span>招聘对象：{{ career }}</span>
					</p>
					<p>
						<!-- <img src="" alt=""> -->
						<span>专业学制：{{ year }}</span>
					</p>
				</div>
				<div class="right">
					<a href style="background-color:#f24b4b;">报名咨询</a>
					<a href="#" style="background-color:#3a94f0;">学校详情</a>
				</div>
			</div>
		</div>

		<div class="body padding">
			<!-- 专业介绍 -->
			<div class="zyjs">
				<div class="b-title">
					<span style="border-color:#efb02a;">专业介绍</span>
				</div>

				<div class="text">
					<p>{{ zyjsText }}</p>
				</div>
			</div>

			<!-- 专业课程 -->
			<div class="zykc">
				<div class="b-title">
					<span style="border-color:#f24b4b;">专业课程</span>
				</div>

				<div class="text">
					<p>{{ zykcText }}</p>
				</div>
			</div>

			<!-- 就业岗位 -->
			<div class="jygw">
				<div class="b-title">
					<span style="border-color:#f24b4b;">就业岗位</span>
				</div>

				<div class="text">
					<p>{{ zykcText }}</p>
				</div>
			</div>

			<!-- 就业前景 -->
			<div class="jyqj">
				<div class="b-title">
					<span style="border-color:#f24b4b;">就业岗位</span>
				</div>

				<div class="text">
					<p>{{ zykcText }}</p>
				</div>
			</div>
		</div>
		<div class="zhanwei"></div>

		<!-- 其他专业 -->
		<div class="other-major padding">
			<div class="wrap-head" style="border-color:#3a94f0">
				<div class="b" style="border-color:#3a94f0">
					<p class="t">学校其他专业</p>
					<p class="f">School othe majors</p>
				</div>
			</div>

			<div class="o-body">
				<a :href="item.url" v-for="(item, index) in otherMajor" :key="index">{{ item.text }}</a>
			</div>
		</div>

		<div class="zhanwei"></div>

		<!-- 其他学校 -->
		<div class="other-sch padding">
			<div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">其他有本专业的学校</p>
					<p class="f">Other schools with this major</p>
				</div>
			</div>

			<div class="o-body">
				<a :href="item.url" v-for="(item, index) in otherSch" :key="index">
					<p class="dot">{{ item.text }}</p>
					<div>查看详情</div>
				</a>
			</div>
		</div>
		<footerF></footerF>
	</div>
</template>
<script>
import headF from "@/components/headF";
import footerF from "@/components/footerF";

export default {
	components: {
		headF,
		footerF
	},
	data() {
		return {
			title: "四川空分集团技工学校机床切削加工专业",
			people: 332,
			career: "New Object",
			year: "三年制",

			zyjsText:
				"本专业培养从事操作车床，进行工件旋转表面切削加工的中级技能人才。培养具有积极的人生态度、健康的心理素质、良好的职业道德和较扎实的文化基础知识，具有获取新知识、新技能的意识和能力，能适应不断变化的职业社会，了解企业生产流程，严格执行机械设备操作规定，遵守各项工艺规程，具有安全生产意识，重视环境保护，并能解决一般性专业问题。本专业要求学生具备并精通机床切削操作技工、机床编程员和机床维护、维修人员所需掌握的综合知识，并在实际工作中积累了大量实际经验，知识面很广，能自行完成机床切削系统的选型、机床电气系统的设计、安装、调试和维修，能独立完成机床的数控化改造。",
			zykcText:
				"本专业毕业生主要面向工厂，从事在机电行业技术，生产，制造，管理部门从事数控机床维修、数控编程和操作以及机械设备制造、设计以及数控设备销售等工作。",
			otherMajor: [
				{
					text: "数控加工专业",
					url: ""
				},
				{
					text: "城市轨道交通运营与管理",
					url: ""
				},
				{
					text: "机电设备安装与维修",
					url: ""
				},
				{
					text: "汽车维修专业",
					url: ""
				},
				{
					text: "电子商务专业",
					url: ""
				},
				{
					text: "汽车制造与装配专业",
					url: ""
				}
			],
			otherSch: [
				{
					text: "重庆市南川隆化职业中学",
					url: ""
				},
				{
					text: "重庆市纺织技工学校",
					url: ""
				},
				{
					text: "成都市庄园机电职业技术学校",
					url: ""
				},
				{
					text: "重庆市茂森中等职业学校",
					url: ""
				},
				{
					text: "内江市科技开发学校",
					url: ""
				}
			]
		};
	}
};
</script>
<style lang="less" scope>
h2 {
	text-align: center;
	font-size: 16px;
}
.title {
	& > div {
		display: flex;
		padding-top: 30rpx;
		padding-bottom: 30rpx;
		border-bottom: 1rpx dashed #e5e5e5;
	}
	.left {
		width: 70%;
		p {
			margin-bottom: 20rpx;
		}
	}
	.right {
		width: 30%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		a {
			width: 80%;
			height: 50rpx;
			background-color: #ccc;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #fff;
			font-size: 12px;
			margin-bottom: 20rpx;
			border-radius: 8rpx;
		}
	}
}

.body {
	padding-bottom: 20rpx;
	.b-title {
		padding-bottom: 10rpx;
		border-bottom: 1rpx solid #f5f5f5;
		margin-bottom: 30rpx;
		margin-top: 30rpx;
		span {
			padding-bottom: 10rpx;
			padding-left: 10rpx;
			padding-right: 10rpx;
			border-bottom: 1rpx solid;
			line-height: 1;
		}
	}
	.zyjs,
	.zykc,
	.jyqj,
	.jygw {
		.text {
			p {
				line-height: 1.8;
				color: #666;
			}
		}
	}
}
.other-major {
	position: relative;
	padding-bottom: 20rpx;
	&::after {
		content: "";
		position: absolute;
		bottom: 100rpx;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #f5f5f5;
	}
	.o-body {
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-right: 1rpx;

		a {
			width: 33.33%;
			box-sizing: border-box;
			height: 80rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 12px;
			text-align: center;
		}
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 33.33%;
			width: 1rpx;
			height: 100%;
			background-color: #f5f5f5;
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 66.66%;
			width: 1rpx;
			height: 100%;
			background-color: #f5f5f5;
		}
	}
}

.other-sch {
	padding-bottom: 20rpx;
	.o-body {
		a {
			display: flex;
			padding: 20rpx 0;
			border-bottom: 1rpx solid #f5f5f5;
			&:last-of-type {
				border-bottom: none;
			}
			p {
				width: 80%;
			}
			div {
				flex: 1;
				margin-left: 10rpx;
				height: 40rpx;
				background-color: #f24b4b;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 8rpx;
				font-size: 12px;
			}
		}
	}
}
</style>