import { Link } from 'react-router-dom';

export default function Dashboard() {
  const cardStyle = {
    background: '#1e1b4b',
    borderRadius: '20px',
    padding: '24px',
    color: 'white',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    minWidth: '220px',
    flex: '1',
  };

  const quickBtn = {
    background: '#7c3aed',
    color: 'white',
    border: 'none',
    borderRadius: '12px',
    padding: '12px 16px',
    cursor: 'pointer',
    fontWeight: 'bold',
    width: '100%',
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0f172a, #1e1b4b, #312e81)',
        padding: '32px',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
          Welcome back, Student 💜
        </h1>
        <p style={{ color: '#cbd5e1' }}>
          Stay focused, learn smarter, and achieve your goals.
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '32px',
        }}
      >
        <div style={cardStyle}>
          <div style={{ fontSize: '2rem' }}>📚</div>
          <h2>12</h2>
          <p>Subjects Added</p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '2rem' }}>📝</div>
          <h2>85%</h2>
          <p>Average Quiz Score</p>
        </div>

        <div style={cardStyle}>
          <div style={{ fontSize: '2rem' }}>🔥</div>
          <h2>7 Days</h2>
          <p>Study Streak</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div
        style={{
          background: '#111827',
          borderRadius: '20px',
          padding: '24px',
          marginBottom: '32px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>⚡ Quick Actions</h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
          }}
        >
          <Link to="/chat">
            <button style={quickBtn}>🤖 Ask AI</button>
          </Link>

          <Link to="/quiz">
            <button style={quickBtn}>📝 Take Quiz</button>
          </Link>

          <Link to="/timetable">
            <button style={quickBtn}>📅 View Timetable</button>
          </Link>

          <Link to="/notes">
            <button style={quickBtn}>📖 Open Notes</button>
          </Link>
        </div>
      </div>

      {/* Today's Plan */}
      <div
        style={{
          background: '#111827',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 10px 25px rgba(0,0,0,0.25)',
        }}
      >
        <h2 style={{ marginBottom: '20px' }}>📌 Today's Study Plan</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div
            style={{
              background: '#1f2937',
              padding: '16px',
              borderRadius: '12px',
            }}
          >
            <strong>DBMS Revision</strong> — 10:00 AM
          </div>

          <div
            style={{
              background: '#1f2937',
              padding: '16px',
              borderRadius: '12px',
            }}
          >
            <strong>React Practice</strong> — 2:00 PM
          </div>

          <div
            style={{
              background: '#1f2937',
              padding: '16px',
              borderRadius: '12px',
            }}
          >
            <strong>Java MCQ Test</strong> — 7:00 PM
          </div>
        </div>
      </div>
    </div>
  );
}