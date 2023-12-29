const cl = console.log;
// ############ Get html Elements ####################

const getyear = document.getElementById("year");
const getmonth = document.getElementById("month");
const getdate = document.getElementById("date");
const ageform = document.getElementById("ageform");

// ########## Task 7 - Weekday or weekend? #################

ageform.addEventListener("submit", (eve) => {
    eve.preventDefault();
    let daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let curryear = new Date().getFullYear();
    
    let day = new Date(getyear.value, getmonth.value, getdate.value).getDay();
    if(isNaN(getyear.value)||isNaN(getmonth.value)||isNaN(getdate.value)){
        alert(`please enter valid Date`);
    }else if(getyear.value <= curryear && (getdate.value > 0 && getdate.value < 32) && (getmonth.value > 0 && getmonth.value < 13)){

        if(daysInWeek[day].toLowerCase() === "sunday" || daysInWeek[day].toLowerCase() === "saturday"){
            Swal.fire({
                position: "center",
                title: "It's a weekend !!!",
              });
        }else{
            Swal.fire({
                position: "center",
                title: "It's a weekday...",
              });
        }
    }else{
        alert(`please Enter Valid Date, Year and Month`);
    }
    getyear.value = ""; getmonth.value = ""; getdate.value = "";
})

