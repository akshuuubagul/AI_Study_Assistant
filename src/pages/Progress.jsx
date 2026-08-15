export default function Progress() {
  // Demo values (later we can connect these with quiz results)
  const totalQuestions = 50;
  const correctAnswers = 38;
  const wrongAnswers = totalQuestions - correctAnswers;
  const accuracy = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>

      <h1 style={{ marginBottom: '24px' }}>📊 Learning Progress</h1>

      {/* Stats Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '20px',
        marginBottom: '32px'
      }}>

        <div style={{
  background: 'rgba(17,24,39,0.72)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '22px',
  padding: '24px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  transition: 'transform 0.2s ease'
}}>
          <h2>🎯 Total Questions</h2>
          <p style={{ fontSize: '2rem', margin: 0 }}>{totalQuestions}</p>
        </div>

        <div style={{
          background: '#111827',
          padding: '24px',
          borderRadius: '20px'
        }}>
          <h2>✅ Correct</h2>
          <p style={{ fontSize: '2rem', margin: 0 }}>{correctAnswers}</p>
        </div>

        <div style={{
          background: '#111827',
          padding: '24px',
          borderRadius: '20px'
        }}>
          <h2>❌ Wrong</h2>
          <p style={{ fontSize: '2rem', margin: 0 }}>{wrongAnswers}</p>
        </div>
      </div>

      {/* Accuracy Section */}
      <div style={{
        background: '#111827',
        padding: '24px',
        borderRadius: '20px',
        maxWidth: '700px'
      }}>

        <h2>📈 Accuracy</h2>

        <div style={{
          width: '100%',
          height: '20px',
          background: '#374151',
          borderRadius: '10px',
          overflow: 'hidden',
          marginTop: '12px'
        }}>
          <div style={{
            width: `${accuracy}%`,
            height: '100%',
            background: '#7c3aed',
            transition: 'width 0.5s ease'
          }} />
        </div>

        <p style={{ marginTop: '12px', fontSize: '1.2rem' }}>
          Accuracy: <strong>{accuracy}%</strong>
        </p>
      </div>

      {/* Motivational Box */}
      <div style={{
        background: '#111827',
        padding: '24px',
        borderRadius: '20px',
        marginTop: '32px',
        maxWidth: '700px'
      }}>
        <h2>🌟 Keep Going!</h2>
        <p style={{ color: '#cbd5e1', lineHeight: 1.6 }}>
          You have completed <strong>{accuracy}%</strong> of your learning goal.
          Consistent practice every day will improve your score even more.
        </p>
      </div>

    </div>
  );
}