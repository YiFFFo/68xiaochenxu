<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页> 院校选择</span>
		</div>

		<schHead></schHead>

            <div class="padding">
                 <div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">招生专业</p>
					<p class="f">School Major</p>
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
		};
	},
	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {
		
	}
};
</script>

<style lang="less" scope>
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
</style>