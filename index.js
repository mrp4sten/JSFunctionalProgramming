const dollars = ["32$", "15$", "12$", "17$", "20$"];

//map
let prices = [];
for (let dollar of dollars) {
	prices.push(Number(dollar.slice(0, dollar.length - 1)));
}
console.log(prices);

//filter


//reduce


