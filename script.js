let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progress.style.height = progressHeight + "%";
}

let video = document.querySelector('video');
window.addEventListener('scroll', function() {
  let value = Math.min(0.8,1 + window.scrollY/-600);
  video.style.opacity = value;
})
