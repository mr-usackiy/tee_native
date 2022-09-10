window.onload = function () {
  const block1 = document.querySelector('.block-1')
  const block2 = document.querySelector('.block-2')
  const title = document.querySelector('.intro-title')
  const video = document.querySelector('.frame-media')

  setTimeout(function () {
    block1.style.clipPath = 'polygon(0 0, 0 0, 100% 0)'
    block2.style.clipPath = 'polygon(0 100%, 100% 100%, 100% 100%)'
    title.style.opacity = 1
    video.style.opacity = 1
  }, 1500)
}
