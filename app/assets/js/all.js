const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
      const heightChanger = document.querySelector('#navbar-filler')
      heightChanger.style.height = entry.contentRect.height + 3 + 'px'
    })
  })
  resizeObserver.observe(document.querySelector('#barWatcher'))

  // const elem = document.querySelector('input[name="inputDate"]');
  // const datepicker = new Datepicker(elem, {
  //   // ...options
  //   language: 'zh-TW',
  //   buttonClass: 'btn',
  // }); 

  const swiper = new Swiper('.swiper', {
  
    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });