<!-- 组件参数
    1.:dataList  列表数据
    2.@newList   加载下一页后返回的新数据
    调用示例:<pullLoad :dataList='schList' @newList='getData'></pullLoad>
-->
<template>
	<div></div>
</template>
<script>
export default {
	props: {
		dataList: {
			type: Array
		}
	},
	data() {
		return {
			page: 1, //当前页数
			pageSize: 8, //每页数据量
			isLastPage: false, //当前是否最后一页
			tips: "上拉加载更多" //页尾提示信息
		};
	},
	onReachBottom(e) {
		// 最后一页时return掉
		if (this.isLastPage) {
			return;
		}
		this.page += 1;
		let _this = this;
		//请求数据 加载下一页
		if (this.page === 5) {
			mpvue.showToast({
				title: "没有更多了",
				icon: "none"
			});
			this.isLastPage = true;
		} else {
			let timer = null;
			mpvue.showLoading({
				title: "正在加载中...",
				icon: "loading",
				mask: true,
				success: res => {
					timer = setTimeout(() => {
						let newData = this.dataList.concat([this.dataList[0]]);
						this.$emit("newList", newData);
						mpvue.hideLoading();
					}, 1000);
				},
				fail: err => {
					console.log(err);
				},
				complete: () => {
					//接口调用结束的回调函数（调用成功、失败都会执行）
				}
			});
		}
	}
};
</script>
<style lang="less" scope>
</style>