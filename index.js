const dollars = ["32$", "15$", "12$", "17$", "20$"];

//map
let prices = [];
for (let i = 0; i < dollars.length; i++) {
	prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}
console.log(prices);

//filter


//reduce


