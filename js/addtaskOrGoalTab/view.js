


//updateView();
function updateViewAddTab(){
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
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
    <label for="repeats">gjentagelser</label>
    <input type="number" id="repeats" name="repeats" step="1">
    <label for="unit">Tidsenhet</label>
    <select name="timeUnit" id="units">
    
    </select>
    <label for="fromDate">Fra Dato</label>
    <input id="fromDate" type="date"/>
    <label for="toDate">Frem til Dato</label>
    <input id="toDate" type="date"/>
    </div>
    <div>
    <form action="...">
    <label for="radiogoal">Mål</label>
    <input name="radiogoal" id="radiogoal" type="radio"/>
    <label name="radioactivity" for="radioactivity">Aktivitet</label>
    <input id="radioactivity" type="radio"/>
    </form>
    </div>
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

for(i in timeUnit){
    document.getElementById("units").innerHTML += `<option value=${timeUnit[i]}>${timeUnit[i]}</option>`;
}

}

   

