function processActLog(workObject, form) {

    if (form.id == "logTform") {
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
            console.log(objects.taskId);

            //let history = model.data.activityHistory.planned;

            let overviewOne = model.data.plannedActList.once;
            let overviewTwo = model.data.plannedActList.repeat;
            let historyArray = model.data.activityHistory.planned;
            console.log(historyArray);
            let filterBy = newObj.id;
            let historyObj = historyArray.find(obj => obj.oldId === filterBy);
            console.log(historyObj);
            if (historyObj == undefined) {
                historyArray.push({
                    taskId: taskID,
                    oldId: newObj.id,
                    name: objects.name,
                    theme: objects.theme,
                    date: { from: objects.frequency.from, to: objects.frequency.to },
                    time: undefined,
                    reps: { totalReps: objects.reps.totalReps, repsDone: 1, repsLeft: objects.reps.totalReps - 1 },
                    isDone: 'False', //true/False 
                    wasDone: { time: ' ', date: ' ' },
                });
                console.log(historyArray);
            }
            else {
                let histArray = model.data.activityHistory.planned;
                let taskId = newObj.id; // replace this with your taskId
                let index = histArray.findIndex(obj => obj.oldId === taskId);
                console.log(index);
                history[index].reps.repsDone += 1;
                history[index].reps.repsLeft -= 1;

            }
            if (newObj.type == 'repeat') {
                let actArray = model.data.plannedActList.repeat;
                let actId = newObj.id;
                let actIndex = actArray.findIndex(obj => obj.taskId === actId);
                if (overviewTwo[actIndex].reps.repsLeft == '') {
                    overviewTwo[actIndex].reps.repsDone += 1;
                    overviewTwo[actIndex].reps.repsLeft = overviewTwo[actIndex].reps.totalReps - overviewTwo[actIndex].repsDone;
                }
                else {
                    overviewTwo[actIndex].reps.repsLeft += 1;
                    overviewTwo[actIndex].reps.repsLeft -= 1;
                }

                for (task in overviewTwo) {
                    console.log(overviewTwo[task].taskId);
                    console.log(history[task]);
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
}

function processActLogTS(workObject, form) {
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
