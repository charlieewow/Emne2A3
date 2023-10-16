function loadActivity(){
let myOnceTasks = model.data.plannedActList.once;
let myRepeatTasks = model.data.plannedActList.repeat;
let onceArrayTheme = [];
let onceArrayName = [];
console.log(myOnceTasks.length)
for(task in myOnceTasks){
    console.log(task);
}
for(let i =0; i<=myOnceTasks.length; i++){
onceArray.push(myOnceTasks[i].theme);
console.log(onceArray);
}    
}



