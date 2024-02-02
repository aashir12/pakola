
var tl0=gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main',
            scrub:5,
            pin:true    
        }
    }
)
tl0.from(
    '.main h1',{ 
      left:'150%',
    }
)



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main2',
        scrub: 5,
        start: '10% 90%',
        end: '50% 50%',
        onToggle: (self) => {
            console.log('ScrollTrigger toggled:', self.isActive);
        }
    }
});


tl.to(
   '.fanta',{
    top:'150%',
    left:'25%'
   },
   'second'
)
tl.to(
    '.lemon',{
        top:'165%',
        left:'-5%'

    },
    'second'
)
tl.to(
    '.leaf',{
        top:'115%',
        left:'70%',
        rotate:145

    },
    'second'
)
tl.to(
    '.leaf2',{
        top:'100%',
        left:'8%',
        rotate:195

    },
    'second'
)
tl.to(
    '.junkOrange',{
        top:'180%',
        scale:0.7,
        left:'70%'

    },
    'second'
)
var tl2=gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.main3',
            scrub:5,
            start:'10% 80%',
            end:'50% 50%',
    
       

        }
    }
)

tl2.to(
    '.fanta',{
        top:'240%',
        left:'50%',
        scale:0.8
    },
    'third'
)
tl2.to(
    '.lemon',{
        top:'205%',
        left:'9.5%',
        scale:1.2
    },
    'third'
)