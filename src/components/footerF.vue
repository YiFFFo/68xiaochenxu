<template>
	<div>
		<div style="padding-top:30rpx;padding-bottom:30rpx;background-color:#e5e5e5;">
			<div class="list">
				<a
					:href="item.url"
					v-for="(item, index) in items"
					:key="index"
					:style="{borderRight: index == 4 ? 'none' : ''}"
				>{{item.text}}</a>
			</div>
			<p
				style="text-align:center;font-size:12px;color:#666;margin-top:20rpx"
			>68教育 2019 蜀ICP备19026397号-3</p>

			<div id="goTop" @click="goTop" v-if="tFlag">
				<img src="/static/images/icon/goTop.svg" alt="" mode="widthFix">
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					text: "网站地图",
					url: "/pages/wzdt/main"
				},
				{
					text: "就业前景",
					url: "#"
				},
				{
					text: "网站声明",
					url: "/pages/wzsm/main"
				},
				{
					text: "联系我们",
					url: "/pages/lxwm/main"
				},
				{
					text: "关于我们",
					url: "/pages/gywm/main"
				}
            ],
            tFlag:false,  //true时 返回顶部按钮显示
		};
	},
	created() {
		let app = getApp();
    },
    onPageScroll(e){
        this.tFlag = false
        if(e.scrollTop > 500)this.tFlag = true;
    },
	methods: {
		goTop() {
			mpvue.pageScrollTo({
				scrollTop: 0,
				duration: 300
			});
		}
	}
};
</script>


<style lang="less" scope>
.list {
	display: flex;
	width: 80%;
	margin: 0 auto;

	a {
		width: 20%;
		text-align: center;
		font-size: 12px;
		color: #666;
		border-right: 1rpx solid #ccc;
	}
}

#goTop {
	position: fixed;
	bottom: 140rpx;
	right: 40rpx;
	width: 60rpx;
	height: 60rpx;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	color: #fff;
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
    img{
        width:70%;
    }
}
</style>