<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>关于我们</span>
		</div>
		<bannerSwiper></bannerSwiper>
		<div class="padding">
			<div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">网站地图</p>
					<p class="f">Website Map</p>
				</div>
			</div>
			<div>
				<div class="l-title">
					<p>招生学校</p>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="w-body">
					<a href="#" v-for="(item, index) in sch" :key="index">{{ item }}</a>
				</div>
			</div>
			<div>
				<div class="l-title">
					<p>招生专业</p>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="w-body">
					<a href="#" v-for="(item, index) in major" :key="index">{{ item }}</a>
				</div>
			</div>

			<div>
				<div class="l-title">
					<p>热点资讯</p>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="w-body">
					<a href="#" v-for="(item, index) in article" :key="index">{{ item }}</a>
				</div>
			</div>

			<div>
				<div class="l-title">
					<p>搜索热词</p>
					<div>
						<div></div>
						<div></div>
					</div>
				</div>
				<div class="w-body">
					<a href="#" v-for="(item, index) in keyWord" :key="index">{{ item }}</a>
				</div>
			</div>
		</div>
		<div class="zhanwei"></div>
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
			sch: [
				"985工程院校",
				"211工程院校",
				"中央部属本科院校",
				"省属本科院校",
				"高职（高专）院校",
				"高职单招",
				"中专院校",
				"技工学校",
				"职业高中",
				"普通高中",
				"五年制大专",
				"其他"
			],
			major: [
				"师范类",
				"航空高铁交通类",
				"财经贸易类",
				"建筑类",
				"医学医药卫生类",
				"汽车汽修类",
				"IT计算机类",
				"旅游服务类",
				"工业化工类",
				"资源能源类",
				"服装设计类",
				"文化艺体类",
				"机电机械类",
				"食品餐饮类",
				"电子电器类",
				"农林牧渔类",
				"休闲保健类"
			],
			article: [
				"西北首家中职创新教育实训基地正式启动",
				"中职毕业生就业很抢手 深造可“直升”本科",
				"山西祁县回应“职校生网络投诉称遭欺凌”：校长等多人被问责",
				"山西职校生控诉遭同学欺凌211天 校长等多人被问责",
				"中国扩大高职院校奖助学金覆盖面 设立中等职教国家奖学金",
				"全国首批“职业大学”什么样？"
			],
			keyWord: [
				"职业教育",
				"四川希望汽车",
				"酒店管理",
				"旅游管理",
				"计算机网络技术",
				"机电技术应用",
				"航空",
				"学前教育",
				"财经"
			]
		};
	},
	methods: {}
};
</script>

<style lang="less" scope>
.l-title {
	display: flex;
	& > div {
		flex: 1;
		margin-left: 10rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		div {
			width: 100%;
			height: 2rpx;
			background-color: #f5f5f5;
			margin: 4rpx 0;
		}
	}
}
.w-body {
    margin-top: 20rpx;
	a {
		display: inline-block;
		margin-right: 30rpx;
        margin-bottom: 20rpx;
        font-size: 12px;
        color: #666;
	}
}
</style>
