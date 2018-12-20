chrome.runtime.onMessage.addListener(function(message,sender,sendResponse){
    if(message.action=="show"){
        chrome.tabs.query({ "active": true, "currentWindow": true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        })
    }
})