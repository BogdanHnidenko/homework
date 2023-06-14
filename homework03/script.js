// Exercise 1
function getMaxDigit(number) {
	const elem = String(number).split('');
	let maxValue;
	for (let i = 0; i < elem.length; i++) {
		if (maxValue === undefined) {
			maxValue = elem[i];
		} else if (elem[i] > maxValue) {
			maxValue = elem[i];
		}
	}
	return Number(maxValue);
}
console.log(getMaxDigit(1236));

// Exercise 2
function exponent(num, pow) {
	let result = 1;
	for (let i = 0; i < pow; i++) {
		result *= num;
	}
	return result;
}
console.log(exponent(4, 2));

// Exercise 3
function bigLetter(name) {
	if (typeof name !== 'string') {
		alert('Not a correct');
	}
	const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	return formattedName;
}
console.log(bigLetter('aSAVAV'));

// Exercise 4
function sum(price, tax = 19.5) {
	let money = (price * (100 - tax)) / 100;
	return money;
}
console.log(sum(1000));

// Exercise 5
function getRandomNumber(N, M) {
	return Number((Math.random() * (M - N) + N).toFixed(0));
}
console.log(getRandomNumber(1, 10));

// Exercise 6
function countLatter(letter, word) {
	let wordElem = word.split('');
	let count = 0;
	for (let i = 0; i < wordElem.length; i++) {
		if (wordElem[i] === letter) {
			count++;
		}
	}
	return count;
}
console.log(countLatter('a', 'affae'));

// Exercise 7,8
function convertCurrency(symbol) {
	if (symbol.includes('$')) {
		return parseFloat(symbol) * 25 + 'UAH';
	} else if (symbol.includes('UAH') || symbol.includes('uah')) {
		return parseFloat(symbol) / 25 + '$';
	} else {
		return "Not a correct";
	}
}
console.log(convertCurrency('2500 uah'));

// Exercise 9
function getRandomPassword(length = 8) {
	let password = '';
	for (let i = 0; i < length; i++) {
		const randomPass = Math.floor(Math.random() * 10);
		password += randomPass;
	}
	return password;
}
console.log(getRandomPassword(5));

// Exercise 10
function deleteLatter(letter, word) {
	const serchLetter = new RegExp(letter, 'gi');
	return word.replace(serchLetter, '');
}
console.log(deleteLatter('a', 'efaaAAAAAefaaaavseaaav'));

// Exercise 11
function isPalyndrom(word) {
	const firstWord = word.toLowerCase();
	const secondWord = firstWord.split('').reverse().join('');
	return firstWord === secondWord;
}
console.log(isPalyndrom("worow"));

// Exercise 12
function deleteDuplicateLetter(word) {
	const duplicateLetter = word.toLowerCase().replace(/[^а-яa-z]/g, '');
	let result = '';
	for (let i = 0; i < duplicateLetter.length; i++) {
		const letter = duplicateLetter[i];
		if (duplicateLetter.indexOf(letter) === duplicateLetter.lastIndexOf(letter)) {
			result += letter;
		}
	}
	return result;
}
console.log(deleteDuplicateLetter('asfigerasf'));
