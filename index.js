const dollars = ["32$", "15$", "12$", "17$", "20$"];

//map
let prices = [];
prices = dollars.map((dollar) => Number(dollar.slice(0, dollar.length - 1)));
console.log(`Prices: ${prices}`);

//filter
let expensive = [];
for (const price of prices) {
	if (price >= 20) {
		expensive.push(price);
	}
}
console.log(`Expensive prices: ${expensive}`);

//reduce


