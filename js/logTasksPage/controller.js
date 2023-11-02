function processActLog(workObject, form) {  //denne funksjonen tar i mot data fra aktivitetsloggings siden og behandler den og oppdaterer modellen. Forandringen er ikke permanent/lagret i localstorage før man trykker på "lagre" knappen på siden

    if (form.id == "logTform") {
        let rightNow = new Date();
        console.log(rightNow);
        let newTime = rightNow.toLocaleTimeString();
        console.log(newTime);
        let newDate = rightNow.toLocaleDateString();
        console.log(newDate);
        let yaya = Object.keys(workObject);
        console.log(yaya);
        console.log(yaya[0])
        console.log(form);
        let newObj = [];
        let taskID = "A-H-P" + model.data.activityHistory.planned.length;
        for (ya in yaya) {
            let newstring = yaya[ya];
            newObj = JSON.parse(newstring);
            console.log(newObj.type);
            console.log(newObj.id);
            let array;
            if (newObj.type == 'repeat') {
                array = model.data.plannedActList.repeat;
                console.log(array);
            }
            else if (newObj.type == 'once') {
                array = model.data.plannedActList.once;
                console.log(array);
            }
            let filterId = newObj.id; // replace this with your taskId
            let objects = array.find(obj => obj.taskId === filterId);
            console.log(objects);

            //let history = model.data.activityHistory.planned;

            let overviewOne = model.data.plannedActList.once;
            let overviewTwo = model.data.plannedActList.repeat;
            let historyArray = model.data.activityHistory.planned;
            console.log(historyArray);
            let filterBy = newObj.id;
            let historyObj = historyArray.find(obj => obj.oldId === filterBy);
            console.log(historyObj);
            if (historyObj == undefined) { //hvis det ikke allerede finnes et object i history knyttet til den aktuelle aktiviteten, og det er snakk om en gjentagende aktivitet ( har en property = frequency), lages en ny entry i history
                console.log('hello?');
                let yesorno = Boolean(objects.time);
                console.log(yesorno);
                if (objects.frequency) {
                    historyArray.push({
                        taskId: taskID,
                        oldId: newObj.id,
                        name: objects.name,
                        theme: objects.theme,
                        date: { from: objects.frequency.from, to: objects.frequency.to },
                        time: undefined,
                        reps: { totalReps: objects.reps.totalReps, repsDone: 1, repsLeft: objects.reps.totalReps - 1 },
                        isDone: 'False', //true/False 
                        lastlogged: [rightNow],
                        wasDone: { time: ' ', date: ' ' },
                    });
                    console.log(historyArray);
                }
                if (objects.time) {  //hvis det er snakk om en oppgave som gjøres én gang, vil den ha egenskapen "time" i stedet for "frequency". Engangsoppgaver pushes direkte til history.


                    historyArray.push({
                        taskId: taskID,
                        oldId: newObj.id,
                        name: objects.name,
                        theme: objects.theme,
                        date: { from: objects.date, to: objects.date },
                        time: objects.time,
                        reps: { totalReps: '1', repsDone: '1', repsLeft: '0' },
                        isDone: 'True', //true/False 
                        wasDone: { time: newTime, date: newDate },
                    });
                    console.log(historyArray);
                }
            }
            else if (historyObj !== undefined && objects.frequency) { //om det allerede finnes en entry i history for den aktuelle gjentagende aktiviteten, blar du opp i history og finner entry knytta til aktiviteten og teller opp og ned på antall ganger gjort og antall gjenstående ganger 
                console.log('works');
                //console.log(history[index].reps.repsLeft);
                let histArray = model.data.activityHistory.planned;
                let taskId = newObj.id; // replace this with your taskId
                let index = histArray.findIndex(obj => obj.oldId === taskId);
                console.log(index);
                historyArray[index].reps.repsDone += 1;
                historyArray[index].reps.repsLeft -= 1;
                historyArray[index].lastlogged.push(rightNow);

            }

            if (newObj.type == 'repeat') {
                console.log('tell da!');
                let actArray = model.data.plannedActList.repeat;
                let actId = newObj.id;
                let actIndex = actArray.findIndex(obj => obj.taskId === actId);
                if (overviewTwo[actIndex].reps.repsDone == 0) {
                    overviewTwo[actIndex].reps.repsDone += 1;
                    overviewTwo[actIndex].reps.repsLeft = overviewTwo[actIndex].reps.totalReps - overviewTwo[actIndex].repsDone;
                    console.log(overviewTwo[actIndex].reps);
                }
                else {
                    overviewTwo[actIndex].reps.repsDone += 1;
                    overviewTwo[actIndex].reps.repsLeft -= 1;
                    console.log(overviewTwo[actIndex].reps);
                }

                for (task in overviewTwo) {
                    console.log(overviewTwo[task].taskId);
                    console.log(historyArray[task]);
                    if (overviewTwo[task].taskId[3] == taskID[5]) {
                        console.log(taskID);
                    }
                }
            }


            /*history.push({"taskId":taskID,"name":newObj.name, "theme":entry[0][1], "done":{"time": nowTime, "date":nowDate}});
            console.log(history[1]);*/


        }
    }

    //newObj = yaya[0];
    //console.log(newObj[0])
    //let newnew = JSON.parse(newObj);

    //console.log(newnew);
    //if(workObject.id)
    ItIsDone();
}

function processActLogTS(workObject, form) { //denne funksjonen tar i mot data om logget spontane aktiviteter
    let theKeys = Object.keys(workObject);
    let entry = Object.entries(workObject);
    console.log(workObject);
    console.log(entry[0][1]); //NK tema
    console.log(theKeys[1]);
    let firstKey = [theKeys[0]];
    let secondKeys = [theKeys[1]];
    console.log(secondKeys);
    let newObj = [];
    let taskID = "A-H-S" + model.data.activityHistory.spontan.length;

    let d = new Date(); // for now
    //d.getMonth() +1;
    //d.getHours(); // => 9
    //d.getMinutes(); // =>  30
    //d.getSeconds(); // => 51
    let nowTime = d.toLocaleTimeString();
    let nowDate = d.toLocaleDateString();
    for (key in secondKeys) {
        let newstring = secondKeys[key];
        console.log(newstring);
        newObj = JSON.parse(newstring);
        console.log(newObj);
        let history = model.data.activityHistory.spontan;
        history.push({ "taskId": taskID, "name": newObj.name, "theme": entry[0][1], "done": { "time": nowTime, "date": nowDate } });
        console.log(history[1]);
    }


    ItIsDone();
}


function toggleHideInfo(ele) {
    console.log(model.data.plannedActList.repeat[ele].taskId);
    document.getElementById(model.data.plannedActList.repeat[ele].taskId).classList.toggle("hideLogInfo");
}

//model.data.plannedActList.repeat[i].frequency.totalReps

function logProcessAct() {

}

function sendName(obj) {
    console.log(obj);
}

function loadoptions(i) {
    console.log("loaded");
    let theme = model.interface.addGoalAct.themeSelector;
    let keyRing = "id" + i;
    for (let T of theme) {
        let element = document.getElementById(keyRing);
        if (element && element.innerHTML.length < 284) {
            element.innerHTML += `<option value=${T}>${T}</option>`;
        }


    }


}


function ItIsDone() {
    saveLocalStorage();
    dashView();
}