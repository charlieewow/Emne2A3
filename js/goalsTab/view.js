/*<option value='all'>Alle</option>
            <option value='year'>Siste året</option>
            <option value='halfYear'>Siste 6 mnd</option>
            <option value='quarterYear'>Siste 3 mnd</option>
            <option value='month'>Siste mnd</option> <!--${loadGoals(timeframe) || ''}-->*/

function goalsView() {
    document.getElementById("dashcontent").innerHTML = /*HTML*/`
    <button class="addbtn" onclick="dashView()">Avslutt</button>
    <h1>Mine Mål</h1>
        <form id="goalForm" action="...">
            <label for="Velg tidsrom">Tidsrom:</label>
            <select name="mål" id="DDMgoals" onchange="selectTimeframe(this)">
            
            </select>
            <input type="submit" value="vis valgte"/>
        </form>

       
    `;
    let timeKeys = model.interface.goals.timeframe;
    for (key in timeKeys) {
        console.log(timeKeys);
        document.getElementById("DDMgoals").innerHTML += `
    <option>${timeKeys[key]}</option>`;
    }
    const FormG = document.getElementById("goalForm");
    FormG.addEventListener('submit', function (event) {
        //forhindrer standard innsendelse av data fra form
        event.preventDefault();

        //bruk formData API til å fange data fra form
        const FormGData = new FormData(this);

        //konverter form data til et object
        const FormGObject = Object.fromEntries(FormGData.entries());
        console.log(FormGObject);


        //nå kan det brukes i modellen ()?
        processGoals(FormGObject, FormG);


    })
}