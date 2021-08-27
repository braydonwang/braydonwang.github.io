$("document").ready(function() {
  setTimeout(function(){
      $(".loader-wrapper").fadeOut("slow")
  }, 1300);
});

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

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
  }
}

window.addEventListener('scroll', skillbar);

function skillbar() {
  var reveals = document.querySelectorAll('.skillbar');

  for (var i = 0; i < reveals.length; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if (revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
  }
}
