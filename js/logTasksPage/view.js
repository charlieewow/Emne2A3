
function updateViewTaskPage() {
    let logview = document.getElementById("logview");
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    
    <div class="logBack">
    <!--<img class="decor" id="loginimg" src="img/loginimage.png">-->
    <div class="logContainer">
    <div class="logInnercontainer">
   <button  class="addbtnlog" id="backtoAct" onclick="dashView()">Avslutt</button>
    <!--<button  class="addbtnlog" id="addGoal" onclick="logDiaryView(); loadLocalStorage()">Logg dagbok</button>
   <button class="addbtnlog" onclick="saveLocalStorage()">lagre logg</button>-->
    </div>

    <div id="logview">
    
    
    </div>
    
</div>
</div>
    `;
    logActView();
}

function logActView() {
    let logview = document.getElementById("logview");
    html = /*html*/`
<div class="AlogContainer">
    <div id="posOne">
<form action="..." id="logTform">
<div id="logPlan"><h3 class="logh3">planlagte aktiviteter</h3><div class="styled-scrollbars" id="logPlanIn">    
</div><br></div>
<input id="submitA" class="addbtnlog" type="submit" value="Submit planlagt"/>
    
    </form></div>
<div id="posTwo">
<form action="..." id="logTSform">
<div id="logSpontan"><h3 class="logh3">spontane aktiviteter</h3> <div class="styled-scrollbars" id="logSpontanIn"></div><input id="submitAS" class="addbtnlog" type="submit" value="Submit spontan"/>    
</div>

    
    </form></div>
    </div>
    `;
    if (logview != null) {
        logview.innerHTML = html;
    }




    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
    let myStandardTasks = model.data.standardTasks;
    let standardTaskArray = [];
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];
    //disse for løkkene printer ut informasjon om aktiviteter fra model.data
    //console.log(myOnceTasks?.length)
    for (let i = 0; i < myOnceTasks?.length; i++) {
        let histArray = model.data.activityHistory.planned;
        let taskId = myOnceTasks[i + 1]?.taskId; // replace this with your taskId
        let histindex = histArray.findIndex(obj => obj.oldId === taskId);
        console.log(histindex);
        console.log(histArray[histindex]);
        if (myOnceTasks[i + 1]?.name && !histArray[histindex]) {

            onceArrayName.push(myOnceTasks[i + 1].name);
            console.log(myOnceTasks[i + 1].taskId);
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption">
            <div ><p>${myOnceTasks[i + 1].name}</p></div><input id=${myOnceTasks[i + 1].taskId} name='{"name":"${myOnceTasks[i + 1].name}", "id":"${myOnceTasks[i + 1].taskId}", "index":${i + 1}, "type":"once"}' class="logCheck"  type="checkbox"/>
           
            </div>`;
        }
    }
    for (let i = 0; i < myRepeatTasks?.length; i++) {
        if (myRepeatTasks[i + 1]?.name && myRepeatTasks[i + 1].reps.repsDone < myRepeatTasks[i + 1].reps.totalReps) {
            console.log(myRepeatTasks[i + 1].reps);
            repeatArrayName.push(myRepeatTasks[i + 1].name);
            let passport = myRepeatTasks[i + 1].taskId;
            console.log(myRepeatTasks[i + 1].taskId);
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption" onclick="toggleHideInfo(${i + 1})">
            <div><p>${myRepeatTasks[i + 1].name} ↑ ↓</p><p id=${passport} class="hideLogInfo">${myRepeatTasks[i + 1].frequency.unit}  gjentagelser: ${myRepeatTasks[i + 1].frequency.repeatsPr} <br> aktiv fra ${myRepeatTasks[i + 1].frequency.from} til ${myRepeatTasks[i + 1].frequency.to} <br> gjort ${myRepeatTasks[i + 1].reps.repsDone} av ${myRepeatTasks[i + 1].reps.totalReps}</p></div><input  name='{"name":"${myRepeatTasks[i + 1].name}", "theme":"${myRepeatTasks[i + 1].theme}", "id":"${myRepeatTasks[i + 1].taskId}", "index": ${i + 1}, "type":"repeat"}' class="logCheck" type="checkbox"/>
            
            </div>`;

        }
    }
    if (myStandardTasks) {
        for (let i = 0; i < myStandardTasks.length; i++) {
            if (myStandardTasks[i]?.name) {
                let passkey = "id" + i;
                standardTaskArray.push(myStandardTasks[i].name);
                document.getElementById('logSpontanIn').innerHTML += `<div class="flex border logOption">
            <div><p>${myStandardTasks[i].name}</p></div> <label for="${passkey}">tema:</label>
            <select class="dropdown" name='{"name":"NKTemaer"}' onclick="loadoptions(${i})"id=${passkey}>
 </select><input name='{"name":"${myStandardTasks[i].name}", "index":"${i + 1}", "type":"standard"}' class="logCheck" type="checkbox"/>
           
            
            </div>`;

            }
            /*if(i ==  myStandardTasks.length-1){
                console.log("confirm");
                for(let i=0; i<=4; i++){
                    let theme = model.interface.addGoalAct.themeSelector;  
                    let keyRing = "id" + i;
                    for (let T of theme) {
                      document.getElementById(keyRing).innerHTML += `<option value=${theme[T]}>${theme[T]}</option>`;
                  }
                  }  
            }*/
        }
    }





    const logTForm = document.getElementById("logTform");
    logTForm.addEventListener('submit', function (event) {
        //forhindrer standard innsendelse av data fra form
        event.preventDefault();

        //bruk formData API til å fange data fra form
        const logFormTData = new FormData(this);

        //konverter form data til et object
        const logFormTObject = Object.fromEntries(logFormTData.entries());
        console.log(logFormTObject);

        //nå kan det brukes i modellen ()?
        processActLog(logFormTObject, logTForm);


    })
    const logTSForm = document.getElementById("logTSform");
    logTSForm.addEventListener('submit', function (event) {
        //forhindrer standard innsendelse av data fra form
        event.preventDefault();

        //bruk formData API til å fange data fra form
        const logFormTSData = new FormData(this);

        //konverter form data til et object
        const logFormTSObject = Object.fromEntries(logFormTSData.entries());
        console.log(logFormTSObject);

        //nå kan det brukes i modellen ()?
        processActLogTS(logFormTSObject, logTSForm);


    })




    document.getElementById('logSpontanIn').addEventListener("load", function () {
        console.log("loaded");
        for (let i = 0; i <= 4; i++) {
            let theme = model.interface.addGoalAct.themeSelector;
            let keyRing = "id" + i;
            for (let T of theme) {
                let element = document.getElementById(keyRing);
                if (element) {
                    //element.innerHTML += `<option value=${T}>${T}</option>`;
                    document.getElementById(keyRing).innerHTML += `<option value=${theme[T]}>${theme[T]}</option>`;
                }

            }
        }
    })






}

