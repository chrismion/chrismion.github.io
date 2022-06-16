$('.carousel').slick({
    dots:true,
    arrows:false,
    infinite:true,
    centerMode: true,
    centerPadding: 0,
    speed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autplauSpeed: 3000,
    pauseOnHover:false,
    responsive: [
                            {
                                breakpoint:768,
                                settings:{
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }

                        }],
});