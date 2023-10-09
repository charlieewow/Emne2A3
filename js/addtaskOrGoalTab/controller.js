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

function process(object, form){
    console.log(form.id);
    console.log(object);
    let workObject = object;
    if(form.id == "addTform"){
        console.log("aktivitet");
        console.log(workObject);
    }
    if(form.id == "addGform"){
        //model.data.goalList;
        console.log("mål");
        console.log(workObject.NKActivity);
        let daily = model.data.goalList.daily;
        let weekly = model.data.goalList.weekly;
        let monthly = model.data.goalList.monthly;
        let yearly = model.data.goalList.year;
        let five = model.data.goalList.fiveYearPlan;
        let vague = model.data.goalList;
        if(workObject.selectUnit == "Daglig"){
            console.log("DAGLIG");
            proDay(workObject, daily);
        }
        else if(workObject.selectUnit == "Uke"){
            proWeek(workObject, weekly);
        }
        else if(workObject.selectUnit == "Måned"){
            proMonth(workObject, monthly);
        }
        else if(workObject.selectUnit == "År"){
            proYear(workObject, yearly);
        }
        else if(workObject.selectUnit == "5 år"){
            pro5Year(workObject, five);
        }
        else if(workObject.selectUnit == "none"){

        }

    }
    return workObject;
}


function proDay(newData, daily){
    let i = daily.length + 1;
daily.push(  {  
taskId: "D" + i,    
name: newData.NKActivity,
theme: newData.NKTemaer,
taskText: newData.description,
frequency: {repeatsPr: newData.selectUnit,
from: newData.fromDate,
to: newData.toDate}})

}
function proWeek(newData, weekly){
    let i = weekly.length + 1;
weekly.push(  {  
taskId: "W" + i,    
name: newData.NKActivity,
theme: newData.NKTemaer,
taskText: newData.description,
frequency: {repeatsPr: newData.selectUnit,
from: newData.fromDate,
to: newData.toDate}})

}
function proMonth(newData, monthly){
    let i = monthly.length + 1;
monthly.push(  {  
taskId: "M" + i,    
name: newData.NKActivity,
theme: newData.NKTemaer,
taskText: newData.description,
frequency: {repeatsPr: newData.selectUnit,
from: newData.fromDate,
to: newData.toDate}})

}
function proYear(newData, yearly){
    let i = yearly.length + 1;
yearly.push(  {  
taskId: "Y" + i,    
name: newData.NKActivity,
theme: newData.NKTemaer,
taskText: newData.description,
frequency: {repeatsPr: newData.selectUnit,
from: newData.fromDate,
to: newData.toDate}})

}
function pro5Year(newData, five){
    let i = five.length + 1;
five.push(  {  
taskId: "D" + i,    
name: newData.NKActivity,
theme: newData.NKTemaer,
taskText: newData.description,
frequency: {repeatsPr: newData.selectUnit,
from: newData.fromDate,
to: newData.toDate}})

}
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