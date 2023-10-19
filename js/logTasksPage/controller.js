function processActLog(workObject, form){
console.log(workObject);
console.log(form);
}


function toggleHideInfo(ele){
console.log(model.data.plannedActList.repeat[ele].taskId);
document.getElementById(model.data.plannedActList.repeat[ele].taskId).classList.toggle("hideLogInfo");
}

model.data.plannedActList.repeat[i].frequency.totalReps