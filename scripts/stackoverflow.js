// console.log('I have a content script');

function jump(h){
    console.log('jump');
    var url = location.href;
    location.href = "#"+h;
    history.replaceState(null,null,url);
};

function getPostList() {
  var anchors;
  // Return true array rather than NodeList
  anchors = [].slice.call(document.querySelectorAll('a[name]'));
  return anchors;
}

function getCurrentPost() {
  let offset = 100;
  let posts = getPostList();
  let laterPosts = posts.filter(post => post.offsetTop > (window.pageYOffset+offset));
  return laterPosts[0];
}

function getNextPost() {
  let posts = getPostList();
  let laterPosts = posts.filter(post => post.offsetTop - 100 > window.pageYOffset);
  console.log(laterPosts[laterPosts.length-1]);
  if (laterPosts.count) {
    return laterPosts[0];
  } 
  return false;
}

function getPrevPost() {
  let posts = getPostList();
  let earlierPosts = posts.filter(post => post.offsetTop + 100 < window.pageYOffset);
  console.log(earlierPosts[earlierPosts.length-1]);
  // debugger;
  if (earlierPosts) {
    return earlierPosts[earlierPosts.length-1];
  }
  return false;
}

chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  var posts = [];

  console.log(msg.action);
  posts = getPostList();
  // console.log(posts);
  
  switch (msg.action) {
    case 'skip-up':
        if (getPrevPost()) {
          jump(getPrevPost().name);
          break;
        }
        window.scrollTo(0,0);
        break;
    case 'skip-down':
        if (getNextPost()) {
          jump(getNextPost().name);
          break;
        }
        jump('new-answer');
        document.getElementById('post-editor').querySelector('textarea').focus();
        break;        
  }
});