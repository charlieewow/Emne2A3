//model.data.diaryLogData[weekNrDisplay-1].diary

const weekArray = [];
const questArray = [];
let weekNumber = 1;
let weekNrDisplay = 1;

function logProcess() {

    if (model.data.diaryLogData[weekNrDisplay - 1] && weekNrDisplay -1 < model.data.diaryLogData.length) {
        console.log(weekNrDisplay -1, model.data.diaryLogData.length);
        if (document.getElementById("x1y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.mood = document.getElementById("x1y1inp").value;
        }
        if (document.getElementById("x2y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.progress = document.getElementById("x2y1inp").value;
        }
        if (document.getElementById("x3y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.nextStep = document.getElementById("x3y1inp").value;
        }

        if (document.getElementById("x1y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.mood = document.getElementById("x1y2inp").value;
        }
        if (document.getElementById("x2y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.progress = document.getElementById("x2y2inp").value;
        }
        if (document.getElementById("x3y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.nextStep = document.getElementById("x3y2inp").value;
        }

        if (document.getElementById("x1y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.mood = document.getElementById("x1y3inp").value;
        }
        if (document.getElementById("x2y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.progress = document.getElementById("x2y3inp").value;
        }
        if (document.getElementById("x3y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.nextStep = document.getElementById("x3y3inp").value;
        }

        if (document.getElementById("x1y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.mood = document.getElementById("x1y4inp").value;
        }
        if (document.getElementById("x2y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.progress = document.getElementById("x2y4inp").value;
        }
        if (document.getElementById("x3y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.nextStep = document.getElementById("x3y4inp").value;
        }

        if (document.getElementById("x1y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.mood = document.getElementById("x1y5inp").value;
        }
        if (document.getElementById("x2y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.progress = document.getElementById("x2y5inp").value;
        }
        if (document.getElementById("x3y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.nextStep = document.getElementById("x3y5inp").value;
        }
saveLocalStorage();
    }
    else if (weekNrDisplay > model.data.diaryLogData.length && weekNrDisplay < model.data.diaryLogData.length+2) {
        console.log("MEG");
        console.log(weekNrDisplay -1, model.data.diaryLogData.length);
        model.data.diaryLogData[weekNrDisplay -1] =
            {
                date: '',  // You can set a default date value here
                uke: weekNrDisplay,
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                }
            };
            saveLocalStorage();
        
        if (document.getElementById("x1y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.mood = document.getElementById("x1y1inp").value;
        }
        if (document.getElementById("x2y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.progress = document.getElementById("x2y1inp").value;
        }
        if (document.getElementById("x3y1inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.monday.nextStep = document.getElementById("x3y1inp").value;
        }

        if (document.getElementById("x1y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.mood = document.getElementById("x1y2inp").value;
        }
        if (document.getElementById("x2y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.progress = document.getElementById("x2y2inp").value;
        }
        if (document.getElementById("x3y2inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.tuesday.nextStep = document.getElementById("x3y2inp").value;
        }

        if (document.getElementById("x1y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.mood = document.getElementById("x1y3inp").value;
        }
        if (document.getElementById("x2y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.progress = document.getElementById("x2y3inp").value;
        }
        if (document.getElementById("x3y3inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.wednesday.nextStep = document.getElementById("x3y3inp").value;
        }

        if (document.getElementById("x1y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.mood = document.getElementById("x1y4inp").value;
        }
        if (document.getElementById("x2y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.progress = document.getElementById("x2y4inp").value;
        }
        if (document.getElementById("x3y4inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.thursday.nextStep = document.getElementById("x3y4inp").value;
        }

        if (document.getElementById("x1y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.mood = document.getElementById("x1y5inp").value;
        }
        if (document.getElementById("x2y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.progress = document.getElementById("x2y5inp").value;
        }
        if (document.getElementById("x3y5inp")) {
            model.data.diaryLogData[weekNrDisplay - 1].diary.friday.nextStep = document.getElementById("x3y5inp").value;
        }
    }saveLocalStorage();
    //console.log(document.getElementById())


    
}

/*
function weekCounter(btn) {

    if (btn.innerHTML == "neste uke⇨" && weekNrDisplay != model.data.diaryLogData.length) {
        console.log("true")
        weekNrDisplay++;
        logDiaryView();
    }
    else if (btn.innerHTML == "neste uke⇨" && weekNrDisplay == model.data.diaryLogData.length) {
        if (confirm("Ønsker du å oprette en ny ukeslogg?") === true) {
            //logDiaryView();

            console.log("hoho");
            console.log(model.data.diaryLogData[weekNrDisplay - 1]);
            model.data.diaryLogData[weekNrDisplay] =
            {
                date: '',  // You can set a default date value here
                diary: {
                    monday: { mood: '', progress: '', nextStep: '' },
                    tuesday: { mood: '', progress: '', nextStep: '' },
                    wednesday: { mood: '', progress: '', nextStep: '' },
                    thursday: { mood: '', progress: '', nextStep: '' },
                    friday: { mood: '', progress: '', nextStep: '' },
                }
            };
            console.log(model.data.diaryLogData[weekNrDisplay]);
            //saveLocalStorage();
            weekNrDisplay++;
            logDiaryView();

        } else {

            logDiaryView();
        };

    }
    else {
        console.log("Nope");
        console.log(btn.innerHTML);
    }
    if (btn.innerHTML == "⇦forrige uke" && weekNrDisplay > 1) {
        console.log("true")
        weekNrDisplay--;
        logDiaryView();
    }
    //checkAndGenerate(model.data.diaryLogData, weekNrDisplay)

    logDiaryView();
}*/

function weekCounterDisplay(btn) {

    if (btn.innerHTML == "neste uke⇨") {
        console.log("true")
        weekNrDisplay++;
        updateViewDiaryPage();
    }

    if (btn.innerHTML == "⇦forrige uke" && weekNrDisplay != 1) {
        console.log("true")
        weekNrDisplay--;
        updateViewDiaryPage();
    }

    console.log(btn.innerHTML);
    console.log(weekNrDisplay);
    //updateViewDiaryPage();
}
/*
function checkAndGenerate(diaryLogData, index) {
    // Check if the index is within the array bounds
    if (weekNrDisplay >= model.data.diaryLogData.length) {
        console.log("lang");
        model.data.diaryLogData.push({
            date: '',  // You can set a default date value here
            diary: {
                monday: { mood: '', progress: '', nextStep: '' },
                tuesday: { mood: '', progress: '', nextStep: '' },
                wednesday: { mood: '', progress: '', nextStep: '' },
                thursday: { mood: '', progress: '', nextStep: '' },
                friday: { mood: '', progress: '', nextStep: '' },
            }
        }); saveLocalStorage();
    }


}*/

function confirmQuit() {

    if (confirm("Har du husket å Lagre?") == true) {
        dashView();
    }
    else { logDiaryView(); }
}
let mondayArr = [];
let tuesdayArr = [];
let wednesdayArr = [];
let thursdayArr = [];
let fridayArr = [];
for (let i = 1; i < 4; i++) {
    let monday = "x" + i + "y1";
    mondayArr.push(monday);
    let tuesday = "x" + i + "y2";
    tuesdayArr.push(tuesday);
    let wednesday = "x" + i + "y3";
    wednesdayArr.push(wednesday);
    let thursday = "x" + i + "y4";
    thursdayArr.push(thursday);
    let friday = "x" + i + "y5";
    fridayArr.push(friday);
}
let weekArr = [];
weekArr.push(mondayArr);
weekArr.push(tuesdayArr);
weekArr.push(wednesdayArr);
weekArr.push(thursdayArr);
weekArr.push(fridayArr);



function inputGen(td) {
    let key = td.id + "inp";
    console.log(key);
    let loginfo = td.innerText;

    let logvalue = document.getElementById(key);

    let weekDay;
    console.log(loginfo)
    for (let i = 0; i < 5; i++) {
        if (weekArr[i].includes(td.id)) {
            console.log("yoyo");
            if (i == 0) {
                weekDay = "Monday"; //console.log(weekDay)
            }
            if (i == 1) {
                weekDay = "Tuesday"; //console.log(weekDay)
            }
            if (i == 2) {
                weekDay = "Wednesday"; //console.log(weekDay)
            }
            if (i == 3) {
                weekDay = "Thursday"; //console.log(weekDay)
            }
            if (i == 4) {
                weekDay = "Friday"; //console.log(weekDay)
            }
        }


    }
    console.log(weekDay);
    if (td.innerText) {
        //alert("hey");
        console.log(td.innerText);
        document.getElementById(td.id).innerHTML = `<input type="text" class="logspace, ${weekDay}" id=${key} value=${loginfo} />`;

    }
    else if (td.innerHTML) {
        //alert("heyo"); 
        console.log("yomama");
        console.log(document.getElementById(key).value);
    }
    else {
        //alert("HMMM??")
        document.getElementById(td.id).innerHTML = `<input type="text" class="logspace, ${weekDay}" id=${key} value="" />`;
    }

}