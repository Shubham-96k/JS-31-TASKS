const cl = console.log;
// ############ Get html Elements ####################

const trnctvalue = document.getElementById("trnctvalue");
const truncatebtn = document.getElementById("truncatebtn");

// ########## Truncate string #################

truncatebtn.addEventListener("click", () => {
    if(trnctvalue.value.length <= 6){
        alert(`value is too short must be more than 6 character`);
    }else{
        Swal.fire(`Truncated result = ${trnctvalue.value.slice(3, trnctvalue.value.length - 3)}`);  
    }
    trnctvalue.value = "";
})

