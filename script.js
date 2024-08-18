$(document).ready(function(){
	$(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
    	$('.navbar .menu').toggleClass("active");
    	$('.menu-btn i').toggleClass("active");

    });
    var typed = new Typed(".typing-1", {
        strings: ["Programmer", "Tester"],
        typeSpeed: 95,
        backSpeed: 57,
        loop: true
    });


    var typed = new Typed(".typing-2", {
        strings: ["Programmer", "Tester"],
        typeSpeed: 95,
        backSpeed: 57,
        loop: true
    });


});