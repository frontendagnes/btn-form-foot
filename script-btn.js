function scriptBtn() {
  let klik = document.querySelector(".klik");
  let klikClose = document.querySelector(".klik-close");
  let links = document.querySelector(".links");

  klikClose.style.display = "none";

  klik.addEventListener("click", function (e) {
    e.preventDefault();
    links.classList.add("activeLinks");
    klik.style.display = "none";
    klikClose.style.display = "block";
  });

  klikClose.addEventListener("click", function (e) {
    e.preventDefault();
    links.classList.remove("activeLinks");
    klikClose.style.display = "none";
    klik.style.display = "block";
  });
}
export default function () {
  scriptBtn();
}
