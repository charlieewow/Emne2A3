function goalsView(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Mine Mål</h1>
        <form action="...">
            <label for="Velg tidsrom">Tidsrom:</label>
            <select name="mål" id="DDMgoals" onchange='selectTimeframe(this)'>
            <option value='all'>Alle</option>
            <option value='year'>Siste året</option>
            <option value='halfYear'>Siste 6 mnd</option>
            <option value='quarterYear'>Siste 3 mnd</option>
            <option value='month'>Siste mnd</option>
            </select>
        </form>

        ${loadGoals(timeframe) || ''}
    `;
}