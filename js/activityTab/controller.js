
let selectedNK = 'all';

function chooseNK(ddmNK) {
    selectedNK = ddmNK.value;
    loadActivity();
}

function loadActivity() {
    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
   

    let onceList = '';
    let repeatList = '';
    document.getElementById('keySkillAdd').innerHTML = '';
    //console.log(myOnceTasks?.length)



    for (let i = 1; i < myOnceTasks.length; i++) {
         let histArray = model.data.activityHistory.planned;
            let taskId = myOnceTasks[i]?.taskId; // replace this with your taskId
            let histindex = histArray.findIndex(obj => obj.oldId === taskId);
            console.log(histindex);
            console.log(histArray[histindex]);
        if (myOnceTasks[i].name && (selectedNK == myOnceTasks[i].theme || selectedNK == 'all') && !histArray[histindex]) {
           
            console.log('start1', i);
            console.log(myOnceTasks[i].name)
            onceList += `<div class="flex activitiesTheme border">
            <div><p>${myOnceTasks[i].name}</p></div>
            <div class="activityprog"></div>
            </div>`;
            console.log(1);
            console.log(onceList);
        }

        //console.log(1); finn ut hvordan å få "all" til å fungere
    } console.log(myRepeatTasks.length);
    for (let y = 1; y < myRepeatTasks.length; y++) {
        let progValue = (myRepeatTasks[y].reps.repsDone / myRepeatTasks[y].reps.totalReps) * 100;

        if (myRepeatTasks[y].name && (selectedNK == myRepeatTasks[y].theme || selectedNK == 'all') && progValue < 100) {
            console.log(progValue);
            console.log('start2', y);
            console.log(myRepeatTasks[y].name);
            repeatList += `<div class="flex activitiesTheme border">
            <div><p>${myRepeatTasks[y].name}</p><p class="activityprog" for="prog${y}">${myRepeatTasks[y].reps.repsDone} / ${myRepeatTasks[y].reps.totalReps}</p></div>
            <div class="activityprog"><progress class="prog border" id="prog${y}" value="${progValue}" max="100"></progress></div>
            </div>`;
            console.log(2);
            console.log(repeatList);
        }
    }

    document.getElementById('keySkillAdd').innerHTML = `${onceList}  ${repeatList}  `;

}


//reps: {totalReps: '',repsDone: 0,repsLeft: '', },
//totalreps == 100%
//repsDone == value
// repsDone/totalreps = x*100