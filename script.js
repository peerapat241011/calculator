function generateQuestion() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;

    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = (num1 / num2).toFixed(2);
            break;
    }

    const question = `${num1} ${operator} ${num2}`;
    return { question, answer };
}

let { question, answer } = generateQuestion();
document.getElementById('question').textContent = question;

document.getElementById('checkButton').addEventListener('click', function() {
    const userAnswer = parseFloat(document.getElementById('userAnswer').value);
    const resultElement = document.getElementById('result');
    const scoreElement = document.getElementById('score');

    if (userAnswer === parseFloat(answer)) {
        resultElement.textContent = 'ถูกต้อง!!!เก่งมากกก ไปต่อกันน';
        scoreElement.textContent = parseInt(scoreElement.textContent) + 1;
    } else {
        resultElement.textContent = ` ผิด!! คำตอบที่ถูกต้องคือ : ${answer}`;
    }

    ({ question, answer } = generateQuestion());
    document.getElementById('question').textContent = question;
    document.getElementById('userAnswer').value = '';
});