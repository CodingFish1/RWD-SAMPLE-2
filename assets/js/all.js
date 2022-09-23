"use strict";

$(function () {
  console.log('Hello Bootstrap5');
});
var resizeObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    console.log(entry.contentRect.height);
    var heightChanger = document.querySelector('#navbar-filler');
    console.log(heightChanger);
    heightChanger.style.height = entry.contentRect.height + 3 + 'px';
  });
});
resizeObserver.observe(document.querySelector('#barWatcher'));
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
