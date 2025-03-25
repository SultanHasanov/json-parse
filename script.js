function formatJson() {
  const input = document.getElementById("jsonInput").value.trim();
  try {
      // Двойной JSON.parse() для корректного парсинга экранированной строки
      const parsed = JSON.parse(input);
      const fullyParsed = typeof parsed === "string" ? JSON.parse(parsed) : parsed;

      const formatted = JSON.stringify(fullyParsed, null, 4);
      document.getElementById("output").textContent = formatted;
  } catch (e) {
      document.getElementById("output").textContent = "Ошибка: Некорректный JSON";
  }
}

function copyToClipboard() {
  const output = document.getElementById("output").textContent;
  navigator.clipboard.writeText(output).then(() => {
      showNotification("✅ Скопировано!");
  }).catch(err => {
      showNotification("❌ Ошибка копирования: " + err);
  });
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.opacity = "1";
  
  setTimeout(() => {
      notification.style.opacity = "0";
  }, 2000);
}
