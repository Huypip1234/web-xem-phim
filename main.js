const tat_ca_tap = document.getElementById('tat_ca_tap');
const nav_bar = document.getElementsByClassName('navbar')[0];
const navbar_other = document.getElementsByClassName('navbar-other')[0];
const icon = document.getElementsByClassName('fa')[1];
const icon2 = document.getElementsByClassName('fa')[0];
const SOV_la_ai = document.getElementsByTagName('li')[3];

const hamburger = document.getElementsByClassName('fa-bars')[0];
const sticky = hamburger.offsetTop;
const sticky2 = nav_bar.offsetTop;

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

const nut_li = Array.from(document.querySelectorAll('div.dau_cham i'));
const slides = Array.from(document.querySelectorAll('div.slide-img div'));

    for (let i in nut_li){
        nut_li[i].addEventListener('click', function() {
            clearInterval(interval);
            for(let i in slides){
                slides[i].classList.remove('ra');
                nut_li[i].classList.remove('active_slide');
            }
            const x = this.getAttribute('data');
            const y = document.getElementById(x);

            y.classList.add('active_slide');

            slides[i].classList.add('ra');
        });
    };

let curent = 0;
    let updateImage_auto = function() {
        if (curent >= 5) {
            curent = 0;
        }
        for(let i in slides){
            slides[i].classList.remove('ra');
            nut_li[i].classList.remove('active_slide');
        }
        if(curent===0) {
            slides[0].classList.add('ra');
            nut_li[0].classList.add('active_slide');
        } else if(curent===1) {
            slides[1].classList.add('ra');
            nut_li[1].classList.add('active_slide');
        } else if(curent===2) {
            slides[2].classList.add('ra');
            nut_li[2].classList.add('active_slide');
        } else if(curent===3) {
            slides[3].classList.add('ra');
            nut_li[3].classList.add('active_slide');
        } else if(curent===4) {
            slides[4].classList.add('ra');
            nut_li[4].classList.add('active_slide');
        } 
        curent++;
    }

    updateImage_auto();
    let interval = setInterval(updateImage_auto, 3000);

