const container = document.querySelector("#test:not(#not)");
const count = document.getElementById("count");
const amount = document.getElementById("amount");
const select = document.getElementById("movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");
const btnsatınal = document.getElementById("buy");
const assasin = document.getElementById("assasin-container");
const john = document.getElementById("john-container");
const system = document.getElementById("system-container");
const thor = document.getElementById("thor-container");
let img1 = document.querySelector("#img1");

img1.style.backgroundImage = "none";
assasin.style.display = "none";
john.style.display = "none";
system.style.display = "none";
thor.style.display = "none";

btnsatınal.addEventListener("click", () => {
  const selectedElements = document.querySelectorAll(".selected");
  selectedElements.forEach((element) => {
    element.classList.remove("selected");
    element.classList.add("reserved");
    count.innerHTML = '0';
    amount.innerHTML = '0';

  });
});
function clickselectpage() {
  const selectedElements = document.querySelectorAll(".selected");
  selectedElements.forEach((element) => {
    element.classList.remove("selected");
  });
}
select.addEventListener("change", () => {
  const selectedValue = select.value;
  if (selectedValue === "50") {
    assasin.style.display = "block";
    john.style.display = "none";
    system.style.display = "none";
    thor.style.display = "none";
  } else if (selectedValue === "60") {
    assasin.style.display = "none";
    john.style.display = "block";
    system.style.display = "none";
    thor.style.display = "none";
  } else if (selectedValue === "55") {
    assasin.style.display = "none";
    john.style.display = "none";
    system.style.display = "block";
    thor.style.display = "none";
  } else if (selectedValue === "65") {
    assasin.style.display = "none";
    john.style.display = "none";
    system.style.display = "none";
    thor.style.display = "block";
  }
});

getFromlocalStorage();
calculateTotal();

container.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
    calculateTotal();
  }
});
select.addEventListener("change", function (e) {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = container.querySelectorAll(".seat.selected");
  const selectedSeatsArr = [];
  const seatsArr = [];
  selectedSeats.forEach(function (seat) {
    selectedSeatsArr.push(seat);
  });
  seats.forEach(function (seat) {
    seatsArr.push(seat);
  });
  let selectedSeatsIndexes = selectedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });
  let selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeats.length;
  amount.innerText = selectedSeatsCount * select.value;

  saveTolocalStorage(selectedSeatsIndexes);
}

function saveTolocalStorage(indexes) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexes));
  localStorage.setItem("selectedSeatsMovie", select.selectedIndex);
}

function getFromlocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const selectedMovieIndex = localStorage.getItem(
    localStorage.getItem("selectedMovieIndex")
  );
  if (selectedSeats != null && selectedSeats.length > 0) {
    seats.forEach(function (seat, index) {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }
  if (selectedMovieIndex != null) {
    select.selectedIndex = selectedMovieIndex;
  }
}
select.addEventListener("change", () => {
  const selectedValue = select.value;
  if (selectedValue === "50") {
    clickselectpage();
    img1.style.backgroundImage = "url('img/assasin/Assasin2.jpg')";
    img1.style.background =
      "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 50%), url(img/assasin/Assasin2.jpg)";
    img1.style.backgroundSize = "contain";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.transition = "0.5s";
  } else if (selectedValue === "60") {
    clickselectpage();
    img1.style.backgroundImage = "url('img/john/johnwick2.jpg')";
    img1.style.background =
      "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 50%), url('img/john/johnwick2.jpg')";
    img1.style.backgroundSize = "contain";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.transition = "0.5s";
  } else if (selectedValue === "55") {
    clickselectpage();
    img1.style.backgroundImage = "url('img/system/system1.jpg')";
    img1.style.background =
      "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 50%), url('img/system/system1.jpg')";
    img1.style.backgroundSize = "contain";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.transition = "0.5s";
  } else if (selectedValue === "65") {
    clickselectpage();
    img1.style.backgroundImage = "url('img/thor/thor1.jpg')";
    img1.style.background =
      "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0) 50%), url('img/thor/thor1.jpg' )";
    img1.style.backgroundSize = "contain";
    img1.style.backgroundRepeat = "no-repeat";
    img1.style.transition = "0.5s";
  }
});
