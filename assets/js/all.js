"use strict";

var resizeObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    var heightChanger = document.querySelector('#navbar-filler');
    heightChanger.style.height = entry.contentRect.height + 3 + 'px';
  });
});
resizeObserver.observe(document.querySelector('#barWatcher'));
var elem = document.querySelector('input[name="inputDate"]');
var datepicker = new Datepicker(elem, {
  // ...options
  language: 'zh-TW',
  buttonClass: 'btn'
});
"use strict";

var swiper = new Swiper('.swiper', {
  // 分頁   
  pagination: {
    el: '.swiper-pagination'
  },
  // 左右箭頭    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // 滾動條
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});
//# sourceMappingURL=all.js.map
