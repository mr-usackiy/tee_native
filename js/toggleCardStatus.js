function toggleCardStatus() {
  const cardWrapper = document.querySelector(".cardItemAdded_wrapper");
  const nathingWrapper = document.querySelector(".nahing_wrapper");
  const ElemNathing = document.querySelector(".nathing");
  const nathingBlock = `<div class="nathing">Корзина пуста</div>`;
  if (cardWrapper.children.length>0  && nathingWrapper.querySelector(".nathing")) {
    ElemNathing.remove();}
  if (event.target.dataset.action === "minus") {
    if (cardWrapper.children.length === 0){
      nathingWrapper.insertAdjacentHTML("beforeend", nathingBlock);
    }
  }
}
