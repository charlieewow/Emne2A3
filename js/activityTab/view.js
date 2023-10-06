function activityView() {
    let activity =  model.interface.activity.selectedNK;
    let app = document.getElementById("app");
    let html = /*HTML*/` 
        <form action="...">
            <label for="nøkkelkompetanser">Nøkkelkompetanser:</label>
            <select name="nøkkelkompetanser" id="keySkills">
                <option value="jog">Joggetur</option>

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
