const cl = console.log;
// ############ Get html Elements ####################

const date1 = document.getElementById("datefirst");
const date2 = document.getElementById("datesecond");
const button = document.getElementById("btn");

// ########## Task 9 - Calculate number of days between 2 dates #################

button.addEventListener("click", () => {
    let startdate = new Date(date1.value);
    let enddate = new Date(date2.value);
    let timediff = enddate.getTime() - startdate.getTime();
    let noofDays = timediff/(1000 * 3600 * 24);
    if(noofDays == 1 || noofDays == -1){
        Swal.fire(`${noofDays} Day`);
    }else{
        Swal.fire(`${noofDays} Days`);
    }
    date1.value = ""; date2.value = "";
})