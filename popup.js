import snippets from 'snippets.json'

document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      d = document;
      alert('Torchbox project helper')
      console.log('Torchbox project helper');
    });
  }, false);
}, false);

