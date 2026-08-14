export default function Timetable() {
  const subjects = [
    { day: 'Monday', subject: 'DBMS', time: '10:00 AM - 11:00 AM' },
    { day: 'Tuesday', subject: 'Java', time: '2:00 PM - 3:00 PM' },
    { day: 'Wednesday', subject: 'React', time: '4:00 PM - 5:00 PM' },
    { day: 'Thursday', subject: 'Mathematics', time: '9:00 AM - 10:00 AM' },
    { day: 'Friday', subject: 'Web Development', time: '1:00 PM - 2:00 PM' },
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
      color: 'white',
      padding: '40px',
      fontFamily: 'Arial'
    }}>

      <h1 style={{ marginBottom: '24px' }}>📅 Study Timetable</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {subjects.map((item, index) => (
          <div key={index} style={{
  background: 'rgba(17,24,39,0.72)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '22px',
  padding: '24px',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 10px 30px rgba(0,0,0,0.25)',
  transition: 'transform 0.2s ease'
}}>
            <h3 style={{ margin: 0 }}>{item.day}</h3>
            <p style={{ margin: '8px 0' }}>📘 {item.subject}</p>
            <p style={{ margin: 0, color: '#cbd5e1' }}>⏰ {item.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}