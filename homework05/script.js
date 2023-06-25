// Function 1

function getRandomArray(length, min, max) {
	const array = [];
	if (min < max) {
		for (let i = 0; i < length; i++) {
			let random = Math.floor(Math.random() * (max - min + 1) + min);
			array.push(random);
		}
	} else if (min >= max) {
		alert("Не корректні числа");
	}
	return array;
};
console.log(getRandomArray(3, 10, 100))

// Function 2
function getModa(...numbers) {
	const integerNumber = numbers.filter((item) => {
		return Number.isInteger(item)
	}).reduce((count, number) => {
		count[number] = (count[number] || 0) + 1;
		return count;
	}, {});

	let moda;
	let maxOccurrences = 0;
	for (const num in integerNumber) {
		if (integerNumber[num] > maxOccurrences) {
			moda = Number(num);
			maxOccurrences = integerNumber[num];
		}
	}
	return moda;
}
const result = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result);

// Function 3
function getAverage(...numbers) {
	const integerNumber = numbers.filter((item) => {
		return Number.isInteger(item)
	}).reduce((a, b) => {
		return a + b;
	}) / numbers.length;
	return integerNumber;
};

const result1 = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result1);

// Function 4
function getMedian(...numbers) {
	const integerNumber = numbers.filter((item) => {
		return Number.isInteger(item)
	}).sort((a, b) => {
		return a - b
	});

	const median = Math.floor(integerNumber.length / 2);

	return integerNumber.length % 2 !== 0 ? integerNumber[median] : (integerNumber[median - 1] + integerNumber[median]) / 2;
}
const result2 = getMedian(1, 2, 4, 5);
console.log(result2);

// Function 5
function filterEvenNumbers(...numbers) {
	const filterNum = numbers.filter((item) => {
		return item % 2 !== 0
	});
	return filterNum
}
const result3 = filterEvenNumbers(1, 2, 3, 4, 5);
console.log(result3);

// Function 6
function filterPositiveNumbers(...numbers) {
	const filterNum = numbers.filter((item) => {
		return item > 0
	}).length;
	return filterNum
}
const result4 = filterPositiveNumbers(1, 2, 3, 4, -5, -4, -10, 20);
console.log(result4);

// Function 7
function getDividedByFive(...numbers) {
	const filterNum = numbers.filter((item) => {
		return item % 5 === 0
	});
	return filterNum
}
const result5 = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(result5);

// Function 8
function replaceBadWords(string) {
	const str = string.split(' ');

	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].includes('fuck') ? str[i] = str[i].replace('fuck', '****') : str[i].includes('shit') ? str[i] = str[i].replace('shit', '****') : str[i]
	}

	return str.join(' ')
}
const result6 = replaceBadWords("Are you fucking kidding?");
console.log(result6);

// Function 9
function divideByThree(word) {
	const deletGap = word.replace(/\s/g, "")
	let newWord = [];
	let i = 0;
	while (i < deletGap.length) {
		if (deletGap.length > 3) {
			newWord.push(deletGap.substring(i, i + 3).toLowerCase())
			i += 3
		} else {
			return word
		}
	}
	return newWord
}
const result7 = divideByThree("f4t4s et4 Fc");
console.log(result7);

// Function 10
function generateCombinations(word) {
	if (word.length === 1) {
		return [word];
	}
	const combinations = generateCombinations(word.slice(1));
	const result = [];
	for (let i = 0; i < combinations.length; i++) {
		const combination = combinations[i];
		for (let j = 0; j <= combination.length; j++) {
			const newCombination = combination.slice(0, j) + word[0] + combination.slice(j);
			result.push(newCombination);
		}
	}
	return result;
}
const combinations = generateCombinations("ntyj");
console.log(combinations);