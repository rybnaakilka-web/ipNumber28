var userAge = prompt("Как к вам обращаться?");

var titleText = "Привет, мой друг! Добро пожаловать на сайт группы отелей Selly Hotels!";

if (userAge !== null && userAge.trim() !== "") {
    titleText = "Привет, " + userAge.trim() + "! Добро пожаловать на сайт группы отелей Selly Hotels!";
}

var promoTitle = document.getElementById("promoTitle");
promoTitle.innerText = titleText;