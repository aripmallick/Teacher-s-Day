
   // 🎈 Balloons & 🎊 Confetti generator with mobile optimization
let isMobile = window.innerWidth <= 768; // Tablet/Phone check

// Balloons
let balloonCount = isMobile ? 4 : 8; // fewer balloons on mobile
for (let i = 0; i < balloonCount; i++) {
  let balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.background = `hsl(${Math.random() * 360}, 80%, 60%)`;
  balloon.style.animationDuration = (4 + Math.random() * 3) + 's';

  // Smaller balloons on mobile
  if (isMobile) {
    balloon.style.width = "40px";
    balloon.style.height = "55px";
  }

  document.body.appendChild(balloon);
}

// Confetti
let confettiCount = isMobile ? 20 : 50; // fewer confetti on mobile
for (let i = 0; i < confettiCount; i++) {
  let confetti = document.createElement('div');
  confetti.className = 'confetti';
  confetti.style.left = Math.random() * 100 + 'vw';
  confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
  confetti.style.animationDuration = (2 + Math.random() * 3) + 's';

  // Smaller confetti on mobile
  let width = isMobile ? (3 + Math.random() * 3) : (5 + Math.random() * 5);
  let height = isMobile ? (6 + Math.random() * 6) : (10 + Math.random() * 10);
  confetti.style.width = width + 'px';
  confetti.style.height = height + 'px';

  document.body.appendChild(confetti);
}

// 🎁 Popup functions
function showPopup() {
  document.getElementById("popup").classList.add("show");
}
function closePopup() {
  document.getElementById("popup").classList.remove("show");
}
