const startBtn = document.querySelector(".start-btn");
const popupInfo = document.querySelector(".popup-info");
const exitBtn = document.querySelector(".exit-btn");
console.log(exitBtn);

startBtn.onclick = () => {
    popupInfo.classList.add("active")
}


exitBtn.onclick = () => {
    popupInfo.classList.remove("active")
}