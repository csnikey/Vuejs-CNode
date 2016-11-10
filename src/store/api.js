import Vue from 'vue'
import axios from 'axios'

const baseUrl = 'https://cnodejs.org/api/v1'
export default {
    /*如何获取 accessToken？ 用户登录后，在设置页面可以看到自己的 accessToken。 建议各移动端应用使用手机扫码的形式登录，验证使用 /accesstoken 接口，登录后长期保存 accessTokens/
    /*主题首页
    page Number 页数
    tab String 主题分类。目前有 ask share job good
    limit Number 每一页的主题数量
    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
    */    
    getTopics(params){
        return axios.get(`${baseUrl}/topics?tab=${params.tab}&page=${params.page}&limit=${params.limit}&mdrender=${params.mdrender}`)
    },
    /*主题详情
    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
    accesstoken String 当需要知道一个主题是否被特定用户收藏时，才需要带此参数。会影响返回值中的 is_collect 值。
    */
    getTopic(params){
        return axios.get(`${baseUrl}/topic/${params.accesstoken}?mdrender=${params.mdrender}`)
    },
    /*新建主题
    accesstoken String 用户的 accessToken
    title String 标题
    tab String 目前有 ask share job
    content String 主体内容
    返回值示例
    {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
    */
    createTopic(params){
        return axios.post(`${baseUrl}/topics`,params)
    },
    /*编辑主题
    accesstoken String 用户的 accessToken
    topic_id String 主题id
    title String 标题
    tab String 目前有 ask share job
    content String 主体内容
    返回值示例
    {success: true, topic_id: '5433d5e4e737cbe96dcef312'}
    */
    updateTopic(params){
        return axios.post(`${baseUrl}/topics/update`,params)
    },
    /*收藏主题
    接收 post 参数
    accesstoken String 用户的 accessToken
    topic_id String 主题的id
    返回值示例
    {"success": true}   
    */
    collectTopic(params){
        return axios.post(`${baseUrl}/topic_collect/collect`,params)
    },
    /*收藏主题
    接收 post 参数
    accesstoken String 用户的 accessToken
    topic_id String 主题的id
    返回值示例
    {"success": true}   
    */
    deCollectTopic(params){
        return axios.post(`${baseUrl}/topic_collect/de_collect`,params)
    },
    /*用户收藏的主题*/
    getCollectTopics(params){
        return axios.get(`${baseUrl}/topic_collect/${params.loginname}`)
    },
    /*新建评论
    accesstoken String 用户的 accessToken
    content String 评论的主体
    reply_id String 如果这个评论是对另一个评论的回复，请务必带上此字段。这样前端就可以构建出评论线索图。
    返回值示例
    {success: true, reply_id: '5433d5e4e737cbe96dcef312'}  
    */
    createReply(params){
        return axios.post(`${baseUrl}/topic/${params.topic_id}/replies`,params)
    },
    /*点赞评论
    accesstoken String
    接口会自动判断用户是否已点赞，如果否，则点赞；如果是，则取消点赞。点赞的动作反应在返回数据的 action 字段中，up or down。
    返回值示例
    {"success": true, "action": "down"}
    */
    upReply(params){
        return axios.post(`${baseUrl}/reply/${params.reply_id}/ups`,params)
    },
    /*用户详情*/
    getUser(params){
        return axios.get(`${baseUrl}/user/${params.loginname}`)
    },
    /*验证 accessToken 的正确性
    accesstoken String 用户的 accessToken
    如果成功匹配上用户，返回成功信息。否则 403。
    返回值示例
    {success: true, loginname: req.user.loginname}
    */
    checkAccessToken(params){
        return axios.post(`${baseUrl}/accesstoken`,params)
    },
    /*获取未读消息数
    accesstoken String
    返回值示例
    { data: 3 }
    */
    getUnreadMessages(params){
        return axios.get(`${baseUrl}/message/count?accesstoken=${params.accesstoken}`)
    },
    /*获取已读和未读消息
    accesstoken String
    mdrender String 当为 false 时，不渲染。默认为 true，渲染出现的所有 markdown 格式文本。
    返回值示例
        {
            data: {
                has_read_messages: [],
                hasnot_read_messages: [
                {
                    id: "543fb7abae523bbc80412b26",
                    type: "at",
                    has_read: false,
                    author: {
                    loginname: "alsotang",
                    avatar_url: "https://avatars.githubusercontent.com/u/1147375?v=2"
                    },
                    topic: {
                    id: "542d6ecb9ecb3db94b2b3d0f",
                    title: "adfadfadfasdf",
                    last_reply_at: "2014-10-18T07:47:22.563Z"
                    },
                    reply: {
                    id: "543fb7abae523bbc80412b24",
                    content: "[@alsotang](/user/alsotang) 哈哈",
                    ups: [ ],
                    create_at: "2014-10-16T12:18:51.566Z"
                    }
                    },
                ...
                ]
            }
        }
    */
    getMessages(params){
        return axios.get(`${baseUrl}/messages?accesstoken=${params.accesstoken}&mdrender=${params.mdrender}`)
    },
    /*标记全部已读
    accesstoken String
    返回值示例
    { 
        success: true,
        marked_msgs: [ 
                { id:'544ce385aeaeb5931556c6f9'} 
            ] 
        }
    */
    remarkTopic(params){
        return axios.post(`${baseUrl}/message/mark_all`,params)
    }  
}  