function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5
    })
    tl.from("#line-1-part-1", {
        opacity: 0,
        onStart: function () {
            var h5Timer = document.querySelector("#line-1-part-1 h5")
            var grow = 0
            setInterval(function () {
                if (grow < 100) {
                    h5Timer.innerHTML = grow++
                } else {
                    h5Timer.innerHTML = grow
                }
            }, 35)
        }
    })
    tl.to(".line h2", {
        animationName: "anime",
        opacity: 1
    })
    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 3.8
    })
    tl.from("#page-1", {
        delay: 0.2,
        y: 1600,
        duration: 0.6,
        ease: Power4
    })
    tl.to("#loader", {
        display: "none"
    })
    tl.from("#nav", {
        opacity: 0
    })
    tl.from("#hero-1 h1, #hero-2 h1, #hero-3 h2, #hero-3 h3, #hero-4 h1", {
        y:140,
        stagger: 0.2
    })
}
function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to("#crsr", {
            left: dets.x,
            top: dets.y
        })
    })

    Shery.makeMagnet("#nav-part-2 h4");
}

loadingAnimation();
cursorAnimation();