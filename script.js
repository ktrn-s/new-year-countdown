gsap.from(".inner-con",{ duration: 1.5, y:50, opacity: 0,  ease: "power2.out"});
gsap.from("h1", {  duration: 1.5,  opacity: 0,  scale: 0.9, ease: "back.out(1.7)"});



function newYearCountdown() {
    const currentYear = new Date().getFullYear() + 1;
    const newYearDate = new Date(`January 1, ${currentYear} 00:00`);
    const now = new Date();
    const diff = newYearDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 *  60 * 60 * 1000;

    const displayDay = Math.floor(diff/msInDay);
    document.querySelector(".day").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hour").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minute").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".second").textContent = displaySecond;

    if(diff <= 0){
        document.querySelector(".day").textContent = 0;
        document.querySelector(".hour").textContent = 0;
        document.querySelector(".minute").textContent = 0;
        document.querySelector(".second").textContent = 0;
        clearInterval(timerID);
        happyNewYear();
    }
}

let timerID = setInterval(newYearCountdown, 1000);


function happyNewYear() {
    const text = document.querySelector("h1");
    text.textContent = "Happy New Year!!!";
    text.classList.add("orange");
}

const button = document.querySelector("#playButton");
button.addEventListener("click", function() {
    document.querySelector("#song").play();
})
button.addEventListener("dblclick", function() {
    document.querySelector("#song").pause();
})
// const button = document.querySelector("playButton");
// const song = document.querySelector("#song");

// button.addEventListener("click", function() {
//     if(song.paused) {
//         song.play();
//     }
//     else {
//         song.pause();
//     }
// });

//animation
particlesJS("particles-js", {
    particles: {
    number: { value: 400, density: { enable: true, value_area: 800 } },
    color: { value: "#fff" },
    shape: {
        type: "image",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 5 },
        image: { src: "snowflake.png", width: 100, height: 100 },
    },
 
    opacity: {
      value: 0.9,
      random: true,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 8.33451405615796,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 500,
      color: "#ffffff",
      opacity: 0.4,
      width: 2,
    },
    move: {
        enable: true,
        speed: 5,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
    },
    interactivity: {
    detect_on: "canvas",
    events: {
    onhover: { enable: false, mode: "bubble" },
    onclick: { enable: true, mode: "repulse" },
    resize: true,
    },
    modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
    },
    },
    retina_detect: true,
});
