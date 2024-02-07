(() => {
    var pakolaTop1;
    var pakolaLeft1;
    var tlMarkerSt;
    var tl1Markers;
    var badamTop1;
    var badamScale1;
    var choco;
    var chocoLeft1;
    var pakolaTop2;
    var chocoTop2;

    if (window.innerWidth < 851) {
        tlMarkerSt = '10% 50%';
        pakolaLeft1 = '50%';
        pakolaTop1 = '120vh';
        pakolaScale1=0.8;
        badamTop1='140vh';
        badamScale1=1;
        choco='108vh';
       chocoLeft1='-10vw';
       pakolaTop2='315vh';
       chocoTop2='270vh'

       

        
    } else {
        tlMarkerSt = '50% 50%';
        pakolaLeft1 = '25%';
        pakolaTop1 = '150%';
        badamTop1='180%';
        badamScale1=0.7;
        choco='165%';
       chocoLeft1='-5%';
       pakolaTop2='240%'
       chocoTop2='205%';
       pakolaScale1=0.8;


    }

    var tl0 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main',
            scrub: 5,
            pin: true
        }
    });

    tl0.from('.main h1', {
        left: '150%',
    });

    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.main2',
            scrub: 5,
            start: '10% 90%',
            end: tlMarkerSt,
           
       
        }
    });

    tl.to('.fanta', {
        top: pakolaTop1,
        left: pakolaLeft1,
        scale:pakolaScale1
    }, 'second');

    tl.to('.lemon', {
        top: choco,
        left: chocoLeft1
    }, 'second');

    tl.to('.leaf', {
        top: '115%',
        left: '70%',
        rotate: 145
    }, 'second');

    tl.to('.leaf2', {
        top: '100%',
        left: '8%',
        rotate: 195
    }, 'second');

    tl.to('.junkOrange', {
        top: badamTop1,
        scale: badamScale1,
        left: '70%'
    }, 'second');

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.main3',
            scrub: 5,
            markers:true,
            start: '10% 80%',
            end: '50% 50%'
        }
    });

    tl2.to('.fanta', {
        top: pakolaTop2,
        left: '50%',
        scale: 0.8
    }, 'third');

    tl2.to('.lemon', {
        top: chocoTop2,
        left: '9.5%',
        scale: 1
    }, 'third');
})();
