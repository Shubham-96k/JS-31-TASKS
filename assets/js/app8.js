const cl = console.log;
// ############ Get html Elements ####################

const str = document.getElementById("strvalue");
const showbtn = document.getElementById("showbtn");

// ########## Task 8 - Capitalize the string #################

showbtn.addEventListener("click", () => {
    if(isNaN(str.value)){
        let result = "";
        str.value.split(" ").forEach(ele => {
            let capstr = ele[0].toUpperCase() + ele.slice(1);
            result += " " + capstr;
            Swal.fire(`${result}`);
         });
    }else{
        alert("Please Enter Valid Input")
    }
    str.value = "";
})