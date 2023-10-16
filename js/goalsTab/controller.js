let goalsList = model.data.goalList;
let timeframe = 'all';

function selectTimeframe(selection){
    if(selection.value == 'all'){
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
    goalsView();
}

function loadGoals(selectedTimeframe){
    let showGoals = '';

    if(selectedTimeframe == 'all'){
        for(let i = 0; i < goalsList.daily; i++){
            showGoals += "<div>" + goalsList.daily[i].name + "</div>";
        }
    }

    return showGoals;
}