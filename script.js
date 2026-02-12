// ==========================================================================
// 1. STATE & DATA MANAGEMENT
// ==========================================================================
let currentQuestions = [];
let currentIndex = 0;
let userAnswers = {};
let timerInterval;
let timeLeft = 7200;
let selectedType = "";

const userData = {
  nama: "",
  nip: "",
  email: "",
  upt: "",
};

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyKLcNwbZnfUSz9q9-WVLvB6Fmkj4CFLXw1x2CQXDFtiRVKD5Jsv9s9wWJLj2jmo012/exec";

// ==========================================================================
// 2. NAVBAR & HAMBURGER LOGIC
// ==========================================================================
const navbar = document.querySelector(".navbar");
const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", (e) => {
  e.stopPropagation();
  navMenu.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

// ==========================================================================
// 3. CUSTOM MODAL SYSTEM (Pengganti Alert & Confirm)
// ==========================================================================
function openModal(title, message, isConfirm, onConfirm) {
  const modal = document.getElementById("custom-modal");
  const btnCancel = document.getElementById("modal-btn-cancel");
  const icon = document.getElementById("modal-icon");

  document.getElementById("modal-title").innerText = title;
  document.getElementById("modal-message").innerText = message;

  btnCancel.style.display = isConfirm ? "block" : "none";
  icon.innerHTML = isConfirm
    ? '<i class="fas fa-question-circle"></i>'
    : '<i class="fas fa-exclamation-circle"></i>';

  modal.classList.remove("hidden");

  document.getElementById("modal-btn-confirm").onclick = function () {
    modal.classList.add("hidden");
    if (onConfirm) onConfirm();
  };

  btnCancel.onclick = function () {
    modal.classList.add("hidden");
  };
}

// ==========================================================================
// 4. SPA NAVIGATION (Dashboard vs Trial)
// ==========================================================================
function showDashboard() {
  document.getElementById("dashboard-section").classList.remove("hidden");
  document.getElementById("trial-test-section").classList.add("hidden");
  setActiveLink(0);
  if (timerInterval) clearInterval(timerInterval);
}

function showTrialTestPage() {
  document.getElementById("dashboard-section").classList.add("hidden");
  document.getElementById("trial-test-section").classList.remove("hidden");
  showView("view-selection");
  setActiveLink(2);
}

function setActiveLink(idx) {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((l, i) =>
    i === idx ? l.classList.add("active") : l.classList.remove("active"),
  );
}

function showView(id) {
  document
    .querySelectorAll(".quiz-view")
    .forEach((v) => v.classList.add("hidden"));
  const target = document.getElementById(id);
  if (target) target.classList.remove("hidden");
  window.scrollTo(0, 0);
}

// ==========================================================================
// 5. TRIAL TEST ENGINE
// ==========================================================================

function goToRegistration(type) {
  selectedType = type;
  document.getElementById("reg-title").innerText =
    `Registrasi Marine Inspector - Type ${type}`;
  showView("view-registration");
}

function startQuiz() {
  userData.nama = document.getElementById("user-nama").value;
  userData.nip = document.getElementById("user-nip").value;
  userData.email = document.getElementById("user-email").value;
  userData.upt = document.getElementById("user-upt").value;

  if (!userData.nama || !userData.email) {
    openModal(
      "Data Tidak Lengkap",
      "Mohon isi Nama dan Email Anda untuk keperluan verifikasi sertifikat.",
      false,
    );
    return;
  }

  const source = selectedType === "A" ? questionsA : questionsB;
  currentQuestions = [...source].sort(() => Math.random() - 0.5);

  currentIndex = 0;
  userAnswers = {};
  timeLeft = 7200;

  showView("view-quiz");
  createNavGrid();
  renderQuestion();
  startTimer();
}

function renderQuestion() {
  const q = currentQuestions[currentIndex];
  const container = document.getElementById("question-container");
  document.getElementById("current-num").innerText = currentIndex + 1;

  let html = `<p class="q-text-display">${q.question}</p>`;

  if (q.type === "multiple_choice") {
    html += `<div class="options-group">`;
    q.options.forEach((opt) => {
      const isSelected = userAnswers[q.id] === opt.key ? "selected" : "";
      html += `
                <div class="opt-item ${isSelected}" onclick="saveAnswer(${q.id}, '${opt.key}')">
                    <strong>${opt.key}.</strong> ${opt.text}
                </div>`;
    });
    html += `</div>`;
  } else {
    html += `<textarea class="essay-input" placeholder="Tulis jawaban Anda..." onkeyup="saveAnswer(${q.id}, this.value)">${userAnswers[q.id] || ""}</textarea>`;
  }

  container.innerHTML = html;
  updateNavGrid();
}

function saveAnswer(id, val) {
  userAnswers[id] = val;
  updateNavGrid();
}

function createNavGrid() {
  const grid = document.getElementById("nav-grid");
  grid.innerHTML = "";
  currentQuestions.forEach((_, i) => {
    const item = document.createElement("div");
    item.className = "nav-item";
    item.innerText = i + 1;
    item.onclick = () => {
      currentIndex = i;
      renderQuestion();
    };
    grid.appendChild(item);
  });
}

function updateNavGrid() {
  const items = document.querySelectorAll(".nav-item");
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === currentIndex) item.classList.add("active");
    if (userAnswers[currentQuestions[i].id]) item.classList.add("filled");
  });
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

// ==========================================================================
// 6. TIMER & FINISH LOGIC
// ==========================================================================

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    let h = Math.floor(timeLeft / 3600);
    let m = Math.floor((timeLeft % 3600) / 60);
    let s = timeLeft % 60;

    document.getElementById("timer").innerText =
      `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      openModal(
        "Waktu Habis",
        "Waktu ujian telah selesai. Sistem akan memproses jawaban Anda.",
        false,
        () => {
          processResults();
        },
      );
    }
  }, 1000);
}

function triggerFinish() {
  const totalAnswered = Object.keys(userAnswers).length;
  openModal(
    "Konfirmasi Selesai",
    `Anda telah menjawab ${totalAnswered} dari ${currentQuestions.length} soal. Yakin ingin mengakhiri ujian sekarang?`,
    true,
    () => {
      clearInterval(timerInterval);
      processResults();
    },
  );
}

// ==========================================================================
// 7. RESULT & DATA SENDING
// ==========================================================================

function processResults() {
  let scoreCount = 0;
  let reviewHtml = "";

  currentQuestions.forEach((q, i) => {
    const userAnsKey = userAnswers[q.id] || null;
    const isCorrect =
      (q.type === "multiple_choice" && userAnsKey === q.answer) ||
      (q.type === "essay" && userAnsKey && userAnsKey.length > 10);

    if (isCorrect) scoreCount++;

    let statusClass = isCorrect ? "correct" : "wrong";
    reviewHtml += `<div class="review-card ${statusClass}"><span class="review-q-text">${i + 1}. ${q.question}</span>`;

    if (q.type === "multiple_choice") {
      q.options.forEach((opt) => {
        let optClass = "review-opt";
        if (opt.key === q.answer) optClass += " correct-answer";
        else if (opt.key === userAnsKey && userAnsKey !== q.answer)
          optClass += " user-choice-wrong";
        reviewHtml += `<div class="${optClass}">${opt.key}. ${opt.text}</div>`;
      });
    } else {
      reviewHtml += `<div class="review-opt">Jawaban Anda: ${userAnsKey || "Tidak diisi"}</div>`;
      reviewHtml += `<div class="review-opt correct-answer">Kunci/Referensi: ${q.answer}</div>`;
    }
    reviewHtml += `</div>`;
  });

  const finalScoreValue = (scoreCount / currentQuestions.length) * 100;

  showView("view-result");
  document.getElementById("final-score").innerText = finalScoreValue.toFixed(0);
  document.getElementById("count-correct").innerText = scoreCount;
  document.getElementById("count-wrong").innerText =
    currentQuestions.length - scoreCount;
  document.getElementById("review-container").innerHTML = reviewHtml;

  sendDataToGAS({
    nama: userData.nama,
    nip: userData.nip,
    email: userData.email,
    upt: userData.upt,
    score: finalScoreValue.toFixed(2),
    tipe: selectedType,
  });
}

function sendDataToGAS(data) {
  console.log("Mengirim data ke server...");

  fetch(GAS_URL, {
    method: "POST",
    mode: "no-cors",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      console.log("Data berhasil dikirim ke Google Apps Script.");
    })
    .catch((error) => {
      console.error("Terjadi kesalahan pengiriman:", error);
    });
}

window.onload = showDashboard;
