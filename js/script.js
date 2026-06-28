/* ==========================
   EMAILJS INITIALIZATION
========================== */

if (typeof emailjs !== "undefined") {
    emailjs.init({
        publicKey: "ZvLv8pHDe2dIj6_HB"
    });
}

/* =============s========================================
   EagleEye Solutions India
   script.js
===================================================== */

/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/* ==========================
   NAVBAR EFFECT
========================== */

const navbar = document.querySelector("nav");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        navbar.style.background="rgba(0,0,0,.95)";
        navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.45)";

    }

    else{

        navbar.style.background="rgba(0,0,0,.90)";
        navbar.style.boxShadow="none";

    }

});


/* ==========================
   SCROLL REVEAL
========================== */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(

".service-card,.why-card,.product-card,.testimonial-card,.brand-card,.counter-box"

).forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/* ==========================
   COUNTER
========================== */

const counters = document.querySelectorAll(".counter-box h2");

let started = false;

window.addEventListener("scroll",()=>{

    const section = document.querySelector(".counter");

    if(!section) return;

    if(window.scrollY > section.offsetTop - 500 && !started){

        started = true;

        counters.forEach(counter=>{

            const target = parseInt(counter.innerText);

            if(isNaN(target)) return;

            let count = 0;

            const update = ()=>{

                count += target/100;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }

                else{

                    counter.innerText = target + "+";

                }

            }

            update();

        });

    }

});


/* ==========================
   FLOATING WHATSAPP
========================== */

const floating = document.querySelector(".floating-whatsapp");

window.addEventListener("scroll",()=>{

    if(!floating) return;

    if(window.scrollY > 250){

        floating.style.opacity = "1";
        floating.style.transform = "scale(1)";

    }

    else{

        floating.style.opacity = ".75";
        floating.style.transform = "scale(.85)";

    }

});


/* ==========================
   PAGE LOADED
========================== */

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

console.log("EagleEye Solutions Loaded Successfully.");
```
// Disable right click
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// Disable common DevTools shortcuts
document.addEventListener("keydown", function(e){

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && ["I","J","C"].includes(e.key.toUpperCase())) ||
        (e.ctrlKey && e.key.toUpperCase() === "U")
    ) {
        e.preventDefault();
    }

});