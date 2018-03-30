console.log('I have a content script');

function jump(h){
    console.log('jump');
    var url = location.href;
    location.href = "#"+h;
    history.replaceState(null,null,url);
};

function getPostList() {
  var posts = [];
  anchors = document.querySelectorAll('a[name]')
  anchors.forEach(function(el){
    let post = {};
    // console.log(el.offsetTop);
    post = {
      'offsetTop': el.offsetTop 
    };
    posts.push(post);
  });
  // console.log(posts);
  return posts;
}

function getCurrentPost() {
  // getPostList();
}

function getNextPost() {
  // getCurrentPost();
}

function getPrevPost() {
  // getCurrentPost();
}


chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  var posts = [];

  console.log(msg.action);
  posts = getPostList();
  console.log(posts);

  
  switch (msg.action) {
    case 'skip-up':
        jump('15195401');
        break;
    case 'skip-down':
        jump('15195401');
        break;        
  }
});