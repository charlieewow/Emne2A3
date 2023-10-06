


//updateView();
function updateViewAddTab(){
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    html = /*html*/ `
    <form action="...">
    <label for="selectTheme">NK tema:</label>
    <select name="NKTemaer" id="keyThemes">
        
    </select>
    <br><br>
    <label for="selectTask">Aktivitet</label>
    <select name="NKActivity" id="tasks">
        
    </select>
    <br><br>
    <div id="once">
    <input type="date" />
    <input type="time" />
    </div>
    <div id="repeating">
    <label for="points">Points:</label>
  <input type="number" id="points" name="points" step="3">
    </div>
    <div></div>
    <input type="submit" value="Submit">
</form>

   
    `;
    app.innerHTML = html;
for(i in theme){
    document.getElementById("keyThemes").innerHTML += `<option value=${theme[i]}>${theme[i]}</option>`;
}
for(i in task){
    document.getElementById("tasks").innerHTML += `<option value=${task[i]}>${task[i]}</option>`;
}

}

   

