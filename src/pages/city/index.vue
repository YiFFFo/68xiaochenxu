<template>
	<div>
		<headF></headF>
        <div class="zhanwei"></div>
        <div class="current-city">
            <p>当前选择城市:</p>
            <div>
                <!-- <img src="" alt="" model="widthFix"> -->
                <span>全国</span>
            </div>
        </div>
        <div class="zhanwei"></div>
        <div class="hot-city ">
            <div class="top padding">
                <div class="t">
                    <!-- <img src="" alt="" mode="widthFix"> -->
                    <span>热门城市</span>
                </div>
                <div class="b">
                    <span>选择城市</span>
                    <a href="#">访问全国</a>
                </div>
            </div>
            <div class="bottom padding">
                <a href="#" v-for="(item, index) in city" :key="index">{{ item }}</a>
            </div>
        </div>

        <div class="letter-find">
            <div class="l-head padding">
                <!-- <img src="" alt="" mode="widthFix"> -->
                <span>按字母查找</span>
            </div>

            <div class="l-body padding">
                <div class="letter">
                    <a href="#" v-for="(item, index) in letter" :key="index">{{ item }}</a>
                </div>

                <div class="list">
                    <p>其他城市站点正在加速开通中，敬请期待~</p>
                </div>
            </div>
        </div>
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
            city:['四川','成都','重庆','贵州','贵阳'],
            letter:['C','G','S'],
        };
	},
	created() {
		let app = getApp();
	},
	mounted() {
        
    },
	methods: {}
};
</script>

<style lang="less" scope>
    .current-city{
        height: 100rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        div{
            display: flex;
            align-items: center;
            img{
                width: 24rpx;
                margin: 0 10rpx;
            }
            span{
                color: #049ff8;
            }
        }
    }

    .hot-city{
        .top{
            height: 100rpx;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .t{
                span{
                    font-size: 15px;
                }
            }
            div{
                display: flex;
                align-items: center;
                a{
                    color: #049ff8;
                    margin-left: 10rpx;
                }
            }
        }
        .bottom{
            display: flex;
            flex-wrap:wrap;
            background-color: #f5f5f5;
            padding-top: 2%;
            a{
                width: 23.5%;
                height: 70rpx;
                margin-right: 2%;
                margin-bottom: 2%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #fff;
                &:nth-of-type(4n+4){
                    margin-right: 0;
                }
            }
        }
    }

    .letter-find{
        .l-head{
            width: 100%;
            height: 88rpx;
            display: flex;
            align-items: center;
            border-bottom: 1rpx solid #f5f5f5;
            span{
                font-size: 15px;
            }
        }

        .l-body{
            .letter{
                display: flex;
                flex-wrap:wrap;
                a{
                    width: 16.666%;
                    height: 70rpx;
                    font-size: 16px;
                    color: #049ff8;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }
</style>