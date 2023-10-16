let view = document.getElementById('app');
function loginView(){
    view.innerHTML = /*HTML*/`
        <div class="wrapper border transform">
            <img id="loginimg" src="img/loginimage.png">
            <div class="innerWrapper textaligncenter transform">
                <h1>Welcome to the activity tracker</h1>
                <div><input class="login" type="text" placeholder="Username" id="uNameIn"> </div>
                <div><input class="login" type="password" placeholder="Password" id="pWordIn"></div>
                <p class="forgotPW">Forgot Password?</p>
                <div>
                    <button class="login" onclick="login()">Login</button>
                </div>
            </div>
            <div class="signuptextlocation transform center">
                <div>You can sign up here</div>
            </div>
            <div class="signuplocation transform center">
                <button class="signUp" onclick="sendToRegisterUser()">Sign up</button>
            </div>
        </div>
    `;
}

function registerUserView(){
    view.innerHTML = /*HTML*/`
    <div class="signUpWrapper border transform">
        <img id="loginimg" src="img/loginimage.png">
        <div class="innersignUpWrapper textaligncenter transform">
            <h1>Sign up</h1>
            <div><input class="login" type="text" placeholder="Username" id="usernameInput"> </div>
            <div><input class="login" type="text" placeholder="Email" id="emailInput"></div>
            <div><input class="login" type="password" placeholder="Password" id="passwordInput"></div>
            <div><input class="login" type="password" placeholder="Repeat Password" id="passwordInputRepeat"></div>
            <div>
                <button class="login" onclick="createUser()">Register</button>
            </div>
        </div>
        <div class="signuptextlocation transform center">
            <div>Already have a user?</div>
        </div>
        <div class="signuplocation transform center">
            <button class="signUp" onclick="backToLogin()">Back</button>
        </div>
    </div>
    `;
}
