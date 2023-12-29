const cl = console.log;
// ############ Get html Elements ####################

const calcbtn = document.getElementById("calcbtn");
const value1 = document.getElementById("value1");
const value2 = document.getElementById("value2");

// ########## Task 2 - Addition, substraction, multiplication and dividation #################

calcbtn.addEventListener('click', () => {
    if(isNaN(value1.value) || isNaN(value2.value)){
        alert('please enter valid number');
    }else{
        let add = parseFloat(value1.value) + parseFloat(value2.value);
        let minus = value1.value - value2.value;
        let multiply = value1.value * value2.value;
        let divide = value1.value / value2.value;
        
        Swal.fire(`Addition : ${add}, Substraction : ${minus}, Multiplication : ${multiply}, Dividation : ${divide}`);
    }
    value1.value = "";
    value2.value = "";
})