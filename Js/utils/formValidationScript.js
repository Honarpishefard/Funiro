//create instance of class null, NaN,undefined,admin,empty
const userName = document.getElementById("inp_uname");

let myForm = new octaValidate('form_demo', {
    strictMode: true,
    strictWords: ["null", "empty", "undefined", "NaN"]
});
//add custom rule
myForm.customRule("PASS", /^[A-Za-z]\w{7,14}$/, "Please enter a valid password");
//define callback
myForm.validateCallBack(function () {
    //success callback
    showAlert('No Validation error', 'alert-success');
}, function () {
    //error callback
    showAlert(`${(Number(myForm.status()) !== 1) ? myForm.status() + " validation errors" : myForm.status() + " validation error"}`, 'alert-danger');
});

/*Handle submission here*/
let formEl = document.querySelector('#form_demo');

let logedStatus = false;
localStorage.setItem("logedStatus", logedStatus);

formEl.addEventListener('submit', function (e) {
    e.preventDefault();
    //invoke the validate method
    if (myForm.validate()) {
        //return type == true - > validation successful
        showAlert('No Validation error', 'alert-success');
        console.log("ok");
        window.location.href = "./../../html/home-page.html";
        logedStatus = true;
        localStorage.setItem("logedStatus", logedStatus);
        console.log(userName.value);
        localStorage.setItem("userName" , userName.value);
        //process form data here
    } else {
        //return type == false - > validation failed
        showAlert(`${myForm.status()} validation errors`, 'alert-danger');
    }
})

//custom function to toggle alert snackbar
function showAlert(text = "Light Attracts Bugs!", addClass = "alert-danger") {
    const p = document.querySelector("#alert_snackbar");
    p.classList = "";
    p.classList.add("show", addClass);
    p.innerHTML = text;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        p.classList.remove("show");
    }, 3000);
};

