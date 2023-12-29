const cl = console.log;
// ############ Get html Elements ####################

const primeornot = document.getElementById("primeornot");
const checkbtn = document.getElementById("checkbtn");

// ########## Task 1 - Odd or even number #################

checkbtn.addEventListener('click', () => {
    if(isNaN(primeornot.value) || primeornot.value < 0){
        alert('please enter valid number');
    }else{ 
        if(primeornot.value % 2 === 0){
            Swal.fire("The Give Number is Even Number");
        }else{
            Swal.fire("The Give Number is Odd Number");
        }
    }
    primeornot.value = "";
})

