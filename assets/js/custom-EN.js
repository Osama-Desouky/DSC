


$( document ).ready(function() {

    if($('.InHome').length ){
        $('.homeBanner').addClass('homeClass')
     }
    $(".navbar-light .dmenu").hover(
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
        },
        function () {
          $(this).find(".sm-menu").first().stop(true, true).slideUp(105);
        }
      );

    let arrow = [
        '<img src="../assets/images/home/arrowOwl2.svg" />',
        '<img src="../assets/images/home/arrowOwl.svg" />',
      ]
      $('.owl-carousel-centerIn').owlCarousel({
        loop:false,
        margin:24,
        nav:true,
        rtl: false,
        navText: arrow,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1100:{
                items:3
            },
            1300:{
                items:4
            }
        }
    })
    // end owl center
    $('.owl-carousel-lastNews').owlCarousel({
        loop:false,
        margin:30,
        items:1,
        nav:true,
        rtl: false,
        navText: arrow,
    })
    $('.owl-carousel-events').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        rtl: false,
        navText: arrow,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1400:{
                items:2
            }
        }
    })
    $('.owl-carousel-partners').owlCarousel({
        loop:true,
        margin:24,
        nav:true,
        rtl: false,
        navText: arrow,
        autoplay:false,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
            1400:{
                items:6
            }
        }
    })
    // end ready
    $('.owl-carousel-banner').owlCarousel({
        loop:false,
        margin:0,
        nav:false,
        rtl: false,
        items:1,
    })
    // end ready



    $('.owl-carousel-reports').owlCarousel({
        loop:false,
        margin:24,
        nav:true,
        rtl: false,
        navText: arrow,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1400:{
                items:3
            }
        }
    })

    $('.owl-carousel-evInner').owlCarousel({
        loop:false,
        margin:15,
        nav:true,
        rtl: false,
        navText: arrow,
        dots:false,
        responsive:{
            0:{
                items:1,
                dots:true,
            },
            575:{
                items:2,
                dots:true,
            },
            992:{
                items:3,
                dots:true,
            },
            1200:{
                dots:false,
            },
            1400:{
                items:5
            }
        }
    })



    AOS.init({
        duration: 1000,
    });
  // fancybox 
  $("a.fancybox").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    loop: false,
    padding: 0,
    fitToView: false,
    
    beforeShow: function () {
        this.width = "80%";
        this.height = "500px";
    }
  });
  $("a.fancyboxVideo").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    type: "iframe",
    loop: false,
    padding: 0,
    width: "80%",
    height: "500px",
    youtube: {
      autoplay: 1, // enable autoplay
    },
  });



});

// contrastMode
$(".top-functions .colors").on("click", function (e) {
    console.log("colors");
    $("body").toggleClass("contrast");
    e.stopPropagation();
   
  });


    /* --- Font sizing Function --- */
    $('.top-functions .increase').click(function(){
        console.log("increase");
        modifyFontSize('html','increase');
      });
      $('.top-functions .decrease').click(function(){
        console.log("dec");
        modifyFontSize('html','decrease')
      });

        /*----Font sizing Function ---*/
  function modifyFontSize(MyElement,flag){

    var HtmlElement = $(MyElement);
    var currentFontSize = parseInt (HtmlElement.css('font-size'));
    
    if (flag =='increase' & currentFontSize < 19 )
        currentFontSize += 1;
    else if (flag == 'decrease' & currentFontSize >= 16 )
        currentFontSize -= 1;
    else if (flag == 'reset')
    currentFontSize = 16;

    HtmlElement.css('font-size', currentFontSize);

    // console.log(currentFontSize);

  }