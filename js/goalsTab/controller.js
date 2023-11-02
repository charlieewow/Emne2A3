let selectedGoal = 'all';
let goalsData = model.data.goalList;

function selectGoal(selection) {
    selectedGoal = selection.value;
    loadGoals()
}

function loadGoals() {
    let loadedGoals = '';

    if (selectedGoal == 'daily' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.daily.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.daily[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.daily[i].progress}" max="100"></progress></div>
            </div>`;
            console.log(1);
        }
    }
    if (selectedGoal == 'weekly' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.weekly.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.weekly[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.weekly[i].progress}" max="100"></progress></div>
            </div>`;
            console.log(2);
        }
    }
    if (selectedGoal == 'monthly' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.monthly.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.monthly[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.monthly[i].progress}" max="100"></progress></div>
            </div>`;
            console.log(3);
        }
    }
    if (selectedGoal == 'year' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.year.length; i++) {
            loadedGoals += `<div class="flex activitiesTheme border">
            <div><p> ${goalsData.year[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.year[i].progress}" max="100"></progress></div>
            </div>`;
            console.log(4);
        }
    }
    if (selectedGoal == 'fiveYearPlan' || selectedGoal == 'all') {
        for (let i = 0; i < goalsData.fiveYearPlan.length; i++) {
            loadedGoals +=`<div class="flex activitiesTheme border">
            <div><p> ${goalsData.fiveYearPlan[i].name}</p></div>
            <div class="activityprog"><progress class="prog border" id="" value="${goalsData.fiveYearPlan[i].progress}" max="100"></progress></div>
            </div>`;
            console.log(5);
        }
    }

    document.getElementById('viewGoals').innerHTML = loadedGoals;
}

/*
function loadGoals(selectedTimeframe) {
    let goalsList = model.data.goalList;
    console.log(goalsList);
    let showGoals = '';
    console.log(selectedTimeframe);
    let unit;
    if (selectedTimeframe !== 'Alle') {
        for (let i = 1; i < goalsList[selectedTimeframe].length; i++) {
            console.log("runde" + 1);
            showGoals += `<div class="flex activitiesTheme border">
        <div><p> ${goalsData.daily[i].name}</p></div>
        <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
        </div>`;
            console.log(goalsList[selectedTimeframe][i]);
        }
    }
    else if (selectedTimeframe == 'Alle') {
        console.log("true");
        for (let i = 1; i < goalsList.daily.length; i++) {
            console.log("runde" + 1);
            showGoals += `<div class="flex activitiesTheme border">
             <div><p>${goalsList.daily[i].name}</p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for (let i = 1; i < goalsList.weekly.length; i++) {
            console.log("runde" + 1);
            showGoals +=
                `<div class="flex activitiesTheme border">
                         <div><p>${goalsList.weekly[i].name} </p></div>
                         <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
                         </div>`;
        }
        for (let i = 1; i < goalsList.monthly.length; i++) {
            console.log("runde" + 1);
            showGoals += `<div class="flex activitiesTheme border">
             <div><p> ${goalsList.monthly[i].name}  </p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for (let i = 1; i < goalsList.year.length; i++) {
            console.log("runde" + 1);
            showGoals += `<div class="flex activitiesTheme border">
             <div><p>  ${goalsList.year[i].name}  </p></div>
             <div class="activityprog"><progress class="prog border" id="" value="50" max="100"></progress></div>
             </div>`;
        }
        for (let i = 1; i < goalsList.fiveYearPlan.length; i++) {
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
            </div>`;*/