const fs = require("fs");

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, "UTF-8")
		const lines = data.trim().split("\n");
		const students = lines.slice(1).filter((line) => line !== "")
		
		if (students.length === 0) {
			console.log("No students found in the database.")
			return
		}

		console.log(`Number of students: ${students.length}`)

		const fields = {};

		students.forEach((student) => {
			const studentData = student.split(",")
			const firstName = studentData[0]
			const field = studentData[3]

			if (!fields[field]) {
				fields[field] = []
			}

			fields[field].push(firstName);
		});

		 // Log number of students in each field
        	for (const field in fields) {
            		const studentNames = fields[field];
            		console.log(`Number of students in ${field}: ${studentNames.length}. List: ${studentNames.join(', ')}`);
		}
	}
	catch (error) {
		throw new Error("Cannot load the database")
	}
}

module.exports = countStudents
