//model.data.diaryLogData[weekNumber-1].diary

const weekArray = [];
const questArray = [];
let weekNumber = 1;

function logProcess(){
    //console.log(document.getElementById())
    model.data.diaryLogData[weekNumber-1].diary.monday.mood = document.getElementById("x1y1inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.monday.progress= document.getElementById("x2y1inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.monday.nextStep= document.getElementById("x3y1inp").value; 

    model.data.diaryLogData[weekNumber-1].diary.tuesday.mood= document.getElementById("x1y2inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.tuesday.progress= document.getElementById("x2y2inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.tuesday.nextStep= document.getElementById("x3y2inp").value; 

    model.data.diaryLogData[weekNumber-1].diary.wednesday.mood= document.getElementById("x1y3inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.wednesday.progress= document.getElementById("x2y3inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.wednesday.nextStep= document.getElementById("x3y3inp").value; 

    model.data.diaryLogData[weekNumber-1].diary.thursday.mood= document.getElementById("x1y4inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.thursday.progress= document.getElementById("x2y4inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.thursday.nextStep= document.getElementById("x3y4inp").value; 

    model.data.diaryLogData[weekNumber-1].diary.friday.mood= document.getElementById("x1y5inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.friday.progress= document.getElementById("x2y5inp").value; 
    model.data.diaryLogData[weekNumber-1].diary.friday.nextStep= document.getElementById("x3y5inp").value;
    
    saveLocalStorage();
}


function weekCounter(btn){
   
    if(btn.innerHTML == "neste uke⇨" && weekNumber != model.data.diaryLogData.length-1){
        console.log("true")
        weekNumber++;
        logDiaryView();
    }
    else if(btn.innerHTML == "neste uke⇨" && weekNumber == model.data.diaryLogData.length-1){
        console.log("hoho");
        console.log(model.data.diaryLogData[weekNumber-1]);
        model.data.diaryLogData[weekNumber] = 
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
  console.log(model.data.diaryLogData[weekNumber]);
  weekNumber++;
  logDiaryView();
    }
    else{console.log("Nope");
console.log(btn.innerHTML);}
    if(btn.innerHTML == "⇦forrige uke" && weekNumber > 1){
        console.log("true")
        weekNumber--;
        logDiaryView();
    }
    //checkAndGenerate(model.data.diaryLogData, weekNumber)
    saveLocalStorage();
    logDiaryView();
}

function checkAndGenerate(diaryLogData, index) {
    // Check if the index is within the array bounds
    if(weekNumber >= model.data.diaryLogData.length){
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
  });saveLocalStorage();}
   
  
  }
  
