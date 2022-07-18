let wins = 0;
let losses = 0;
let cards = [];
let sum = 0;

function init() {
  cards = [];
  sum = 0;
  document.getElementById("retry").style.display = "none";
  cards[0] = Math.floor(Math.random() * 10) + 2;
  cards[1] = Math.floor(Math.random() * 10) + 2;
  sum = calcSum(cards);
  displayElements(cards, sum);
  checkScore(sum);
}

function checkScore(sum) {
  if (sum < 21) {
    document.getElementById("question-el").textContent = "Do you want to hit or stand?";
    document.getElementById("hit-stand").style.display = "block";
  } else if (sum == 21) {
    document.getElementById("question-el").textContent = "PERFECT 21! YOU WON!";
    document.getElementById("hit-stand").style.display = "none";
    document.getElementById("retry").style.display = "block";
    wins++;
    document.querySelector("#wins").textContent = wins;
  } else {
    document.getElementById("question-el").textContent = "BUST!";
    document.getElementById("hit-stand").style.display = "none";
    document.getElementById("retry").style.display = "block";
    losses++;
    document.querySelector("#losses").textContent = losses;
  }
}

function hit() {
  let newCard = Math.floor(Math.random() * 10) + 2;
  cards.push(newCard);
  sum = calcSum(cards);
  displayElements(cards, sum);
  checkScore(sum);
}

function stand() {
  dealer_cards = [];
  while (calcSum(dealer_cards) <= sum) {
    let newCard = Math.floor(Math.random() * 10) + 2;
    dealer_cards.push(newCard);
  }
  if (calcSum(dealer_cards) <= 21) {
    document.querySelector("#sum-el").textContent = "Dealer's Hand: " + calcSum(dealer_cards);
    document.getElementById("question-el").textContent = "Dealer Won!";
    losses++;
    document.querySelector("#losses").textContent = losses;
  } else {
    document.querySelector("#sum-el").textContent = "Dealer's Hand: " + calcSum(dealer_cards);
    document.getElementById("question-el").textContent = "DEALER'S BUST! YOU WON!";
    wins++;
    document.querySelector("#wins").textContent = wins;
  }
  document.getElementById("hit-stand").style.display = "none";
  document.getElementById("retry").style.display = "block";
}

function displayElements(cards, sum) {
  document.querySelector(".cards").innerHTML = "";
  cards.forEach((card) => {
    let cardElement = document.createElement("span");
    cardElement.textContent = card;
    document.querySelector(".cards").appendChild(cardElement);
  });
  document.querySelector("#sum-el").textContent = "Current Sum: " + sum;
  document.querySelector("#wins").textContent = wins;
  document.querySelector("#losses").textContent = losses;
}

function calcSum(cards) {
  let sum = 0;
  cards.forEach((card) => {
    sum += card;
  });
  return sum;
}

init();
