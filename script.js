function codepan() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
codepan();

function page1Image() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",

      // markers:true,
      start: "top 98%",
      end: "top -20%",
      scrub: 1,
    },
  });
  tl.to(
    "#page2 #image",
    {
      transform: "translate(-50%,-50%)",

      // y:20,
    },
    "sa"
  );
  tl.to(
    "#page2 img",
    {
      // transform: "translate(-50%,-50%)",
      scale: 1,

      // y:20,
    },
    "sa"
  );
}
page1Image();

function page2Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      // markers: true,
      start: "top 0",
      end: "top -100%",
      scrub: 1,
      pin: true,
    },
  });

  tl.from(
    "#leftimages",
    {
      y: -700,
      // rotate:-45,
      duration: 1,
      opacity: 0,
    },
    "ani"
  );

  tl.from(
    "#rightimages",
    {
      y: 700,
      // rotate:45,
      duration: 1,
      opacity: 0,
    },
    "ani"
  );
}
page2Animation();

function page3Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 0%",
      // markers:true,
      end: "top -50%",
      scrub: 1,
      pin: true,
    },
  });

  tl.from(
    "#page3 img",
    {
      x: 400,
    },
    "ani"
  );

  tl.from(
    "#page3 #box1",
    {
      x: -800,
    },
    "ani"
  );
  tl.from(
    "#page3 h1",
    {
      x: 200,
    },
    "ani"
  );
}
page3Animation();

function page4Animation() {
  var textWrapper = document.querySelector(".ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4",
      scroller: "#main",
      start: "top 60%",
      end: "top 20%",
      scrub: true,
    },
  });

  tl.to(".ml3 span", {
    stagger: 0.1,
    color: "red",
  });
}
page4Animation();

function page5Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 50%",
    },
  });

  tl.from("#page5 h1", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
  });
}
page5Animation();

function page6animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 0",
      end: "top -100%",
      // markers:true,
      scrub: 1,
      pin: true,
    },
  });

  tl.to("#page6", {
    x: "-200%",
  });
}
page6animation();

function page11animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page11",
      scroller: "#main",
      start: "top 60%",
      end: "top -50%",
      // markers:true,
      scrub: 1,
      // pin: true,
    },
  });

  tl.from(
    "#page11 #img2",
    {
      x: 570,
    },
    "ami"
  );
  tl.from(
    "#page11 #content11 #fall ",
    {
      x: -300,
    },
    "ami"
  );
  tl.from(
    "#page11 #head",
    {
      x: -200,
    },
    "ami"
  );
  tl.from(
    "#page11 #first",
    {
      x: 300,
    },
    "ami"
  );
}
page11animation();

function page16animation() {
  var tl = gsap.timeline();

  tl.from(
    "#page16 #card",
    {
      x: "-400%",
      duration: 15,
      repeat: -1,
      yoyo: true,
      ease: "linear",
    },
    "animated"
  );
}
page16animation();

function page17Animation() {
  var textWrapper = document.querySelector("#page17 .ml3");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page17",
      scroller: "#main",
      start: "top 50%",
      end: "top 10%",
      scrub: true,
      // markers:"true"
    },
  });

  tl.to("#page17 .ml3 span", {
    stagger: 0.1,
    color: "red",
  });
}
page17Animation();

function page10Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page10",
      scroller: "#main",
      // markers:"true"
      start: "top 50%",
      end: "top 0",
    },
  });

  tl.from("#left #img", {
    height: "0%",
  });
  tl.from("#right img", {
    height: "0%",
  });
}
page10Animation();

function page9Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page9",
      scroller: "#main",
      // markers:"true",
      start: "top 50%",
      end: "top 0",
    },
  });

  tl.from("#page9 h1", {
    y: 200,
    opacity: 0,
  });
  tl.from("#page9 #pg9s", {
    y: 200,
    opacity: 0,
  });
}
page9Animation();

function page13Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page13",
      scroller: "#main",
      // markers:"true",
      start: "top 50%",
      end: "top 0",
    },
  });

  tl.from("#con13 h1", {
    y: 200,
    opacity: 0,
  });
  tl.from("#con13 h2", {
    y: 200,
    opacity: 0,
  });
  tl.from("#con13 img", {
    y: 200,
    opacity: 0,
  });
}
page13Animation();

function page14Animation() {
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page14",
      scroller: "#main",
      // markers:"true",
      start: "top 50%",
      end: "top 0",
    },
  });

  tl.from("#page14 h1", {
    y: 200,
    opacity: 0,
    stagger: 0.5,
  });
}
page14Animation();

function loaderanimation() {
  var tl = gsap.timeline();
  tl.to("#loader", {
    height: "0%",
    duration: 1,

    display: "none",
  });
  tl.from("#page2 #image img", {
    y: 200,
    opacity: 0,
    stagger: 0.1,

    // delay: .,
  });
  tl.from("nav", {
    y: -200,
    opacity: 0,
    stagger: 0.1,

    // delay: .,
  });
}
loaderanimation();
