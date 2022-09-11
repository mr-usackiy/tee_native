const product = []
function uniqueCountries() {
	let prr = new Set();
	getProducts().then(render =>{	//убрать undefined из множества
		render.forEach(element => {
				prr.add(element.country)
				product.push(element)
		});
	})
	console.log(prr);
}	
uniqueCountries();


	
// }
// createFilters(prr);
// function filterCountry(setCountries){
// 	for(item of setCountries){
// 		console.log(item);
// 		const filterCountryHTML = 
// 			`<label>
// 				${item}
// 				<input type="checkbox" name="${item}" value="${item}">
// 			</label>`
// 		filters.insertAdjacentHTML('beforeend', filterCountryHTML)
// 	}
// }

const blockFilters = document.querySelector('.block-filters');


window.addEventListener('click', function (event){
	if (event.target.checked){
		const filter = event.target;
		const listProduct = productsContainer.children;
		
	}
})
console.log(productsContainer.children);
