function activityView() {
    let activity =  model.interface.activity.selectedNK;
    let app = document.getElementById("app");
    let html = /*HTML*/` 
    <button onclick="updateViewAddTab()">Legg til oppgave</button>
    <button onclick="updateViewDash()">Tilbake til Dash</button>
        <form action="...">
            <label for="nøkkelkompetanser">Nøkkelkompetanser:</label>
            <select name="nøkkelkompetanser" id="keySkills">


            </select>
            <br><br>
            <input type="submit" value="Submit">
        </form>
        
    `;
    app.innerHTML = html;

    for(i in activity){
        document.getElementById("keySkills").innerHTML += `<option value=${activity[i]}>${activity[i]}</option>`;
    }    
}
//updateView();
