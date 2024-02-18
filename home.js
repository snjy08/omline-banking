const username = localStorage.getItem("username")
usertitle.innerHTML = `<h3>Welcome ${username}</h3>`
// depositing operation
function depositingoptn() {
    let key = JSON.parse(localStorage.getItem(homepwd.value))
    console.log(key);
    if (key !== null && amountdepo.value == "" || homepwd.value == "") {
        alert("Please fill all the details")
    } else if (key !== null && homepwd.value == key.upwd) {
        if (amountdepo.value <= 0) {
            alert("Invalid Input")
            depositform.reset();
        }
        else {
            key.balance = parseInt(key.balance) + parseInt(amountdepo.value);
            document.getElementById('status').innerHTML = `Amount Deposited ,Your Current Balance is Rs : ${key.balance}`;
            localStorage.setItem(key.upwd, JSON.stringify(key))
            depositform.reset();
        }
    } else {
        alert("Incorrect Password :Cannot Deposit ")
        depositform.reset();
    }
}


function withdrawoptn() {
    let key = JSON.parse(localStorage.getItem(homepwd2.value))
    console.log(key);
    if (amountwithdra.value == "" || homepwd2.value == "") {
        alert("Please fill all the details")
    } else if (homepwd2.value != key.upwd) {
        alert("Incorrect Password :Cannot withdraw ")
        depositform.reset();
    } else {
        if (amountwithdra.value >= key.balance) {
            alert("insufficient balance")
            depositform.reset();
        }
        else {
            key.balance = parseInt(key.balance) - parseInt(amountwithdra.value);
            document.getElementById('newstatus').innerHTML = `Amount Withdrawn ,Your Current Balance is Rs : ${key.balance}`;
            localStorage.setItem(key.upwd, JSON.stringify(key))
            depositform.reset();
        }
    }
}

function logout() {
    window.location = './index.html';
    // localStorage.clear();
}