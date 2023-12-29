const cl = console.log;
// ############ Get html Elements ####################

const numbtn = document.getElementById("numbtn");
const min = document.getElementById("first");
const max = document.getElementById("second");
const result = document.getElementById("randm");

// ########## Generate any random number between "First Number" and "Second Number" onclick of "Show Number" #################


numbtn.addEventListener("click", () => {
    if(isNaN(min.value) || isNaN(max.value)){
        alert('please enter valid number');
    }else if(min > max){   
        alert(`First Number value should be lesser`)
    }else{
        result.value = Math.ceil((Math.random() * (max.value - min.value - 1)) + parseFloat(min.value));
    }
    
})

