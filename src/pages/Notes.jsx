import { useState, useEffect } from 'react';

export default function Notes() {
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  // Load saved note when page opens
  useEffect(() => {
    const savedNote = localStorage.getItem('studyNote');
    if (savedNote) {
      setNote(savedNote);
    }
  }, []);

  // Save note
  const handleSave = () => {
    localStorage.setItem('studyNote', note);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>

      <h1 style={{ marginBottom: '20px' }}>📖 My Notes</h1>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your study notes here..."
        rows="12"
        style={{
          width: '100%',
          maxWidth: '800px',
          padding: '16px',
          borderRadius: '16px',
          border: 'none',
          background: '#111827',
          color: 'white',
          fontSize: '16px',
          outline: 'none'
        }}
      />

      <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
        <button
          onClick={handleSave}
          style={{
            background: '#7c3aed',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          💾 Save Note
        </button>

        <button
          onClick={() => {
            localStorage.removeItem('studyNote');
            setNote('');
          }}
          style={{
            background: '#dc2626',
            color: 'white',
            border: 'none',
            padding: '12px 20px',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          🗑️ Clear
        </button>
      </div>

      {saved && (
        <p style={{
          marginTop: '16px',
          background: '#064e3b',
          padding: '12px',
          borderRadius: '12px',
          display: 'inline-block'
        }}>
          ✅ Note saved successfully!
        </p>
      )}
      {note && (
  <div style={{
    marginTop: '24px',
    background: 'rgba(17,24,39,0.72)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '22px',
    padding: '24px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 10px 30px rgba(0,0,0,0.25)'
  }}>

    <h3 style={{ marginTop: 0, color: '#c084fc' }}>
      📌 Saved Note
    </h3>

    <p style={{
      whiteSpace: 'pre-wrap',
      lineHeight: '1.7',
      color: '#e5e7eb',
      marginBottom: 0
    }}>
      {note}
    </p>

  </div>
)}

      <p style={{ marginTop: '20px', color: '#cbd5e1' }}>
        Your notes are saved in this browser and will remain after refresh.
      </p>
    </div>
  );
}