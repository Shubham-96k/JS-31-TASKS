const cl = console.log;
// ############ Get html Elements ####################

const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const showbtn = document.getElementById("showbtn");

// ########## Find highest and lowest number #################

showbtn.addEventListener("click", () => {
    if(isNaN(first.value) || isNaN(second.value) || isNaN(third.value)){
        alert('please enter valid number');
    }else{
        let max = Math.max(first.value, second.value, third.value);
        let min = Math.min(first.value, second.value, third.value);
        Swal.fire(`Highest Number is : ${max} & Lowest Number is : ${min}`);
    }
    first.value = "";
    second.value = "";
    third.value = "";
})

