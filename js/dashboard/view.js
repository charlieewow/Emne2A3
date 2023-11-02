function dashView() {
    view.innerHTML = /*HTML*/`
        <div class="dashwrapper">
            <div class="dashtabs">
                <div class="flex center">
                    <div class="">
                        <div class="flex center">
                            <div class="dashtitle">
                                <h1 class="dashbutton" onclick="dashView()">Dashboard</h1>
                            </div>
                            <div class="flex center">
                                <div class="dashbutton" onclick="activityView()">Activities</div>
                                <div class="dashbutton" onclick="goalsView()">Goals</div>
                                <div class="dashbutton" onclick="updateViewHistory()">History</div>
                                <div class="dashbutton" onclick="updateViewDiaryPage()">Daily Log</div>
                                <div class="dashbutton" onclick="updateViewTaskPage()">Log Activities</div>
                            </div>
                            <div class="logout" onclick="backToLogin()">
                                Log out
                            </div>
                        </div>
                        <hr class="dashHR">
                    </div>
                </div>
            </div>
            <div class="dashmiddlesection textaligncenter">
                <div id="dashcontent"></div>
            </div>
        </div>
    `;
}