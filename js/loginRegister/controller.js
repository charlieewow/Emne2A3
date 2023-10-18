//verify username and password and send the user to the dashboard

function login() {
    let storedUserName = model.data.user.userName;
    let storedPassword = model.data.user.password;

    let username = document.getElementById('uNameIn').value;
    let password = document.getElementById('pWordIn').value;

    if (username == storedUserName && password == storedPassword) {
        dashView();
    }
}

//send user to register page
function sendToRegisterUser() {
    registerUserView();
}

//send user back to login page
function backToLogin() {
    loginView();
}

//function to create user account
function createUser() {
    let username = document.getElementById('usernameInput').value;
    let email = document.getElementById('emailInput').value;
    let password = document.getElementById('passwordInput').value;
    let passwordRepeat = document.getElementById('passwordInputRepeat').value;

    model.data.user.userName = username;
    model.data.user.email = email;
    if (password === passwordRepeat) {
        model.data.user.password = password;

        document.getElementById('usernameInput').value = '';
        document.getElementById('emailInput').value = '';
        document.getElementById('passwordInput').value = '';
        document.getElementById('passwordInputRepeat').value = '';

        saveLocalStorage();
    
        loginView();
    }

}