const cl = console.log;
// ############ Get html Elements ####################

const number = document.getElementById("number");
const btn = document.getElementById("btn");

// ########## Task 11 - Show next 5 numbers of given number #################


btn.addEventListener("click", () => {
    let givennumber = number.value;
    if(isNaN(givennumber)){
        alert("please enter valid number")
    }else{
        let number = parseFloat(givennumber);
        let result = []
        for(let i = number + 1; i <= number + 5; i++){
            result.push(i);
        }
        Swal.fire(`The next 5 number is ${result[0]}, ${result[1]}, ${result[2]}, ${result[3]} and ${result[4]}`);
    }
    number.value = "";
})