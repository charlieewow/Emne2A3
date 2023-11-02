let dashGoalsData = model.data.goalList.daily;


function loadDashContent() {
    document.getElementById('dashGoals').innerHTML = loadDailyTasks();
}

function loadDailyTasks() {
    let loadedGoals = '';

    for (let i = 0; i < 5; i++) {
        loadedGoals += `
        <div class="dashspacing">
            <div><p>${dashGoalsData.daily[i].name}</p><progress class="dashprog" id="" value="${dashGoalsData.daily[i].progress}" max="100"></progress></div>
        </div>`;
    }
    return loadedGoals;
}

function loadWeeklyLog() {

}