//定义请求地址
const host = 'https://www.68jiaoyu.com.cn';

function request(url, method, data, success, error, header = {}) {
    mpvue.showLoading({
        title: '加载中...'
    })
    mpvue.request({
        url: host + url,
        header: {
            'content-type': 'application/x-www-form-urlencoded' 
        },
        method: method,
        dataType:"json",
        data: data,
        success: function (res) {
            mpvue.hideLoading();
            success(res)
        },
        fail: function (error) {
            mpvue.hideLoading();
            error(error)
        },
        complete: function () {
            mpvue.hideLoading();
        }
    })
}

function get(obj) {
    return request(obj.url, 'GET', obj.data, obj.success, obj.error)
}

function post(obj) {
    return request(obj.url, 'POST', obj.data, obj.success, obj.error)
}

export default {
    request,
    get,
    post
}