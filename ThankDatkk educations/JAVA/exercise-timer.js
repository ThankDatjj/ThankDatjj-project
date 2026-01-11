// ================================
// TIMER ĐẾM NGƯỢC BÀI LÀM SINH VIÊN
// Thời gian: 45 phút
// ================================

const TOTAL_TIME = 45 * 60; // 2700 giây
let timeLeft = TOTAL_TIME;
let timerInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ Timer script loaded");

    const timerElement = document.getElementById("exercise-timer");
    const submitBtn = document.getElementById("submit-btn");
    const statusMessage = document.getElementById("status-message");
    const codeInput = document.getElementById("code-input");

    // Kiểm tra phần tử bắt buộc
    if (!timerElement) {
        console.error("❌ Không tìm thấy #exercise-timer");
        return;
    }

    // Hiển thị thời gian ban đầu
    updateDisplay(timerElement);

    // Bắt đầu đếm ngược
    timerInterval = setInterval(() => {
        timeLeft--;

        updateDisplay(timerElement);

        // Còn dưới 5 phút → cảnh báo vàng
        if (timeLeft <= 5 * 60) {
            timerElement.style.color = "#fbbf24";
        }

        // Hết giờ
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.textContent = "00:00";
            timerElement.style.color = "#ef4444";

            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = "Hết thời gian";
            }

            if (statusMessage) {
                statusMessage.textContent = "Đã hết thời gian làm bài!";
                statusMessage.style.color = "#ef4444";
            }
        }
    }, 1000);

    // Focus vào editor
    codeInput?.focus();
});

// ================================
// Hàm hiển thị phút : giây
// ================================
function updateDisplay(element) {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    element.textContent =
        `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

// ================================
// Dừng timer khi rời trang
// ================================
window.addEventListener("beforeunload", () => {
    if (timerInterval) clearInterval(timerInterval);
});
