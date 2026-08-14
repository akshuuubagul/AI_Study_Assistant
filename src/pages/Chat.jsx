import { useState } from 'react';

export default function Chat({ setPage }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!question) return;

    setLoading(true);

    try {
      const response = await fetch('http://localhost:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ question })
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      setAnswer('Error connecting to backend server.');
    }

    setLoading(false);
  };

  return (
  <div style={{
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
    color: 'white',
    padding: '40px',
    fontFamily: 'Inter, Arial, sans-serif'
  }}>

    
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}></div>
      <button onClick={() => setPage('home')}>⬅ Back</button>
      
      <h1 style={{
  fontSize: '2.4rem',
  marginBottom: '24px',
  background: 'linear-gradient(90deg,#fff,#c084fc)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}}>
  🤖 AI Chat Assistant
</h1>


      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask your doubt..."
        rows="5"
        style={{
  width: '100%',
  minHeight: '130px',
  padding: '18px',
  borderRadius: '18px',
  border: '1px solid rgba(255,255,255,0.12)',
  background: 'rgba(255,255,255,0.08)',
  color: 'white',
  fontSize: '16px',
  outline: 'none',
  resize: 'vertical',
  marginTop: '20px'
}}
      />

      <br />

      <button
        onClick={askAI}
        style={{
  marginTop: '16px',
  background: 'linear-gradient(135deg,#8b5cf6,#7c3aed)',
  color: 'white',
  border: 'none',
  padding: '12px 26px',
  borderRadius: '16px',
  cursor: 'pointer',
  fontWeight: '700',
  fontSize: '15px',
  boxShadow: '0 8px 20px rgba(124,58,237,0.35)'
}}
      >
        Ask AI
      </button>

      {loading && <p>Loading...</p>}

      {answer && (
  <div style={{ marginTop: '28px' }}>

    <h3 style={{
      color: '#c084fc',
      marginBottom: '12px',
      fontSize: '1.2rem'
    }}>
      🤖 AI Response
    </h3>

    <div style={{
      background: 'rgba(255,255,255,0.08)',
      padding: '24px',
      borderRadius: '18px',
      color: 'white',
      whiteSpace: 'pre-wrap',
      lineHeight: '1.8',
      fontSize: '16px',
      textAlign: 'left',
      border: '1px solid rgba(255,255,255,0.08)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.25)'
    }}>
      {answer}
    </div>

  </div>
)}

    </div>
  );
}