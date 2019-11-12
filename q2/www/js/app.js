function validateEmail() {
  var email = document.getElementById("email").value;

  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var test = re.test(String(email).toLowerCase());

  if (!test) {
    alert('Please enter a valid email address.')

    return false;
  }

  return true;
}

function validateEmailNoRegex() {
  var email = document.getElementById("email").value;

  if (email == '') {
    alert("Empty email address.");
    document.getElementById("email").focus();

    return false;
  }

  return true;
}

function validateUsername() {
  var username = document.getElementById("username").value;
  var re = /^[a-zA-Z].{8,24}$/;
  var testusername = re.test(username);

  if (!testusername || username=='') {
    alert("Please enter a valid username.");
      return false;
    }
    return true;
  }

function myFunction() {
  var x = document.getElementById("password");
  if (x.type == "password") {
    x.type= "text";
  } else {
    x.type = "password";
    }
  }
function btnEnable (){
  document.getElementById("btnSubmit").diabled=false;
}

function validatePassword() {
  var password = document.getElementById("password").value;
  var re = /^[a-zA-Z].{8,24}$/;
  var testpassword = re.test(password);

  if (!testpassword || password=='') {
    alert("Please enter a valid password.");
      return false;
    }
    return true;
  }

function validateForm() {
  if (!validateEmail()) {
    return false;
  }

  if (!validateUsername()) {
    return false;
  }

  if (!validatePassword()) {
    return false;
  }

  return true;
}
