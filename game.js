let playerHP = 100;
let monsterHP = 100;

function updateStats() {
  document.getElementById("player-hp").textContent = playerHP;
  document.getElementById("monster-hp").textContent = monsterHP;
}

function showMessage(message) {
  document.getElementById("story").textContent = message;
}

function attack() {
  let damageToMonster = Math.floor(Math.random() * 20) + 5;
  let damageToPlayer = Math.floor(Math.random() * 15);

  monsterHP -= damageToMonster;
  playerHP -= damageToPlayer;

  updateStats();

  if (monsterHP <= 0) {
    showMessage("You defeated the monster!");
  } else if (playerHP <= 0) {
    showMessage("You have been defeated!");
  } else {
    showMessage("You hit the monster for" +" "+ damageToMonster + "dps" + "\nIt hit you for" + " " + damageToPlayer + "dps");
  }
}

function heal() {
  let healAmount = Math.floor(Math.random() * 15) + 10;
  playerHP += healAmount;
  playerHP = Math.min(playerHP, 100);
  showMessage("You healed for \${healAmount} HP!");
  updateStats();
}

function restart() {
  playerHP = 100;
  monsterHP = 100;
  updateStats();
  showMessage("A wild monster appears!");
}
