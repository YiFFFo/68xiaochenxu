<template>
	<div class="MenuH" @click="changeMshow" >
		<div class="MenuH-container padding" @click.stop >
			<div class="menu-nav">
				<div>
					<div class="m-head">
						<!-- <img src="" alt=""> -->
						<span>招生专业</span>
					</div>

					<div class="m-body1">
						<a :href="item.url" v-for="(item, index) in major" :key="index">{{ item.text }}</a>
					</div>
				</div>

				<div>
					<div class="m-head">
						<!-- <img src="" alt=""> -->
						<span>招生院校</span>
					</div>

					<div class="m-body2">
						<a :href="item.url" v-for="(item, index) in city" :key="index">{{ item.cName }}</a>
					</div>
				</div>

				<div>
					<div class="m-head">
						<!-- <img src="" alt=""> -->
						<span>新闻资讯</span>
					</div>

					<div class="m-body3">
						<a :href="item.url" v-for="(item, index) in news" :key="index">{{ item.text }}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			major: [
				{
					//招生专业
					text: "师范类",
					url: ""
				},
				{
					text: "航空高铁交通类",
					url: ""
				},
				{
					text: "财经贸易类",
					url: ""
				},
				{
					text: "师范类",
					url: ""
				},
				{
					text: "航空高铁交通类",
					url: ""
				},
				{
					text: "财经贸易类",
					url: ""
				},
				{
					text: "师范类",
					url: ""
				},
				{
					text: "航空高铁交通类",
					url: ""
				},
				{
					text: "财经贸易类",
					url: ""
				}
			],
			city: [
				{
					cName: "全国",
					url: ""
				},
				{
					cName: "四川",
					url: ""
				},
				{
					cName: "重庆",
					url: ""
				},
				{
					cName: "贵州",
					url: ""
				},
				{
					cName: "成都",
					url: ""
				},
				{
					cName: "全国",
					url: ""
				},
				{
					cName: "四川",
					url: ""
				},
				{
					cName: "重庆",
					url: ""
				},
				{
					cName: "贵州",
					url: ""
				},
				{
					cName: "成都",
					url: ""
                },{
					cName: "四川",
					url: ""
				},
				{
					cName: "重庆",
					url: ""
				},
				{
					cName: "贵州",
					url: ""
				},
				{
					cName: "成都",
					url: ""
				},{
					cName: "四川",
					url: ""
				},
				{
					cName: "重庆",
					url: ""
				},
				{
					cName: "贵州",
					url: ""
				},
				{
					cName: "成都",
					url: ""
				},{
					cName: "四川",
					url: ""
				},
				{
					cName: "重庆",
					url: ""
				},
				{
					cName: "贵州",
					url: ""
				},
				{
					cName: "成都",
					url: ""
				},
			],
			news: [
				{
					text: "全部",
					url: ""
				},
				{
					text: "职校新闻",
					url: ""
				},
				{
					text: "行业政策",
					url: ""
				},
				{
					text: "招生问答",
					url: ""
				},
				{
					text: "就业前景",
					url: ""
				}
			]
		};
	},
	methods: {
		oShow() {
			this.sFlag = !this.sFlag;
		},
		chooseOption(index) {
            this.selectIndex = index;
			this.setData({
				sFlag: false
			});
		},
		changeMshow() {
			this.$emit("cMshow", false);
		},
		preventD() {}
	}
};
</script>
<style lang="less" scope>
.MenuH {
	position: fixed;
	top: 100rpx;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	border-top: 1rpx solid #f5f5f5;
}
.MenuH-container {
	width: 100%;
	height: 80%;
	background-color: #fff;
	overflow-y: auto;
}

.m-head {
	width: 100%;
	height: 80rpx;
	border-bottom: 1rpx solid #f5f5f5;
	display: flex;
	align-items: center;
}
.m-body1 {
	display: flex;
	flex-wrap: wrap;
	padding: 30rpx 0;
	a {
		margin-right: 40rpx;
		margin-bottom: 20rpx;
	}
}

.m-body2 {
	display: flex;
	flex-wrap: wrap;
	padding: 30rpx 0;
	a {
		width: 20%;
		margin-bottom: 20rpx;
	}
}

.m-body3 {
	display: flex;
	flex-wrap: wrap;
	padding: 30rpx 0;
	a {
		width: 25%;
		margin-bottom: 20rpx;
	}
}
</style>