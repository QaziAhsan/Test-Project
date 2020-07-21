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
            items:1
        },
        1000:{
            items:2
        },
        1400:{
            items:3
        },
     
    }
})

/**************Header*************/

    document.querySelector('.bullet').addEventListener('click', (e) => {
        document.querySelector('.nav_links').classList.toggle('active');
        document.querySelector('.bullet').classList.toggle('active');
      });
      

/**************Form*************/

      const form = document.querySelector('#form');
      const mail = document.querySelector('#mail');
      
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      
        if (mail.value === '') {
          mail.parentElement.classList.add('error');
        }else {
          mail.parentElement.classList.remove('error');
          if(mail.type == 'email'){
            if (validateEmail(mail.value)) {
              mail.parentElement.classList.remove('error');
            }else {
              mail.parentElement.classList.add('error');
            }
          }
        }
      })

      function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      } 
      
      