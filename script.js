// 倒數日 - 可自行修改 eventDate
const eventDate = "2025-05-01"; 

function updateCountdown() {
    let today = new Date();
    let targetDate = new Date(eventDate);
    let timeDiff = targetDate - today;
    let daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    document.getElementById("daysLeft").innerText = daysLeft;
}

updateCountdown();

// 月曆（可編輯）
function createCalendar() {
    let calendarDiv = document.getElementById("calendar");
    calendarDiv.innerHTML = "<p>這裡是可編輯的月曆（開發中）</p>";
}

createCalendar();

// 便利貼
document.getElementById("addStickyNote").addEventListener("click", function() {
    let noteText = prompt("輸入你的便利貼內容：");
    if (noteText) {
        let note = document.createElement("div");
        note.className = "sticky-note";
        note.innerText = noteText;
        document.getElementById("stickyNotesContainer").appendChild(note);
    }
});

// 代辦事項
document.getElementById("addTodo").addEventListener("click", function() {
    let taskText = document.getElementById("todoInput").value;
    if (taskText.trim()) {
        let li = document.createElement("li");
        li.innerText = taskText;
        li.addEventListener("click", function() {
            li.style.textDecoration = li.style.textDecoration === "line-through" ? "none" : "line-through";
        });
        document.getElementById("todoList").appendChild(li);
        document.getElementById("todoInput").value = "";
    }
});

document.getElementById("clearTodos").addEventListener("click", function() {
    alert("你超棒│ ˙ᵕ˙ )꜆♡");
    document.getElementById("todoList").innerHTML = "";
});
