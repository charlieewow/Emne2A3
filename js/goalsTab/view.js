function goalsView() {
    document.getElementById("dashcontent").innerHTML = /*HTML*/`
        <div class="goalback styled-scrollbars">
            <div class="goalwrapper ">
                <div class="goalnavbar">
                    <button class="addbtnG" onclick="dashView()">Avslutt</button>
                    <h1>Mine Mål</h1>
                    <form id="goalForm" action="...">
                        <label for="DDMgoals">Tidsrom:</label>
                        <select name="mål" id="DDMgoals" onchange="selectGoal(this)">
                            <option value='all'>Alle mål</option>
                            <option value='daily'>Dagens mål</option>
                            <option value='weekly'>Ukens mål</option>
                            <option value='monthly'>Måndtens mål</option>
                            <option value='year'>Årets mål</option>
                             <option value='fiveYearPlan'>Neste 5 års mål</option>
                        </select>
                    </form> <hr class="goalhr">
                </div>
            </div>
        <div id="viewGoals" class="innergoalwrapper ">
        </div>
        </div>
    `  
    loadGoals();
}