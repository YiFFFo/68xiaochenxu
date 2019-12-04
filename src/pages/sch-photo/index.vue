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
					<p class="t">学校相册</p>
					<p class="f">School album</p>
				</div>
			</div>

			<div class="photo-wrap">
				<div class="a-title">
					<p
						v-for="(item, index) in photoTitle"
						:key="index"
						:style="{width:(100 / photoTitle.length)+'%'}"
						@click="changeSelectIndex(index)"
						:class="photoBodySelectIndex == index ? 'active' : 'none'"
					>
						<span>{{ item }}</span>
					</p>
				</div>

				<div class="a-body">
					<div
						class="b-list"
						:style="{display:photoBodySelectIndex == index ? 'flex' : 'none'}"
						v-for="(item, index) in photoData"
						:key="index"
					>
						<div class="img" v-for="(v,i) in item" :key="i">
							<img :src="v.imgUrl" alt mode="widthFix" @click="previewImage(i)" />
							<p class="dot">{{ v.imgText }}</p>
						</div>
					</div>
				</div>
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
			photoTitle: [
				"学校宿舍",
				"学生食堂",
				"教学设备",
				"学生活动",
				"学校环境"
			],
			photoBodySelectIndex: 0,
			photoData: [
				[
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/151720211012.jpg",
						imgText: "宿舍1"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/151720451012.jpg",
						imgText: "宿舍2"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/151720621012.jpg",
						imgText: "宿舍3"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/151720751012.jpg",
						imgText: "宿舍4"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/151720391012.jpg",
						imgText: "宿舍5"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/15/181659191012.jpg",
						imgText: "宿舍6"
					}
				],
				[
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145935921012.jpg",
						imgText: "食堂1"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145935121012.jpg",
						imgText: "食堂2"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145935681012.jpg",
						imgText: "食堂3"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145957161012.jpg",
						imgText: "食堂4"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145958341012.jpg",
						imgText: "食堂5"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/145958751012.jpg",
						imgText: "食堂6"
					}
				],
				[
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659561012.jpg",
						imgText: "设备1"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659941012.jpg",
						imgText: "设备2"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659751012.jpg",
						imgText: "设备3"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659801012.jpg",
						imgText: "设备4"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659921012.jpg",
						imgText: "设备5"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144659341012.jpg",
						imgText: "设备6"
					}
				],
				[
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144532851012.jpg",
						imgText: "活动1"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144532331012.jpg",
						imgText: "活动2"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144532191012.jpg",
						imgText: "活动3"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144533631012.jpg",
						imgText: "活动4"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144533641012.jpg",
						imgText: "活动5"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144533481012.jpg",
						imgText: "活动6"
					}
				],
				[
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144316421012.jpg",
						imgText: "环境1"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144332781012.jpg",
						imgText: "环境2"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144340241012.jpg",
						imgText: "环境3"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144350371012.jpg",
						imgText: "环境4"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144350731012.jpg",
						imgText: "环境5"
					},
					{
						imgUrl:
							"http://www.68jiaoyu.com/file/upload/201910/14/144350531012.jpg",
						imgText: "环境6"
					}
				]
			]
		};
	},
	created() {
		let app = getApp();
	},
	mounted() {},
	methods: {
		changeSelectIndex(index) {
			this.photoBodySelectIndex = index;
		},
		previewImage(index) {
			let newArr = [];
			this.photoData[this.photoBodySelectIndex].map((v, i) => {
				newArr.push(v.imgUrl);
			});
			mpvue.previewImage({
				current: this.photoData[this.photoBodySelectIndex][index]
					.imgUrl,
				urls: newArr,
				success: res => {
					console.log("previewImage success", res);
				},
				fail: err => {
					console.log("previewImage fail", err);
				}
			});
		}
	}
};
</script>

<style lang="less" scope>
.photo-wrap {
	.a-title {
		display: flex;
		p {
			height: 40rpx;
			box-sizing: border-box;
			border-right: 1rpx solid #f5f5f5;
            text-align: center;
            &:last-of-type{
                border-right: none;
            }
			span {
				color: #666;
			}
		}
		.active {
			span {
				padding-bottom: 10rpx;
				border-bottom: 6rpx solid #eb361d;
			}
		}
	}

	.a-body {
		.b-list {
			display: flex;
			flex-wrap: wrap;
			padding-top: 60rpx;
			div:nth-of-type(even) {
				margin-right: 0;
			}
			.img {
				width: 48%;
				height: 240rpx;
				background-color: #ccc;
				overflow: hidden;
				margin-right: 4%;
				position: relative;
				margin-bottom: 40rpx;
				img {
					width: 100%;
					height: 100%;
				}
				p {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 60rpx;
					background-color: rgba(0, 0, 0, 0.6);
					color: #fff;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
}
</style>