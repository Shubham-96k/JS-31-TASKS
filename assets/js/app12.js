const cl = console.log;
// ############ Get html Elements ####################

const mintosec = document.getElementById("mintosec");
const secbtn = document.getElementById("secbtn");
const minbtn = document.getElementById("minbtn");
const hrtomin = document.getElementById("hrtomin");
const sectomin = document.getElementById("sectomin");
const minbtn2 = document.getElementById("minbtn2");
const mintohr = document.getElementById("mintohr");
const hrbtn = document.getElementById("hrbtn");
const sectohr = document.getElementById("sectohr");
const btn = document.getElementById("btn");

// ########## Task 12 - Conversion of hours, minutes & seconds #################


secbtn.addEventListener("click", () => {
    if(mintosec.value){
        if(isNaN(mintosec.value) || mintosec.value < 0){
            alert('please enter valid number');
        }else{
            let seconds = mintosec.value * 60;
            Swal.fire(`${seconds} seconds`);
        }
    }else{
        alert(`pleast insert value`);
    }
    mintosec.value = "";
})

minbtn.addEventListener("click", () => {
    if(hrtomin.value){
        if(isNaN(hrtomin.value) || hrtomin.value < 0){
            alert('please enter valid number');
        }else{
            let seconds = hrtomin.value * 60;
            Swal.fire(`${seconds} minutes`);
        }
    }else{
        alert(`pleast insert value`);
    }
    hrtomin.value = "";
})

minbtn2.addEventListener("click", () => {
    if(sectomin.value){
        if(isNaN(sectomin.value) || sectomin.value < 0){
            alert('please enter valid number');
        }else{
            let seconds = sectomin.value / 60;
            Swal.fire(`${seconds} minutes`);
        }
    }else{
        alert(`pleast insert value`);
    }
    sectomin.value = "";
})

hrbtn.addEventListener("click", () => {
    if(mintohr.value){
        if(isNaN(mintohr.value) || mintohr.value < 0){
            alert('please enter valid number');
        }else{
            let seconds = mintohr.value / 60;
            Swal.fire(`${seconds} hours`);
        }
    }else{
        alert(`pleast insert value`);
    }
    mintohr.value = "";
})

btn.addEventListener("click", () => {
    if(sectohr.value){
        if(isNaN(sectohr.value) || sectohr.value < 0){
            alert('please enter valid number');
        }else{
            let seconds = sectohr.value / 3600; // 60min * 60sec = 3600
            Swal.fire(`${seconds} hours`);
        }
    }else{
        alert(`pleast insert value`);
    }
    sectohr.value = "";
})