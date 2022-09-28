


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
        rtl: true,
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
        rtl: true,
        navText: arrow,
    })
    $('.owl-carousel-events').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        rtl: true,
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
        rtl: true,
        navText: arrow,
        autoplay:true,
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
        rtl: true,
        items:1,
    })
    // end ready


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
    // beforeShow: function () {
    //     this.width = "80%";
    //     this.height = "80%";
    // }
  });
  $("a.fancyboxVideo").fancybox({
    // openEffect	: 'none',
    // closeEffect	: 'none'
    type: "iframe",
    loop: false,
    padding: 0,
    width: "80%",
    height: "80%",
    youtube: {
      autoplay: 1, // enable autoplay
    },
  });


});

