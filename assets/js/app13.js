const cl = console.log;

// ############ Get html Elements ####################

const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const number = document.getElementById("number");

// ########## Task 13 - Increase and decrease number #################


let minusnum = 0;

increasebtn.addEventListener("click", () => {
    minusnum += 1;
    number.innerHTML = minusnum;
})

decreasebtn.addEventListener("click", () => {
    minusnum -= 1;
    number.innerHTML = minusnum;
})