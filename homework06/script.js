const students = [{
	name: "Tanya",
	course: 3,
	subjects: {
		math: [4, 4, 3, 4],
		algorithms: [3, 3, 3, 4, 4, 4],
		data_science: [5, 5, 3, 4]
	}
}, {
	name: "Victor",
	course: 4,
	subjects: {
		physics: [5, 5, 5, 3],
		economics: [2, 3, 3, 3, 3, 5],
		geometry: [5, 5, 2, 3, 5]
	}
}, {
	name: "Anton",
	course: 2,
	subjects: {
		statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
		english: [5, 3],
		cosmology: [5, 5, 5, 5]
	}
}];


// Function 1
function getSubjects(students) {
	const subjectsReturn = Object.keys(students.subjects);
	const formattedSubjects = subjectsReturn.map(subject => {
		return subject.charAt(0).toUpperCase() + subject.slice(1).replace("_", " ");
	});

	return formattedSubjects;
}
console.log(getSubjects(students[0]))


// Function 2
function getAverageMark(students) {
	const sumValue = Object.values(students.subjects)
	const allMarks = [].concat(...sumValue);
	const averageMarks = allMarks.reduce((a, b) => {
		return a + b
	}) / allMarks.length
	const roundedMark = Math.round(averageMarks * 100) / 100
	return roundedMark
}
console.log(getAverageMark(students[0]))


// Function 3
function getStudentInfo(students) {
	const { name, course } = students;
	const averageMark = getAverageMark(students)
	return { course, name, averageMark }
}
console.log(getStudentInfo(students[0]))


// Function 4
function getStudentsNames(students) {
	const names = students.map((student) => {
		return student.name
	});
	return names.sort();
}
console.log(getStudentsNames(students))


// Function 5
function getBestStudent(students) {
	let bestStudent = '';
	let highestAverageMark = 0;
	for (const student of students) {
		const averageMark = getAverageMark(student);
		if (averageMark > highestAverageMark) {
			highestAverageMark = averageMark;
			bestStudent = student.name;
		}
	}
	return bestStudent;
}
console.log(getBestStudent(students))


// Function 6
function calculateWordLetters(word) {
	const letters = {};
	for (const letter of word) {
		if (letters[letter]) {
			letters[letter]++;
		} else {
			letters[letter] = 1;
		}
	}
	return letters;
}
console.log(calculateWordLetters('sefsefsfafasfaefv'))