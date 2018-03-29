// import snippets from 'snippets.json'

document.addEventListener('DOMContentLoaded', function() {
 console.log("background.js");
}, false);

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({snippets: snippets}, function() {
    console.log("snippets added to storage.");
  });
  // chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  //   chrome.declarativeContent.onPageChanged.addRules([{
  //     conditions: [new chrome.declarativeContent.PageStateMatcher({
  //       pageUrl: {hostEquals: 'projects.torchbox.com'},
  //     })
  //     ],
  //         actions: [new chrome.declarativeContent.ShowPageAction()]
  //   }]);
  // });
});
