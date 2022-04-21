const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
});

const colors = ["#00BFFF", "Violet", "#FFD700", "#48D1CC", "#DC143C"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach((item) => {
  item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-button")).forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

function search() {
  const searchBtn = document.getElementById("search-btn");
  const travelForm = document.getElementById("travelForm");

  const location = document.getElementById("location").value;
  const destination = document.getElementById("destination").value;

  if (location === "" || destination === "") alert("Please enter a location and destination");
  else {
    searchBtn.style.display = "none";
    travelForm.style.display = "flex";
  }
}
$('input[name="dates"]').daterangepicker();
