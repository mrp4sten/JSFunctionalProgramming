const dollars = ["32$", "15$", "12$", "17$", "20$"];

// Chaining
sum = dollars
	.map(dollar => Number(dollar.slice(0, dollar.length - 1)))
	.filter(price => price >= 20)
	.reduce((accumulator, price) => accumulator + price);

console.log(sum);
