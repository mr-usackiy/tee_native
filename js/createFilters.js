filterList = new Set() // Создаем множество

counterFilter = 0
const blockFilters = document.querySelectorAll('.filter') // Забираем все фильтры
blockFilters.forEach((element) => {
  element.addEventListener('click', function (event) {
    //Вешаем слушатели на все фильтры
    const listProducts = productsContainer.children
    for (const item of listProducts) {
      //Блокируем все продукты при нажатии на фильтр
      item.classList.add('blocked')
    }
    for (const item of listProducts) {
      // Если значение нажатого фильтра = стране на карточке и кнопка нажата то добавляем в множество
      if (event.target.value == item.dataset.country && event.target.checked) {
        filterList.add(item)
      } else if (
        event.target.value == item.dataset.country &&
        event.target.checked == false
      ) {
        // Если не нажата то убираем из множества
        filterList.delete(item)
      }
    }
    filterList.forEach((el) => {
      //Проходим по множеству и убираем блокировку продуктов
      el.classList.remove('blocked')
    })
    if (filterList.size == 0) {
      for (const item of listProducts) {
        // При пустом множестве возвращаем все продукты
        item.classList.remove('blocked')
      }
    }
  })
})
