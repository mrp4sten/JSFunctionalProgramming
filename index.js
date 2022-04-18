// introduction
function apply(num, f) {
	return f(num);
}

function double(num) {
	return num * 2;
}

console.log(apply(5, double));

