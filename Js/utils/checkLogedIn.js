const logedStatusLc = localStorage.getItem("logedStatus");
const userNameLc = localStorage.getItem("userName");

const headerLogIn = document.getElementById("headerLogIn");



export default function checkIfLogedIn() {

    if (logedStatusLc === "true") {
        headerLogIn.innerHTML = userNameLc;
        headerLogIn.href = "#";

        const logOutDiv = document.createElement("div");
        logOutDiv.style.backgroundColor = "rgba(255, 255, 255, 0.72)";
        logOutDiv.style.backdropFilter = "blur(31px)";
        logOutDiv.style.position = "absolute";
        logOutDiv.style.width = "14rem";
        logOutDiv.style.height = "8rem";
        logOutDiv.style.zIndex = "2";
        logOutDiv.style.borderRadius = "1rem";
        logOutDiv.style.right = "1rem";
        logOutDiv.style.marginTop = "1rem";
        logOutDiv.style.display = "none";
        logOutDiv.style.flexDirection = "column";
        logOutDiv.style.justifyContent = "center";
        logOutDiv.style.alignItems = "center";

        const logOutText = document.createElement("p");
        const logOutBttn = document.createElement("button");
        logOutDiv.appendChild(logOutText);
        logOutDiv.appendChild(logOutBttn);
        logOutBttn.innerHTML = "log out";
        logOutText.innerHTML = "want to log out?";
        logOutBttn.style.border = "none";
        logOutBttn.style.backgroundColor = "#D4AF8C";
        logOutBttn.style.padding = "0.3rem 1.5rem";

        logOutBttn.addEventListener("click", () => {
            console.log("log out");
            localStorage.setItem("logedStatus", false);
            checkIfLogedIn();
            location. reload();
        });

        headerLogIn.appendChild(logOutDiv);



        headerLogIn.addEventListener("click", () => {
            if (logOutDiv.style.display === "none") {
                logOutDiv.style.display = "flex";
            } else {
                logOutDiv.style.display = "none";
            }



        });




    };
};