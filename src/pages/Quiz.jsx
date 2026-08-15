import questions from '../data/questions';
import { useState } from 'react';

export default function Quiz() {
  

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [history, setHistory] = useState(
  JSON.parse(localStorage.getItem('quizHistory')) || []
);
  const [message, setMessage] = useState('');

 const handleAnswer = (option) => {
  if (option === questions[current].answer) {
    setScore(score + 1);
    setMessage('✅ Correct!');
  } else {
    setMessage(
      '❌ Wrong! Correct answer: ' + questions[current].answer
    );
  }

  setTimeout(() => {
    setMessage('');

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
     const finalScore =
  option === questions[current].answer ? score + 1 : score;

const newResult = {
  date: new Date().toLocaleString(),
  score: finalScore,
  total: questions.length,
};

const updatedHistory = [...history, newResult];

localStorage.setItem('quizHistory', JSON.stringify(updatedHistory));

setHistory(updatedHistory);
setFinished(true);
    }
  }, 1200);
};
  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>

      <h1>📝 Quiz</h1>
      <div style={{
  background: '#111827',
  padding: '12px 20px',
  borderRadius: '12px',
  marginBottom: '20px',
  display: 'inline-block'
}}>
  🎯 Score: {score}
</div>

      {finished ? (
        <div style={{
          background: '#1e293b',
          padding: '30px',
          borderRadius: '20px',
          maxWidth: '500px'
        }}>
          <h2>Quiz Completed! 🎉</h2>
          <p>Your Score: {score} / {questions.length}</p>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
  <h3>📜 Previous Attempts</h3>

  {history.map((item, index) => (
    <div
      key={index}
      style={{
        background: '#111827',
        padding: '10px',
        borderRadius: '10px',
        marginTop: '8px'
      }}
    >
      <p style={{ margin: 0 }}>
        🎯 {item.score}/{item.total}
      </p>
      <p style={{ margin: 0, color: '#cbd5e1', fontSize: '14px' }}>
        {item.date}
      </p>
    </div>
  ))}
</div>
        </div>
      ) : (
        <div style={{
          background: '#1e293b',
          padding: '30px',
          borderRadius: '20px',
          maxWidth: '600px'
        }}>
          <h2>{questions[current].q}</h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: '20px'
          }}>
            {questions[current].options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleAnswer(opt)}
                style={{
                  padding: '14px',
                  borderRadius: '12px',
                  border: 'none',
                  background: '#7c3aed',
                  color: 'white',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                {opt}
              </button>
            ))}
            {message && (
           <div style={{
             marginTop: '16px',
             padding: '12px',
             borderRadius: '12px',
             background: '#111827',
             color: 'white',
             fontWeight: 'bold'
            }}>
              {message}
             </div>
            )}

            <p style={{ marginTop: '20px', color: '#cbd5e1' }}>
            Question {current + 1} of {questions.length}
          </p>
          </div>
        </div>
      )}
    </div>
  );
}