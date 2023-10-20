var nameObject = [
    {name: '',
    id: '',
    index: '',
},];
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
   <button class="addbtnlog" onclick="logProcessAct()">lagre logg</button>
    </div>

    <div id="logview">
    
    
    </div>
    
</div>
</div>
    `;
}

function logActView() {
    html = /*html*/`
<div class="AlogContainer">
    
<form action="..." id="logTform">
<div id="logPlan"><h3 class="logh3">planlagte aktiviteter</h3><div class="styled-scrollbars" id="logPlanIn"></div></div>
<div id="submitA">
    <input type="submit" value="Submit planlagt"/>
    </div>
    </form>

<form action="..." id="logTSform">
<div id="logSpontan"><h3 class="logh3">spontane aktiviteter</h3> <div class="styled-scrollbars" id="logSpontanIn"></div></div>
<div id="submitAS">
    <input type="submit" value="Submit spontan"/>
    </div>
    </form>
    </div>
    `;
    logview.innerHTML = html;

    let myOnceTasks = model.data.plannedActList?.once;
    let myRepeatTasks = model.data.plannedActList?.repeat;
    let myStandardTasks = model.data.standardTasks;
    let standardTaskArray = [];
    let onceArrayTheme = [];
    let onceArrayName = [];
    let repeatArrayName = [];
    //disse for løkkene printer ut informasjon om aktiviteter fra model.data
    console.log(myOnceTasks?.length)
    for (let i = 0; i < myOnceTasks?.length; i++) {
        if (myOnceTasks[i + 1]?.name) {
            onceArrayName.push(myOnceTasks[i + 1].name);
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption">
            <div ><p>${myOnceTasks[i + 1].name}</p></div><input id=${myOnceTasks[i+1].taskId} name='{"name":"${myOnceTasks[i + 1].name}", "id":"${myOnceTasks[i + 1].taskId}", "index":${i +1}}' class="logCheck"  type="checkbox"/>
           
            </div>`;
        }
    }
    for (let i = 0; i < myRepeatTasks?.length; i++) {
        if (myRepeatTasks[i + 1]?.name) {
            repeatArrayName.push(myRepeatTasks[i + 1].name);
            let passport = myRepeatTasks[i + 1].taskId;
            document.getElementById('logPlanIn').innerHTML += `<div class="flex  border logOption" onclick="toggleHideInfo(${i + 1})">
            <div><p>${myRepeatTasks[i + 1].name} ↑ ↓</p><p id=${passport} class="hideLogInfo">${myRepeatTasks[i + 1].frequency.unit}  gjentagelser: ${myRepeatTasks[i + 1].frequency.repeatsPr} <br> aktiv fra ${myRepeatTasks[i + 1].frequency.from} til ${myRepeatTasks[i + 1].frequency.to} </p></div><input  name='{"name":"${myRepeatTasks[i +1].name}", "id":"${myRepeatTasks[i+1].taskId}", "index": ${i+1}}' class="logCheck" type="checkbox"/>
            
            </div>`;
           
        }
    }
    for (let i = 0; i < myStandardTasks?.length; i++) {
        if (myStandardTasks[i]?.name) {
            standardTaskArray.push(myStandardTasks[i].name);
            document.getElementById('logSpontanIn').innerHTML += `<div class="flex border logOption">
            <div><p>${myStandardTasks[i].name}</p></div><input name='${myStandardTasks[i].name}' index:${i+1}} class="logCheck" type="checkbox"/>
            
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
        processActLog(logFormTSObject, logTSForm);


    })
}
