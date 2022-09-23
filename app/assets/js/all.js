$(function() {
  console.log('Hello Bootstrap5');
});


const resizeObserver = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry.contentRect.height)
      const heightChanger = document.querySelector('#navbar-filler')
      console.log(heightChanger);
      heightChanger.style.height = entry.contentRect.height + 3 + 'px'
    })
  })
  resizeObserver.observe(document.querySelector('#barWatcher'))