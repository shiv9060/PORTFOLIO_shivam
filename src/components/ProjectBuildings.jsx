import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard, Html } from '@react-three/drei'

const projects = [
  {
    name: 'CloudOps Platform',
    tech: 'AWS · Docker · K8s',
    desc: 'Automated cloud infrastructure',
    color: '#00d4ff',
    position: [-8, 0, -15],
    height: 6,
  },
  {
    name: 'CI/CD Pipeline',
    tech: 'Jenkins · GitHub Actions',
    desc: 'End-to-end deployment automation',
    color: '#8b5cf6',
    position: [0, 0, -18],
    height: 8,
  },
  {
    name: 'IoT Dashboard',
    tech: 'Python · MQTT · React',
    desc: 'Real-time IoT data visualization',
    color: '#06ffa5',
    position: [8, 0, -15],
    height: 5,
  },
  {
    name: 'Microservices API',
    tech: 'Node.js · Docker · Redis',
    desc: 'Scalable REST API platform',
    color: '#FF9900',
    position: [-5, 0, -22],
    height: 7,
  },
]

function ProjectBuilding({ name, tech, desc, color, position, height }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.children[0].material.emissiveIntensity = hovered
        ? 1.0
        : 0.3 + Math.sin(clock.getElapsedTime() * 1.5 + position[0]) * 0.1
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2.5, height, 2.5]} />
        <meshStandardMaterial
          color="#000820"
          emissive={color}
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, height / 2 + 0.05, 0]}>
        <boxGeometry args={[2.5, 0.1, 2.5]} />
        <meshBasicMaterial color={color} transparent opacity={0.9} />
      </mesh>
      <Billboard position={[0, height / 2 + 1.5, 0]}>
        <Text fontSize={0.3} color={color} anchorX="center" anchorY="middle" maxWidth={3}>
          {name}
        </Text>
        <Text fontSize={0.18} color="#aaaaaa" anchorX="center" anchorY="middle" position={[0, -0.4, 0]}>
          {tech}
        </Text>
      </Billboard>
      {hovered && (
        <Html position={[1.5, height / 2, 0]} distanceFactor={8}>
          <div style={{
            background: 'rgba(0,20,40,0.9)',
            border: `1px solid ${color}`,
            borderRadius: '8px',
            padding: '10px 14px',
            color: '#e0f2ff',
            fontSize: '12px',
            fontFamily: 'Rajdhani, sans-serif',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
          }}>
            <div style={{ color, fontWeight: 700 }}>{name}</div>
            <div style={{ color: '#7ec8e3', marginTop: '4px' }}>{desc}</div>
            <div style={{ color: '#555', fontSize: '10px', marginTop: '4px' }}>{tech}</div>
          </div>
        </Html>
      )}
    </group>
  )
}

const ProjectBuildings = () => {
  return (
    <group>
      {projects.map((p) => (
        <ProjectBuilding key={p.name} {...p} />
      ))}
    </group>
  )
}

export default ProjectBuildings
