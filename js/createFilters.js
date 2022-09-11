
function uniqueCountries() {
	let prr = new Set();
	getProducts().then(render =>{	//убрать undefined из множества
		render.forEach(element => {
				prr.add(element.country)
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



// filterCountry(setCountries)

// console.log(setCountries);
// console.log(arrayCountries);
// const setCountries = new Set();
// const arrayCountries = Array.from(setCountries)