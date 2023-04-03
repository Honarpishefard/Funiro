//create instance of class null, NaN,undefined,admin,empty
const userName = document.getElementById("inp_uname");

let myForm = new octaValidate('form_demo', {
    strictMode: true,
    strictWords: ["null", "empty", "undefined", "NaN"]
});

myForm.customRule("PASS", /^[A-Za-z]\w{7,14}$/, "Please enter a valid password");

myForm.validateCallBack(function () {

    showAlert('No Validation error', 'alert-success');
}, function () {

    showAlert(`${(Number(myForm.status()) !== 1) ? myForm.status() + " validation errors" : myForm.status() + " validation error"}`, 'alert-danger');
});

let formEl = document.querySelector('#form_demo');

let logedStatus = false;
localStorage.setItem("logedStatus", logedStatus);

formEl.addEventListener('submit', function (e) {
    e.preventDefault();

    if (myForm.validate()) {

        showAlert('No Validation error', 'alert-success');
        console.log("ok");
        window.location.href = "./../../html/home-page.html";
        logedStatus = true;
        localStorage.setItem("logedStatus", logedStatus);
        console.log(userName.value);
        localStorage.setItem("userName" , userName.value);

    } else {
        showAlert(`${myForm.status()} validation errors`, 'alert-danger');
    }
})

function showAlert(text = "Light Attracts Bugs!", addClass = "alert-danger") {
    const p = document.querySelector("#alert_snackbar");
    p.classList = "";
    p.classList.add("show", addClass);
    p.innerHTML = text;

    setTimeout(function () {
        p.classList.remove("show");
    }, 3000);
};

