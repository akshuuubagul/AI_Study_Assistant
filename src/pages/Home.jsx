export default function Home({ setPage }) {
  const cardStyle = {
    background: 'rgba(255,255,255,0.08)',
    padding: '25px',
    borderRadius: '18px',
    textAlign: 'center',
    cursor: 'pointer',
    color: 'white',
    border: '1px solid rgba(255,255,255,0.12)',
    boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
    backdropFilter: 'blur(6px)'
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg,#0f172a,#1e1b4b,#312e81)',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '30px'
    }}>

      <h1 style={{textAlign:'center', fontSize:'3rem', marginTop:'40px'}}>
        🤖 AI Study Assistant
      </h1>

      <p style={{
        textAlign:'center',
        maxWidth:'700px',
        margin:'20px auto',
        opacity:0.9,
        lineHeight:1.6
      }}>
        Smart learning platform for students with AI chat, quizzes,
        timetable planning and progress tracking.
      </p>

      <div style={{
        display:'grid',
        gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
        gap:'20px',
        maxWidth:'1000px',
        margin:'50px auto'
      }}>

        <div style={cardStyle} onClick={() => setPage('quiz')}>
          <div style={{fontSize:'2rem'}}>📝</div>
          <h3>Quiz Generator</h3>
          <p>Test your knowledge instantly.</p>
        </div>

        <div style={cardStyle} onClick={() => setPage('chat')}>
          <div style={{fontSize:'2rem'}}>🤖</div>
          <h3>AI Chat</h3>
          <p>Ask doubts and get explanations.</p>
        </div>

        <div style={cardStyle} onClick={() => setPage('timetable')}>
          <div style={{fontSize:'2rem'}}>📅</div>
          <h3>Timetable</h3>
          <p>Plan your daily study schedule.</p>
        </div>

        <div style={cardStyle} onClick={() => setPage('progress')}>
          <div style={{fontSize:'2rem'}}>📊</div>
          <h3>Progress</h3>
          <p>Track your learning progress.</p>
        </div>

      </div>

      <p style={{textAlign:'center', opacity:0.7}}>
        Final Year Project • Developed by Akshu ✨
      </p>

    </div>
  );
}