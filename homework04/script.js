const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// ===============================================
function getPairs(students) {
	let pairs = [];
	const boys = ["Олександр", "Ігор", "Олексій"];
	const girls = ["Олена", "Іра", "Світлана"];
	if (students.length % 2 !== 0) {
		alert('Не вистачає людей для створення робочих пар')
	};
	for (let i = 0; i < students.length / 2; i++) {
		let pair = [boys[i], girls[i]];
		pairs.push(pair);
	};
	return pairs;
}
const pairs = getPairs(students);
console.log(pairs);

// ===================================================
function getThemes(pairs, themes) {
	let practiseWork = [];
	if (pairs.length !== themes.length) {
		alert('Не вистачає тем роботи')
	};
	for (let i = 0; i < pairs.length; i++) {
		let pair = pairs[i];
		let textPair = pair.join(" і ");
		let practise = [textPair, themes[i]];
		practiseWork.push(practise);
	};
	return practiseWork;
}
const practiseWork = getThemes(pairs, themes);
console.log(practiseWork);

// =====================================================
function opinionStudent(students, marks) {
	let opinion = [];
	for (let i = 0; i < students.length; i++) {
		let mark = [students[i], marks[i]];
		opinion.push(mark);
	}
	return opinion;
}
const opinion = opinionStudent(students, marks);
console.log(opinion);

// ==========================================================
function pairsMarks(pairs) {
	let pairsOpinion = [];
	for (let i = 0; i < pairs.length; i++) {
		let pair = pairs[i];
		let textPair = pair.join(" і ");
		let randomOpinion = Math.floor(Math.random() * 5 + 1);
		let practiseMark = [textPair, randomOpinion];
		pairsOpinion.push(practiseMark);
	};
	return pairsOpinion;
}
const randomMark = pairsMarks(pairs);
console.log(randomMark);