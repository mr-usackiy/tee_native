function allPrice() {
  const cardWrapper = document.querySelector(".cardItemAdded_wrapper");
  const productsCards = document.querySelectorAll(".cardItemAdded");
  const AllPrice = document.querySelector(".result-sum");
  const lengthEl = cardWrapper.children.length;
  let totalPrice = 0;
  productsCards.forEach(function (item) {
    const priceEl = parseInt(item.querySelector("[data-price]").innerText);
    totalPrice += priceEl;
  });
  if (lengthEl === 0) {
    AllPrice.innerText = "0";

  } else {
    AllPrice.innerText = totalPrice;
  }
}
