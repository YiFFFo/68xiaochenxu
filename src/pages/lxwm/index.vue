<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>专业选择</span>
		</div>
		<bannerSwiper></bannerSwiper>
		<div class="padding">
			<div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">联系我们</p>
					<p class="f">Contact Us</p>
				</div>
			</div>

			<div class="w-body">
                <div class="left">
                    <div>
                        <img mode="widthFix" style="width:36rpx;" src="https://m.68jiaoyu.com/skin/image/about/user.png" alt="">
                        <span>联系人：黄老师</span>
                    </div>
                    <div>
                        <img mode="widthFix" style="width:36rpx;" src="https://m.68jiaoyu.com/skin/image/about/tel.png" alt="">
                        <span>联系电话：028-64157748 13258276830</span>
                    </div>
                    <div>
                        <img mode="widthFix" style="width:36rpx;" src="https://m.68jiaoyu.com/skin/image/about/pos.png" alt="">
                        <span>联系地址：四川省成都市洪河中路351号</span>
                    </div>
                </div>
                <div class="right">
                    <img mode="widthFix" style="width:150rpx;" src="https://m.68jiaoyu.com/skin/image/m-ewm.jpg" alt="">
                    <p>官方微信</p>
                </div>
            </div>
		</div>
        <div class="zhanwei"></div>
        <forms></forms>
		<footerF></footerF>
	</div>
</template>

<script>
import headF from "@/components/headF";
import footerF from "@/components/footerF";
import bannerSwiper from "@/components/bannerSwiper";
import forms from "@/components/forms";

export default {
	components: {
		headF,
		footerF,
        bannerSwiper,
        forms
	},

	data() {
		return {

        }
	},
	methods: {
        
    }
};
</script>

<style lang="less" scope>
.w-body{
    display: flex;
    padding-bottom: 20rpx;
    .left{
        width: 80%;
        div{
            display: flex;
            align-items: center;
            margin-bottom: 20rpx;
        }
    }
    .right{
        flex: 1;
        text-align:center;
        img{
            
        }
        p{
            text-align: center;
        }
    }
}
</style>
