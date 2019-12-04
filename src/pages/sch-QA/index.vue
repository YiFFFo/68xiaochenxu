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
					<p class="t">招生问答</p>
					<p class="f">School Q&A</p>
				</div>
			</div>

            <div class="s-body">
                <a href="#">
                    <span></span>
                    <p class="dot">文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容</p>
                    <img src="/static/images/icon/right.png" mode="widthFix" alt="" >
                </a>
                <a href="#">
                    <span></span>
                    <p class="dot">文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容</p>
                    <img src="/static/images/icon/right.png" mode="widthFix" alt="" >
                </a>
                <a href="#">
                    <span></span>
                    <p class="dot">文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容</p>
                    <img src="/static/images/icon/right.png" mode="widthFix" alt="" >
                </a>
                <a href="#">
                    <span></span>
                    <p class="dot">文字内容文字内容文字内容文字内容文字内容文字内容文字内容文字内容</p>
                    <img src="/static/images/icon/right.png" mode="widthFix" alt="" >
                </a>
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
  .s-body{
        padding-bottom: 20rpx;
        a{
            display: flex;
            align-items: center;
            padding: 14rpx 0;
            border-bottom: 1rpx dashed #f5f5f5;
            &:last-of-type{
                border-bottom: none;
            }
            span{
                width: 6rpx;
                height: 6rpx;
                border-radius: 50%;
                background-color: #f24b4b;
                margin-right: 10rpx;
            }
            p{
                width: 90%;
                font-size: 12px;
            }
            img{
                width: 16rpx;
                margin-left: auto;
            }
        }
    }
</style>