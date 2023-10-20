function processActLog(workObject, form){
let yaya = Object.keys(workObject);
console.log(yaya);
console.log(yaya[0])
console.log(form);
let newObj = [];
for(ya in yaya){
    let newstring = yaya[ya];
    newObj = JSON.parse(newstring);
    console.log(newObj);
}
//newObj = yaya[0];
//console.log(newObj[0])
//let newnew = JSON.parse(newObj);

//console.log(newnew);
//if(workObject.id)
}


function toggleHideInfo(ele){
console.log(model.data.plannedActList.repeat[ele].taskId);
document.getElementById(model.data.plannedActList.repeat[ele].taskId).classList.toggle("hideLogInfo");
}

//model.data.plannedActList.repeat[i].frequency.totalReps

function logProcessAct(){

}

function sendName(obj){
    console.log(obj);
}