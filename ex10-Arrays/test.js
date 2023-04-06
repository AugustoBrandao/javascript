const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = (listStudent, listGrade) => {
  const average = listStudent.map((item, index) => {
    return { name: item, average: listGrade[index].reduce((acc, curr) => {
      acc += curr / listGrade[index].length;
      return acc;
    }, 0).toFixed(2) };
  })

  return average;
};

console.log(studentAverage(students, grades));