<template>
	<div>
		<headF></headF>
		<bannerSwiper></bannerSwiper>
		<div class="zhanwei"></div>

		<div class="article-wrap padding">
			<h2>成都石室天府中学怎么样?</h2>
			<div class="info-time">
				<p>
					<!-- <img src="" alt=""> -->
					<span>68教育</span>
				</p>

				<p>
					<!-- <img src="" alt=""> -->
					<span>2019-08-21</span>
				</p>

				<p>
					<!-- <img src="" alt=""> -->
					<span>2920次</span>
				</p>
			</div>
			<div class="info-text"></div>

			<div class="turn">
				<a href="#">
					<span>上一篇:</span>
				</a>
				<a href="#">
					<span>下一篇:</span>
				</a>
			</div>
		</div>

		<div class="zhanwei"></div>
		<!-- 相关文章 -->
		<div class="corr-art padding">
			<div class="wrap-head" style="border-color:#3a94f0">
				<div class="b" style="border-color:#3a94f0">
					<p class="t">相关文章</p>
					<p class="f">Related articles</p>
				</div>
			</div>

            <div class="co-body">
                <a href="#" v-for="(item, index) in artData" :key="index">
                    <span></span>
                    <p class="dot">{{ item.title }}</p>
                    <img src="/static/images/icon/right.png" alt="" mode="widthFix">
                </a>
            </div>
		</div>
		<div class="zhanwei"></div>

		<!-- 推荐院校 -->
		<div class="other-sch padding">
			<div class="wrap-head" style="border-color:#f24b4b">
				<div class="b" style="border-color:#f24b4b">
					<p class="t">推荐院校</p>
					<p class="f">Recommended schools</p>
				</div>
			</div>

			<div class="o-body">
				<a :href="item.url" v-for="(item, index) in otherSch" :key="index">
					<p class="dot">{{ item.text }}</p>
					<div>查看详情</div>
				</a>
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
			otherSch: [
				{
					text: "学校一学校一学校一学校一学校一"
				},
				{
					text: "学校二学校二学校二学校二学校二"
				},
				{
					text: "学校三学校三学校三学校三学校三"
				},
				{
					text: "学校四学校四学校四学校四学校四"
				},
				{
					text: "学校五学校五学校五学校五学校五"
				}
            ],
            artData:[
                {
                    title:'文章一文章一文章一文章一文章一',
                },{
                    title:'文章二文章二文章二文章二文章二',
                },{
                    title:'文章三文章三文章三文章三文章三',
                },{
                    title:'文章四文章四文章四文章四文章四',
                },{
                    title:'文章五文章五文章五文章五文章五',
                },
            ]
		};
	}
};
</script>
<style lang="less" scope>

.corr-art{
	padding-bottom: 20rpx;
    .co-body{
        a{
            display: flex;
            align-items: center;
            padding: 16rpx 0; 
            border-bottom: 1rpx dashed #f5f5f5;
            &:last-of-type {
				border-bottom: none;
			}
            span{
                display: block;
                width: 8rpx;
                height: 8rpx;
                background-color: #3a94f0;
                border-radius: 50%;
                margin-right: 10rpx;
            }
            p{
                width: 80%;
            }
            img{
                width: 16rpx;
                margin-left: auto;
            }
        }
    }
}
.other-sch {
	padding-bottom: 20rpx;
	.o-body {
		a {
			display: flex;
			padding: 20rpx 0;
			border-bottom: 1rpx dashed #f5f5f5;
			&:last-of-type {
				border-bottom: none;
			}
			p {
				width: 80%;
			}
			div {
				flex: 1;
				margin-left: 10rpx;
				height: 40rpx;
				background-color: #f24b4b;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 8rpx;
				font-size: 12px;
			}
		}
	}
}

.article-wrap {
	h2 {
		font-size: 14px;
        font-weight: bold;
        text-align: center;
	}
	.info-time {
		display: flex;
		width: 70%;
		margin: 20rpx auto;
		justify-content: space-around;
		p {
			display: flex;
			align-items: center;
			span {
                color: #666;
                font-size: 12px;
			}
		}
	}
	.info-text {
		padding: 20rpx 0;
		border-bottom: 1rpx solid #f5f5f5;
	}
	.turn {
		span {
			color: #3a94f0;
		}
	}
}
</style>