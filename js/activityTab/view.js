function activityView() {
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
                    <div class="circleplus flex center" onclick="updateViewAddTab()">+</div>
                </div>
                <hr>
                <div id="keySkillAdd" class="">
                    </div>

                </div>
            </div>
        </div>
    `;
    app.innerHTML = html;

    for (i in activity) {
        document.getElementById("keySkills").innerHTML += `<option value=${activity[i]}>${activity[i]}</option>`;
    }
}
