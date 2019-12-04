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
					<p class="t">联系方式</p>
					<p class="f">School Contact</p>
				</div>
			</div>

			<div class="s-body">
				<p>学校名称：名称名称名称名称</p>
				<p>电话：<span @click="makePhoneCall">{{ telNumber }}</span></p>
				<p>地址：</p>
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
			telNumber: "13333333333"
		};
	},
	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {
		makePhoneCall() {
			mpvue.makePhoneCall({
				phoneNumber: this.telNumber,
				success: () => {
					console.log("makePhoneCall success");
				},
				fail: err => {
					mpvue.showModal({
						title: "拨打失败",
						content: "请检查是否输入了正确的电话号码",
						showCancel: false
					});
				}
			});
		}
	}
};
</script>

<style lang="less" scope>
.s-body{
    p{
        margin-bottom: 20rpx;
    }
}
</style>