const cl = console.log;

// ############ Get html Elements ####################

const bodybg = document.getElementById("bodybg");
const dangerbtn = document.getElementById("dangerbtn");
const warningbtn = document.getElementById("warningbtn");
const successbtn = document.getElementById("successbtn");
const primarybtn = document.getElementById("primarybtn");
const darkbtn = document.getElementById("darkbtn");

// ########## Task 15 - Change body background #################

dangerbtn.addEventListener("click", () => {
    bodybg.style.backgroundColor = "red";
    bodybg.style.color = "white";
})
warningbtn.addEventListener("click", () => {
    bodybg.style.backgroundColor = "orange";
    bodybg.style.color = "white";
})
successbtn.addEventListener("click", () => {
    bodybg.style.backgroundColor = "green";
    bodybg.style.color = "white";
})
primarybtn.addEventListener("click", () => {
    bodybg.style.backgroundColor = "blue";
    bodybg.style.color = "white";
})
darkbtn.addEventListener("click", () => {
    bodybg.style.backgroundColor = "black";
    bodybg.style.color = "white";
})