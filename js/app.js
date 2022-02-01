$(function () {
    $(".menu__burger").on("click", function () {
    $(".window__menu").addClass("active");      // Открывается меню навигации
    $(".modal").addClass("show");               // Появляется синий фон
    $("body").addClass('no-scroll');            // Запрет скролить сайт
    }),

    $(".close__menu-btn").on("click", function () {
    $(".window__menu").removeClass("active");   // Закрытие меню навигации
    $(".modal").removeClass("show");            // Убирается синий фон
    $("body").removeClass('no-scroll');         // Возобнавляется возможноть скролить
    }),
    // Закрытие меню навигации при нажатии на синий фон
    $(".modal").on("click", function () {
    $(".window__menu").removeClass("active");
    })

   // ============= Modal ================

    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    // Открытие окна при нажатии на кнопку
    modalCall.on("click", function(event) { 
        event.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');                // Появляется синий фон
        $("body").addClass('no-scroll');            //Запрет скрола страницы при открытом окне
        $(".window__menu").removeClass("active");   // Закрытие меню навигации

        // Анимация появления окна
        setTimeout(function(){
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        
    });

    // Закрытие окна при нажатии на кнопку
    modalClose.on("click", function(event) {
        event.preventDefault();

        let $this = $(this);
        let modalParent = $this.parents('.modal');

        // Анимация закрытия окна
        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function(){
            modalParent.removeClass('show');        // Убирается синий фон
            $("body").removeClass('no-scroll');     //Разрешение скрола страницы при открытом окне
        }, 200);
    });

    // Закрытие окна при нажатии на синий фон
    $(".modal").on("click", function(event) {
        let $this = $(this);

        // Анимация закрытия окна
        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });  

        setTimeout(function() {
            $this.removeClass('show');
            $("body").removeClass('no-scroll'); //Разрешение скрола страницы при открытом окне
        }, 200);
    });

    $(".modal__dialog").on("click", function(event) {
        event.stopPropagation();
    });
})