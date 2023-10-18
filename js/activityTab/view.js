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
    <select name="nøkkelkompetanser" id="keySkills" onchange='chooseNK(this)'>
    </select>
    </form>
    <div class="circleplus flex center" onclick="updateViewAddTab()">+</div>
    </div>
    <hr>
    <div id="keySkillAdd">
    ${loadActivity() || ''} 
    </div>
    </div>
    </div>
    `;
    app.innerHTML = html;
    
    for (i in activity) {
        document.getElementById("keySkills").innerHTML += `<option value=${activity[i]}>${activity[i]}</option>`;
    }
    
    //setTimeout(function (){loadActivity("<option value='all'>Alle</option>")}, 1000);
}

/*      <form action="...">
            <label for="Velg tidsrom">Tidsrom:</label>
            <select name="mål" id="DDMgoals" onchange='selectTimeframe(this)'>
            <option value='all'>Alle</option>
            <option value='year'>Siste året</option>
            <option value='halfYear'>Siste 6 mnd</option>
            <option value='quarterYear'>Siste 3 mnd</option>
            <option value='month'>Siste mnd</option>
            </select>
        </form> */