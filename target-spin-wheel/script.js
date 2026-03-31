const spinBtn = document.getElementById("spinBtn");
let hasSpun = localStorage.getItem("spun");

function getDiscount() {
  const rand = Math.random();

  if (rand < 0.8) return 5;
  else if (rand < 0.95) return 10;
  else return 15;
}

spinBtn.addEventListener("click", () => {
  if (hasSpun) {
    alert("You have already used your spin.");
    return;
  }

  const discount = getDiscount();

  let degree;
  if (discount === 5) degree = 3600 + 60;
  if (discount === 10) degree = 3600 + 180;
  if (discount === 15) degree = 3600 + 300;

  document.getElementById("wheel").style.transform =
    `rotate(${degree}deg)`;

  setTimeout(() => showResult(discount), 4000);

  localStorage.setItem("spun", true);
});

function showResult(discount) {
  const code =
    "TARGET" +
    discount +
    "-" +
    Math.floor(1000 + Math.random() * 9000);

  document.getElementById("resultText").innerText =
    "Congratulations! You won " + discount + "% OFF";

  document.getElementById("coupon").innerText = code;

  document.getElementById("resultModal").style.display = "flex";
}

function copyCode() {
  const code = document.getElementById("coupon").innerText;
  navigator.clipboard.writeText(code);
  alert("Code copied!");
}
