const MobileView = () => {
  const skills = ['AWS', 'Docker', 'CI/CD', 'Python', 'Node.js', 'React', 'Kubernetes', 'IoT']
  const projects = [
    { name: 'CloudOps Platform', tech: 'AWS · Docker · K8s', color: '#00d4ff' },
    { name: 'CI/CD Pipeline Engine', tech: 'Jenkins · GitHub Actions', color: '#8b5cf6' },
    { name: 'IoT Dashboard', tech: 'Python · MQTT · React', color: '#06ffa5' },
    { name: 'Microservices API', tech: 'Node.js · Docker · Redis', color: '#FF9900' },
  ]

  return (
    <div style={{
      minHeight: '100vh', background: '#020408', color: '#e0f2ff',
      fontFamily: "'Rajdhani', sans-serif", padding: '2rem 1.5rem'
    }}>
      <div style={{ textAlign: 'center', padding: '3rem 0 2rem' }}>
        <div style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: '3rem', fontWeight: 900,
          color: '#00d4ff', textShadow: '0 0 20px #00d4ff', marginBottom: '0.5rem'
        }}>SK</div>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: '1.8rem',
          fontWeight: 700, marginBottom: '0.5rem',
          background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'
        }}>SHIVAM KUMAR</h1>
        <p style={{ color: '#7ec8e3', letterSpacing: '2px', fontSize: '0.9rem' }}>
          SOFTWARE ENGINEER · CLOUD / DEVOPS
        </p>
      </div>

      <div style={{
        position: 'fixed', inset: 0, zIndex: -1, opacity: 0.04,
        backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }} />

      <section style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#8b5cf6', marginBottom: '0.5rem', fontFamily: "'Share Tech Mono', monospace" }}>[ TECH STACK ]</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', marginBottom: '1rem' }}>SKILLS</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {skills.map((s) => (
            <span key={s} style={{
              padding: '6px 14px', border: '1px solid rgba(0,212,255,0.4)',
              borderRadius: '20px', fontSize: '0.8rem', color: '#00d4ff',
              background: 'rgba(0,212,255,0.08)', fontFamily: "'Share Tech Mono', monospace"
            }}>{s}</span>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#06ffa5', marginBottom: '0.5rem', fontFamily: "'Share Tech Mono', monospace" }}>[ DEPLOYMENTS ]</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', marginBottom: '1rem' }}>PROJECTS</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {projects.map((p) => (
            <div key={p.name} style={{
              padding: '14px', background: 'rgba(0,20,40,0.8)',
              border: `1px solid ${p.color}40`, borderLeft: `3px solid ${p.color}`,
              borderRadius: '8px'
            }}>
              <div style={{ color: p.color, fontWeight: 700, marginBottom: '4px' }}>{p.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#555', fontFamily: "'Share Tech Mono', monospace" }}>{p.tech}</div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div style={{ fontSize: '0.7rem', letterSpacing: '4px', color: '#06ffa5', marginBottom: '0.5rem', fontFamily: "'Share Tech Mono', monospace" }}>[ CONNECT ]</div>
        <h2 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.4rem', marginBottom: '1rem' }}>CONTACT</h2>
        <div style={{
          background: 'rgba(0,10,20,0.9)', border: '1px solid rgba(0,212,255,0.3)',
          borderRadius: '10px', padding: '1rem', fontFamily: "'Share Tech Mono', monospace",
          fontSize: '0.8rem', lineHeight: 2
        }}>
          <div style={{ color: '#7ec8e3' }}>$ cat contact.json</div>
          <div style={{ color: '#06ffa5' }}>github.com/shiv9060</div>
          <div style={{ color: '#06ffa5' }}>linkedin.com/in/shivam-kumar</div>
        </div>
      </section>
    </div>
  )
}

export default MobileView
