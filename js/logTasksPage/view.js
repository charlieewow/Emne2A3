

function updateViewTaskPage() {
    document.getElementById("dashcontent").innerHTML = /*html*/ `
    
    <div class="back border">
    <img class="decor" id="loginimg" src="img/loginimage.png">
    <div class="container">
    <div class="innercontainer">
    <button  class="addbtn" id="backtoAct" onclick="updateViewDash()">Avslutt</button>
    <button class="addbtn" id="addAct" onclick="logActView()">Logg aktivitet</button>
    <button  class="addbtn" id="addGoal" onclick="logDiaryView(); loadLocalStorage()">Logg dagbok</button>
   <button class="addbtn" onclick="logProcess()">lagre logg</button>
    </div>

    <div id="logview">
    
    
    </div>
    
</div>
</div>
    `;
}

function logActView() {
    html = /*html*/`<form action="..." id="logTform">


<div id="submitA">
    <input type="submit" value="Submit"/>
    </div>
    </form>`;
    logview.innerHTML = html;


}

function logDiaryView() {
    loadLocalStorage();
    html = /*HTML*/ `
    <div id="weekBtn">
    <button class="addbtn" onclick="weekCounter(this)">⇦forrige uke</button>
    <button class="addbtn" onclick="weekCounter(this)">neste uke⇨</button></div>
    <table id="diaryTable">
    
    </table>
    
    `;

    logview.innerHTML = html;
    for (let i = 0; i < 6; i++) {
        let trId = "y" + i;
        document.getElementById("diaryTable").innerHTML += `<tr id=${trId} class="tableD"></tr>`;
        for (let y = 0; y < 4; y++) {
            let tdId = "x" + y + "y" + i;
            if (i == 0 && y == 0) {
                document.getElementById(trId).innerHTML += `<td class="weekNrSquare" id=${tdId}>Uke ${ weekNumber}</td>`;
            }
            else if (i == 0) {
                questArray.push(tdId);
                document.getElementById(trId).innerHTML += `<td class="infosquare" id=${tdId}>O</td>`;
            }
            else if (y == 0) {
                weekArray.push(tdId);
                document.getElementById(trId).innerHTML += `<td class="weekSquare" id=${tdId}></td>`;
            }
            else if (i != 0 && y != 0) {
                if (i == 1) {
                    let monday = tdId + "inp";
                    if (i == 1 && y == 1) {
                        let mondayMood = model.data.diaryLogData[ weekNumber -1].diary.monday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Monday" id=${monday} type="text" value="${mondayMood}"  /></td>`;
                    }
                    else if (i == 1 && y == 2) {
                        let mondayProg = model.data.diaryLogData[ weekNumber -1].diary.monday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Monday" id=${monday} type="text" value="${mondayProg}" /></td>`;
                    }
                    else if (i == 1 && y == 3) {
                        let mondayNext = model.data.diaryLogData[ weekNumber -1].diary.monday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Monday" id=${monday} type="text" value="${mondayNext}" /></td>`;
                    }
                    
                }
                if (i == 2) {
                    let tuesday = tdId + "inp";
                    if(i ==2 && y == 1){
                        let tuesdayMood = model.data.diaryLogData[ weekNumber -1].diary.tuesday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Tuesday" id=${tuesday}  type="text" value="${tuesdayMood}" /></td>`;
                    }
                    else if(i==2 && y == 2){
                        let tuesdayProg = model.data.diaryLogData[ weekNumber -1].diary.tuesday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Tuesday" id=${tuesday}  type="text" value="${tuesdayProg}" /></td>`;
                    }
                    else if(i ==2 && y == 3){
                        let tuesdayNext = model.data.diaryLogData[ weekNumber -1].diary.tuesday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Tuesday" id=${tuesday}  type="text" value="${tuesdayNext}" /></td>`;
                    }
                }
                if (i == 3) {
                    let wednesday = tdId + "inp";
                    if(i==3 && y == 1){
                        let wednesdayMood = model.data.diaryLogData[ weekNumber -1].diary.wednesday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Wednesday" id=${wednesday} type="text" value="${wednesdayMood}"  /></td>`;
                    }
                    else if(i==3 && y == 2){
                        let wednesdayProg = model.data.diaryLogData[ weekNumber -1].diary.wednesday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Wednesday" id=${wednesday} type="text" value="${wednesdayProg}"  /></td>`;
                    }
                    else if(i== 3 && y == 3){
                        let wednesNext = model.data.diaryLogData[ weekNumber -1].diary.wednesday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Wednesday" id=${wednesday} type="text"  value="${wednesNext}" /></td>`;
                    }
                }
                if (i == 4) {
                    let thursday = tdId + "inp";
                    if(i==4 && y == 1){
                        let thursdayMood = model.data.diaryLogData[ weekNumber -1].diary.thursday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Thursday" id=${thursday} type="text" value="${thursdayMood}"  /></td>`;
                    }
                    else if(i==4 && y == 2){
                        let thursdayProg = model.data.diaryLogData[ weekNumber -1].diary.thursday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Thursday" id=${thursday} type="text" value="${thursdayProg}"  /></td>`;
                    }
                    else if(i==4 && y == 3){
                        let thursdayNext = model.data.diaryLogData[ weekNumber -1].diary.thursday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Thursday" id=${thursday}  type="text" value="${thursdayNext}" /></td>`;
                    }
                }
                if (i == 5) {
                    let friday = tdId + "inp";
                    if(i==5 && y == 1){
                        let fridayMood = model.data.diaryLogData[ weekNumber -1].diary.friday.mood;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Friday" id=${friday}  type="text" value="${fridayMood}" /></td>`;
                    }
                    else if(i ==5 && y == 2){
                        let fridayProg = model.data.diaryLogData[ weekNumber -1].diary.friday.progress;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Friday" id=${friday}  type="text" value="${fridayProg}" /></td>`;
                    }
                    else if(i ==5 && y == 3){
                        let fridayNext = model.data.diaryLogData[ weekNumber -1].diary.friday.nextStep;
                        document.getElementById(trId).innerHTML += `<td  id=${tdId}><input class="logSpace, Friday" id=${friday}  type="text" value="${fridayNext}" /></td>`;
                    }
                }
            }

        }
    }
    let u = 0;
    for (day in model.interface.logPage.diary.edges.weekdayNO) {
        document.getElementById(weekArray[u]).innerHTML = model.interface.logPage.diary.edges.weekdayNO[day];
        u++;
    }
    let l = 0;
    for (que in model.interface.logPage.diary.edges.dailyQuestNO) {
        document.getElementById(questArray[l]).innerHTML = model.interface.logPage.diary.edges.dailyQuestNO[que];
        l++;
    }
}

