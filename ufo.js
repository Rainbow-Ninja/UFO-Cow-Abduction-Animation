gsap.set("body > *", {autoAlpha: 1});

const tl = gsap.timeline({delay: 0.5});
//cow abduction
tl.to("#cow", {y: "-=40vh", x: "+=3vw", ease: "sine.out", scale: 0.1, opacity: 0, delay: 1, duration: 4})
//lights flash
gsap.to(".light", {fill: "rgba(250, 243, 192, random(0, 1)", yoyo: true, stagger: true, repeat: 8, duration: 0.5});
// beam down at start
TweenMax.fromTo(".beam", 0.8, { scaleY:0 , autoAlpha:0, ease: Linear.easeNone }, {scaleY:1, autoAlpha:1});
// beam up after everything
tl.fromTo(".beam", 0.8, { scaleY:-2 , autoAlpha:0, ease: Linear.easeNone }, {scaleY:0});
//lights out
tl.to(".light, .bigLight", {fill: "rgba(0, 0, 0, 0.5)", stroke: "gray"});
// ufo leave
tl.to(".ufo", {x: "+=500vw", ease: "linear", delay: 0.5, duration: 1})

var refresh = document.getElementById("refresh").addEventListener("click", refreshPage);

function refreshPage() {
    location.reload(true);
}
