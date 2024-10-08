const fs = require('fs');

function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');

      const students = lines.slice(1).map((line) => line.split(','));

      const fields = {};
      let totalStudents = 0;

      students.forEach((student) => {
        if (student.length > 0) {
          totalStudents += 1;
          const field = student[3];

          if (!fields[field]) {
            fields[field] = [];
          }

          fields[field].push(student[0]);
        }
      });

      console.log(`Number of students: ${totalStudents}`);

      Object.keys(fields).forEach((field) => {
        const count = fields[field].length;
        const names = fields[field].join(', ');
        console.log(`Number of students in ${field}: ${count}. List: ${names}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
