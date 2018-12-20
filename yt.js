chrome.runtime.onMessage.addListener(function (message,sender,sendResponse) {
    if(message.action=="changeFont"){
        $('head').append('<link href="https://fonts.googleapis.com/css?family=Orbitron" rel="stylesheet">')
        $('*').css({
            'font-family': "'Orbitron', sans-serif",
            'font-weight':"bold",
        });
        TweenMax.staggerFrom('ytd-grid-video-renderer', 1, { scale: 0, cycle: { y: [-200, 200] },ease:Back.easeOut},0.5);
        TweenMax.staggerFrom('.title',1,{scale:0,cycle:{x:[-200,200]},ease:Back.easeOut},0.5);
    }
    if(message.action=="changeTheme"){
        $('*').css("background-color","rgb(0, 0, 0)");
        $('*').css("color","white");
    }
})
chrome.runtime.sendMessage({action:"show"});