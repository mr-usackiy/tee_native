window.onload = function () {
  const desc = document.querySelectorAll('.products-card-description')

  desc.forEach(function (item) {
    let descCounter = item.innerText.length
    if (descCounter >= 80) {
      item.style.color = 'red'
    }
  })
}
