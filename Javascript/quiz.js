let currentQuestion = 1;
let correctAnswers = 0;

const correctAnswersData = ["2 kroner", "2 kroner", "Infinitum", "2 ganger", "Lover for retur av emballasje"];

// Vis første spørsmål
document.getElementById(`question${currentQuestion}`).style.display = 'block';

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const questionIndex = parseInt(form.id.replace('quiz-form', ''));
        const selectedAnswer = document.querySelector(`input[name="pant${questionIndex}"]:checked`);
        
        if (selectedAnswer) {
            if (selectedAnswer.value === correctAnswersData[questionIndex - 1]) {
                correctAnswers++;
            }
            document.getElementById(`question${questionIndex}`).style.display = 'none';
            currentQuestion++;
            if (currentQuestion <= 5) {
                setTimeout(() => {
                    document.getElementById(`question${currentQuestion}`).style.display = 'block';
                }, 1000);
            } else {
                setTimeout(() => {
                    document.getElementById('result-container').style.display = 'block';
                    document.getElementById('final-result').innerText = `Du svarte riktig på ${correctAnswers} av 5 spørsmål.`;
                }, 2000);
            }
        } else {
            alert("Vennligst velg et svar.");
        }
    });
});
