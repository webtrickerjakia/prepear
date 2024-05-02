(function ($) {
    $(function () {


        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 55,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup',
                top: "headroom--top",
                notTop: "headroom--not-top",
                bottom: "headroom--bottom",
                notBottom: "headroom--not-bottom",
                frozen: "headroom--frozen",

            }
        });
        header.init();


        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
            $('.nav-close').click(function () {
                $("body").removeClass("navShown");
                $(".nav-wrap").fadeOut()
            });
        });

        $('.cart-icon a, .cart-btn a').click(function (e) {
            e.preventDefault()
            $("body").toggleClass("cartShown");

            $('.cart-close').click(function () {
                $("body").removeClass("cartShown");
            });
        });

        $('.cart-wrap').click(function () {
            $("body").removeClass("cartShown");
        });
        $('.main-cart-wrap').click(function (e) {
            e.stopPropagation();
        });


        if ($('.marquee-slider').length) {
            $('.marquee-slider').marquee({
                direction: 'left',
                duration: 20000,
                gap: 0,
                delayBeforeStart: 0,
                duplicated: true,
                startVisible: true
            });
        }


        // Giving Back page
        if ($('.instagram-item-wrap').length) {
            $('.instagram-item-wrap').slick({
                autoplay: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                infinite: true,
                responsive: [
                    {

                        breakpoint: 769,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.instagram-item-wrap').slick('resize');
            });
        }

        if ($('.review-item-wrap').length) {
            $('.review-item-wrap').slick({
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                arrows: false,
                dots: false,
                infinite: true,
                variableWidth: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: 'unslick'
                    }
                ]
            })

            $(window).on('resize', function () {
                $('.review-item-wrap').slick('resize');
            });
        }


        // Start shop page
        $('.shop-single-tab-trigger ul li').click(function () {
            $('.shop-single-tab-trigger ul li').removeClass('active');
            $(this).addClass('active');
            $('.shop-single-tab-item').hide();
            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });

        var headerHeight = $('.main-header-section').outerHeight()
        
        
        function scrollNav() {
            $('.main-nav ul li a').click(function () {
                $('body').removeClass('navShown')
                if ($(window).width() < 769) {
                    $('.nav-wrap').fadeOut();
                }
                $('html, body').stop().animate({
                    scrollTop: $($(this).attr('href')).offset().top - headerHeight
                }, 300);
                return false;
            });
        }
        scrollNav();
        
        
        
        
        
        
        
        
        
        /*$(".main-nav ul li a").on('click', function (event) {
            // Prevent default anchor click behavior
            event.preventDefault();

            $('body').removeClass('navShown')
            if ($(window).width() < 768){
                $('.nav-wrap').fadeOut();
            }
            
            // Store hash
            var hash = this.hash;
            var ofTop = $(hash).offset().top - 100
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            
            $('html, body').animate({
                scrollTop:  ofTop
            }, 1000, function () {

                window.location.hash = hash;
                // Add hash (#) to URL when done scrolling (default click behavior)
            });
        });*/
        
        /*$('.main-nav ul li a').click(function (e) {
            e.preventDefault();
            $('body').removeClass('navShown')
            if ($(window).width() < 768){
                $('.nav-wrap').fadeOut();
            }
                var target = $($(this).attr('href'));
            if (target.length) {
                var scrollTo = target.offset().top - headerHeight;
                $('body, html').animate({
                    scrollTop: scrollTo + 'px'
                }, 800);
            }
        });*/

        $(window).scroll(function () {

            // The varriables
            var $titleDiv = $('.hero-inner');


            //Get scroll position of window
            var windowScroll = $(this).scrollTop();

            if ($(window).width() < 768) {
                //Slow scroll of social div and fade it out
                $titleDiv.css({
                    'margin-top': -(windowScroll / 10) + "px",
                    'opacity': 1 - (windowScroll / 550)
                });
            }

            if ($(window).width() > 767) {
                $titleDiv.css({
                    'margin-top': -(windowScroll / 5) + "px",
                    'opacity': 1 - (windowScroll / 550)
                });
            }
            $titleDiv.css({
                'opacity': 1 - (windowScroll / 400)
            });
        });



        
        
        
        var $anim_elem = $('.anim-parallax');
        var $$window = $(window);
        
        
        function parallax_rotate() {
            var windowHeight = $$window.height();
            var windowTopPosition = $$window.scrollTop();
            var windowBottomPosition = (windowTopPosition + windowHeight)
            $.each($anim_elem, function(){
                var $elem = $(this);
                var elemTopPosition = $(this).offset().top;
                var elemMoveSet = windowTopPosition - elemTopPosition ;
                console.log(elemMoveSet)
                var elemMove = elemMoveSet / 8;
                if (elemTopPosition <= windowBottomPosition) {
                    $elem.css("transform", `translateY(${-elemMove}px) rotate(${-(elemMove *3)}deg) `)
                    $anim_elem.eq(0).css("transform", `translateY(${-elemMove}px) rotate(${-(elemMove *3)}deg) `)
                    $anim_elem.eq(1).css("transform", `translateY(${-elemMove}px) rotate(${(elemMove * 3)}deg) `)
                    $anim_elem.eq(2).css("transform", `translateY(${-elemMove}px) rotate(${-(elemMove * 3)}deg) `)
                }
            })
        }
        
        $$window.on('scroll resize', parallax_rotate);
        $$window.trigger('scroll');

        if ($('.prepear-details-logo').length) {
            $(function () {
                var el = $('.prepear-details-logo');
                var index = 0;
                var timer = window.setInterval(function () {
                    if (index < el.length) {
                        el.eq(index++).addClass('popup-added');
                    } else {
                        window.clearInterval(timer);
                    }
                }, 700);
            });
            
        }
        

        var $animation_elements = $('.anim');
        var $window = $(window);

        function check_if_in_view() {
            var window_height = $window.height() / 1.3;
            var window_top_position = $window.scrollTop();
            var window_bottom_position = (window_top_position + window_height);
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_top_position = $element.offset().top;
                if (element_top_position <= window_bottom_position) {
                    $element.addClass('in-view');
                } else {}
            });
        }
        $window.on('scroll resize', check_if_in_view);
        $window.trigger('scroll');



        if ($('.split-heading').length) {
            var res = Splitting({
                target: '.split-heading',
                by: 'lines',
            });

            Splitting();

            res.forEach((splitResult) => {
                const wrappedLines = splitResult.lines.map((wordsArr) => `
            <span class="line"><span class="mask-up">
            ${wordsArr.map((word) => `${word.outerHTML}<span class="whitespace">
            </span>`).join('')}
            </span></span>`).join('');
                splitResult.el.innerHTML = wrappedLines;
            });
            inView.threshold(0.75);
            inView(".split-heading").on("enter", function (el) {
                if (!el.classList.contains("has-animated")) {
                    anime({
                        targets: el.querySelectorAll(".mask-up"),
                        translateY: ["100%", "0%"],
                        duration: 700,
                        delay: anime.stagger(200),
                        easing: "easeOutQuad",
                        autoplay: true
                    });
                    el.classList.add("has-animated");
                }
            });
        }

    }) // End ready function.


    var $animation_elements = $('.animate-view');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function () {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);
            if (element_top_position <= window_bottom_position) {
                $element.addClass('in-view');
            } else {}
        });
    }
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');


})(jQuery)

var mac = 0;
if (navigator.userAgent.indexOf('Mac') > 0) {
    mac = 1;
} else {
    mac = 0;
}
if (1 == mac) {
    $('body').addClass('mac-os');
} else {
    $("body").addClass('win-os');
}

function increaseCount(e, el) {
    var input = el.previousElementSibling;
    var value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    input.value = value;
}

function decreaseCount(e, el) {
    var input = el.nextElementSibling;
    var value = parseInt(input.value, 10);
    if (value > 1) {
        value = isNaN(value) ? 0 : value;
        value--;
        input.value = value;
    }
}