// creating new user to the local storage
function newuser(){
    const newacntuser = {
        uname : nameuser.value,
        anum : numberaccount.value,
        upwd : userpwd.value,
        balance: 0
    }
    if (newacntuser.uname == "" || newacntuser.anum == "" || newacntuser.upwd == "") {
        alert("Please fill all the details")
    } else {
        if (newacntuser.anum in localStorage) {
            alert("User already exists")
        } else {
            localStorage.setItem(newacntuser.upwd, JSON.stringify(newacntuser));
            localStorage.setItem("username",newacntuser.uname)
            alert("User Account details updated Succesfully");
            document.getElementById("registerform").reset();
            window.location = './login.html';
        }
    }
}


// moving to the login page
function signin(){
    window.location = './login.html';
}