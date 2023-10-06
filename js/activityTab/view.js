function activityView() {
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
}
//updateView();
