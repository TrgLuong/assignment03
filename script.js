"use strict";
// FORM NHAP EMAIL
const emailSubmit = document.querySelector(".btn-primary");
const infoForm = document.querySelector(".info");
const emailInput = document.querySelector(".email-input");

emailSubmit.addEventListener("click", function () {
  const email = document.querySelector("#exampleInputEmail1").value;
  // console.log(email);
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result = regex.test(email);
  // console.log(result);
  // console.log("click");
  if (result) {
    emailInput.classList.add("visually-hidden");
    infoForm.classList.remove("visually-hidden");
  } else {
    if (email === "") {
      alert("Bạn chưa nhập emal");
    } else {
      alert("Email sai định dạng! Xin nhập lại.");
    }
  }
});
//Hien thong tin JOB INFO

const hvBtn = document.querySelectorAll(".hover-button");
let hvBtnText = document.querySelectorAll(".hover-button");
const hdInfo = document.querySelectorAll(".hidden-info");
// console.log(hvBtnText[0].innerHTML);

for (let i = 0; i < hvBtnText.length; i++) {
  hvBtnText[i].innerHTML = "View more";
  hvBtn[i].addEventListener("click", function () {
    // console.log(hvBtnText[i].innerHTML);
    if (hvBtnText[i].innerHTML === "View more") {
      hdInfo[i].classList.remove("visually-hidden");
      hvBtnText[i].innerHTML = "View less";
    } else {
      hdInfo[i].classList.add("visually-hidden");
      hvBtnText[i].innerHTML = "View more";
    }
  });
}
