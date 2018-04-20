chrome.browserAction.onClicked.addListener(function(tab) {
    console.log("Button clicked");

    chrome.tabs.executeScript(null, {file: "fillForms.js"});
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.type == "url") {
            sendResponse({url: sender.tab.url});
        }
    }
);
