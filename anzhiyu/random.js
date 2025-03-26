var posts=["2025/03/24/常见面试题/","2025/03/26/八股文详细版/","2025/03/24/这是一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };