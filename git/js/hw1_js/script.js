let InAge = +prompt('How old are you?');
let InName = prompt('What is u name?');

function checkAge(InAge){
if(Number.isInteger(InAge) || InAge != ""){
    return InAge
} else {
    return InAge = +prompt('How old are you?');
}
}
let checkedAge = checkAge(InAge);

function checkName(InName){
    const regex = /[0-9]/;
if(regex.test(InName) || InName === ""){
    return InName = prompt('What is u name?');
} else {
    return InName
}
}
let checkedName = checkName(InName);

if (checkedAge < 18) {
    alert('You are not allowed to visit this website');
}  else if (checkedAge >= 18 && checkedAge <= 22) {
    if (confirm('Are you sure you want to continue?') == true) {
        alert('Welcome, ', checkedName);
    } else {
        alert('You are not allowed to visit this website');
    }
} else {
    alert('Welcome, ', checkedName);
}



