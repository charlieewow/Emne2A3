function processActLog(workObject, form){

 if(form.id == "logTform"){   
let yaya = Object.keys(workObject);
console.log(yaya);
console.log(yaya[0])
console.log(form);
let newObj = [];
for(ya in yaya){
    let newstring = yaya[ya];
    newObj = JSON.parse(newstring);
    console.log(newObj);

}}
if(form.id == "logTSform"){
    console.log(workObject);
}
//newObj = yaya[0];
//console.log(newObj[0])
//let newnew = JSON.parse(newObj);

//console.log(newnew);
//if(workObject.id)
}

function processActLogTS(workObject, form){
    
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