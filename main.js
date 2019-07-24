$(document).ready(function(){
let sen = true;
            $('.wrap').click(function(){
               $('.meni').toggle();
            });
            $('.wrap').click(function(){
                $('.l1').toggleClass('chg1');
                $('.l2').toggleClass('chg2');
                $('.l3').toggleClass('chg3');
                
            });
            $('.theme, .btn').click(function(){
                $('.nav').toggleClass('navchg');
                $('.l1,.l2,.l3,.chg1,.chg2,.chg3').toggleClass('ham');
                if(this.innerHTML === "Turn off Dark Theme"){
                    this.innerHTML = "Turn on Dark Theme";
                }
                else{
                    this.innerHTML = "Turn off Dark Theme";
                }
                $('.meni').toggleClass('menichg');
                $(this).toggleClass('themechg');
                $('body').toggleClass('bodychg');
                $('.logo').toggleClass('themechg');
                $('.el').toggleClass('elchg');
                $('.elname').toggleClass('themechg');
                $('.foot').toggleClass('footchg');
                $('.theme1').toggleClass('themechg');
                $('.nav-el').toggleClass('nav-elchg');
                $('.mess').toggleClass('messchg');
                $('.txt').toggleClass('themechg');
                $('.foot-txt').toggleClass('themechg');
                $('.wrap-neki').toggleClass('wrap-chg');
                $('.wrap-wolverine').toggleClass('wolv-chg');
                $('.wolv-title').toggleClass('themechg');
                $('.wolv-inner').toggleClass('wolv-inner-chg');
                $('.owl-stage-outer').toggleClass('owl-chg');
                $('.foot-before').toggleClass('footchg');
                $('.text-car').toggleClass('themechg');
                $('.spider-txt').toggleClass('wolv-inner-chg');
                $('.wrap-spiderman').toggleClass('spidey-bg');
            }); 
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true
                });
            $('.banner-wrap').parallax();
});
