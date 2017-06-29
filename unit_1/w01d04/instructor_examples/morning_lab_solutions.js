const printGreeting = (name) => {
	return 'Gidday, ' + name + '!';
};

console.log(printGreeting('mate'));

///////////////////////

const reverseWordOrder = (str) => {
	return str.split(' ').reverse().join(' ');
}

console.log(reverseWordOrder("Ishmael me Call"));

///////////////////////

const checkPandigital = (num) => {
	const len = num.toString().length;
	const digits = num.toString().split('');

	for (let i=0; i < len; i++) {
		if (digits[i] <= 0) {
			return "Zero or below detected";
		} else if (digits[i] > len) {
			return "Not pandigital because digit " + digits[i] + " is greater than length of number: " + len;
		} else {		
			for (let j=i + 1; j < len; j++) {
				if (digits[j] == digits[i]) {
					return "Not pandigital because digits are not unique";
				}
			}
		}
	}

	return "Pandigital number found!";
}

console.log(checkPandigital(333));
