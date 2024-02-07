function checkPassword(){
let password = document.getElementById('password').value;
let confirmPassword = document.getElementById('confirmPassword').value;
let confirmMessage = document.getElementById('confirm-message');

if(password === confirmPassword){
    confirmMessage.style.color = 'green';
    confirmMessage.textContent = 'password confirmd!';
}
else{
    confirmMessage.style.color = 'red';
    confirmMessage.textContent = 'password do not match';
}

}