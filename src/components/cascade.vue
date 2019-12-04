<!--
组件参数

调用示例:<cascade
			:navList="headList"
			@selectClassifyIndex="getSelectClassifyIndex"
			:classifyData="classifyArray[classifyIndex]"
		></cascade>
1.    :navList:['专业','地区','类型']                 //分类选项文字

2.    @selectClassifyIndex="getSelectClassifyIndex"   //发送分类选中index给父组件,通过此index获取当前点击分类的下拉菜单数据
        //父组件需定义方法
       // getSelectClassifyIndex(index) {
            this.classifyIndex = index;               //默认0
        }
3.    :classifyData="classifyArray[classifyIndex]"    //所有分类数据
        //数据格式
       // 	classifyArray: [
				[
					{
						text: "全部",
						url: ""
					},
					{
						text: "师范类",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "学前教育",
								url: ""
							},
							{
								text: "小学教育",
								url: ""
							},
							{
								text: "幼儿教育",
								url: ""
							},
							{
								text: "特殊教育",
								url: ""
							}
						]
					}
				],
				[
					{
						text: "全部",
						url: ""
					},
					{
						text: "四川",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							},
							{
								text: "成都市",
								url: ""
							},
							{
								text: "自贡市",
								url: ""
							},
							{
								text: "攀枝花市",
								url: ""
							},
							{
								text: "泸州市",
								url: ""
							}
						]
					},
					{
						text: "贵州",
						url: "",
						children: [
							{
								text: "全部",
								url: ""
							},
							{
								text: "贵阳市",
								url: ""
							},
							{
								text: "六盘水市",
								url: ""
							},
							{
								text: "遵义市",
								url: ""
							},
							{
								text: "安顺市",
								url: ""
							}
						]
					}
				],
				[
					{
						text: "类型不限",
						url: ""
					},
					{
						text: "中专院校",
						url: ""
					},
					{
						text: "技工学校",
						url: ""
					}
				]
			],                                        //数据格式
 
 
 -->

<template>
	<div class="cascade padding" :class="classifyFlag ? 'setFixed' : ''" @click="makeHide">
		<div class="c-head" @click.stop>
			<p
				v-for="(item, index) in navList"
				:key="index"
				:style="{borderRight: index == 2 ? 'none' : ''}"
				@click="selectClassify(index)"
				:class="classifyIndex == index ? 'active' : '' "
			>
				<span>{{ item }}</span>
				<!-- <img src="https://m.68jiaoyu.com/skin/image/icon/down.png" alt mode="widthFix" /> -->
				<i></i>
			</p>
		</div>

		<div class="c-body" v-if="classifyFlag" @click.stop>
			<div class="one-wrap" :style="{width: twoWrapShow ? '50%' : '100%'}">
				<a
					:href="item.url"
					v-for="(item, index) in classifyData"
					:key="index"
					@click="changeIndex(index)"
					:class="oneWrapListIndex == index ? 'active' : '' "
				>{{ item.text }}</a>
			</div>
			<div class="two-wrap" v-if="twoWrapShow">
				<a
					:href="item.url"
					v-for="(item, index) in classifyData[oneWrapListIndex].children"
					:key="index"
					:class="twoWrapListIndex == index ? 'active' : '' "
				>{{ item.text }}</a>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		navList: {
			type: Array
		},
		classifyData: {
			type: Array
		}
	},
	data() {
		return {
			classifyFlag: false, //下拉菜单是否显示
			classifyIndex: undefined, //分类选中下标
			oneWrapListIndex: 0, //一级菜单选中下标
			twoWrapListIndex: 0, // 二级菜单选中下标
			twoWrapShow: false // 二级菜单是否显示
		};
	},
	created() {
		// console.log(this.classifyData);
	},
	methods: {
		selectClassify(index) {
			if (this.classifyIndex == index) {
				this.makeHide();
			} else {
				this.classifyFlag = true;
				this.classifyIndex = index;
				this.$emit("selectClassifyIndex", index);
				// 切换分类时清除下拉菜单选中
				this.oneWrapListIndex = 0;
				this.twoWrapShow = false;
			}
		},
		changeIndex(index) {
			this.oneWrapListIndex = index;

			//如果一级菜单数据没有childre属性  则二级菜单不显示
			if (
				this.classifyData[this.oneWrapListIndex].hasOwnProperty(
					"children"
				)
			) {
				this.twoWrapShow = true;
			} else {
				this.twoWrapShow = false;
			}
		},
		makeHide() {
			//下拉菜单消失
			this.classifyFlag = false;
			this.classifyIndex = null;
		}
	}
};
</script>
<style lang="less" scope>
.cascade {
	position: relative;
}

.setFixed {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	z-index: 100;
	padding: 0 !important;
	.c-head {
		box-sizing: inherit;
		// padding: 0 0 20rpx 0;
	}
}
.c-head {
	width: 100%;
	// height: 60rpx;
	padding-bottom: 20rpx;
	padding-top: 20rpx;
	border-bottom: 1rpx solid #f5f5f5;
	background-color: #fff;
	display: flex;

	p {
		width: 33.33%;
		height: 40rpx;
		display: flex;
		align-items: center;
		justify-content: center;
		border-right: 1rpx solid #f5f5f5;
		min-width: 0;
		i {
			height: 20rpx;
			width: 20rpx;
			border: 3rpx solid #ccc;
			margin-left: 10rpx;
			border-top: none;
			border-right: none;
			transform-origin: 50% 0;
			transform: rotate(-45deg) translateY(-10rpx);
			margin-left: 10rpx;
		}
	}
	.active {
		color: #3a9fed;
		i {
			border-color: #3a9fed;
			transform-origin: 50% 50%;
			transform: rotate(135deg) translateY(-10rpx);
		}
	}
}
.c-body {
	position: absolute;
	top: 81rpx;
	left: 0;
	width: 100%;
	height: 80%;
	z-index: 8;
	background-color: #fff;
	display: flex;
	a {
		display: flex;
		width: 100%;
		height: 80rpx;
		box-sizing: border-box;
		border-bottom: 1rpx solid #f0f0f0;
		align-items: center;
		padding-left: 50rpx;

		position: relative;
	}

	.one-wrap {
		width: 100%;
		height: 100%;
		overflow-y: auto;

		.active {
			background-color: #f2f2f2;
			color: #3a9fed;
			&::after {
				content: "";
				position: absolute;
				left: 20rpx;
				top: 38%;
				height: 10rpx;
				width: 20rpx;
				border: 2rpx solid #3a9fed;
				border-top: none;
				border-right: none;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
		}
	}
	.two-wrap {
		width: 50%;
		height: 100%;
		overflow-y: auto;

		background-color: #f2f2f2;
		a {
			border-bottom: 1rpx solid #ebebeb;
		}
		.active {
			color: #3a9fed;

			&::after {
				content: "";
				position: absolute;
				left: 20rpx;
				top: 38%;
				height: 10rpx;
				width: 20rpx;
				border: 2rpx solid #3a9fed;
				border-top: none;
				border-right: none;
				-webkit-transform: rotate(-45deg);
				transform: rotate(-45deg);
			}
		}
	}
}
</style>