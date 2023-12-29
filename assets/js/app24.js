const cl = console.log;


const icon = document.getElementById("changetype");
const inputcontrol = document.getElementById("inputcontrol");

let flag = true;

const onShowpassword = () => {
    if(flag){
        inputcontrol.setAttribute('type','text')
    }else{
        inputcontrol.setAttribute('type','password')
    }
    icon.classList.toggle('fa-eye');
    icon.classList.toggle('fa-eye-slash');
    flag=!flag;
}
 



icon.addEventListener("click",onShowpassword)

