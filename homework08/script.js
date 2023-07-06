class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this._marks = [5, 4, 4, 5];
		this._dismiss = false;
	}
	getInfo() {
		return `Студент ${this.course}го курсу ${this.university} ${this.fullName}`
	}
	get marks() {
		return this._dismiss ? null : this._marks;
	}
	set marks(val) {
		if (!this._dismiss) {
			return this._marks.push(val)
		}
	}
	getAverageMark() {
		return this._marks.reduce((a, b) => { return a + b }) / this._marks.length
	}
	dismiss() {
		this._dismiss = true;
	}
	recover() {
		this._dismiss = false;
	}
}

const std = new Student("Вищої Школи Психотерапії м.Одеса", "1", "Остап Родоманський Бендер")

std.marks = 1
console.log(std.marks)
console.log(std.getAverageMark())


class BudgetStudent extends Student {
	constructor(university, course, fullName) {
		super(university, course, fullName)
		this.scholarshipInterval = setInterval(() => this.getScholarship(), 30000);
	}

	getScholarship() {
		if (this._dismiss) {
			console.log("Ви не отримуєте стипендію, оскільки вас виключено.");
			return;
		}

		const averageMark = super.getAverageMark();
		if (averageMark >= 4) {
			console.log("Ви отримали 1400 грн. стипендії");
		} else {
			console.log("Ви не отримуєте стипендію, оскільки ваш середній бал нижче 4.0");
		}
	}

	dismiss() {
		super.dismiss();
		clearInterval(this.scholarshipInterval);
	}

	recover() {
		super.recover();
		this.scholarshipInterval = setInterval(() => this.getScholarship(), 30000);
	}
}

const budgetStd = new BudgetStudent()

budgetStd.marks = 1
console.log(budgetStd.getAverageMark())
budgetStd.getScholarship()
