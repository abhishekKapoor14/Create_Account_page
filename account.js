const form = document.getElementById('form');
const USERNAME = document.getElementById('USERNAME');
const email = document.getElementById('email');
const Num = document.getElementById('Number');
const pwd1 = document.getElementById('pwd1');
const pwd2 = document.getElementById('pwd2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    //get the values from the inputs
    const UsernameValue = USERNAME.value.trim();
    const emailValue = email.value.trim();
    const NumberValue = Num.value.trim();
    const pwd1Value = pwd1.value.trim();
    const pwd2Value = pwd2.value.trim();

    if (USERNAME.Value === '') {
        //add error class
        //show error
        setErrorFor(USERNAME, 'username cannot be blank');
    }
    else {
        //add success class
        setSuccessFor(USERNAME);
    }
    if (emailValue === '') {
        setErrorFor(email, 'email cannot be blank');
    }
    else if (!isEmail(emailValue)) {
        setErrorFor(email, 'no special characters are allowed');
    }
    else {
        setSuccessFor(email);
    }
    if (NumberValue === "") {
        setErrorFor(Num, 'please put your 10 digits number');
    }
    else {
        setSuccessFor(Num);
    }
    if (pwd1Value === '') {
        setErrorFor(pwd1, 'password cannot be blank');
    }
    else {
        setSuccessFor(pwd1);
    }
    if (pwd2Value === '') {
        setErrorFor(pwd2, 'password cannot be blank');
    }
    else if (pwd1Value !== pwd2Value) {
        setErrorFor(pwd2, 'password does not match');
    }
}
function setErrorFor(input, message) {
    console.log(input)
    console.log(message)
    console.log(input.parentElement)
    console.log(input.parentNode)



    formControl = input.parentElement; //.form-control
    const small = formControl.querySelector('small');
    //add error message inside small
    small.innerText = message;
    //add error class
    formControl.className = 'form-control error';
}
function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@gmail.com[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}

