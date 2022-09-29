"use strict";

var resizeObserver = new ResizeObserver(function (entries) {
  entries.forEach(function (entry) {
    var heightChanger = document.querySelector('#navbar-filler');
    heightChanger.style.height = entry.contentRect.height + 3 + 'px';
  });
});
resizeObserver.observe(document.querySelector('#barWatcher')); // const section =["One","Two","Three","Four","Five","Six","Seven","Eight"]
// section.forEach(item=>{
//   const section + item = 
// })
// const sectionOne = document.querySelector("#sectionOne");
// const sectionTwo = document.querySelector("#sectionTwo");
// const sectionThree = document.querySelector("#sectionThree");
// const sectionFour = document.querySelector("#sectionFour");
// const sectionFive = document.querySelector("#sectionFive");
// const sectionSix = document.querySelector("#sectionSix");
// const sectionSeven= document.querySelector("#sectionSeven");
// const sectionEight = document.querySelector("#sectionEight");
// const sections = [...document.querySelectorAll("section")]
// console.log(sections);
// sections.forEach((item) => {
//   const item.id = document.querySelector(`'#'+${item}`)
//   console.log(item.id);
// })
// const sectionOneOptions = {
//   rootMargin: "-200px 0px 0px 0px"
//   rootMargin: `${headerHeight}px`
// };
// const sectionObserverCallback = new IntersectionObserver(function(
//   entries) {
//   entries.forEach(entry => {
//     if(entry.target.attributes[1].nodeValue === 'sectionOne' && !entry.isIntersecting){
//       console.log('sectionOne');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionTwo' && !entry.isIntersecting){
//       console.log('sectionTwo');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionThree' && !entry.isIntersecting){
//       console.log('sectionThree');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionFour' && !entry.isIntersecting){
//       console.log('sectionFour');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionFive' && !entry.isIntersecting){
//       console.log('sectionFive');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionSix' && !entry.isIntersecting){
//       console.log('sectionSix');
//     } else if(entry.target.attributes[1].nodeValue === 'sectionSeven' && !entry.isIntersecting){
//       console.log('sectionSeven')
//     } else if(entry.target.attributes[1].nodeValue === 'sectionEight' && !entry.isIntersecting){
//       console.log('sectionEight');
//     }
//   });
// },
// sectionOneOptions);
// sectionObserverCallback.observe(sectionOne);
// sectionObserverCallback.observe(sectionTwo);
// sectionObserverCallback.observe(sectionThree);
// sectionObserverCallback.observe(sectionFour);
// sectionObserverCallback.observe(sectionFive);
// sectionObserverCallback.observe(sectionSix);
// sectionObserverCallback.observe(sectionSeven);
// sectionObserverCallback.observe(sectionEight);

var header = document.querySelector("nav");
var sections = document.querySelectorAll("section");
var scrollRoot = document.querySelector('.scroller');
var direction = 'up';
var prevYPosition = 0;
sections.forEach(function (item) {
  var options = {
    rootMargin: "".concat(header.offsetHeight * -1, "px"),
    threshold: 0
  };
  var observer = new IntersectionObserver(interSectionObserverCallback, options);
  observer.observe(item);
});

function interSectionObserverCallback(entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log(entry.target.id);
    } // if (scrollRoot.scrollTop > prevYPosition) {
    //   direction = 'down'
    //   console.log(direction);
    // } else {
    //   direction = 'up'
    //   // console.log(scrollRoot);
    //   console.log(direction);
    // }

  });
}
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
