


//updateView();
function updateViewAddTab(){
    let theme = model.interface.addGoalAct.themeSelector;
    html = /*html*/ `
    <form action="...">
    <label for="selectTheme">NK tema:</label>
    <select name="NKTemaer" id="keyThemes">
        
    </select>
    <br><br>
    <input type="submit" value="Submit">
</form>

    <div></div>
    <div></div>
    <div></div>
    `;
    app.innerHTML = html;
for(i in theme){
    document.getElementById("keyThemes").innerHTML += `<option value=${theme[i]}>${theme[i]}</option>`;
}

}

   /*
        <form action="...">
            <label for="nøkkelkompetanser">Nøkkelkompetanser:</label>
            <select name="nøkkelkompetanser" id="keySkills">
                <option value="jog">Joggetur</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <br><br>
            <input type="submit" value="Submit">
        </form>
    `;*/

