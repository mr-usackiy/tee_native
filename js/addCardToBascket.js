//div в карзине в который я добавлю карточку
const cardWrapper = document.querySelector(".cardItemAdded_wrapper");
window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("data-card")) {
    //находим карточку товара по которому кликнули
    const card = event.target.closest(".products-card");

    //собираем данные с карточки
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector("[data-imgProduct]").getAttribute("src"),
      title: card.querySelector("[data-title]").innerText,
      description: card.querySelector("[data-description]").innerText,
      price: card.querySelector("[data-price]").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    //сливаем одинаковые карточки в карзине в одну
    const cardAddedId = cardWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    //если карточка с id нашлась то переменная true
    if (cardAddedId) {
      const cardAddedCounter = cardAddedId.querySelector("[data-counter]");
      const cardAddedPrise = cardAddedId.querySelector("[data-price]");
      cardAddedCounter.innerText =
        parseInt(cardAddedCounter.innerText) + parseInt(productInfo.counter);
      cardAddedPrise.innerText =
        parseInt(cardAddedPrise.innerText) + parseInt(productInfo.price);
    } else {
      //вставляем выбранную карточку в карзину
      const cardItemAdded = `<div class="cardItemAdded" data-id="${productInfo.id}">
                                <img src="${
                                  productInfo.imgSrc
                                }" class="added" alt="" style="filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.384)); border-radius: 5px" />
                                <div class="wrapper-description added">
                                <h2 class="products-card-name" data-title>${
                                  productInfo.title
                                }</h2>
                                <div class="products-card-calc margin0">
                                    <div class="row-1">
                                    <button data-action="minus" class="minus Added">-</button>
                                    <div class="sum" data-counter>${
                                      productInfo.counter
                                    }</div>
                                    <button class="plus Added" data-action="plus">+</button>
                                    </div>
                                    <div class="row-2">
                                    <div class="price" data-price>${
                                      (productInfo.price /
                                        productInfo.counter) *
                                      productInfo.counter
                                    }</div>
                                    <p>₽</p>
                                    </div>
                                </div>  
                                </div>
                                </div>`;
      cardWrapper.insertAdjacentHTML("beforeend", cardItemAdded); //вставляем перед концом выбранного дива
    }
    //сбрасываем счетчик и стоимость в карточке после добавление ее в карзину
    card.querySelector(["[data-price]"]).innerText =
      card.querySelector(["[data-price]"]).innerText /
      card.querySelector(["[data-counter]"]).innerText;
    card.querySelector(["[data-counter]"]).innerText = "1";
    card.querySelector(["[data-action='minus']"]).disabled = "disabled";

    //условия для счетчика товара в карзине (блокировка единицы и удаление товара)
    toggleCardStatus();
    allPrice();
  }
  // удаление и добавление "Корзина пуста"
  
  
});
