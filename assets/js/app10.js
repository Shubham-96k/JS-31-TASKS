const cl = console.log;
// ############ Get html Elements ####################

const copytext = document.getElementById("copytext");
const pastetext = document.getElementById("pastetext");
const copybtn = document.getElementById("copybtn");
const pastebtn = document.getElementById("pastebtn");

// ########## Task 10 - Copy and paste the text #################

copybtn.addEventListener("click", () => {
    let data = copytext.value;
    if(data){
        localStorage.setItem("copydata", data);
        pastetext.value = "";
    }else{
        alert('No input found');
    }
})
pastebtn.addEventListener("click", () => {
    let getcopytext = localStorage.getItem("copydata");
    if(getcopytext){
        pastetext.value = getcopytext;
        copytext.value = "";
    }else{
        alert('No input found');
    }
})