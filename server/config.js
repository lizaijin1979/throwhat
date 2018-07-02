const CONF = {
    port: '5757',
    rootPathname: '/data/release/weapp',

    // 微信小程序 App ID
    appId: 'wxbdc64c8a4fdab7b2',

    // 微信小程序 App Secret
    appSecret: '3de7d510a8dc6def50254e8591ccd612',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: false,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'cAuth',
        pass: 'lizj1979',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh',

   // 其他配置 ...
    serverHost: 'www.throwhat.club',
    tunnelServerUrl: 'http://tunnel.ws.qcloud.la',
    tunnelSignatureKey: '27fb7d1c161b7ca52d73cce0f1d833f9f5b5ec89',
    // 可以注册一个腾讯云账号，获取一下配置。腾讯云相关配置可以查看云 API 秘钥控制台：https://console.cloud.tencent.com/capi
    qcloudAppId: '1256407216',
    qcloudSecretId: 'AKIDLFf7QheIrFTlxymkXCTAohV8arzy75KV',
    qcloudSecretKey: 'L0Uq160mS7sZEk9VikQzSpeLrCCVhImj',
    wxMessageToken: 'weixinmsgtoken',
    networkTimeout: 30000
}

module.exports = CONF
