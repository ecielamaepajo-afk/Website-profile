/* =====================================
   TYPING ANIMATION
===================================== */

const typingText = document.getElementById("typing-text");

const words = [
    "Welcome to my Student Portfolio.",
    "Future Software Developer.",
    "BS Information Technology Student.",
    "Passionate about Web Development."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

            charIndex = 0;
        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


/* =====================================
   SMOOTH SCROLL
===================================== */

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute('href'))
        .scrollIntoView({

            behavior:'smooth'

        });

    });

});


/* =====================================
   NAVBAR SHADOW
===================================== */

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 60){

        header.style.boxShadow =
        "0 8px 20px rgba(0,0,0,.25)";

    }else{

        header.style.boxShadow =
        "0 5px 15px rgba(0,0,0,.15)";

    }

});


/* =====================================
   FADE-IN ANIMATION
===================================== */

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

},{
    threshold:0.15
});

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(50px)";
    section.style.transition="all .8s ease";

    observer.observe(section);

});




/* =====================================
   SKILL BAR ANIMATION
===================================== */

const bars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.width =
            entry.target.dataset.width;

        }

    });

},{
    threshold:.5
});

bars.forEach(bar=>{

    bar.dataset.width = getComputedStyle(bar).width;

    bar.style.width="0";

    skillObserver.observe(bar);

});


/* =====================================
   BACK TO TOP BUTTON
===================================== */

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.25)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


/* =====================================
   GALLERY HOVER EFFECT
===================================== */

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(image=>{

    image.addEventListener("mouseenter",()=>{

        image.style.transform="scale(1.08)";
        image.style.transition=".3s";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});


/* =====================================
   PAGE LOADED
===================================== */

window.addEventListener("load",()=>{

    console.log("Student Portfolio Loaded Successfully!");

});