var state = 'play';

function toggleMarquee() {
    var marquee = document.getElementById("marq");
    if (state === 'play') {
        marquee.stop();
        state = 'stop';
    } else {
        marquee.start();
        state = 'play';
    }
}


let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0; 
}