window.onload = function () {
  const desc = document.querySelectorAll('.products-card-description')

  desc.forEach(function (item) {
    let descCounter = item.innerText.length
    if (descCounter >= 80) {
      item.style.color = 'red'
    }
  })

  let btn_more = document.querySelectorAll('.more')
  btn_more.forEach(function (elem) {
    elem.addEventListener('click', function (event) {
      let descHeightBefore = event.target.closest('.products-card-description')
        .offsetHeight
      let descClick = event.target.closest('.products-card-description')
      descClick.classList.toggle('open-desc')

      let descHeightAfter = event.target.closest('.products-card-description')
        .offsetHeight

      let diffHeight = descHeightAfter - descHeightBefore
      let descParent = event.target.closest('.wrapper-description')
      let descParentTop = descParent.closest('.products-card')
      let imgCart = descParentTop.querySelector('.img-cart')
      let imgCartHeight = imgCart.offsetHeight
      if (descClick.classList.contains('open-desc')) {
        imgCart.style.height = imgCartHeight - diffHeight + 'px'
      } else {
        descClick.style.paddingTop = diffHeight + 'px'
        imgCart.style.height = 57 + '%'
      }

      console.log(imgCart)
    })
  })
}
