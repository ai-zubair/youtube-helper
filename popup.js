$(function(){
    $('#changeFont').click(function () {
        chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{action:"changeFont"});
        })
    })
    $('#changeTheme').click(function () {
        chrome.tabs.query({active:true,currentWindow:true},function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,{action:"changeTheme"});
        })
    })
})