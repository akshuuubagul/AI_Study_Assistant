import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Chat from './pages/Chat';
import Quiz from './pages/Quiz';
import Timetable from './pages/Timetable';
import Notes from './pages/Notes';
import Progress from './pages/Progress';

const linkStyle = {
  display: 'block',
  color: 'white',
  textDecoration: 'none',
  padding: '12px 16px',
  borderRadius: '14px',
  background: 'rgba(255,255,255,0.05)',
  fontWeight: '600',
};

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', minHeight: '100vh' }}>

        {/* Sidebar */}
        <div
          style={{
            width: '250px',
            minHeight: '100vh',
            background: 'rgba(15,23,42,0.92)',
            backdropFilter: 'blur(12px)',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            padding: '24px',
            boxShadow: '0 0 30px rgba(124,58,237,0.25)',
            color: 'white',
          }}
        >

          <div style={{ marginBottom: '28px' }}>
            <h1
              style={{
                margin: 0,
                fontSize: '1.8rem',
                background: 'linear-gradient(90deg,#e9d5ff,#8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              🤖 AI Study Assistant
            </h1>

            <p style={{ color: '#cbd5e1', marginTop: '8px' }}>
              Smart learning companion
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              marginTop: '20px',
            }}
          >
            <Link to="/" style={linkStyle}>
              Dashboard
            </Link>

            <Link to="/chat" style={linkStyle}>
              AI Chat
            </Link>

            <Link to="/quiz" style={linkStyle}>
              Quiz
            </Link>

            <Link to="/timetable" style={linkStyle}>
              Timetable
            </Link>

            <Link to="/notes" style={linkStyle}>
              Notes
            </Link>

            <Link to="/progress" style={linkStyle}>
              Progress
            </Link>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '24px' }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/progress" element={<Progress />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}