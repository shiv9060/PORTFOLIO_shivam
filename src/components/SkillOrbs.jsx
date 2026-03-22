import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Text, Billboard } from '@react-three/drei'

const skills = [
  { name: 'AWS', color: '#FF9900', position: [-6, 3, 8] },
  { name: 'Docker', color: '#2496ED', position: [-3, 5, 5] },
  { name: 'CI/CD', color: '#06ffa5', position: [0, 4, 7] },
  { name: 'Python', color: '#FFE873', position: [3, 5, 5] },
  { name: 'Node.js', color: '#68A063', position: [6, 3, 8] },
  { name: 'React', color: '#61DAFB', position: [-4, 2, 4] },
  { name: 'Kubernetes', color: '#326CE5', position: [4, 2, 4] },
  { name: 'IoT', color: '#8b5cf6', position: [0, 6, 9] },
]

function SkillOrb({ name, color, position }) {
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(clock.getElapsedTime() + position[0]) * 0.3
      ref.current.rotation.y = clock.getElapsedTime() * 0.5
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.5, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1.5 : 0.6}
          metalness={0.3}
          roughness={0.1}
          transparent
          opacity={0.9}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.7, 0.02, 8, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.5} />
      </mesh>
      <Billboard position={[0, 0.9, 0]}>
        <Text fontSize={0.25} color={color} anchorX="center" anchorY="middle">
          {name}
        </Text>
      </Billboard>
    </group>
  )
}

const SkillOrbs = () => {
  return (
    <group>
      {skills.map((skill) => (
        <SkillOrb key={skill.name} {...skill} />
      ))}
    </group>
  )
}

export default SkillOrbs
