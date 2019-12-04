<template>
	<div class="padding">
		<div class="wrap-head" style="border-color:#efb02a">
			<div class="b" style="border-color:#efb02a">
				<p class="t">平台求学通道</p>
				<p class="f">Platform learning channel</p>
			</div>
		</div>

		<form @submit="formSubmit">
			<div class="name wrap">
				<p>真实姓名: <i>*</i></p>
				<input type="text" placeholder="2-4个中文字符" v-model="name" :class="nameFlag ? 'borderRed' :''" />
			</div>
			<div class="tel wrap">
				<p>电<span>话:</span><i>*</i></p>
				<input
					type="text"
					placeholder="11位手机号:1xx-xxx-xxxx"
					v-model="tel"
					:class="telFlag ? 'borderRed' :''"
				/>
			</div>
			
			<div class="major wrap">
				<p>意向专业:<i>*</i></p>
				<input type="text" placeholder="例如:航空专业" v-model="major" />
			</div>
            <div class="wx wrap">
				<p>微信/QQ:</p>
				<input type="text" placeholder="输入微信或QQ" v-model="wx" />
			</div>
			<div class="education wrap">
				<p>
					学
					<span>历:</span>
				</p>
				<picker
					mode="selector"
					:vlaue="arrIndex"
					:range="selector"
					@change="selectorChange"
					@cancel="cancel"
				>
					<div class="picker">
						<text class="chooseItem">当前选择:</text>
						{{selector[arrIndex]}}
					</div>
				</picker>
			</div>
			<button formType="submit" class="more-btn">提交信息</button>
		</form>
	</div>
</template>
<script>
export default {
	data() {
		return {
			name: "",
			tel: "",
			wx: "",
			major: "",
			arrIndex: 0,
			selector: ["高中", "初中", "其他"],

			nameFlag: false,
			telFlag: false
		};
	},
	methods: {
		formSubmit(e) {
			const that = this;
			let nameReg = new RegExp(/^[\u4E00-\u9FA5]{2,4}$/);
			let telReg = new RegExp(/^1[3456789]\d{9}$/);

			if (!telReg.test(this.tel)) this.telFlag = true;
			if (!nameReg.test(this.name)) this.nameFlag = true;
			if (!telReg.test(this.tel) || !nameReg.test(this.name)) {
				// console.log("");
				mpvue.showToast({
					title: "请检查姓名或者手机号格式是否正确",
					icon: "none"
				});
			}
		},
		selectorChange(e) {
			this.arrIndex = e.mp.detail.value;
		},
		cancel(e) {
			console.log(e);
		}
	}
};
</script>
<style lang="less" scope>
form {
	display: flex;
	flex-direction: column;
	align-items: center;
	.wrap {
		display: flex;
		align-items: center;
		margin-bottom: 20rpx;

		p {
            width: 140rpx;
            position: relative;
			span {
				margin-left: 55rpx;
            }
            i{
                color: red;
                position: absolute;
                top: 0;
                left:-20rpx;
            }
		}
		input::placeholder {
			font-size: 12px;
			line-height: 50rpx;
		}
		input,
		select,
		.picker {
			width: 360rpx;
			height: 50rpx;
			border: 1rpx solid #efb02a;
			box-sizing: border-box;
			padding: 0 10rpx;
			border-radius: 6rpx;
		}
		.borderRed {
			border-color: red;
		}
		.picker {
			display: flex;
			align-items: center;
		}
	}
	button::after {
		border: none;
	}
}
</style>