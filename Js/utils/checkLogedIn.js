const logedStatusLc = localStorage.getItem("logedStatus");
const userNameLc = localStorage.getItem("userName");

export default function checkIfLogedIn(){
    if (logedStatusLc === "true") {
        console.log("true");
        headerLogIn.innerHTML = userNameLc;
    };
};