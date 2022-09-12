const productsContainer = document.querySelector('#products-container')

getProducts()

async function getProducts() {
  //получаем массив из json в котором мы определили массив
  //обязательно через await,необходимо достоверно получить данные
  const response = await fetch('./js/products.json')
  //присваиваем хначение массива переменной
  const productsArray = await response.json()
  //теперь передаем этоту переменную с массивом в другую функцию
  renderProducts(productsArray)
  return productsArray
}

function renderProducts(productsArray) {
  //пербираем все элементы в массиве и вставляем их в шаблон
  productsArray.forEach(function (item) {
    const productsHTML = `<div class="products-card" data-id="${item.id}" data-country="${item.country}">
        <img class="img-cart" data-imgProduct src="./images/${item.imgSrc}" alt="green-tea" />
        <div class="wrapper-description">
          <h2 class="products-card-name" data-title>${item.title}</h2>
          <p class="products-card-description hidden" data-description>${item.description}<span class="more">...<span>
          </p>
          <div class="products-card-calc">
            <div class="row-1">
              <button class="minus NoAdd" data-action="minus" disabled>
                -
              </button>
              <div class="sum" data-counter>1</div>
              <button class="plus NoAdd" data-action="plus">+</button>
            </div>
            <div class="row-2">
              <div class="price" data-price>${item.price}</div>
              <p>₽</p>
            </div>
          </div>
          <button class="add" data-card>добавить в корзину</button>
        </div>
      </div>`
    //вставляем шаблон в страницу(отрисовываем)
    productsContainer.insertAdjacentHTML('beforeend', productsHTML)
  })
}
