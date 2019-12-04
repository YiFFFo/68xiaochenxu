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
					<p class="t">学校简介</p>
					<p class="f">School Synopsis</p>
				</div>
			</div>
            <div class="s-con">
                <h3>四川文化传媒职业学院学校简介</h3>
                <p><span>★学校性质：</span>四川文化传媒职业学院是一所经四川省人民政府批准、国家教育部备案、纳入国家计划内统一招生、具有独立颁发国家承认大学专科学历文凭资格的全日制普通高等职业院校。 </p>
                <p><span>★学校性质：</span>四川文化传媒职业学院是一所经四川省人民政府批准、国家教育部备案、纳入国家计划内统一招生、具有独立颁发国家承认大学专科学历文凭资格的全日制普通高等职业院校。 </p>
                <p><span>★学校性质：</span>四川文化传媒职业学院是一所经四川省人民政府批准、国家教育部备案、纳入国家计划内统一招生、具有独立颁发国家承认大学专科学历文凭资格的全日制普通高等职业院校。 </p>
                <p><span>★学校性质：</span>四川文化传媒职业学院是一所经四川省人民政府批准、国家教育部备案、纳入国家计划内统一招生、具有独立颁发国家承认大学专科学历文凭资格的全日制普通高等职业院校。 </p>
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
		return {};
	},
	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {}
};
</script>

<style lang="less" scope>
    .s-con{
        h3{
            font-size: 16px;
            text-align: center;
            margin-bottom: 40rpx;
        }
        p{
            line-height: 1.8;
            margin-bottom: 20rpx;
            color: #666;
            text-indent:2em;
        }
    }
</style>