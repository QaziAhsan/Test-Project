$('.owl-carousel').owlCarousel({
    loop:true,
    center:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        },
     
    }
})



    document.querySelector('.bullet').addEventListener('click', (e) => {
        document.querySelector('.nav_links').classList.toggle('active');
        document.querySelector('.bullet').classList.toggle('active');
      });
      

