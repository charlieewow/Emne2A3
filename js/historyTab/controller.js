const dateToFind = '02/01/2023';  // replace with the date you're looking for
let diary = '';
const index = modelTest.diaryLogData.findIndex(entry => entry.date === dateToFind);
console.log(modelTest.diaryLogData[index].diary);