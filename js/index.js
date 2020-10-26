$(document).ready(function(){
    //Add active to nav-link on click, remove if click on another
    $(".navbar .nav-link").on("click", function(){
        $(".navbar").find(".active").removeClass("active");
        $(this).addClass("active");
     });
});
