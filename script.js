//View more phần kinh nghiệm
var experience = document.getElementById("kinh-nghiem");
var moretext = document.getElementById("more");
var btn1 = document.getElementById("btn_exp");
var isExpanded = false;

btn1.addEventListener("click", function () {
  if (isExpanded) {
    experience.classList.add("open");
    btn1.textContent = "View Less";
    isExpanded = false;
  } else {
    experience.classList.remove("open");
    btn1.textContent = "View More";
    isExpanded = true;
  }
});

//View more phần kỹ năng
var skill = document.getElementById("ky-nang");
var btn2 = document.getElementById("btn_kynang");
var is_skill = false;

btn2.addEventListener("click", function () {
  if (is_skill) {
    skill.classList.add("open");
    btn2.textContent = "View Less";
    is_skill = false;
  } else {
    skill.classList.remove("open");
    btn2.textContent = "View More";
    is_skill = true;
  }
});

//View more phần sở thích
var interest = document.getElementById("so-thich");
var btn3 = document.getElementById("btn_sothich");
var is_interest = false;

btn3.addEventListener("click", function () {
  if (is_interest) {
    interest.classList.add("open");
    btn3.textContent = "View Less";
    is_interest = false;
  } else {
    interest.classList.remove("open");
    btn3.textContent = "View More";
    is_interest = true;
  }
});

//View more phần hoạt động
var active = document.getElementById("hoat-dong");
var btn4 = document.getElementById("btn_hoatdong");
var is_active = false;

btn4.addEventListener("click", function () {
  if (is_active) {
    active.classList.add("open");
    btn4.textContent = "View Less";
    is_active = false;
  } else {
    active.classList.remove("open");
    btn4.textContent = "View More";
    is_active = true;
  }
});

//View more phần học vấn
var education = document.getElementById("hoc-van");
var btn5 = document.getElementById("btn_hocvan");
var is_education = false;

btn5.addEventListener("click", function () {
  if (is_education) {
    education.classList.add("open");
    btn5.textContent = "View Less";
    is_education = false;
  } else {
    education.classList.remove("open");
    btn5.textContent = "View More";
    is_education = true;
  }
});

//View more phần ngôn ngữ
var language = document.getElementById("ngon-ngu");
var btn6 = document.getElementById("btn_ngonngu");
var is_language = false;

btn6.addEventListener("click", function () {
  if (is_language) {
    language.classList.add("open");
    btn6.textContent = "View Less";
    is_language = false;
  } else {
    language.classList.remove("open");
    btn6.textContent = "View More";
    is_language = true;
  }
});

const form = document.getElementById("modal-form");
const emailInput = document.getElementById("input-email");
const hide = document.getElementById("hide");
const modal = document.getElementById("modal-form");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value;
  if (!validateEmail(email)) {
    message.textContent = "Vui lòng nhập định dạng email hợp lệ!";
    message.style.color = "red";
    message.style.display = "block";
    hide.style.display = "none";
    modal.style.display = "block";
  } else {
    message.textContent = "Hãy nhập email để xác thực!";
    hide.style.display = "block";
    modal.style.display = "none";
    message.style.display = "none";
  }
});

function validateEmail(email) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
}
