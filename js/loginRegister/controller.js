//verify username and password and send the user to the dashboard
 let storedUserName = model.data.user.userName;
 let storedPassword = model.data.user.password;

function login(){
    let username = document.getElementById('uNameIn').value;
    let password = document.getElementById('pWordIn').value;

    if(username == storedUserName && password == storedPassword){
        
    }
}

//send user to register page