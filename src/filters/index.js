import  showdown from 'showdown'
const convert= new showdown.Converter()
function tab(val,isTop,isGood){
    if(isTop) return '置顶'
    if(isGood) return '精华'
    let tab = {
        'ask':'问答',
        'good':'精华',
        'job':'招聘',
        'share':'分享'
    }
    return tab[val]||'未知'
}
function timeAgo(val){
    let nowDate = new Date();
    let replyDate = new Date(val);
    let diffSeconds = (nowDate.getTime()-Number(replyDate.getTime()))/1000;
    let years = 365*24*60*60;
    let months = 30*24*60*60;
    let days = 24*60*60;
    let hours =  60*60;
    let minutes = 60;
    let seconds = 1;
    if(diffSeconds<seconds){
        return '1秒以前'
    }else if(seconds<=diffSeconds&&diffSeconds<minutes){
        return Math.floor(diffSeconds/seconds)+'秒前'
    }else if(minutes<=diffSeconds&&diffSeconds<hours){
        return Math.floor(diffSeconds/minutes)+'分钟前'
    }else if(hours<diffSeconds&&diffSeconds<days){
        return Math.floor(diffSeconds/hours)+'小时前'
    }else if(days<diffSeconds&&diffSeconds<months){
        return Math.floor(diffSeconds/days)+'天前'
    }else if(months<diffSeconds&&diffSeconds<years){
        return Math.floor(diffSeconds/months)+'个月前'
    }else{
        return Math.floor(diffSeconds/years)+'年前'
    }
}
function mdToHtml(val) {
    return convert.makeHtml(val)
}
export default {
    tab,
    timeAgo,
    mdToHtml
}