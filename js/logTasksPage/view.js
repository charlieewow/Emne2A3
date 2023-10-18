

function updateViewTaskPage() {
    let logview = document.getElementById("logview");
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    
    <div class="logBack border">
    <!--<img class="decor" id="loginimg" src="img/loginimage.png">-->
    <div class="logContainer">
    <div class="logInnercontainer">
    <button  class="addbtnlog" id="backtoAct" onclick="dashView()">Avslutt</button>
    <button class="addbtnlog" id="addAct" onclick="logActView()">Logg aktivitet</button>
    <!--<button  class="addbtnlog" id="addGoal" onclick="logDiaryView(); loadLocalStorage()">Logg dagbok</button>-->
   <button class="addbtnlog" onclick="logProcess()">lagre logg</button>
    </div>

    <div id="logview">
    
    
    </div>
    
</div>
</div>
    `;
}

function logActView() {
    html = /*html*/`
    
<form action="..." id="logTform">
<div class="AlogContainer">
<div id="logPlan"><h3 class="logh3">planlagte aktiviteter</h3><div id="logPlanIn"></div></div>
<div id="logSpontan"><h3 class="logh3">spontane aktiviteter</h3> <div id="logSpontanIn"></div></div>
</div>

<div id="submitA">
    <input type="submit" value="Submit"/>
    </div>
    </form>`;
    logview.innerHTML = html;

    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
    let myStandardTasks = model.data.standardTasks;
    let standardTaskArray =[];
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];
    console.log(myOnceTasks?.length)
    for (let i = 0; i < myOnceTasks?.length; i++) {
        if (myOnceTasks[i + 1]?.name) {
            onceArrayName.push(myOnceTasks[i + 1].name);
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption">
            <div ><p>${onceArrayName[i]}</p></div><input class="logCheck"  type="checkbox"/>
           
            </div>`;
        }
    }
    for (let i = 0; i < myRepeatTasks?.length; i++) {
        if (myRepeatTasks[i + 1]?.name) {
            repeatArrayName.push(myRepeatTasks[i + 1].name);
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption">
            <div><p>${repeatArrayName[i]}</p></div><input class="logCheck" type="checkbox"/>
            
            </div>`;
        }
    }
    for (let i = 0; i < myStandardTasks?.length; i++) {
        if (myStandardTasks[i]?.name) {
            standardTaskArray.push(myStandardTasks[i].name);
            document.getElementById('logSpontanIn').innerHTML += `<div class="flex border logOption">
            <div><p>${standardTaskArray[i]}</p></div><input class="logCheck" type="checkbox"/>
            
            </div>`;
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
}
