const dateToFind = '02/01/2023';  // replace with the date you're looking for
let diaryData = model.data.diaryLogData;
const index = diaryData.findIndex(entry => entry.date === dateToFind);
console.log(diaryData[index].diary);