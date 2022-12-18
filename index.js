import { navbar } from "./components/navbar.js"; 

let navbar_div=document.getElementById("navbar");
navbar_div.innerHTML=navbar();




import { footer } from "./components/footer.js";

let footer_part = document.getElementById("footer-part")
footer_part.innerHTML  = footer()

// close opened details




const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

const controls = document.querySelectorAll(".tab-control");
let faqImg = document.querySelector(".imgs");
const imgs = [
  "https://images.unsplash.com/photo-1658915111655-36ef645fa24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1661243038698-dc8b600f23d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
  "https://images.unsplash.com/photo-1661242686756-de9bdeb69ad8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  "https://images.unsplash.com/photo-1661243038841-a8d87ffe151b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
];

// start first img
faqImg.style.background = `url(${imgs[0]}) no-repeat center center`;

// add event listener for all controls
for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", () => {
    faqImg.style.background = `url(${imgs[i]}) no-repeat center center`;
  });
}
