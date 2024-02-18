// onclicking the user should login to the home page
function loginuser(){
    let key = loginpwd.value;
    if (key in localStorage) {
        emp = JSON.parse(localStorage.getItem(key))
        console.log(emp);
        if (emp.anum == loginacno.value && emp.upwd == loginpwd.value) {
            window.location = './home.html';
        } else {
            alert('Account Number & Password is Not Matching !')
        }
    } else {
        alert('This Account number doesnot Exists')
    }
}