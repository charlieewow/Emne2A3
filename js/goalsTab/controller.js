
//let timeframe = 'all';

function processGoals(object, form){
    console.log(object.mål);
    loadGoals(object.mål);
}

function selectTimeframe(selection){
    /*if(selection.value == 'all'){
        console.log('all');
        timeframe = 'all';
    }
    else if(selection.value == 'year'){
        console.log('year');
        timeframe = 'year';
    }
    else if(selection.value == 'halfYear'){
        //console.log('halfYear');
        timeframe = 'halfYear';
    }
    else if(selection.value == 'quarterYear'){
        //console.log('quarterYear');
        timeframe = 'quarterYear';
    }
    else if(selection.value == 'month'){
        //console.log('month');
        timeframe = 'month';
    }
    goalsView();*/
}

function loadGoals(selectedTimeframe){
    let goalsList = model.data.goalList;
    console.log(goalsList);
let showGoals = '';
console.log(selectedTimeframe);
let unit;
if(selectedTimeframe !== 'Alle'){
    for(let i = 1; i < goalsList[selectedTimeframe].length; i++){
        console.log("runde" + 1);
        showGoals += `<div class="flex activitiesTheme border">
        <div><p> ${goalsList[selectedTimeframe][i].name}</p></div>
        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
        </div>`;
        console.log(goalsList[selectedTimeframe][i]);
    }
}
    else if(selectedTimeframe == 'Alle'){
        console.log("true");
        for(let i = 1; i < goalsList.daily.length; i++){
            console.log("runde" + 1);
             showGoals += `<div class="flex activitiesTheme border">
             <div><p>${goalsList.daily[i].name}</p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for(let i = 1; i < goalsList.weekly.length; i++){
            console.log("runde" + 1);
             showGoals += 
             `<div class="flex activitiesTheme border">
                         <div><p>${goalsList.weekly[i].name} </p></div>
                         <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
                         </div>`;
        }
        for(let i = 1; i < goalsList.monthly.length; i++){
            console.log("runde" + 1);
             showGoals += `<div class="flex activitiesTheme border">
             <div><p> ${goalsList.monthly[i].name}  </p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for(let i = 1; i < goalsList.year.length; i++){
            console.log("runde" + 1);
             showGoals += `<div class="flex activitiesTheme border">
             <div><p>  ${goalsList.year[i].name}  </p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for(let i = 1; i < goalsList.fiveYearPlan.length; i++){
            console.log("runde" + 1);
             showGoals += `<div class="flex activitiesTheme border">
             <div><p> ${goalsList.fiveYearPlan[i].name}  </p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
    }
 document.getElementById("viewGoals").innerHTML = showGoals;
    //return showGoals;
}

`<div class="flex activitiesTheme border">
            <div><p> ${goalsList.fiveYearPlan[i].name}  </p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;
`<div class="flex activitiesTheme border">
            <div><p>${myRepeatTasks[i]?.name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
            </div>`;