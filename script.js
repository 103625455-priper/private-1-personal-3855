//toggle the light

const themeTogg = document.querySelector(".theme-before");
const opacityTogg = document.querySelector(".opacity-sp");
let themeMode = localStorage.getItem("Mode");

if (themeMode === "Light") {
  themeTogg.classList.remove("theme-after");
  document.body.classList.add("light-theme");
  document.body.classList.remove("dark-theme");
  opacityTogg.classList.add("opacity-sp2");
} else {
  document.body.classList.add("dark-theme");
}

function theme() {
  themeMode = localStorage.getItem("Mode");

  if (themeMode !== "Light") {
    themeTogg.classList.remove("theme-after");
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    opacityTogg.classList.add("opacity-sp2");
    localStorage.setItem("Mode", "Light");
    // console.log(themeMode);
  } else if (themeMode === "Light") {
    themeTogg.classList.add("theme-after");
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    opacityTogg.classList.remove("opacity-sp2");
    localStorage.setItem("Mode", null);
    // console.log(themeMode);
  }
  // console.log(themeMode);
}




//toggle icon bar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//scroll sections 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let number1 = document.getElementById("number-circle");

window.onload = () => {
  sections.forEach(sec => {
    let id = sec.getAttribute('id');
    if (id === 'home') {
      sec.classList.add('home-Opacity');
    }
  })
}

window.onscroll = () => {
  sections.forEach(sec =>  {
    let top = window.scrollY;
    let offset = sec.offsetTop - 600; //the more minus the more comes faster
    let offset2 = sec.offsetTop;
    let height = sec.offsetHeight;
    let height2 = sec.offsetHeight + 200;//the more plus the longer it lasts
    let id = sec.getAttribute('id');
  
    if(top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active section for animation
      sec.classList.add('show-animate');
      if (id === 'skills') {
        sec.classList.add('circle-animate');
      }
      if (id === 'home') {
        sec.classList.add('home-Opacity');
      }

    }
    //if want to animation that repeats on scroll use this 
    
    else if(top < offset || top > offset + height2) {
      sec.classList.remove('show-animate');
            // AntiCircle1
      sec.classList.remove('circle-animate');
            // AntiHomeOpacity
      sec.classList.remove('home-Opacity');
    }
  });
  

  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
  
  // animation footer on scroll 

  let footer =  document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + 13 + this.scrollY >= document.scrollingElement.scrollHeight);
  /* console.log(this.innerHeight, this.scrollY, document.scrollingElement.scrollHeight); */
};



