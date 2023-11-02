
let selectedNK = 'all';
let myOnceTasks = model.data.plannedActList.once;
let myRepeatTasks = model.data.plannedActList.repeat;

function chooseNK(ddmNK) {
    selectedNK = ddmNK.value;
    loadActivity();
}

function loadActivity() {
    let onceList = '';
    let repeatList = '';

    for (let i = 0; i < myOnceTasks.length; i++) {
        if (myOnceTasks[i].name && (selectedNK == myOnceTasks[i].theme || selectedNK == 'all')) {

            console.log('start1', i);
            console.log(myOnceTasks[i].name)
            onceList += `
            <div class="flex activitiesTheme border">
                <div><p>${myOnceTasks[i].name}</p></div>
                <div class="activityprog"></div>
            </div>`;
        }
    }
    for (let y = 0; y < myRepeatTasks.length; y++) {
        if (myRepeatTasks[y].name && (selectedNK == myRepeatTasks[y].theme || selectedNK == 'all')) {
            let progValue = (myRepeatTasks[y].reps.repsDone / myRepeatTasks[y].reps.totalReps) * 100;

            repeatList += `
            <div class="flex activitiesTheme border">
                <div><p>${myRepeatTasks[y].name}</p></div>
                <div class="activityprog"><progress class="prog border" id="" value="${progValue}" max="100"></progress></div>
            </div>`;
        }
    }

    document.getElementById('keySkillAdd').innerHTML = `${onceList}  ${repeatList}  `;

}


//reps: {totalReps: '',repsDone: 0,repsLeft: '', },
//totalreps == 100%
//repsDone == value
// repsDone/totalreps = x*100