let selectedGoal = 'all';
let goalsData = model.data.goalList;

function selectGoal(selection) {
    selectedGoal = selection.value;
    loadGoals()
}

function loadGoals() {
    let loadedGoals = '';

    if (selectedGoal == 'daily' || selectedGoal == 'all') {
        for (let i = 1; i < goalsData.daily.length; i++) {
            loadedGoals += `<div>${goalsData.daily[i].name}</div>`
        }
    }
    if (selectedGoal == 'weekly' || selectedGoal == 'all') {
        for (let i = 1; i < goalsData.weekly.length; i++) {
            loadedGoals += `<div>${goalsData.weekly[i].name}</div>`
        }
    }
    if (selectedGoal == 'monthly' || selectedGoal == 'all') {
        for (let i = 1; i < goalsData.monthly.length; i++) {
            loadedGoals += `<div>${goalsData.monthly[i].name}</div>`
        }
    }
    if (selectedGoal == 'year' || selectedGoal == 'all') {
        for (let i = 1; i < goalsData.year.length; i++) {
            loadedGoals += `<div>${goalsData.year[i].name}</div>`
        }
    }
    if (selectedGoal == 'fiveYearPlan' || selectedGoal == 'all') {
        for (let i = 1; i < goalsData.fiveYearPlan.length; i++) {
            loadedGoals += `<div>${goalsData.fiveYearPlan[i].name}</div>`
        }
    }

    document.getElementById('viewGoals').innerHTML = loadedGoals;
}
