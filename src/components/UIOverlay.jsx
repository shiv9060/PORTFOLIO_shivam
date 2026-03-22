const CONTACT = {
  email: 'shivam@example.com',
  github: 'https://github.com/shiv9060',
  linkedin: 'https://linkedin.com/in/shivam-kumar',
}

const sections = [
  {
    id: 'intro',
    content: (
      <div style={{ maxWidth: '700px' }}>
        <div style={{
          fontSize: '0.85rem', letterSpacing: '6px', color: '#7ec8e3',
          fontFamily: "'Share Tech Mono', monospace", marginBottom: '1rem'
        }}>
          [ SYSTEM INITIALIZED ] · WELCOME TO MY UNIVERSE
        </div>
        <h1 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 5rem)',
          fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem',
          background: 'linear-gradient(135deg, #00d4ff, #8b5cf6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          SHIVAM<br />KUMAR
        </h1>
        <div style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', color: '#7ec8e3',
          letterSpacing: '3px', marginBottom: '2rem',
          fontFamily: "'Rajdhani', sans-serif", fontWeight: 600
        }}>
          SOFTWARE ENGINEER · CLOUD / DEVOPS
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {['AWS Certified', 'Docker Expert', 'CI/CD Architect'].map((tag) => (
            <span key={tag} style={{
              padding: '6px 16px', border: '1px solid rgba(0,212,255,0.4)',
              borderRadius: '20px', fontSize: '0.8rem', letterSpacing: '2px',
              color: '#00d4ff', background: 'rgba(0,212,255,0.08)',
              fontFamily: "'Share Tech Mono', monospace"
            }}>{tag}</span>
          ))}
        </div>
        <div style={{ marginTop: '3rem', color: '#444', fontSize: '0.75rem', letterSpacing: '3px' }}>
          ↓ SCROLL TO EXPLORE ↓
        </div>
      </div>
    ),
  },
  {
    id: 'skills',
    content: (
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          fontSize: '0.75rem', letterSpacing: '5px', color: '#8b5cf6',
          fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.5rem'
        }}>
          [ TECH STACK ]
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#e0f2ff', marginBottom: '1.5rem'
        }}>
          SKILLS & ARSENAL
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
          {[
            { name: 'AWS', level: 90, color: '#FF9900' },
            { name: 'Docker', level: 88, color: '#2496ED' },
            { name: 'CI/CD', level: 85, color: '#06ffa5' },
            { name: 'Python', level: 82, color: '#FFE873' },
            { name: 'Node.js', level: 80, color: '#68A063' },
            { name: 'React', level: 78, color: '#61DAFB' },
            { name: 'Kubernetes', level: 75, color: '#326CE5' },
            { name: 'IoT', level: 72, color: '#8b5cf6' },
          ].map((skill) => (
            <div key={skill.name} style={{
              background: 'rgba(0,20,40,0.7)',
              border: `1px solid ${skill.color}30`,
              borderRadius: '8px', padding: '10px 14px',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                marginBottom: '6px', fontSize: '0.85rem', fontWeight: 600
              }}>
                <span style={{ color: skill.color }}>{skill.name}</span>
                <span style={{ color: '#555' }}>{skill.level}%</span>
              </div>
              <div style={{ height: '3px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                <div style={{
                  width: `${skill.level}%`, height: '100%',
                  background: skill.color,
                  boxShadow: `0 0 6px ${skill.color}`,
                  borderRadius: '2px'
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'projects',
    content: (
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          fontSize: '0.75rem', letterSpacing: '5px', color: '#06ffa5',
          fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.5rem'
        }}>
          [ DEPLOYMENTS ]
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#e0f2ff', marginBottom: '1rem'
        }}>
          PROJECTS
        </h2>
        <p style={{ color: '#7ec8e3', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Hover over the buildings in the 3D world to explore projects. Each structure
          represents a deployed system in the cloud city.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {[
            { name: 'CloudOps Platform', color: '#00d4ff' },
            { name: 'CI/CD Pipeline Engine', color: '#8b5cf6' },
            { name: 'IoT Monitoring Dashboard', color: '#06ffa5' },
            { name: 'Microservices API Gateway', color: '#FF9900' },
          ].map((p) => (
            <div key={p.name} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '8px 14px', background: 'rgba(0,20,40,0.6)',
              border: `1px solid ${p.color}40`, borderRadius: '6px',
              fontSize: '0.85rem', color: p.color
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: p.color, flexShrink: 0 }} />
              {p.name}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'experience',
    content: (
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          fontSize: '0.75rem', letterSpacing: '5px', color: '#FF9900',
          fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.5rem'
        }}>
          [ MISSION LOG ]
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#e0f2ff', marginBottom: '1.5rem'
        }}>
          EXPERIENCE
        </h2>
        {[
          {
            role: 'Cloud/DevOps Engineer',
            company: 'Current Role',
            period: '2023 – Present',
            points: ['AWS infrastructure design & optimization', 'CI/CD pipelines with Jenkins & GitHub Actions', 'Docker & Kubernetes orchestration'],
            color: '#00d4ff',
          },
          {
            role: 'Software Engineer',
            company: 'Previous Role',
            period: '2021 – 2023',
            points: ['Full-stack development with React & Node.js', 'REST API design & implementation', 'IoT data pipeline architecture'],
            color: '#8b5cf6',
          },
        ].map((exp) => (
          <div key={exp.role} style={{
            marginBottom: '1.5rem', padding: '16px',
            background: 'rgba(0,20,40,0.7)', border: `1px solid ${exp.color}30`,
            borderLeft: `3px solid ${exp.color}`, borderRadius: '8px',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ color: exp.color, fontWeight: 700, fontFamily: "'Orbitron', sans-serif", fontSize: '0.9rem' }}>
              {exp.role}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', margin: '4px 0 10px', fontSize: '0.8rem', color: '#555' }}>
              <span>{exp.company}</span>
              <span style={{ fontFamily: "'Share Tech Mono', monospace" }}>{exp.period}</span>
            </div>
            {exp.points.map((pt, i) => (
              <div key={i} style={{ fontSize: '0.82rem', color: '#7ec8e3', padding: '2px 0', display: 'flex', gap: '8px' }}>
                <span style={{ color: exp.color }}>▸</span>
                {pt}
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'contact',
    content: (
      <div style={{ maxWidth: '600px' }}>
        <div style={{
          fontSize: '0.75rem', letterSpacing: '5px', color: '#06ffa5',
          fontFamily: "'Share Tech Mono', monospace", marginBottom: '0.5rem'
        }}>
          [ ESTABLISH CONNECTION ]
        </div>
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif", fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
          fontWeight: 700, color: '#e0f2ff', marginBottom: '1.5rem'
        }}>
          CONTACT
        </h2>

        <div style={{
          background: 'rgba(0,10,20,0.95)', border: '1px solid rgba(0,212,255,0.3)',
          borderRadius: '10px', overflow: 'hidden', marginBottom: '1.5rem'
        }}>
          <div style={{
            background: 'rgba(0,212,255,0.1)', padding: '8px 16px',
            display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid rgba(0,212,255,0.2)'
          }}>
            {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
              <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
            ))}
            <span style={{ fontSize: '0.75rem', color: '#555', fontFamily: "'Share Tech Mono', monospace", marginLeft: '8px' }}>
              shivam@cloudops:~$
            </span>
          </div>
          <div style={{ padding: '16px', fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', lineHeight: 2 }}>
            <div style={{ color: '#7ec8e3' }}>$ whoami</div>
            <div style={{ color: '#06ffa5' }}>shivam_kumar · software-engineer · cloud-devops</div>
            <div style={{ color: '#7ec8e3', marginTop: '4px' }}>$ cat contact.json</div>
            <div style={{ color: '#e0f2ff' }}>{`{`}</div>
            <div style={{ paddingLeft: '16px' }}>
              <div><span style={{ color: '#8b5cf6' }}>"email"</span><span style={{ color: '#fff' }}>: </span><span style={{ color: '#06ffa5' }}>"{CONTACT.email}"</span></div>
              <div><span style={{ color: '#8b5cf6' }}>"github"</span><span style={{ color: '#fff' }}>: </span><span style={{ color: '#06ffa5' }}>"github.com/shiv9060"</span></div>
              <div><span style={{ color: '#8b5cf6' }}>"linkedin"</span><span style={{ color: '#fff' }}>: </span><span style={{ color: '#06ffa5' }}>"linkedin.com/in/shivam-kumar"</span></div>
            </div>
            <div style={{ color: '#e0f2ff' }}>{`}`}</div>
            <div style={{ color: '#7ec8e3', marginTop: '4px' }}>$ <span style={{ animation: 'pulse-neon 1s infinite', color: '#00d4ff' }}>█</span></div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {[
            { label: 'GitHub', color: '#e0f2ff', href: CONTACT.github },
            { label: 'LinkedIn', color: '#00d4ff', href: CONTACT.linkedin },
            { label: 'Email Me', color: '#8b5cf6', href: `mailto:${CONTACT.email}` },
          ].map((btn) => (
            <button key={btn.label} style={{
              padding: '10px 24px', border: `1px solid ${btn.color}60`,
              background: 'rgba(0,20,40,0.7)', color: btn.color,
              borderRadius: '6px', cursor: 'pointer', fontSize: '0.85rem',
              fontFamily: "'Rajdhani', sans-serif", fontWeight: 600,
              letterSpacing: '2px', transition: 'all 0.2s',
              backdropFilter: 'blur(10px)'
            }}
            onClick={() => {
              if (btn.href.startsWith('mailto:')) {
                window.location.href = btn.href
              } else {
                window.open(btn.href, '_blank', 'noopener,noreferrer')
              }
            }}
            onMouseOver={(e) => e.currentTarget.style.background = `${btn.color}20`}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(0,20,40,0.7)'}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    ),
  },
]

const UIOverlay = () => {
  return (
    <>
      <div style={{ height: '500vh' }}>
        {sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            style={{
              height: '100vh',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 'clamp(2rem, 8vw, 6rem)',
              paddingRight: '2rem',
              position: 'relative',
            }}
          >
            <div style={{
              background: 'rgba(2, 4, 8, 0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 4vw, 2.5rem)',
              border: '1px solid rgba(0,212,255,0.1)',
            }}>
              {section.content}
            </div>
          </div>
        ))}
      </div>

      <nav style={{
        position: 'fixed', right: '2rem', top: '50%', transform: 'translateY(-50%)',
        display: 'flex', flexDirection: 'column', gap: '12px', zIndex: 100
      }}>
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: 'rgba(0,212,255,0.4)', border: '1px solid rgba(0,212,255,0.6)',
              display: 'block', transition: 'all 0.2s', cursor: 'pointer'
            }}
            title={s.id}
          />
        ))}
      </nav>

      <div style={{
        position: 'fixed', top: '1.5rem', left: '2rem', zIndex: 100,
        fontFamily: "'Orbitron', sans-serif", color: '#00d4ff',
        fontSize: '1.1rem', fontWeight: 900, letterSpacing: '4px',
        textShadow: '0 0 20px #00d4ff'
      }}>
        SK
      </div>
    </>
  )
}

export default UIOverlay
