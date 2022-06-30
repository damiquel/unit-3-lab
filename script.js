const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "test",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "test",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "test",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "test",
    passed: true,
  },
];

const addSubmission = (array, newName, newScore, newDate) => {
  const newObject = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: score >= 60,
  };
  array.push(newObject);
};

//3

const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
deleteSubmissionByIndex(submissions, 0);

console.log(submissions);

//4

const deleteSubmissionByNmae = (array, name) => {
  const index = array.findIndex((element) => {
    return element.name === name;
  });
  array.splice(index, 1);
};
deleteSubmissionByNmae(submissions, "Jane");

console.log(submissions);

//
