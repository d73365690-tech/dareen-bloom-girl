const intro = document.getElementById("intro");

// ✨ Star sparkle sound
function playSparkleSound() {
const AudioContext = window.AudioContext || window.webkitAudioContext;

if (!AudioContext) return;

const audio = new AudioContext();

const notes = [880, 1174, 1568];

notes.forEach((frequency, index) => {
const oscillator = audio.createOscillator();
const gain = audio.createGain();

```
oscillator.type = "sine";
oscillator.frequency.value = frequency;

gain.gain.setValueAtTime(0.0001, audio.currentTime);

gain.gain.exponentialRampToValueAtTime(
  0.08,
  audio.currentTime + 0.05 + index * 0.08
);

gain.gain.exponentialRampToValueAtTime(
  0.0001,
  audio.currentTime + 0.7 + index * 0.08
);

oscillator.connect(gain);
gain.connect(audio.destination);

oscillator.start(audio.currentTime + index * 0.08);
oscillator.stop(audio.currentTime + 0.8 + index * 0.08);
```

});
}

// 🌷 Hide opening screen
setTimeout(() => {
intro.style.opacity = "0";
intro.style.visibility = "hidden";
}, 3500);

// ✨ Opening sound
window.addEventListener("load", () => {
playSparkleSound();
console.log("🌷 Welcome to Bloom Girl!");
});

// =========================
// 🎮 CATCH THE LILIES GAME
// =========================

const gameBox = document.getElementById("gameBox");
const startGame = document.getElementById("startGame");
const scoreDisplay = document.getElementById("score");

let score = 0;
let gameTimer;
let gameRunning = false;

function createFlower() {

if (!gameRunning) return;

const flower = document.createElement("button");

flower.className = "game-flower";
flower.type = "button";

flower.textContent = Math.random() > 0.5 ? "🌷" : "🌸";

const maxX = gameBox.clientWidth - 70;
const maxY = gameBox.clientHeight - 70;

flower.style.left = Math.max(10, Math.random() * maxX) + "px";
flower.style.top = Math.max(10, Math.random() * maxY) + "px";

flower.addEventListener("click", () => {

```
score++;

scoreDisplay.textContent = score;

flower.remove();
```

});

gameBox.appendChild(flower);

setTimeout(() => {

```
if (flower.isConnected) {
  flower.remove();
}
```

}, 1200);
}

startGame.addEventListener("click", () => {

clearInterval(gameTimer);

score = 0;
scoreDisplay.textContent = score;

gameBox.innerHTML = "";

gameRunning = true;

startGame.textContent = "Playing... 🌷";

gameTimer = setInterval(createFlower, 650);

setTimeout(() => {

```
clearInterval(gameTimer);

gameRunning = false;

startGame.textContent = "Play Again 🎀";
```

}, 15000);

});

// =========================
// 💬 FRIENDS CHAT
// =========================

const chatForm = document.getElementById("chatForm");
const messageInput = document.getElementById("messageInput");
const messages = document.getElementById("messages");

const chatName = document.getElementById("chatName");
const chatAvatar = document.getElementById("chatAvatar");
const chatStatus = document.getElementById("chatStatus");

// 👭 Change friend
const friends = document.querySelectorAll(".friend");

friends.forEach((friend) => {

friend.addEventListener("click", () => {

```
const name = friend.dataset.name;
const avatar = friend.dataset.avatar;
const status = friend.dataset.status;

chatName.textContent = name;
chatAvatar.textContent = avatar;
chatStatus.textContent = status;

messages.innerHTML = "";

const welcome = document.createElement("div");

welcome.className = "message friend-message";

if (name === "Maya") {
  welcome.textContent = "Hey Dareen! 🌷 How are you?";
}

if (name === "Sara") {
  welcome.textContent = "Hii Dareen! 🎀 Nice to see you!";
}

if (name === "Lina") {
  welcome.textContent = "Hey Dareen! 🌸";
}

messages.appendChild(welcome);
```

});

});

// 💌 Send message
chatForm.addEventListener("submit", (event) => {

event.preventDefault();

const text = messageInput.value.trim();

if (text === "") {
return;
}

const message = document.createElement("div");

message.className = "message my-message";

message.textContent = text;

messages.appendChild(message);

messageInput.value = "";

messages.scrollTop = messages.scrollHeight;

});
