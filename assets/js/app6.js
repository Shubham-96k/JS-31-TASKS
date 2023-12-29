const cl = console.log;
// ############ Get html Elements ####################

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const birthyear = document.getElementById("birthyear");
const ageform = document.getElementById("ageform");

// ########## Concatenate string #################

ageform.addEventListener("submit", (eve) => {
    eve.preventDefault();
    if(isNaN(birthyear.value)){
        alert(`Please Enter Valid BirthYear`);
    }else{
        let age = new Date().getFullYear() - birthyear.value;
        Swal.fire(`Age of ${fname.value} ${lname.value} is ${age}`);
    }
    fname.value = ""; lname.value = ""; birthyear.value = "";
})

