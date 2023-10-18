//loadActivity();
/*function loadActivity() {
    loadLocalStorage();
    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];
    console.log(myOnceTasks?.length)
    for (let i = 0; i < myOnceTasks?.length; i++) {
        if (myOnceTasks[i + 1]?.name) {
            onceArrayName.push(myOnceTasks[i + 1].name);
            document.getElementById('keySkillAdd').innerHTML += `<div class="flex activitiesTheme border">
            <div ><p>${onceArrayName[i]}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;
        }
    }
    for (let i = 0; i < myRepeatTasks?.length; i++) {
        if (myRepeatTasks[i + 1]?.name) {
            repeatArrayName.push(myRepeatTasks[i + 1].name);
            document.getElementById('keySkillAdd').innerHTML += `<div class="flex activitiesTheme border">
            <div><p>${repeatArrayName[i]}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;
        }
    }
}
*/

