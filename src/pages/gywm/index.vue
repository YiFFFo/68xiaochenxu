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
					<p class="t">关于我们</p>
					<p class="f">About Us</p>
				</div>
			</div>

			<div class="w-body">
                <p>68教育网隶属四川六八创享教育管理有限公司旗下(http://www.68jiaoyu.com)。为广大初、高中毕业生提供免费中专中职技校学校招生资讯、最新招生报考信息和专业导航,专业成就您的未来。</p>
                <p>68教育网，发挥网络优势和资源优势，着力打造中专中职技校及职业技术院校综合门户网站。介绍全省技校、职业技术学院规模、特色、专业设置、招生动态，结合公司好工作资源优势，为广大学员提供实习就业用工信息服务工作。</p>
                <p>68教育网是国内所有职业技术学校免费提供宣传的一家网络平台。所加盟的学校涵盖了酒店管理、市场营销、国际贸易、物流管理、石油开采、模具制造、钢铁冶炼、土木工程、建筑造价、手机维修、汽车维修、汽车驾驶、、厨师面点、焊工、家电制冷、机电电工、装饰装潢、西式糕点、美容美发、车工、钳工、铆工、管工、数控车工、计算机、游戏动漫、会计电算化、学前班教育、婚庆主持、礼仪培训、摄影化妆、旅游、按摩、装载机、挖掘机、塔吊，服装裁剪、毛衣编织等专业。本网站愿诚邀各个中专院校加盟，建立长期有效的合作招生网站。</p>
                <h3>市场合作</h3>
                <p>欢迎各类机构、培训学校、教育网站、中职学校等与我们联系，在内容、活动合作等方面建立长期合作。</p>
                <p>联系人：黄老师</p>
                <p>联系电话：132-5827-6830</p>
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
    p{
        color: #666;
        text-indent: 2em;
        line-height: 1.8;
        margin-bottom: 20rpx;
    }
    h3{
        font-size: 15px;
    }
}
</style>
