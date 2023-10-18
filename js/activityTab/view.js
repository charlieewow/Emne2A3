function activityView() {
    let activity = model.interface.activity.selectedNK;
    let app = document.getElementById("app");
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
                    <div ></div>
                    <div class="circleplus flex center" onclick="updateViewAddTab()">+</div>
                </div>
                <hr>
                <div id="keySkillAdd" class="">
                    <div class="flex activitiesTheme border">
                        <div ><p>Trygghet</p></div>
                        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
                    </div>
                    <div class="flex activitiesTheme border">
                        <div><p>Trygghet</p></div>
                        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
                    </div>
                    <div class="flex activitiesTheme border">
                        <div><p>Trygghet</p></div>
                        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
                    </div>
                    <div class="flex activitiesTheme border">
                        <div><p>Trygghet</p></div>
                        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
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
//updateView();