// const product = []
// function uniqueCountries() {
// 	let prr = new Set();
// 	getProducts.then(render =>{	//убрать undefined из множества
// 		render.forEach(element => {
// 				prr.add(element.country)
// 				product.push(element)
// 		});
// 	})
// 	console.log(prr);
// }	
// uniqueCountries();


	
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

const blockFilters = document.querySelectorAll('.filter');
blockFilters.forEach(element => {
	element.addEventListener('click', function (event){
		const listProducts = productsContainer.children;
		for (const item of listProducts) {
			if (item.dataset.country !== event.target.value){
				item.classList.toggle('blocked');
			}
		}
	})
});


// item.classList.add('blocked');
// 		else{
// 			item.classList.remove('blocked')
// 		}	
	