document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-elements");
  const fname = document.getElementById("fname");
  const lname = document.getElementById("lname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirm = document.getElementById("confirm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (validateInputs()) {
      form.submit();
    }
  });

  const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.classList.add("error");
    inputControl.classList.remove("succes");
  };
  const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
  };
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  const validateInputs = () => {
    let isValid = true;
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passValue = password.value.trim();
    const confirmValue = confirm.value.trim();

    //first name
    if (fnameValue === "") {
      setError(fname, "*First name cannot be empty ");
      isValid = false;
    } else {
      setSuccess(fname);
    }
    //last name
    if (lnameValue === "") {
      setError(lname, "*Last name cannot be empty ");
      isValid = false;
    } else {
      setSuccess(lname);
    }
    //email
    if (emailValue === "") {
      setError(email, "*Email is required");
      isValid = false;
    } else if (!isValidEmail(emailValue)) {
      setError(email, "*Provide an email addres");
      isValid = false;
    } else {
      setSuccess(email);
    }
    //password
    if (passValue === "") {
      setError(password, "Password is required");
      isValid = false;
    } else if (passValue.length < 8) {
      setError(password, "*Password must be atleast 8 characters");
      isValid = false;
    } else {
      setSuccess(password);
    }

    //make sure both passwords are the same
    if (confirmValue === "") {
      setError(confirm, "*Please confirm your password");
      isValid = false;
    } else if (confirmValue !== passValue) {
      setError(confirm, "*Passwords do not match");
      isValid = false;
    } else {
      setSuccess(confirm);
    }
  };
});
