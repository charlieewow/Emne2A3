

function updateViewTaskPage(){
    html = /*html*/ `
    <button onclick="updateViewDash()">Tilbake til Dash</button>
    <div class="back border">
    <img class="decor" id="loginimg" src="img/loginimage.png">
    <div class="container">
    <div class="innercontainer">
    <button  class="addbtn" id="backtoAct" onclick="updateViewDash()">Avslutt</button>
    <button class="addbtn" id="addAct" onclick="logActView()">Logg aktivitet</button>
    <button  class="addbtn" id="addGoal" onclick="logDiaryView()">Logg dagbok</button>
   
    </div>

    <div id="logview">
    
    
    </div>
    
</div>
</div>
    `;
    app.innerHTML = html;
}

function logActView(){
    html = /*html*/`<form action="..." id="logTform">


<div id="submitA">
    <input type="submit" value="Submit"/>
    </div>
    </form>`;
    logview.innerHTML = html;
    
    
}

function logDiaryView(){
    html = /*HTML*/ `
    <table id="diaryTable">
    
    </table>`;

    logview.innerHTML = html;
for(let i = 0; i <6; i++){
    let trId = "id" + i;
    document.getElementById("diaryTable").innerHTML += `<tr id=${trId} class="tableD"></tr>`;
    for(let y = 0; y < 6; y++){
        let tdId = "x" + y + "y" +i;
        document.getElementById(trId).innerHTML += `<td id=${tdId}>O</td>`;
    }
}
}

