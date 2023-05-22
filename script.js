  //toggle the light

  const themeTogg = document.querySelector(".theme-before"); // btn name
  const opacityTogg = document.querySelector(".opacity-sp"); // span name
  let themeMode = localStorage.getItem("Mode");

  if (themeMode === "Dark") { // if the guy selected dark...
    themeTogg.classList.add("theme-after"); // makes toogle btn bg white;
    document.body.classList.add("dark-theme"); // turn dark mode on;
    document.body.classList.remove("light-theme"); // turn light mode off;
    opacityTogg.classList.remove("opacity-sp2"); //removes white bg from home page;
  } else {
    document.body.classList.add("light-theme");
    opacityTogg.classList.add("opacity-sp2");//homepage img to black(it was Black);
  }

  function theme() {
    themeMode = localStorage.getItem("Mode");

    if (themeMode !== "Dark") { // if it is light.. to turn on dark;
      themeTogg.classList.add("theme-after"); // makes toogle btn bg white;
      document.body.classList.add("dark-theme"); // turn dark mode on;
      document.body.classList.remove("light-theme"); // turn light mode off;
      opacityTogg.classList.remove("opacity-sp2"); //removes white bg from home page;
      localStorage.setItem("Mode", "Dark"); // save the name dark;
      /* console.log(themeMode);
      console.log('it was null. so save to Dark'); */

    } else if (themeMode === "Dark") { // to turn light mode on;
      themeTogg.classList.remove("theme-after");  // remove white bg from toggle btn;
      document.body.classList.add("light-theme"); // turn light mode on;
      document.body.classList.remove("dark-theme"); // turn dark mode off;
      opacityTogg.classList.add("opacity-sp2");//homepage img to black(it was Black);
      localStorage.setItem("Mode", null); // unsave the name dark;
      /* console.log(themeMode);
      console.log('it was dark. so Save to null'); */
    }
    
    themeMode = localStorage.getItem("Mode");
    /* console.log(themeMode); */
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
  let opaOnScroll = document.getElementById('home');

  window.onload = () => {
    sections.forEach(sec => {
      let id = sec.getAttribute('id');
      if (id === 'home') {
        sec.classList.add('home-Opacity');
        /* opacityTogg.classList.add('span-active'); */
        /* console.log(opaOnScroll.getAttribute('class')); */ // === home show-animate home-Opacity;
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

    if (opaOnScroll.getAttribute('class') !== 'home show-animate home-Opacity') { 
      opacityTogg.classList.remove("opacity-sp2"); //removes white bg from home page;
      /* console.log('removed by scroll'); */
    } else if (opaOnScroll.getAttribute('class') === 'home show-animate home-Opacity' && themeMode !== 'Dark') { /* if we don't re-declare getitems, this argument cannot get the valıe of themeMode correctly */
      opacityTogg.classList.add('opacity-sp2'); // adds white bg to home page;
      /* console.log('added by scroll'); */
    }
    

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

