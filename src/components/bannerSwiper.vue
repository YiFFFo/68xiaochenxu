<template>
	<div>
		<!-- banner轮播 -->
		<view class="swiper-wrap">
			<swiper
				indicator-color="rgba(0,0,0,0.30)"
				indicator-active-color="#fff"
				:duration="switchDuration"
				:interval="autoPlayInterval"
				:autoplay="true"
				:indicator-dots="switchIndicateStatus"
				circular="true"
				:change="swiperChange"
				:animationfinish="animationfinish"
			>
				<block v-for="item in items" :key="item">
					<swiper-item :class="item.className">
						<view class="swiper-slide">
							<img :src="item.src" mode="widthFix" alt />
						</view>
					</swiper-item>
				</block>
			</swiper>
		</view>
	</div>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					className: "color-a",
					value: "A",
					src: "/static/images/picture/banner1.jpg"
				},
				{
					className: "color-b",
					value: "B",
					src: "/static/images/picture/banner2.jpg"
				},
				{
					className: "color-c",
					value: "C",
					src: "/static/images/picture/banner3.jpg"
				}
			],
			current: 0, //当前所在页面的index
			switchIndicateStatus: true, //是否开启面板底部指示点
			switchAutoPlayStatus: true, //是否开启自动播放
			switchDuration: 300, // 滑动动画时长,ms
			autoPlayInterval: 2000 // 自动播放切换间隔时间,ms
		};
	}
};
</script>
<style lang="less" scope>
.swiper-wrap .swiper-slide {
	background-color: #ccc;
	image {
		display: block;
		width: 750rpx;
	}
}
</style>