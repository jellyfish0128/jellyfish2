// 進入按鈕
document.getElementById("enterBtn").addEventListener("click", function() {
    document.getElementById("mainContent").classList.remove("hidden");
    this.style.display = "none";
});

// 變換日語句子
const phrases = [
    "初めまして、私は Jellyfish です",
    "世界に無駄な努力なんてない",
    "あなたはただ自分らしくいればいい"
];
let index = 0;
setInterval(() => {
    index = (index + 1) % phrases.length;
    document.getElementById("changingText").textContent = phrases[index];
}, 30000);

// 倒數日設定
const targetDate = new Date("2025-04-05"); // 在這裡修改你的目標日期
function updateCountdown() {
    const today = new Date();
    const diffTime = targetDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("countdownText").innerText = `距離水母のcos場次日期還有 ${diffDays} 天`;
}
updateCountdown();

// 便利貼
document.getElementById("addNote").addEventListener("click", function() {
    let text = prompt("輸入便利貼內容：");
    if (text) {
        let note = document.createElement("div");
        note.className = "note";
        note.innerText = text;
        document.getElementById("notesContainer").appendChild(note);
    }
});

// 代辦事項
document.getElementById("addTodo").addEventListener("click", function() {
    let taskText = document.getElementById("todoInput").value;
    if (taskText) {
        let task = document.createElement("li");
        task.innerText = taskText;
        task.addEventListener("click", function() { this.style.textDecoration = "line-through"; });
        document.getElementById("todoList").appendChild(task);
        document.getElementById("todoInput").value = "";
    }
});
document.getElementById("clearTodo").addEventListener("click", function() {
    alert("你超棒│ ˙ᵕ˙ )꜆♡");
    document.getElementById("todoList").innerHTML = "";
});
