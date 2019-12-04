<template>
	<div>
		<headF></headF>
		<div class="now-pos padding">
			<!-- <img src="" alt=""> -->
			<span>当前位置：首页>关于我们</span>
		</div>
		<bannerSwiper></bannerSwiper>
		<div class="padding">
			<div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">网站声明</p>
					<p class="f">Website Stated</p>
				</div>
			</div>

			<div class="w-body">
				<p>1、本站所有内容，凡注明“原创文章、图片、视频”等，版权均属68教育平台网所有，任何自然人、法人未经本站授权不得转载、链接、复制等方式发布，如需使用，必须注明来源，“转自(或来源)68教育平台网(www.68jiaoyu.com )”，版权归68教育平台网所有，如有侵权将追究法律责任。</p>
				<p>2、由于不当转载引起的任何纠纷、行政处理或其他损失，本网站为不知情且无恶意的第三方，不承担因此引起的任何法律责任。</p>
				<p>3、在法律允许范围内，本站保留最终解释权和追究侵权者法律责任的权利。</p>
				<h3>免责声明（DISCLAIMER）</h3>
				<p>1、本站提供内容不做任何商业用途，没有特别注明的均来源于网络，只供用户浏览参考，访问者可将本网站提供的内容或服务用于个人学习、研究或欣赏，以及其他非商业性或非盈利性用途，但同时应遵守著作权法及其他相关法律的规定，不得侵犯本网站及相关权利人的合法权利。</p>
				<p>除此以外，将本网站任何内容或服务用于其他用途时，须征得本网站及相关权利人的书面许可，并支付报酬。 本网站内容原作者如不愿意在本网站刊登内容，请及时通知本站，予以删除。如涉及版权问题，请联系邮箱：312346348@qq.com，一旦确认，将在2个工作日内删除。</p>
				<p>2、本站提供的所有文章内容中所占立场，均不代表本网站所占立场。</p>
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
		return {};
	},
	methods: {}
};
</script>

<style lang="less" scope>
.w-body {
	p {
		color: #666;
		text-indent: 2em;
		line-height: 1.8;
		margin-bottom: 20rpx;
	}
	h3 {
		font-size: 15px;
	}
}
</style>
