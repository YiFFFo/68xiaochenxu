<script>
export default {
    data() {
        return {
            aabb:2
        }
    },
    globalData:{

    userInfo:'null'

    },
	created() {
		// 调用API从本地缓存中获取数据

		/*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

		let logs;
		if (mpvuePlatform === "my") {
			logs = mpvue.getStorageSync({ key: "logs" }).data || [];
			logs.unshift(Date.now());
			mpvue.setStorageSync({
				key: "logs",
				data: logs
			});
		} else {
			logs = mpvue.getStorageSync("logs") || [];
			logs.unshift(Date.now());
			mpvue.setStorageSync("logs", logs);
		}
	},
	log() {
		console.log(`log at:${Date.now()}`);
	}
};
</script>

<style lang="less">
/* this rule will be remove */
* {
	transition: width 2s;
	-moz-transition: width 2s;
	-webkit-transition: width 2s;
	-o-transition: width 2s;
}
text,
view {
	font-size: 14px;
}
page {
	padding-top: 100rpx;
}
.padding {
	box-sizing: border-box;
	padding: 0 2%;
}
.zhanwei {
	width: 100%;
	height: 20rpx;
	background-color: #f5f5f5;
}
.dot {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	min-width: 0;
}
.now-pos {
	width: 100%;
	height: 60rpx;
	background-color: #f5f5f5;
	display: flex;
	align-items: center;
	span {
        color: #999;
        font-size: 12px;
	}
}
.bottom-fixed {
	position: fixed;
	left: 0;
	top: 100rpx;
	overflow: hidden;
}
.wrap-head {
	padding-top: 20rpx;
	padding-bottom: 10rpx;
    border-bottom: 1rpx solid;
    margin-bottom: 30rpx;
	.b {
		border-left: 8rpx solid;
		box-sizing: border-box;
		padding-left: 20rpx;
		p {
			line-height: 1;
		}
		.t {
			font-size: 16px;
		}
		.f {
			font-size: 12px;
		}
	}
}

.more-btn{
    display: flex;
    width: 400rpx;
    height: 80rpx;
    margin: 40rpx auto;
    align-items: center;
    justify-content: center;
    color: #fff;    
    border-radius: 8rpx;
    background-color: #efb02a;
}
</style>
