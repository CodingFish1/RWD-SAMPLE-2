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
var swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  }
});
//# sourceMappingURL=all.js.map
