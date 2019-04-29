$(document).ready(function () {

    // navigation
    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if(position >= 500) {
            $("#custom-nabvar").css("height", "60px");
        }else {
            $("#custom-nabvar").css("height", "90px");
        }
    });

    $(".nav-btn").on("click", function(){
        $(".nav-btn").toggleClass("change");
     });
     

    //  Project Gallery
    $(".p-item").click(function () {
        let value = $(this).attr("data-filter");
        
        if(value === "all") {
            $(".filter").show();
        } else {
            $(".filter").not("."+value).hide();
            $(".filter").filter("."+value).show();
            $(".filter").addClass('wow', 'fadeInRight');
        }
        $(this).addClass("p-active").siblings().removeClass("p-active");
    });
});