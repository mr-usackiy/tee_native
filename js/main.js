//dataSet открывает доступ к атрибутам data-, после я обратился к своему data-action.   targer это то где произошел клик
//closest находит близжайшего родителя
window.addEventListener('click', function (event) {
  //счетчики количества товара
  //счетчик кнопки минус, счетчик цены на плюс

  //счетчик кнопки минус, счетчик цены на минус если карточка не в корзине
  if (event.target.classList.contains('NoAdd')) {
    const row1 = event.target.closest('.row-1')
    const minus = row1.querySelector("[data-action='minus']")
    const counter = row1.querySelector('[data-counter]')
    if (event.target.dataset.action === 'plus') {
      minus.removeAttribute('disabled')
      const counter = row1.querySelector('[data-counter]')
      counter.innerText = ++counter.innerText
      const productsCardCalc = event.target.closest('.products-card-calc')
      const price = productsCardCalc.querySelector('[data-price]')
      price.innerText =
        counter.innerText * (price.innerText / (counter.innerText - 1))
    }
    console.log('эта карточка находится не в корзине')
    if (event.target.dataset.action === 'minus') {
      if (counter.innerText <= 1) {
      } else {
        counter.innerText = --counter.innerText
      }
      const productsCardCalc = event.target.closest('.products-card-calc')
      const price = productsCardCalc.querySelector('[data-price]')
      if (counter.innerText > 1) {
        counter.innerText = ++counter.innerText
        price.innerText = price.innerText / counter.innerText
        price.innerText = --counter.innerText * price.innerText
      } else {
        if (counter.innerText === '1') {
          price.innerText = price.innerText / 2
          event.target.disabled = 'disabled'
        }
      }
    }
  }

  //если нажат минус по карточке в корзине, считаем счетчик и стоимость
  if (event.target.classList.contains('Added')) {
    const row1Add = event.target.closest('.row-1')
    const wrapCardAdd = event.target.closest('.products-card-calc')
    const priceAdd = wrapCardAdd.querySelector('[data-price]')
    const counterAdd = row1Add.querySelector('[data-counter]')
    if (event.target.dataset.action === 'minus') {
      if (parseInt(counterAdd.innerText) > 1) {
        priceAdd.innerText = priceAdd.innerText / counterAdd.innerText
        counterAdd.innerText = --counterAdd.innerText
        priceAdd.innerText = counterAdd.innerText * priceAdd.innerText
      } else if (
        event.target.closest('.cardItemAdded') &&
        parseInt(counterAdd.innerText) === 1
      ) {
        event.target.closest('.cardItemAdded').remove()
      }
    }
    if (event.target.dataset.action === 'plus') {
      priceAdd.innerText = priceAdd.innerText / counterAdd.innerText
      counterAdd.innerText = ++counterAdd.innerText
      priceAdd.innerText = counterAdd.innerText * priceAdd.innerText
    }
    toggleCardStatus()
    allPrice()
  }
})
