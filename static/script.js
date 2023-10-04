$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
    //typing animation script
    var typed = new Typed(".typing-1", {
        strings: ["Convolutional Neural Network", "YOLO"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Full Stack Web Developer", "Content Creator", "IT Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

});