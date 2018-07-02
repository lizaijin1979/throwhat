/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://620707128.throwhat.club';
//var host = 'https://baqrxr2w.qcloud.la';
var host = 'https://www.throwhat.club';
var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,
        
        // 数据上报接口
        dataReportUrl: `${host}/weapp/dataReport`,

        // 帽子登记接口
        hatSignupUrl: `${host}/weapp/hatSignup`,  

        // 数据查询接口
        dataInqueryUrl: `${host}/weapp/dataInquery`,  

        // 数据查询接口
        hatInqueryUrl: `${host}/weapp/hatInquery`,             
    }
};

module.exports = config;
