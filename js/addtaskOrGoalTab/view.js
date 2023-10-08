


//updateView();
function updateViewAddTab(){
    const selector = document.getElementById('selector');
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <div class="back border">
    <img class="decor" id="loginimg" src="img/loginimage.png">
    <div class="container">
    <div class="innercontainer">
    <button class="addbtn" id="addAct" onclick="addActView()">Ny Aktivitet</button>
    <button  class="addbtn" id="addGoal" onclick="addGoalView()">Nytt Mål</button>
    </div>

    <div id="selector">
    
    
    </div>
    
</div>
</div>
   
    `;
    app.innerHTML = html;


}





// View

function addGoalView(){
const TGForm = document.getElementById("addTGform"); 
const selector = document.getElementById('selector');
let theme = model.interface.addGoalAct.themeSelector;
let task = model.interface.addGoalAct.activitySelector;
let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addTGform">

    <div id="goalDes">
    <label for="freeDesc">Beskriv målet ditt</label>
    <br>
    <input id="freeDesc" type="text" name="description"/>
    </div>

    
    <div id="selectorG">
    <label for="keyThemes">NK tema:</label>
    <select  class="dropdown" name="NKTemaer" id="keyThemes">
        
    </select>
    
    <label for="selectTask">Aktivitet</label>
    <select class="dropdown" name="NKActivity" id="selectTask">

    </select>
    </div>
    <br><br>
    <!--<button class="addbtn" onclick="onceView(TGForm)">én gang</button>-->
    <div class="timingG">
    <h3>én gang:</h3>
    <div id="once">
    <input type="date"  name="date"/>
    <input type="time" name="time"/>
    </div>
    <br>
    <!--<button class="addbtn" onclick="repeatView(TGform)">Gjentagende</button>-->
   <h3>Gjentagende:</h3>
    <div id="repeating">
    <label for="units">tidsenhet</label>
   <select id="units"></select>
    <label for="fromDate">Fra Dato</label>
    <input id="fromDate" type="date" name="fromDate"/>
    <label for="toDate">Frem til Dato</label>
    <input id="toDate" type="date" name="toDate"/>
    </div></div>
    
    <div id="submitG">
    <input type="submit" value="Submit">
    <div>
</form>
    `;
    selector.innerHTML = html;
    for(i in theme){
        document.getElementById("keyThemes").innerHTML += `<option value=${theme[i]}>${theme[i]}</option>`;
    }
    for(i in task){
        document.getElementById("selectTask").innerHTML += `<option value=${task[i]}>${task[i]}</option>`;
    }
    
    for(i in timeUnit){
        document.getElementById("units").innerHTML += `<option value=${timeUnit[i]}>${timeUnit[i]}</option>`;
    }
}





// View

function addActView(){
    const selector = document.getElementById('selector');
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addTGform">
    <div id="selectorA">
    <label for="keyThemes">NK tema:</label>
    <select class="dropdown" name="NKTemaer" id="keyThemes">
        
    </select>
    <br><br>
    <label for="selectTask">Aktivitet</label>
    <select class="dropdown" name="NKActivity" id="selectTask">
        
    </select>
    </div>

    <br><br>
   <div class="timingA">
   <h3>én gang:</h3>
    <div id="once">
    <input type="date"  name="date"/>
    <input type="time" name="time"/>
    </div>
<br>
<h3>Gjentagende:</h3>
   <div id="repeating">
   <label for="units">tidsenhet</label>
   <select id="units"></select>
    <label for="fromDate">Fra Dato</label>
    <input id="fromDate" type="date" name="fromDate"/>
    <label for="toDate">Frem til Dato</label>
    <input id="toDate" type="date" name="toDate"/>
    </div></div>
    
    <!--<div id="timeframe"><div>-->
    <div id="submitA">
    
    <input type="submit" value="Submit">
    <div>
</form>
    `;
    selector.innerHTML = html;
    for(i in theme){
        document.getElementById("keyThemes").innerHTML += `<option value=${theme[i]}>${theme[i]}</option>`;
    }
    for(i in task){
        document.getElementById("selectTask").innerHTML += `<option value=${task[i]}>${task[i]}</option>`;
    }
    
    for(i in timeUnit){
        document.getElementById("units").innerHTML += `<option value=${timeUnit[i]}>${timeUnit[i]}</option>`;
    }
}





// View

function onceView(){
    
    let once=document.getElementById("onetime");
    once.className = "unhideMe";
}
function repeatView(){

    let repeat = document.getElementById("repeating");
    repeat.className = "unhideMe";
}



