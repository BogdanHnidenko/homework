
let numN = Number(prompt('Введіть число N:'));
while ((Number.isInteger(numN) === false) || (numN <= 0)) {
	alert('Введіть ціле число N більше 0');
	numN = Number(prompt('Введіть число N:'));
};


let numM = Number(prompt('Введіть число M:'));
while ((Number.isInteger(numM) === false) || (numN >= numM)) {
	alert('Введіть ціле число M більше числа N');
	numM = Number(prompt('Введіть число M:'));
};

let evenSkip = confirm('Пропускати парні числа?');
let sumNum = 0;

for (let evenNum = numN; evenNum <= numM; evenNum++) {
	if (evenSkip && evenNum % 2 === 0) {
		continue;
	}
	sumNum += evenNum;
};
console.log("Сума чисел: " + sumNum);