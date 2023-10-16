/*
function loadActivity() {
    
    let myOnceTasks = model.data.plannedActList.once;
    let myRepeatTasks = model.data.plannedActList.repeat;
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];

    console.log(myOnceTasks.length)
    for (let i = 0; i < myOnceTasks.length-1; i++) {
        onceArrayName.push(myOnceTasks[i].name);

        document.getElementById('keySkillAdd').innerHTML += `<div>${onceArrayName[i]}</div>`;

    }
   
}

function loadActivity2(){
let myRepeatTasks = model.data.plannedActList.repeat;
let repeatArrayName = [];
for (let i = 0; i < myRepeatTasks.length-1; i++) {
        console.log("bla");
        repeatArrayName.push(myRepeatTasks[i].name);
        document.getElementById('keySkillAdd2').innerHTML += `<div>${repeatArrayName[i]}</div>`;
    }
}
*/

function loadActivity() {
    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];
    console.log(myOnceTasks?.length)
    for (let i = 0; i < myOnceTasks?.length; i++) {
        if (myOnceTasks[i + 1]?.name) {
            onceArrayName.push(myOnceTasks[i + 1].name);
            document.getElementById('keySkillAdd').innerHTML += `<div>${onceArrayName[i]}</div>`;
        }
    }
    for (let i = 0; i < myRepeatTasks?.length; i++) {
        if (myRepeatTasks[i + 1]?.name) {
            repeatArrayName.push(myRepeatTasks[i + 1].name);
            document.getElementById('keySkillAdd').innerHTML += `<div>${repeatArrayName[i]}</div>`;
        }
    }
}


