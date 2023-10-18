function activityView() {
    loadLocalStorage();
   const mytimeOut = setTimeout("loadActivity", 1000);
    let activity = model.interface.activity.selectedNK;
    let app = document.getElementById("dashcontent");
    let html = /*HTML*/` 
        <div class="wrapper transform border activitywrapper">
            <img src="img/activities.png" id="activitiesimg">
            <div class="inneractivitywrapper">
                <div class="activitynavbar flex">
                    <form action="...">
                        <label for="nøkkelkompetanser">Nøkkelkompetanser:</label>
                        <select name="nøkkelkompetanser" id="keySkills">
    
                           </select>
                    </form>
                    <div class="circleplus flex center" onclick="updateViewAddTab(); ">+</div>
                </div>
                <hr>
                <div onload="" id="keySkillAdd" class="">
                    </div>

                </div>
            </div>
        </div>
    `;
    app.innerHTML = html;

    for (i in activity) {
        document.getElementById("keySkills").innerHTML += `<option value=${activity[i]}>${activity[i]}</option>`;
    }

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

