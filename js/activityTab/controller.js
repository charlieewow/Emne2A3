let myOnceTasks = model.data.plannedActList?.once;
let myRepeatTasks = model.data.plannedActList?.repeat;

let selectedNK = 'all';

function chooseNK(ddmNK){
    selectedNK = ddmNK.value;
    loadActivity();
}

function loadActivity() {
let onceList = '';
let repeatList = '';

    //console.log(myOnceTasks?.length)

    //document.getElementById('keySkillAdd').innerHTML = '';

    for (let i = 1; i < myOnceTasks.length; i++) {
        if (myOnceTasks[i].name && (selectedNK == myOnceTasks[i].theme || selectedNK == 'all')) {
            onceList += `<div class="flex activitiesTheme border">
            <div><p>${myOnceTasks[i]?.name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;
            console.log(1);
        }

        //console.log(1); finn ut hvordan å få "all" til å fungere
    }
    for (let i = 1; i < myRepeatTasks.length; i++) {
        if (myRepeatTasks[i].name && (selectedNK == myRepeatTasks[i].theme || selectedNK == 'all')) {
            repeatList += `<div class="flex activitiesTheme border">
            <div><p>${myRepeatTasks[i]?.name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;
            console.log(2);
        }
    }

   document.getElementById('keySkillAdd').innerHTML = onceList + repeatList;
}
