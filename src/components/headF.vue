<template>
	<div class="head-F padding">
		<div class="search-wrap">
			<div class="input">
				<img src="/static/images/icon/search.svg" alt mode="wdithFix" class="search-ico" />
				<input class="ipt" placeholder="请输入搜索关键字" @focus="showMenu" v-model="iptValue" />
				<img
					src="/static/images/icon/clear.svg"
					alt
					mode="wdithFix"
					class="clear-ico"
					v-if="iptValue !== ''"
					@click="clearValue"
				/>
			</div>
			<div class="btn" v-if="mShow" style="display:block;">
				<div class="cancel" @click="cancel" v-if="iptValue == ''">取消</div>
				<div class="ok" @click="confirm" v-if="iptValue !== ''">确定</div>
			</div>
		</div>
		<MenuH v-if="mShow" @cMshow="getMshow"></MenuH>
	</div>
</template>
<script>
import MenuH from "@/components/MenuH";
// import tool from "@/utils/tool";

export default {
	components: {
		MenuH
	},
	data() {
		return {
			mShow: false,
			iptValue: "",
		};
	},
	methods: {
		cancel() {
			this.mShow = false;
			this.clearValue();
			this.$emit("setFixed", this.mShow); //给父组件发送Boolean值 是否开启阻止滚动穿透
		},
		confirm() {
			// 发送搜索
		},
		showMenu() {
			this.mShow = true;
			this.$emit("setFixed", this.mShow); //给父组件发送Boolean值 是否开启阻止滚动穿透
		},
		getMshow(data) {
			this.mShow = data;
		},
		clearValue() {
			this.iptValue = "";
		}
	}
	// onPageScroll: tool.throttle(function(e) {
	// 	this.sTop = e[0].scrollTop;
	// })
};
</script>
<style lang="less" scope>
.head-F {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	display: flex;
	height: 100rpx;
	justify-content: space-between;
	padding-top: 10rpx;
	padding-bottom: 10rpx;
	z-index: 99;
	.search-wrap {
		display: flex;
		width: 100%;
		height: 60rpx;
		border-radius: 50rpx;
		margin: auto;
		& > div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;
		}
		.input {
			flex: 1;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #f5f5f5;
			border-radius: 50rpx;
			input {
				width: 100%;
				height: 100%;
				box-sizing: border-box;
				padding: 0 20rpx;
			}
			.search-ico {
				width: 30rpx;
				margin-left: 20rpx;
			}
			.clear-ico {
				width: 30rpx;
				margin-right: 20rpx;
			}
		}
		.btn {
			width: 100rpx;
			height: 100%;
			overflow: hidden;
			div {
				width: 100%;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
	.menu {
		width: 100rpx;
		display: flex;

		img {
			width: 50rpx;
			margin: auto;
		}
	}
	// .return {
	// 	width: 100rpx;
	// 	display: flex;

	// 	img {
	// 		width: 30rpx;
	// 		transform-origin: 50% 50%;
	// 		transform: rotate(90deg);
	// 		margin: auto;
	// 	}
	// }
	// .logo {
	// 	flex: 1;
	// 	display: flex;

	// 	img {
	// 		width: 280rpx;
	// 		margin: auto;
	// 	}
	// }
}
</style>