$ (function() {

    // Modal

    const modalCall = $('[data-modal]');

    modalCall.on('click', function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $('body').addClass('no-scroll');

        setTimeout(function() {

            $(modalId).find(".modal__dialog").css({
                transform: "rotateX(0)"
            });

        }, 200);
    });

    $('.modal').keydown(function(e) {
        // ESCAPE key pressed
        if (e.keyCode == 27) {
            $('.modal').removeClass('show');
            $('body').removeClass('no-scroll');
        }
    });

    $('.modal').on('click', function(event) {

        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "rotateX(90deg)"
        });

        setTimeout(function() {

            $this.removeClass('show');
            $('body').removeClass('no-scroll');

        }, 200);

    });

    // Burger Menu

    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("show");
        $("#nav").toggleClass("show");
    });

    // Slider

    let planWidth = $("body").innerWidth();


    /* Работает только, если изначально выполнячеться условие. 
    С обработчиком собыйтий пока не сообразил как. Решил оставить так. */

    if (planWidth <= 320) {
        $('.planning__info--slider').addClass('autoplay');
    } else {
        $('.planning__info--slider').removeClass('autoplay');
    }

    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

      /* More info */

      if (planWidth <= 320) {
        $('.planning__info--slider').addClass('autoplay');
    } else {
        $('.planning__info--slider').removeClass('autoplay');
    }

    const itemCall = $('[data-more]');

    if (planWidth <= 320) {

        itemCall.on('click', function(event) {
            event.preventDefault();

            let $this = $(this);
            itemId = $this.data('more');
            $(itemId).toggleClass('show');

        });

    }



});