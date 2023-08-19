let user_name = document.querySelector(".grid1 input");
let user_number = document.querySelector(".grid2 input");
let months = document.getElementById("MM");
let year = document.getElementById("YY");
let CVC_number = document.getElementById("cvc");
let Card_number = document.querySelector(".logo h1");
let name_opt = document.getElementById("user_name");
let month_opt = document.getElementById("user_month");
let year_opt = document.getElementById("user_year"); // Corrected variable name
let cvc_opt = document.getElementById("cvc-num"); // Corrected variable name

let err_ele = document.querySelector(".grid2 small");
let err_ele2 = document.querySelector(".grid1 small");
let MM_YY_err = document.getElementById("MM_YY_err");
let cvc_err = document.getElementById("cvc_err");

user_number.addEventListener("input", (even) => {
  limitdigits(even.target);
  let remove_spaces = even.target.value.replace(/\s/g, "");

  let split = remove_spaces.match(/.{1,4}/g);

  let final_opt = split ? split.join("  ") : "";

  Card_number.textContent = final_opt;
});

function limitdigits(input) {
  input.value = input.value.replace(/\D/g, ""); // Corrected regular expression

  if (input.value.length > 16) {
    err_ele.style.display = "block";
    err_ele.innerHTML = "Only 16 Digits are allowed";
    input.value = input.value.slice(0, 16);
  } else {
    err_ele.style.display = "none";
  }
}

user_name.addEventListener("input", (nam) => {
  onlyalphabates(nam.target);
  name_opt.textContent = nam.target.value;
});

function onlyalphabates(alpha) {
  let not_digits = /\d/g;
  if (not_digits.test(alpha.value)) {
    err_ele2.style.display = "block";
    err_ele2.innerHTML =
      "Error: Input should only contain alphabetic characters.";
  } else {
    err_ele2.style.display = "none";
  }
  alpha.value = alpha.value.replace(not_digits, "");
}

months.addEventListener("input", (month) => {
  isvalidmonth(month.target);
  month_opt.innerHTML = month.target.value;
});

function isvalidmonth(month) {
  let valid_digits = /^\d*$/;
  if (!valid_digits.test(month.value)) {
    month.value = "";
    MM_YY_err.textContent = "Only digits are allowed";
    return;
  } else if (month.value > 12) {
    month.value = "12";
    MM_YY_err.style.display = "block";
    MM_YY_err.textContent = "Must be a valid Month";
  } else {
    MM_YY_err.style.display = "none";
  }
}

year.addEventListener("input", (yr) => {
  isvalidyear(yr.target);
  year_opt.innerHTML = yr.target.value;
});

// Year validation
function isvalidyear(year) {
  let date = new Date();
  let current_year = date.getFullYear();
  let only_digits = /^\d*$/;
  if (!only_digits.test(year.value)) {
    year.value = "";
    MM_YY_err.style.display = "block";
    MM_YY_err.textContent = "Only Digits are allowed";
    return;
  } else if (year.value >= current_year) {
    year.value = "";
    MM_YY_err.style.display = "block";
    MM_YY_err.textContent = "Must be in the past";
  } else {
    MM_YY_err.style.display = "none";
  }
}

CVC_number.addEventListener("input", (num) => {
  isvalidCVC(num.target);
  cvc_opt.innerHTML = num.target.value;
});

function isvalidCVC(cvc) {
  let only_digits = /^\d*$/;

  if (!only_digits.test(cvc.value)) {
    cvc.value = "";
    cvc_err.style.display = "block";
    cvc_err.innerHTML = "Only digits are allowed";
    return;
  } else if (cvc.value.length > 3) {
    cvc.value = cvc.value.slice(0, 3);
    cvc_err.style.display = "block";
    cvc_err.innerHTML = "3 Digits are allowed";
  } else {
    cvc_err.style.display = "none";
  }
}
