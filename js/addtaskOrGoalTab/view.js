


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
    <button  class="addbtn" id="backtoAct" onclick="activityView()">Avslutt</button>
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


const selector = document.getElementById('selector');
let theme = model.interface.addGoalAct.themeSelector;
let task = model.interface.addGoalAct.activitySelector;
let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addGform">

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
    
    
    
    <!--<button class="addbtn" onclick="repeatView(TGform)">Gjentagende</button>-->
   <h3>Gjentagelser:</h3>
    <div id="repeating">
    <label for="units">tidsenhet</label>
   <select id="units" class="dropdown" name="selectUnit">
   
   </select>
   <label for="unitrep">repitisjoner</label>
   
   <input type="number" id="unitrep" name="unitReps" min="1"/>
    <label for="fromDate">Fra Dato</label>
    <input id="fromDate" type="date" name="fromDate"/>
    <label for="toDate">Frem til Dato</label>
    <input id="toDate" type="date" name="toDate"/>
    </div></div>
    
    <div id="submitG">
    <input type="submit" value="Submit" >
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

const addGForm = document.getElementById("addGform");
addGForm.addEventListener('submit', function(event){
    //forhindrer standard innsendelse av data fra form
    event.preventDefault();

    //bruk formData API til å fange data fra form
    const addFormGData = new FormData(this);

    //konverter form data til et object
    const addFormGObject = Object.fromEntries(addFormGData.entries());
    console.log(addFormGObject);

    //nå kan det brukes i modellen ()?
    process(addFormGObject, addGForm);
    

})
}





// View

function addActView(){
    const selector = document.getElementById('selector');
    
    let theme = model.interface.addGoalAct.themeSelector;
    let task = model.interface.addGoalAct.activitySelector;
    let timeUnit = model.interface.addGoalAct.taskFrequency.repeats.taskFrequencyUnit;
    html = /*html*/ `
    <form action="..." id="addTform">
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
   <h3>én gang:</h3> <input type="checkbox" id="checkonce" value="unchecked" onclick="checkingbox(this)"/>
    <div id="once">
    <input type="date"  name="date"/>
    <input type="time" name="time"/>
    </div>
<br>
<h3>Gjentagende:</h3> <input type="checkbox" id="checkrep" value="unchecked" onclick="checkingbox(this)"/>
   <div id="repeating">
   <label for="units">tidsenhet</label>
   <select id="units" class="dropdown" name="selectUnit">
   </select>
   <label for="unitrep">repetisjoner</label>
   
   <input type="number" id="unitrep" name="unitReps" min="1"/>
    <label for="fromDate">Fra Dato</label>
    <input id="fromDate" type="date" name="fromDate"/>
    <label for="toDate">Frem til Dato</label>
    <input id="toDate" type="date" name="toDate"/>
    </div></div>
    
    <!--<div id="timeframe"><div>-->
    <div id="submitA">
    
    <input type="submit" value="Submit" >
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

   const addTForm = document.getElementById("addTform");
 addTForm.addEventListener('submit', function(event){
    //forhindrer standard innsendelse av data fra form
    event.preventDefault();

    //bruk formData API til å fange data fra form
    const addFormTData = new FormData(this);

    //konverter form data til et object
    const addFormTObject = Object.fromEntries(addFormTData.entries());
    console.log(addFormTObject);
    

    //nå kan det brukes i modellen ()?
    process(addFormTObject, addTForm);


})
 

   
}








