


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
    <input type="submit" value="Submit">
</form>

    <div></div>
    <div></div>
    <div></div>
    `;
    app.innerHTML = html;
for(i in theme){
    document.getElementById("keyThemes").innerHTML += `<option value=${theme[i]}>${theme[i]}</option>`;
}
for(i in task){
    document.getElementById("tasks").innerHTML += `<option value=${task[i]}>${task[i]}</option>`;
}

}

   

