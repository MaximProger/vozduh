$ (function() {

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


});