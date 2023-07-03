const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
	return this.tax * salary
}

console.log(getMyTaxes.call(ukraine, 2000))
console.log(getMyTaxes.call(latvia, 2000))
console.log(getMyTaxes.call(litva, 2000))

function getMiddleTaxes() {
	return this.tax * this.middleSalary
}

console.log(getMiddleTaxes.call(ukraine))
console.log(getMiddleTaxes.call(latvia))
console.log(getMiddleTaxes.call(litva))

function getTotalTaxes() {
	return this.tax * this.middleSalary * this.vacancies
}

console.log(getTotalTaxes.call(ukraine))
console.log(getTotalTaxes.call(latvia))
console.log(getTotalTaxes.call(litva))

function getMySalary() {
	setInterval(() => {
		const salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
		const taxes = this.tax * salary;
		const profit = salary - taxes;

		console.log({ salary, taxes, profit });
	}, 10000);
}

getMySalary.call(ukraine)
getMySalary.call(latvia)
getMySalary.call(litva)