 # 🎮 Rock Paper Scissors – Interactive Web Game

A modern, animated **Rock Paper Scissors** game built with **HTML, CSS, and JavaScript**.
This project combines clean UI design, smooth animations, and persistent data to create a fun and polished browser game experience.

---

## 🚀 Live Features

✨ **Player Experience**

* Enter your name and start instantly
* Personalized welcome message
* Clean screen transitions between game states

🎲 **Game Mechanics**

* Classic Rock, Paper, Scissors rules
* Randomized computer opponent
* 5-round match system
* Real-time result feedback

🏆 **Score System**

* Live score tracking
* Persistent **High Score** using `localStorage`
* High score updates dynamically when beaten
* Visual highlight + animation when a new high score is reached

🎨 **UI & Animations**

* Glassmorphism-style UI panels
* Animated gradient background
* Button hover and press effects
* Win animation (pop effect)
* Lose animation (shake effect)

---

## 🕹️ How to Play

1. Enter your name on the home screen
2. Click **Start Game**
3. Choose:

   * 🪨 Rock
   * 📄 Paper
   * ✂️ Scissors
4. The computer makes a random choice
5. Results are displayed instantly with animations
6. After **5 rounds**, the game ends
7. Try to beat your **high score** 🔥

---

## 🧠 Game Rules

* Rock beats Scissors
* Scissors beats Paper
* Paper beats Rock
* Same choice = Tie

---

## 🏗️ Project Structure

```plaintext
/project
│
├── index.html
├── /styles
│   └── style.css
├── /js
│   └── index.js
```

---

## 💾 High Score System

This project uses the browser’s **localStorage API**:

* Saves the highest score locally
* Persists after page refresh
* Automatically updates when beaten

```js
localStorage.setItem('highScore', highScore);
```

---

## 🎨 CSS Highlights

* **Animated Gradient Background**

```css
animation: gradientMove 10s ease infinite;
```

* **Win Animation**

```css
@keyframes popWin
```

* **Lose Animation**

```css
@keyframes shake
```

* **Glass UI Effect**

```css
backdrop-filter: blur(10px);
```

---

## ⚙️ Technologies Used

* **HTML5** – structure
* **CSS3** – styling, animations, layout
* **JavaScript (Vanilla)** – logic, DOM manipulation, events

---

## 🧩 Key Concepts Practiced

* DOM selection & manipulation
* Event handling (`addEventListener`)
* Game logic & conditionals
* Dynamic class handling (`classList`)
* Browser storage (`localStorage`)
* CSS animations with `@keyframes`

---

## 🔮 Future Improvements

* 🔊 Sound effects & background music
* 🏅 Leaderboard (multiple players)
* 📱 Mobile responsiveness
* 🎯 Difficulty levels (AI logic)
* 🎮 Better transitions between screens
* ⏱️ Timer-based gameplay mode

---

## ▶️ How to Run

1. Download or clone the project
2. Open `index.html` in your browser
3. Start playing 🎉

---

## 👨‍💻 Author

Built as a hands-on project to practice:

* JavaScript fundamentals
* UI/UX design
* Interactive web development

---

## ⭐ Final Note

This project demonstrates how combining **logic (JS)** + **design (CSS)** + **structure (HTML)** can create a fully interactive experience without any frameworks.

---

Enjoy the game and keep building 🚀


