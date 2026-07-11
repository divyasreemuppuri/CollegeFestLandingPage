
// =============================
// CollegeFest Countdown Timer
// =============================


const eventDate = new Date("March 15, 2026 09:00:00").getTime();


const countdown = setInterval(()=>{


    const now = new Date().getTime();


    const distance = eventDate - now;



    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );


    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );


    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );


    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );



    document.getElementById("days").innerHTML =
        days < 10 ? "0"+days : days;


    document.getElementById("hours").innerHTML =
        hours < 10 ? "0"+hours : hours;


    document.getElementById("minutes").innerHTML =
        minutes < 10 ? "0"+minutes : minutes;


    document.getElementById("seconds").innerHTML =
        seconds < 10 ? "0"+seconds : seconds;



    if(distance < 0){

        clearInterval(countdown);


        document.querySelector(".countdown")
        .innerHTML =
        "<h2>Festival Started 🎉</h2>";

    }


},1000);







// =============================
// Mobile Menu Toggle
// =============================


const menu =
document.querySelector(".menu");


const navLinks =
document.querySelector(".nav-links");



menu.addEventListener("click",()=>{


    if(navLinks.style.display==="flex"){

        navLinks.style.display="none";

    }

    else{

        navLinks.style.display="flex";

        navLinks.style.flexDirection="column";

        navLinks.style.position="absolute";

        navLinks.style.top="80px";

        navLinks.style.right="20px";

        navLinks.style.background="white";

        navLinks.style.padding="25px";

        navLinks.style.borderRadius="15px";

        navLinks.style.boxShadow=
        "0 10px 30px rgba(0,0,0,0.15)";

    }


});







// =============================
// Navbar Scroll Effect
// =============================


window.addEventListener("scroll",()=>{


    const header =
    document.querySelector("header");


    if(window.scrollY > 50){


        header.style.background =
        "rgba(255,255,255,0.95)";


    }

    else{


        header.style.background =
        "transparent";


    }



});







// =============================
// Smooth Scroll Buttons
// =============================


const exploreBtn =
document.querySelector(".secondary-btn");


exploreBtn.addEventListener("click",()=>{


    document
    .querySelector("#events")
    .scrollIntoView({

        behavior:"smooth"

    });


});






const registerButtons =
document.querySelectorAll(
".register-btn,.primary-btn"
);



registerButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        alert(
        "Registration Successfully Opened 🎉"
        );


    });


});







// =============================
// Reveal Animation on Scroll
// =============================


const sections =
document.querySelectorAll(
"section"
);



const observer =
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.style.opacity="1";

        entry.target.style.transform=
        "translateY(0)";


    }


});


},
{

threshold:0.15

});




sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform=
    "translateY(40px)";

    section.style.transition=
    "all 0.8s ease";


    observer.observe(section);


});