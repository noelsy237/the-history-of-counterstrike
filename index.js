

window.onscroll = () => {
    let pos = window.scrollY;
    let ct = document.querySelector("#ct");
    let gordon = document.querySelector("#gordon");
    let valve1 = document.querySelector('#valve1');
    let valve2 = document.querySelector('#valve2');
    let valve3 = document.querySelector('#valve3');
    let source = document.querySelector('#source');
    let sourceLogo = document.querySelector('#sourceLogo')
    console.log(pos)
    
    opacity1 = ((((pos - 900) * (1 - 0)  ) / (1200 - 900)  ) + 0) * 100;
    opacity2 = 100 - opacity1;

    opacity3 = ((((pos - 900) * (1 - 0)  ) / (1200 - 900)  ) + 0) * 100;
    opacity4 = 100 - opacity1;

    if (pos > 650) {
        ct.style.opacity = `${opacity1}%`;
        gordon.style.opacity = `${opacity2}%`;
    }

    if (pos < 2000) {
        valve1.style.display = `inline`; 
        valve2.style.display = `none`;
    }

    if (pos > 2000 && pos < 2400) {
        valve1.style.display = `none`;
        valve2.style.display = `inline`;
        valve3.style.display = `none`;
    }

    if (pos > 2400 && pos < 3000) {
        valve2.style.display = `none`;
        valve3.style.display = `inline`;
    }

    
};

// Slideshow code was taken from W3schools
var slideIndex = 0;
gameCovers();

function gameCovers() {
  var i;
  var x = document.getElementsByClassName("slide-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(gameCovers, 3500);
}

