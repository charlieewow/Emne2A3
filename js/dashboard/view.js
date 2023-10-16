let view = document.getElementById('app');
function dashView() {
    view.innerHTML = /*HTML*/`
    <div class="dashwrapper transform border">
    <img src="img/dashboard.png" id="dashimg">
    <div class="dashmiddlesection textaligncenter">
        <div class="flex center">
            <div class="dashtabs">
                <div class="flex center">
                    <div class="dashtitle">
                        <h2>Dashboard</h2>
                    </div>
                    <div>
                        <button class="dashbutton">Activities</button>
                        <button class="dashbutton">Goals</button>
                        <button class="dashbutton">History</button>
                        <button class="dashbutton">Daily Log</button>
                        <button class="dashbutton">Log Activities</button>
                    </div>
                    <div class="logout">
                        Log out
                    </div>
                </div>
                <hr class="dashHR">
            </div>
        </div>
        <div class="">

        </div>
    </div>
</div>
    `;
}