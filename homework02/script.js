
let numN = Number(prompt('Введіть число N:'));
let numM = Number(prompt('Введіть число M:'));

while ((numN % 1 !== 0 || numM % 1 !== 0) || (numN > numM)) {
	alert('Введіть ціле число, а також зверніть увагу що N повинно бути менше M');
	numN = Number(prompt('Введіть число N:'));
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