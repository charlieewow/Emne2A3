function loadPage(page) {
    $("#main").load(page);
}

$(document).ready(function () {
    loadPage("js/activityTab/activity.html")
});