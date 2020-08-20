const tat_ca_tap = document.getElementById('tat_ca_tap');
const nav_bar = document.getElementsByClassName('navbar')[0];
const navbar_other = document.getElementsByClassName('navbar-other')[0];
const icon = document.getElementsByClassName('fa')[1];
const icon2 = document.getElementsByClassName('fa')[0];
const SOV_la_ai = document.getElementsByTagName('li')[3];

const hamburger = document.getElementsByClassName('fa-bars')[0];
//const hamburgerX = document.getElementsByClassName('fa-times')[0];
const sticky = hamburger.offsetTop;
const sticky2 = nav_bar.offsetTop;

let images = [
	'images/movie28.jpg',
	'images/slide1.jpeg',	
	'images/slide3.jpeg',
	'images/slide4.jpeg',
	'images/slide2.jpg',
];

tat_ca_tap.onclick = () => {
	icon.classList.toggle("fa-chevron-down");
	changeColorMenu('tat_ca_tap');
	navbar_other.classList.toggle("navbar-other-show");
	icon.classList.add("fa-chevron-up");
}

const changeColorMenu = (id) => {
	const nutMenu = document.getElementById(id);
	const nut_other = Array.from(document.querySelectorAll('div.navbar li a'));

	for (let i in nut_other) {
		nut_other[i].classList.remove('active');
	}
	nutMenu.classList.add('active');
}

icon2.onclick = () => {
	nav_bar.classList.toggle('navbar-move-right');
	icon2.classList.toggle('fa-bars');
	icon2.classList.toggle('fa-times');
}

window.addEventListener("scroll",function(){
        if(window.pageYOffset > sticky){
                hamburger.classList.add('menufix');
                hamburger.classList.add('menufix-right');
            if(window.pageYOffset > sticky2) {
                nav_bar.classList.add('menufix');
                nav_bar.classList.add('menutora');
                document.getElementsByClassName('scroll-top')[0].classList.add('scroll-top-show');
            } else {
            	nav_bar.classList.remove('menufix');
            	nav_bar.classList.remove('menutora');
            	document.getElementsByClassName('scroll-top')[0].classList.remove('scroll-top-show');
            }       
        } else{
            hamburger.classList.remove('menufix');
            hamburger.classList.add('menufix-right');
            
        }
    
    })


let img_slide = document.getElementsByClassName('slide-img')[0];
let curent = 0;
let dau_cham_id0 = document.getElementById('zero');
let dau_cham_id1 = document.getElementById('one');
let dau_cham_id2 = document.getElementById('two');
let dau_cham_id3 = document.getElementById('three');
let dau_cham_id4 = document.getElementById('four');
const daucham_other = Array.from(document.getElementsByClassName('fa-circle'));

let updateImage_auto = function() {
  if (curent >= images.length) {
    curent = 0;
  }
  if(curent===0) {
  	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
  	dau_cham_id0.classList.add('active_slide');
  } else if (curent===1) {
  	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
  	dau_cham_id1.classList.add('active_slide');
  } else if (curent===2) {
  	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
  	dau_cham_id2.classList.add('active_slide');
  } else if (curent===3) {
  	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
  	dau_cham_id3.classList.add('active_slide');
  } else if (curent===4) {
  	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
  	dau_cham_id4.classList.add('active_slide');
  }
  img_slide.style.backgroundImage = 'url(' + images[curent] + ')';
  curent++;
}

updateImage_auto();
let interval = setInterval(updateImage_auto, 3000);

const updateImage = (id) => {

	const dau_cham = document.getElementById(id);
	clearInterval(interval);
	for (let i in daucham_other) {
		daucham_other[i].classList.remove("active_slide");
	}
	dau_cham.classList.add('active_slide');

	img_slide.style.transition = 'unset';
	if(id === 'zero') {
		img_slide.style.backgroundImage = 'url(' + images[0] + ')';
	} else if(id === 'one') {
		img_slide.style.backgroundImage = 'url(' + images[1] + ')';
	} else if(id === 'two') {
		img_slide.style.backgroundImage = 'url(' + images[2] + ')';
	} else if(id === 'three') {
		img_slide.style.backgroundImage = 'url(' + images[3] + ')';
	} else if(id === 'four') {
		img_slide.style.backgroundImage = 'url(' + images[4] + ')';
	}
}

