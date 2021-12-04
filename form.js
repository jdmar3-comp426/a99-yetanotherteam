window.addEventListener("load", function () {
    console.log("signupForm")
    function sendData() {
        // get data from form element
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new FormData(form);

        // error handling
        sendRequest.addEventListener("error", function (event) {
            alert("Submission unsuccessful, please check your input and try again");
        });

        // success message
        sendRequest.addEventListener("load", function (event) {
            alert("Account successfully created");
        });

        // open endpoint and send data
        sendRequest.open("POST", "http://localhost:5000/app/new/user");
        sendRequest.send(signupInfo);

    }

    // define location of form to get data from
    const form = document.getElementById("signupForm");

    // Password Validation
    // var password = document.getElementById("pass")
    // var password_retype = document.getElementById("pass_retype");

    // function validatePassword() {
    //     if (password.value != password_retype.value) {
    //         password_retype.setCustomValidity("Passwords Don't Match");
    //     }
    // }

    // password.onchange = validatePassword;
    // confirm_password.onkeyup = validatePassword;

    // listener that calls send data function
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});

window.addEventListener("load", function () {
    console.log("loginForm")
    function sendData() {
        // get data from form element
        const sendRequest = new XMLHttpRequest();
        const loginInfo = new FormData(login);

        // error handling
        sendRequest.addEventListener("error", function (event) {
            alert("login unsuccessful, please check your username and password");
        });

        // success message
        sendRequest.addEventListener("load", function (event) {
            window.location.replace('new_game.html');
            // alert("logged in")
        });

        // open endpoint and send data
        sendRequest.open("GET", "http://localhost:5000/app/auth");
        sendRequest.send(loginInfo);
    }

    // define location of form to get data from
    const login = document.getElementById("loginForm");

    // listener that calls send data function
    login.addEventListener("submit", function (event) {
        event.preventDefault();
        sendData();
    });
});