function validateForm(event){
  event.preventDefault();
  const username=document.getElementById('username').value;
  const password=document.getElementById('password').value;
  if(!isValidEmail(username)){
      document.getElementById('error').textContent='Invalid Email Format';
      alert("Please enter a valid email address");
      return;
  }
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@)[A-Za-z\d@]+$/;

if (!passwordRegex.test(password)) {
    alert("Password must contain an uppercase letter, a number, and only the '@' symbol as a special character");
    return;
}
  if(password==='SmartServTest@123'){
      window.location.href='dashboard.html';
  }
  else{
      document.getElementById('error').textContent='Error!! Retry';
  }
}

function isValidEmail(email){
  const emailReg= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return emailReg.test(email);
}