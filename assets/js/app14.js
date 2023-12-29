const cl = console.log;

// ############ Get html Elements ####################

const btn = document.getElementById("btn");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

// ########## Task 14 - Parameter and arguments #################

const afterclick = ((num1,num2) => {
    if(num1 || num2){
        if(isNaN(num1) || isNaN(num2)){
            alert("please enter valid number")
        }else{
            let sum = parseFloat(num1) + parseFloat(num2);
            Swal.fire(`sum of this two number is ${sum}`);
        }
        number1.value = ""; number2.value = "";
    }else{
        alert('please insert number')
    }
})

const onClick = () => {
    afterclick(number1.value,number2.value);
}


btn.addEventListener("click", onClick);