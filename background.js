// import snippets from 'snippets.json'

document.addEventListener('DOMContentLoaded', function() {
 console.log("background.js");
}, false);

chrome.commands.onCommand.addListener(function(command) {
  if (command == "skip-up") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var current = tabs[0]
      console.log('skip-up in content script');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "skip-up"}, function(response) {});  
      });
    });
  }
  if (command == "skip-down") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var current = tabs[0]
      console.log('skip-down in content script');
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "skip-down"}, function(response) {});  
      });
    });
  }
});