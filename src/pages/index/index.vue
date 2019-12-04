<template>
	<div>
		<!-- 头部 -->
		<div class="h-head padding">
			<div class="logo">
				<img src="https://m.68jiaoyu.com/skin/image/icon/log1.png" mode="widthFix" />
			</div>

			<div class="city">
				<navigator target="self" open-type="navigate" url="/pages/city/main">{{ cityName }}</navigator>
				<img src="/static/images/icon/right.png" mode="widthFix" alt />
			</div>

			<div class="menu" @click.stop="showMenu">
				<img src="/static/images/icon/sousuo1.png" mode="widthFix" alt />
			</div>
			<MenuH v-if="mShow" @cMshow="getMshow"></MenuH>
		</div>
        <!-- <headF></headF> -->
		<div :class="mShow ? 'bottom-fixed' : ''">
			<bannerSwiper></bannerSwiper>
			<!-- 首页导航 -->
			<div class="h-nav padding">
				<a :href="item.url" class="h-nav-list" v-for="(item, index) in hNav" :key="index">
					<img :src="item.src" mode="widthFix" />
					<p>{{ item.title }}</p>
				</a>
			</div>

			<div class="zhanwei"></div>

			<!-- 热门学校 -->
			<div class="hot-school padding">
				<div class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/remenxuexxiao.png"
						mode="widthFix"
						style="width:50rpx;"
					/>
					<span>成都热门学校</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</div>

				<div class="h-body">
					<div class="head-tab">
						<div
							v-for="(item, index) in tabs1"
							:key="index"
							@click="changeActiveIndex(index)"
							:class="activeIndexOne == index ? 'on' : '' "
						>{{ item }}</div>
					</div>

					<div class="body-tab">
						<div v-show="activeIndexOne == 0">
							<div class="tab-list">
								<a href="/pages/sch-index/main" class="list-a">
									<div class="img">
										<!-- <img src="" alt=""> -->
									</div>
									<div class="con">
										<h4>四川文化传媒职业学院</h4>
										<div class="sch-xz">
											<span class="xz_1">中专院校</span>
											<span class="xz_2">国家级重点</span>
										</div>
										<div class="hot-zy">
											热招专业:
											<span>电子商务</span>
											<span>电子商务</span>
											<span>电子商务</span>
										</div>
									</div>
								</a>
								<a href="#" class="sch-adress">
									<!-- <img src="" alt=""> -->
									<span>学校地址:学校地址学校地址学校地址学校地址</span>
								</a>
							</div>

							<a href="#" class="l-more">查看更多热门学校</a>
						</div>
						<div v-show="activeIndexOne == 1">1</div>
						<div v-show="activeIndexOne == 2">2</div>
						<div v-show="activeIndexOne == 3">3</div>
						<div v-show="activeIndexOne == 4">4</div>
					</div>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 热门专业 -->
			<div class="hot-major padding">
				<a href="#" class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/remen.png"
						mode="widthFix"
						style="width:50rpx;"
					/>
					<span>成都热门专业</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</a>

				<div class="h-body">
					<div class="head-tab">
						<div
							v-for="(item, index) in tabs2"
							:key="index"
							@click="changeActiveIndexTwo(index)"
							:class="activeIndexTwo == index ? 'on' : '' "
						>{{ item }}</div>
					</div>

					<div class="body-tab">
						<div v-show="activeIndexTwo == 0">
							<a href="#" class="link">
								<div class="img">
									<!-- <img src="" alt=""> -->
								</div>
								<p>航空服务</p>
							</a>
							<a href="#" class="l-more">查看更多热门专业</a>
						</div>
						<div v-show="activeIndexTwo == 1">1</div>
						<div v-show="activeIndexTwo == 2">2</div>
						<div v-show="activeIndexTwo == 3">3</div>
						<div v-show="activeIndexTwo == 4">4</div>
					</div>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 师范类 -->
			<div class="major padding">
				<a href="#" class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/shifanlei.png"
						mode="widthFix"
						style="width:40rpx;"
					/>
					<span>师范类</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</a>

				<div class="s-body">
					<a class="link dot" href="#" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">{{ item }}</a>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 汽车类 -->
			<div class="major padding">
				<a href="#" class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/qichelei.png"
						mode="widthFix"
						style="width:40rpx;"
					/>
					<span>汽车类</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</a>

				<div class="s-body">
					<a class="link dot" href="#" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">{{ item }}</a>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 高铁航空交通类 -->
			<div class="major padding">
				<a href="#" class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/jiaotong.png"
						mode="widthFix"
						style="width:40rpx;"
					/>
					<span>高铁航空交通类</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</a>

				<div class="s-body">
					<a class="link dot" href="#" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">{{ item }}</a>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 建筑类 -->
			<div class="major padding">
				<a href="#" class="t-head">
					<img
						src="https://m.68jiaoyu.com/skin/image/new/jianzhushebei.png"
						mode="widthFix"
						style="width:40rpx;"
					/>
					<span>建筑类</span>
					<div class="right">
						<span>更多</span>
						<img src="/static/images/icon/right.png" alt mode="widthFix" />
					</div>
				</a>

				<div class="s-body">
					<a class="link dot" href="#" v-for="(item, index) in [1,2,3,4,5,6]" :key="index">{{ item }}</a>
				</div>
			</div>

			<div class="zhanwei"></div>

			<!-- 文章 -->
			<div class="article-tab padding">
				<div class="head-tab">
					<div
						v-for="(item, index) in tabs1"
						:key="index"
						@click="changeActiveIndexThree(index)"
						:class="activeIndexThree == index ? 'on' : '' "
					>{{ item }}</div>
				</div>

				<div class="body-tab">
					<div v-show="activeIndexThree == 0">
						<div>
							<a
								href="#"
								class="link dot"
								v-for="(item, index) in ['标题1','标题2','标题3','标题4','标题5','标题6']"
								:key="index"
							>
								<span class="text">{{ item }}</span>
								<span class="time">11-01</span>
							</a>
						</div>
						<a href="#" class="l-more">查看更多</a>
					</div>
					<div v-show="activeIndexThree == 1">1</div>
					<div v-show="activeIndexThree == 2">2</div>
					<div v-show="activeIndexThree == 3">3</div>
				</div>
			</div>

			<footerF></footerF>
		</div>
	</div>
</template>

<script>
import footerF from "@/components/footerF";
import MenuH from "@/components/MenuH";
import bannerSwiper from "@/components/bannerSwiper";
import cascade from "@/components/cascade";
import amapFile from "@/utils/amap-wx.js";
import headF from "@/components/headF";

export default {
	components: {
		footerF,
		MenuH,
		bannerSwiper,
        cascade,
        headF
	},
	data() {
		return {
			cityName: "",
			hNav: [],
			tabs1: ["中专", "技校", "普高", "职高", "五年制"],
			activeIndexOne: 0,
			tabs2: ["航空高铁", "财经贸易", "医药医学", "汽车维修"],
			activeIndexTwo: 0,
			activeIndexThree: 0,
			mShow: false
		};
	},

	created() {
        let app = getApp();
        
	},
	mounted() {
        this.gpsCity();
        let _this = this;
        this.$http.post({
            url:'/uniapp/index.inc.php',
            data:{
				action: "gethNav"
            },
            success(res){
                console.log(res);
                _this.hNav = res.data;
                console.log(_this.hNav);
            },
            error(err){
                console.log(err);
            }
        })
	},
	methods: {
		changeActiveIndex(index) {
			this.activeIndexOne = index;
		},
		changeActiveIndexTwo(index) {
			this.activeIndexTwo = index;
		},
		changeActiveIndexThree(index) {
			this.activeIndexThree = index;
		},
		showMenu() {
			this.mShow = !this.mShow;
		},
		getMshow(data) {
			this.mShow = data;
		},
		//定位城市
		gpsCity() {
			var that = this;
			//调用自带位置获取
			mpvue.getLocation({
				type: "gcj02", //返回可以用于mpvue.openLocation的经纬度
				success: function(res) {
					var latitude = res.latitude; //维度
					var longitude = res.longitude; //经度
					that.loadCity(latitude, longitude); //调用高德
				}
			});
        },
		//把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置信息
		loadCity(latitude, longitude) {
			var that = this;
			var myAmapFun = new amapFile.AMapWX({
				key: "891a32738608eda42e8f2ffba1151fdc"
			});
			myAmapFun.getRegeo({
				success: function(data) {
					var cityCode = data[0].regeocodeData.addressComponent.adcode; //获取城市code
					that.gpsCode = cityCode;
					that.city_name =data[0].regeocodeData.addressComponent.city; //获取城市名称
					that.cityName = that.city_name;
					const key = "mockData";
					mpvue.getStorage({
						key,
						success: res => console.log("获取成功", res.data[0].regeocodeData.addressComponent.province),
						fail: () => console.log("获取失败"),
						complete: () => console.log("获取完成")
					});
				},
				fail: function(info) {
					console.log(info);
				}
			});
		}
	}
};
</script>

<style scoped lang="less">
.h-head {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: #fff;
	display: flex;
	align-items: center;

	height: 100rpx;
	justify-content: space-between;
	padding-top: 10rpx;
	padding-bottom: 10rpx;
	z-index: 99;
	.logo {
		width: 375rpx;
		display: flex;
		align-items: center;
		image {
			width: 100%;
		}
	}

	.city {
		flex: 1;
		margin-left: 20rpx;
		width: 200rpx;
		display: flex;
		align-items: center;
		image {
			width: 14rpx;
			margin-left: 10rpx;
		}
	}

	.menu {
		width: 100rpx;
		display: flex;
		position: relative;
		image {
			width: 46rpx;
			margin: auto;
		}
	}
}

.h-nav {
	display: flex;
	flex-wrap: wrap;
	padding-top: 20rpx;
	.h-nav-list {
		display: flex;
		width: 25%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 20rpx;
		image {
			width: 80rpx;
		}
		p {
			margin-top: 10rpx;
		}
	}
}

.t-head {
	display: flex;
	height: 60rpx;
	line-height: 60rpx;
	border-bottom: 1rpx solid #f5f5f5;
	align-items: center;
	& > img {
		margin-right: 10rpx;
	}
	.right {
		margin-left: auto;
		display: flex;
		align-items: center;
		img {
			width: 16rpx;
			margin-left: 10rpx;
		}
	}
}
.head-tab {
	display: flex;
	align-items: center;
	view {
		width: 25%;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;
		box-sizing: border-box;
	}
	.on {
		border-bottom: 1rpx solid #eb361d;
		color: #eb361d;
	}
}

.l-more {
	width: 100%;
	height: 60rpx;
	color: #656565;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	justify-content: center;
}
.hot-school {
	padding-top: 30rpx;
	padding-bottom: 30rpx;

	.h-body {
		.body-tab {
			.tab-list {
				padding-top: 30rpx;
				padding-bottom: 30rpx;

				.list-a {
					display: flex;
					.img {
						width: 200rpx;
						height: 150rpx;
						background-color: #ccc;
						flex-shrink: 0;
						border-radius: 10rpx;
						overflow: hidden;

						img {
							width: 100%;
						}
					}
					.con {
						flex: 1;
						margin-left: 20rpx;
						min-width: 0;
						h4 {
							font-size: 16px;
						}
						.sch-xz {
							// background-color: #ccc;
							margin: 10rpx 0;
							span {
								border-radius: 40rpx;
								margin-right: 10rpx;
								font-size: 12px;
							}
							.xz_1 {
								padding: 0 10rpx;
								border: 1rpx solid #ed5d2b;
								color: #ed5d2b;
							}
							.xz_2 {
								padding: 0 10rpx;
								border: 1rpx solid #00b2fc;
								color: #00b2fc;
							}
						}

						.hot-zy {
							font-size: 12px;
							display: flex;
							white-space: nowrap;
							flex-wrap: wrap;
							span {
								margin-right: 10px;
								color: #666;
							}
						}
					}
				}

				.sch-adress {
					width: fit-content;
					padding: 4rpx 20rpx;
					background-color: #f5f5f5;
					border-radius: 40rpx;
					margin-top: 10rpx;

					span {
						font-size: 12px;
						color: #999;
					}
				}
			}
		}
	}
}

.hot-major {
	padding-top: 30rpx;
	padding-bottom: 30rpx;
	.tab-list {
		padding-top: 30rpx;
		padding-bottom: 30rpx;
	}
	.body-tab {
		padding-top: 40rpx;
		& > div {
			.link {
				width: 48%;
				margin-right: 2%;
				margin-bottom: 20rpx;
				&:nth-of-type(even) {
					margin-right: 0;
				}
				.img {
					width: 100%;
					height: 240rpx;
					background-color: #ccc;
					overflow: hidden;
					img {
						width: 100%;
						border-radius: 10rpx;
					}
				}
				p {
					text-align: center;
					margin-top: 8rpx;
				}
			}
		}
	}
}

.major {
	position: relative;
	&::after {
		content: "";
		position: absolute;
		bottom: 80rpx;
		left: 0;
		width: 100%;
		height: 1px;
		background-color: #f5f5f5;
	}
	.s-body {
		margin-top: 30rpx;
		margin-bottom: 30rpx;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-right: 1rpx;
		&::before {
			content: "";
			position: absolute;
			top: 0;
			left: 33.33%;
			width: 1rpx;
			height: 100%;
			background-color: #f5f5f5;
		}
		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 66.66%;
			width: 1rpx;
			height: 100%;
			background-color: #f5f5f5;
		}
		.link {
			width: 33.33%;
			height: 80rpx;
			box-sizing: border-box;
			text-align: center;
			line-height: 80rpx;
		}
	}
}

.article-tab {
	padding-bottom: 30rpx;
	.link {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 14rpx 0;
		.text {
			width: 80%;
		}
		.time {
			color: #999;
			font-size: 12px;
		}
	}
}
</style>
