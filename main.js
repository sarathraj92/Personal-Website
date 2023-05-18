function validateForm() {
  
  const userNameValue = document.getElementById("name").value.trim();
  const mobileNumberValue = document.getElementById("mobilenumber").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const subjectValue = document.getElementById("subject").value.trim();
  const messageValue = document.getElementById("message").value.trim();
  const msg1 = document.getElementById("msg1");

  if (userNameValue === "") {
    msg1.innerHTML = "Name must be filled out"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }

  if (/\d/.test(userNameValue)) {
    msg1.innerHTML = "Name must be character"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false
  }

  if (mobileNumberValue === "") {
    msg1.innerHTML = "Mobile Number must be filled out"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }

  if (isNaN(mobileNumberValue)) {
    msg1.innerHTML = "Mobile Number must be Digits"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false
  }

  if (mobileNumberValue.length < 10) {
    msg1.innerHTML = "Mobile Number must have 10 digits"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false
  }

  if (mobileNumberValue.length > 10) {
    msg1.innerHTML = "Mobile Number must have only 10 digits"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false
  }

  if (emailValue === "") {
    msg1.innerHTML = "Email must be filled out"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }

  var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(emailValue)) {
    msg1.innerHTML = "Email must be a valid email address"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }

  if (subjectValue === "") {
    msg1.innerHTML = "Subject must be filled out"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }


  if (messageValue === "") {
    msg1.innerHTML = "Message must be filled out"
    setTimeout(function () {
      msg1.innerHTML = ""
    }, 5000)
    return false;
  }

  return true;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzZ3JHHDjsoQllHHe_U9hSUNuPkBTvOzHqvo3cGxhBqu30eYJpW1oQiexXDUN0x9ZdB/exec'
const form = document.getElementById("form")
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  if (validateForm()) {
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.innerHTML = "Sent Successfully"
        // alert("Sent Successfully")
        setTimeout(function () {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  }
})
