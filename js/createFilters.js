roductsAfterFilters = new Set() // Создаем множество храняее продукты после фильтров
titleFilters = new Set() // Множество хранящее заголовок фильтра
const blockFilters = document.querySelectorAll('.filter') // Забираем все фильтры
const filterBtn = document.querySelector('.filter__btn')
const listProducts = productsContainer.children

console.log(listProducts)
for (const goods of listProducts) {
  console.log(goods)
}

function setFilters() {
  blockFilters.forEach((element) => {
    element.addEventListener('click', (event) => {
      //Вешаем слушатели на все фильтры
      for (const item of listProducts) {
        // Если значение нажатого фильтра = стране на карточке и кнопка нажата то добавляем в множество
        if (
          event.target.value == item.dataset.country &&
          event.target.checked
        ) {
          productsAfterFilters.add(item)
        } else if (
          event.target.value == item.dataset.country &&
          event.target.checked == false
        ) {
          // Если не нажата то убираем из множества
          productsAfterFilters.delete(item)
        }
      }
    })
  })
}
function applyFilters() {
  filterBtn.addEventListener('click', (el) => {
    if (el) {
      el.preventDefault()
      for (const item of listProducts) {
        //Блокируем все продукты при нажатии на кнопку
        item.classList.add('blocked')
      }
      productsAfterFilters.forEach((el) => {
        //Проходим по множеству и убираем блокировку продуктов
        el.classList.remove('blocked')
      })
      if (productsAfterFilters.size == 0) {
        for (const item of listProducts) {
          // При пустом множестве возвращаем все продукты
          item.classList.remove('blocked')
        }
      }
    }
  })
}

setFilters()
applyFilters(productsAfterFilters)
