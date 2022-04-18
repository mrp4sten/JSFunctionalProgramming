function apply(num, f) {
	return f(num);
}

// anonymous function
console.log(apply(5, function (num) {
	return num * 2;
}));

