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

// Exercise 2
function exponent(num, pow) {
	let result = 1;
	for (let i = 0; i < pow; i++) {
		result *= num;
	}
	return result;
}

// Exercise 3
function bigLetter(name) {
	if (typeof name !== 'string') {
		alert('Not a correct');
	}
	const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
	return formattedName;
}

// Exercise 4
function sum(price, tax = 19.5) {
	let money = (price * (100 - tax)) / 100;
	return money;
}

// Exercise 5
function getRandomNumber(N, M) {
	return Number((Math.random() * (M - N) + N).toFixed(0));
}

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

// Exercise 9
function getRandomPassword(length = 8) {
	let password = '';
	for (let i = 0; i < length; i++) {
		const randomPass = Math.floor(Math.random() * 10);
		password += randomPass;
	}
	return password;
}

// Exercise 10
function deleteLatter(letter, word) {
	const serchLetter = new RegExp(letter, 'gi');
	return word.replace(serchLetter, '');
}

// Exercise 11
function isPalyndrom(word) {
	const firstWord = word.toLowerCase();
	const secondWord = firstWord.split('').reverse().join('');
	return firstWord === secondWord;
}

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
console.log(`
Function 1:   ${getMaxDigit(12524523)}
Function 2:   ${exponent(4, 2)}
Function 3:   ${bigLetter('aSAVAV')}
Function 4:   ${sum(1000)}
Function 5:   ${getRandomNumber(1, 10)}
Function 6:   ${countLatter('a', 'affae')}
Function 7,8: ${convertCurrency('2500 uah')}
Function 9:   ${getRandomPassword(5)}
Function 10:  ${deleteLatter('a', 'efaaAAAAAefaaaavseaaav')}
Function 11:  ${isPalyndrom("worow")}
Function 12:  ${deleteDuplicateLetter('asfigerasf')}
`);
