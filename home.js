const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 2 } });

tl.to("#pre-loader span", { y: "0%", duration: 1, stagger: 0.25 });

tl.fromTo("#slider", {
    y: "100%",
},
    {
        y: "-100%",
        duration: 1.5,
    }
)

tl.fromTo("#slider1", {
    y: "200%",
},
    {
        y: "-100%",
        duration: 1.5,
    }
    , "-=1.5")

tl.fromTo("#slider2", {
    y: "300%",
},
    {
        y: "-100%",
        duration: 1.5,
    }
    , "-=1.5")

tl.fromTo("#slider3", {
    y: "400%",
},
    {
        y: "-100%",
        duration: 1.5,
    }
    , "-=1.5")

tl.fromTo("#pre-loader", {
    y: "0%",
},
    {
        y: "-100%",
        duration: 1.5,
    }
    , "-=0.3")