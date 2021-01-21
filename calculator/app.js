function add(a = []) {
	let ans = 0;
	for (i in a) {
		ans += parseInt(a[i]);
	}
	return ans;
}
function sub(a, b) {
	return a - b;
}
function mult(a = []) {
	let ans = 1;
	for (i in a) {
		ans *= parseInt(a[i]);
	}
	return ans;
}
function div(a, b) {
	if (b == 0) {
		alert('please use non zero denominator');
		return;
	}
	return a / b;
}
(function () {
	const operator = prompt('Enter operator ( either +, -, * or / ): ');

	if (operator == '+') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert(add(arr));
	} else if (operator == '-') {
		const number1 = parseFloat(prompt('Enter first number: '));
		const number2 = parseFloat(prompt('Enter second number: '));

		alert(sub(number1, number2));
	} else if (operator == '*') {
		let arr = new Array();
		numberOfelems = prompt('how many nums? ');
		for (let i = 0; i < parseInt(numberOfelems); i++) {
			arr[i] = parseFloat(prompt('enter number ' + (i + 1)));
		}
		alert(mult(arr));
	} else {
		const number1 = parseFloat(prompt('Enter first number: '));
		const number2 = parseFloat(prompt('Enter second number: '));

		alert(div(number1, number2));
	}
})();
