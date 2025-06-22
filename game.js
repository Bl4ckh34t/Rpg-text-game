
let playerHP = 50;
let playerlv = 0;
let mcrystal = 0;
let monsterHP = 45;
let monsterlv = 1;
let playerNum = 0;
// function RegisterUser () {
//   document.getElementById("nameinput").textContent = playerName;
//   document.getElementById("game").style.visibility="hidden";
// }





function create(){
        this.name  = askName
        this.time  = today_date.slice(4,15)
        this.level = playerlv
        // alert("hello")
        

      }

function updateStats() {
  document.getElementById("player-hp").textContent = playerHP;
  document.getElementById("monster-hp").textContent = monsterHP;
  document.getElementById("player-lv").textContent = playerlv;
  document.getElementById("m-crystal").textContent = mcrystal;
  document.getElementById("monster-lv").textContent = monsterlv;
}

function showMessage(message) {
  document.getElementById("story").textContent = message;
}

function Attack() {
  let damageToMonster = Math.floor(Math.random()*10);
  let damageToPlayer = Math.floor(Math.random()*10)+2;

  monsterHP -= damageToMonster;
  playerHP -= damageToPlayer;

  updateStats();

  if (monsterHP <= 0) {
    showMessage("You defeated the monster. You gain Exps & loots!");
    playerlv += 1;
    mcrystal += 1;
  } else if (playerHP <= 0) {
    alert("You have been killed. You will be given a new life!");
    monsterlv +=1;
    playerlv = 0;
    mcrystal = 0;
    window.location.reload()
  
  } else {
    showMessage("You strike for"+" "+damageToMonster+" HP. "+"Monster counters for"+" "+damageToPlayer+" HP.");
  }
}

function Heal() {
  if (playerlv = 200) {
    let healAmount = Math.floor(Math.random() * 15) + 10;
      playerHP += healAmount;
      playerHP = Math.min(playerHP, 100);
    showMessage("You healed for"+" "+healAmount+" HP.");
  }
  else {
    showMessage("Heal is N/A at your level!")
  }
  updateStats();
}

function Reset() {
  
  if (playerlv = 300) {
    playerHP = 100;
    monsterHP = 100;
    updateStats();
    showMessage("The match is reseted!");
  }
  else {
    showMessage("Reset is N/A at your level!");
  }
}

function Run(){
  let askRun = prompt("You want to run ? (Yes/No) ?")
  if (askRun!=null){
    alert("You escaped the monsters.Find somewhere to hide")
  }
  //window.location.reload()
}

