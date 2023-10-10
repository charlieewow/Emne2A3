/*const addForm = document.querySelector("#addTform");

addForm.addEventListener('click', function(event){
    //forhindrer standard innsendelse av data fra form
    event.preventDefault();

    //bruk formData API til å fange data fra form
    const addFormData = new FormData(this);

    //konverter form data til et object
    const addFormObject = Object.fromEntries(addFormData.entries());

    //nå kan det brukes i modellen ()?

console.log("??");
})*/

function checkingbox(box) {
    let repeatbox = document.getElementById("checkrep");
    let oncebox = document.getElementById("checkonce");
    let otherbox;
    //box.value = "checked";
    if (box == repeatbox) {
        if (oncebox.checked == true) {
            //oncebox.value = "unchecked";
            oncebox.checked = false;
        }
    }
    else if (box == oncebox) {
        if (repeatbox.checked == true) {
            //repeatbox.value = "unchecked";
            repeatbox.checked = false;
        }
    }

}

function process(object, form) {
    console.log(form.id);
    console.log(object);
    let workObject = object;
    if (form.id == "addTform") {
        console.log("aktivitet");
        console.log(workObject);
        let repeatbox = document.getElementById("checkrep");
        let oncebox = document.getElementById("checkonce");

        if(oncebox.checked == true){
            proOnce(workObject);
        }
        if(repeatbox.checked == true){
            proRep(workObject);
        }
    }
    if (form.id == "addGform") {
        //model.data.goalList;
        console.log("mål");
        console.log(workObject.NKActivity);
        let daily = model.data.goalList.daily;
        let weekly = model.data.goalList.weekly;
        let monthly = model.data.goalList.monthly;
        let yearly = model.data.goalList.year;
        let five = model.data.goalList.fiveYearPlan;
        let vague = model.data.goalList;
        if (workObject.selectUnit == "Daglig") {
            console.log("DAGLIG");
            proDay(workObject, daily);
        }
        else if (workObject.selectUnit == "Uke") {
            proWeek(workObject, weekly);
        }
        else if (workObject.selectUnit == "Måned") {
            proMonth(workObject, monthly);
        }
        else if (workObject.selectUnit == "År") {
            proYear(workObject, yearly);
        }
        else if (workObject.selectUnit == "5 år") {
            pro5Year(workObject, five);
        }
        else if (workObject.selectUnit == "none") {
            alert("Velg en tidenhet");
        }
    } return workObject;
}

//disse hører til aktivitet

function proOnce(newData){
let oneTime = model.data.plannedActList.once;
let i = oneTime.length;
oneTime.push({
    
        taskId: "A-O" +i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        date: newData.date,
        time: newData.time,
    
},);
loggedToModel();}
function proRep(newData){
    let repTime = model.data.plannedActList.repeat;
    let i = repTime.length;
    repTime.push({
        taskId: "A-R" +i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        frequency: { unit: newData.selectUnit, repeatsPr: newData.unitReps, from: newData.fromDate, to: newData.toDate },
          
    },);
    loggedToModel();
}

//disse hører til mål
function proDay(newData, daily) {
    let i = daily.length + 1;
    daily.push({
        taskId: "G-D" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModel();
}
function proWeek(newData, weekly) {
    let i = weekly.length + 1;
    weekly.push({
        taskId: "G-W" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModel();
}
function proMonth(newData, monthly) {
    let i = monthly.length + 1;
    monthly.push({
        taskId: "G-M" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModel();
}
function proYear(newData, yearly) {
    let i = yearly.length + 1;
    yearly.push({
        taskId: "G-Y" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModel();
}
function pro5Year(newData, five) {
    let i = five.length + 1;
    five.push({
        taskId: "G-5" + i,
        name: newData.NKActivity,
        theme: newData.NKTemaer,
        taskText: newData.description,
        frequency: {
            repeatsPr: newData.unitReps,
            from: newData.fromDate,
            to: newData.toDate
        }
    })
    loggedToModel();
}

function loggedToModel(){alert("new was logged!");}
/*
{
    taskId: "D" + 1,
    name: undefined,
    theme: undefined,
    taskText: undefined,
    frequency: { repeatsPr: undefined, from: 'time', to: 'time' },
},*/
/*
{description: 'ddd', NKTemaer: 'growth', NKActivity: 'Meditation', date: '', time: '', …}
NKActivity: "Meditation"
NKTemaer: "growth"
date: ""
description: "ddd"
fromDate: "2023-10-10"
selectUnit: "Daglig"
time: ""
toDate: "2023-10-18"
[[Prototype]]
: 
Object*/