// Ініціалізуємо магічну кулю
document.addEventListener("DOMContentLoaded", function () {
    // Створюємо основний контейнер
    const container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.margin = "20px auto";
    container.style.maxWidth = "400px";
    document.body.appendChild(container);

    // Створюємо заголовок
    const title = document.createElement("h1");
    title.textContent = "Магічна куля";
    title.style.fontFamily = "Arial, sans-serif";
    container.appendChild(title);

    // Створюємо поле введення для питання
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Введіть ваше питання";
    input.style.width = "100%";
    input.style.padding = "10px";
    input.style.marginTop = "10px";
    input.style.boxSizing = "border-box";
    container.appendChild(input);

    // Створюємо кнопку для запиту
    const button = document.createElement("button");
    button.textContent = "Запитати кулю";
    button.style.padding = "10px 20px";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    container.appendChild(button);

    // Створюємо елемент для відображення відповіді
    const answer = document.createElement("p");
    answer.style.fontSize = "18px";
    answer.style.fontWeight = "bold";
    answer.style.color = "white";
    answer.style.marginTop = "20px";
    answer.style.padding = "20px";
    answer.style.backgroundImage = "url('magic-ball.png')";  // додаємо фон
    answer.style.backgroundSize = "cover"; // охоплює всю область
    answer.style.backgroundPosition = "center"; // центроване зображення
    answer.style.borderRadius = "50%"; // створює ефект кулі
    answer.style.width = "200px";
    answer.style.height = "200px";
    answer.style.display = "flex";
    answer.style.alignItems = "center";
    answer.style.justifyContent = "center";
    answer.style.margin = "20px auto";
    container.appendChild(answer);

    // Можливі відповіді кулі
    const answers = [
        "Так",
        "Ні",
        "Можливо",
        "Здається, так",
        "Спробуйте ще раз",
        "Запитайте пізніше",
        "Навряд чи",
        "Безумовно"
    ];

    // Обробник натискання на кнопку
    button.addEventListener("click", function () {
        const question = input.value.trim();

        // Валідація питання
        if (!question) {
            answer.textContent = "Будь ласка, введіть питання!";
            answer.style.color = "red";
            return;
        }

        // Випадковий вибір відповіді
        const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
        answer.textContent = randomAnswer;
        answer.style.color = "white"; // встановлюємо білий колір для читабельності на фоні
    });
});
