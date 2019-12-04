<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>专业选择</span>
		</div>
		<bannerSwiper></bannerSwiper>
		<div class="padding">
			<div class="wrap-head" style="border-color:#3a94f0">
				<div class="b" style="border-color:#3a94f0">
					<p class="t">快捷选择学校</p>
					<p class="f">Quick Choice of Schools</p>
				</div>
			</div>

			<div class="w-body">
				<div>
					<div class="l-title">
						<p>学校地区</p>
						<div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div class="l-body">
						<p
							v-for="(item, index) in area"
							:key="index"
							@click="changeArea(index)"
							:class="areaIndex == index ? 'active' : ''"
						>{{ item }}</p>
					</div>
				</div>

				<div>
					<div class="l-title">
						<p>学校等级</p>
						<div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div class="l-body">
						<p
							v-for="(item, index) in grade"
							:key="index"
							@click="changeGrade(index)"
							:class="gradeIndex == index ? 'active' : ''"
						>{{ item }}</p>
					</div>
				</div>

				<div>
					<div class="l-title">
						<p>学校类型</p>
						<div>
							<div></div>
							<div></div>
						</div>
					</div>

					<div class="l-body">
						<p
							v-for="(item, index) in genre"
							:key="index"
							@click="changeGenre(index)"
							:class="genreIndex == index ? 'active' : ''"
						>{{ item }}</p>
					</div>
				</div>

				<div class="selectSch" @click="confirm">选择学校</div>
			</div>
		</div>
		<footerF></footerF>
	</div>
</template>

<script>
import { formatTime } from "@/utils/index";
import headF from "@/components/headF";
import footerF from "@/components/footerF";
import bannerSwiper from "@/components/bannerSwiper";

export default {
	components: {
		headF,
		footerF,
		bannerSwiper
	},

	data() {
		return {
			area: ["不限", "四川", "成都", "贵州", "贵阳", "重庆"],
			grade: [
				"不限",
				"国家级示范",
				"国家级重点",
				"省级示范",
				"省级重点",
				"普通院校",
				"市级示范"
			],
			genre: [
				"不限",
				"中专院校",
				"技工学校",
				"职业高中",
				"普通高中",
				"五年制大专",
				"其他"
			],
			areaIndex: 0,
			gradeIndex: 0,
			genreIndex: 0
		};
	},
	methods: {
        changeArea(index){
            this.areaIndex = index;
        },
        changeGrade(index){
            this.gradeIndex = index;
        },
        changeGenre(index){
            this.genreIndex = index;
        },
        confirm(){
            
            mpvue.navigateTo({
                url:'/pages/sch-list/main'
            })
        }
    }
};
</script>

<style lang="less" scope>
.w-body {
	& > div {
		margin-top: 20rpx;
	}
	& > div:nth-of-type(1) {
		.active {
			background-color: #efb02a;
			color: #fff;
			border-color: #efb02a;
		}
	}
	& > div:nth-of-type(2) {
		.active {
			background-color: #f57441;
			color: #fff;
			border-color: #f57441;
		}
	}
	& > div:nth-of-type(3) {
		.active {
			background-color: #f4563c;
			color: #fff;
			border-color: #f4563c;
		}
	}
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
	.l-body {
		display: flex;
		flex-wrap: wrap;
		padding-top: 20rpx;
		p {
			width: 23.5%;
			height: 60rpx;
			box-sizing: border-box;
			border: 1rpx solid #f5f5f5;
			border-radius: 6rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 16rpx;
			margin-right: 2%;
			&:nth-of-type(4n + 4) {
				margin-right: 0;
			}
		}
	}

	.selectSch {
		width: 100%;
		height: 100rpx;
		background-color: #efb02a;
		color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 16px;
		margin-top: 40rpx;
		margin-bottom: 40rpx;
	}
}
</style>
