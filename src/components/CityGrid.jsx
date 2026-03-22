import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

function Building({ position, height, glowColor }) {
  const meshRef = useRef()

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.material.emissiveIntensity = 0.3 + Math.sin(clock.getElapsedTime() * 2 + position[0]) * 0.1
    }
  })

  return (
    <group position={position}>
      <mesh ref={meshRef} castShadow>
        <boxGeometry args={[1, height, 1]} />
        <meshStandardMaterial
          color="#001428"
          emissive={glowColor || '#002244'}
          emissiveIntensity={0.3}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh position={[0, height / 2, 0.51]}>
        <planeGeometry args={[0.8, 0.3]} />
        <meshBasicMaterial color={glowColor || '#00d4ff'} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function DataCenter({ position }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.children[1].material.emissiveIntensity = 0.5 + Math.sin(clock.getElapsedTime() * 3) * 0.3
    }
  })

  return (
    <group ref={ref} position={position}>
      <mesh>
        <boxGeometry args={[3, 2, 4]} />
        <meshStandardMaterial color="#001020" metalness={0.9} roughness={0.1} emissive="#001040" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 1.1, 0]}>
        <boxGeometry args={[2.8, 0.1, 3.8]} />
        <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

function Satellite({ position }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.5
  })

  return (
    <group position={position} ref={ref}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <sphereGeometry args={[0.8, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="#002244" emissive="#00d4ff" emissiveIntensity={0.4} wireframe />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.05, 0.05, 2, 6]} />
        <meshStandardMaterial color="#888" metalness={1} roughness={0.2} />
      </mesh>
    </group>
  )
}

function WindTurbine({ position }) {
  const bladesRef = useRef()
  useFrame(({ clock }) => {
    if (bladesRef.current) bladesRef.current.rotation.z = clock.getElapsedTime() * 2
  })

  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.05, 0.1, 5, 6]} />
        <meshStandardMaterial color="#334" metalness={0.8} roughness={0.3} />
      </mesh>
      <group ref={bladesRef} position={[0, 2.5, 0]}>
        {[0, 120, 240].map((angle, i) => (
          <mesh key={i} rotation={[0, 0, (angle * Math.PI) / 180]}>
            <boxGeometry args={[0.1, 1.5, 0.05]} />
            <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  )
}

const CityGrid = () => {
  const buildings = useMemo(() => {
    const bldgs = []
    const positions = [
      [-15, 0, 5], [-12, 0, 8], [-18, 0, 3], [-10, 0, 0],
      [12, 0, 5], [15, 0, 2], [18, 0, 7], [10, 0, 10],
      [-14, 0, -15], [-10, 0, -18], [13, 0, -12], [16, 0, -20],
      [-6, 0, -30], [6, 0, -30], [-15, 0, -35], [15, 0, -35],
    ]
    const glowColors = ['#00d4ff', '#8b5cf6', '#06ffa5', '#ff6b6b']
    positions.forEach((pos, i) => {
      bldgs.push({
        position: pos,
        height: 2 + Math.random() * 6,
        glowColor: glowColors[i % glowColors.length],
      })
    })
    return bldgs
  }, [])

  return (
    <group>
      {buildings.map((b, i) => (
        <Building key={i} {...b} />
      ))}
      <DataCenter position={[-8, 0, -10]} />
      <DataCenter position={[8, 0, -8]} />
      <DataCenter position={[0, 0, -40]} />
      <Satellite position={[-5, 4, 5]} />
      <Satellite position={[8, 3, 0]} />
      <WindTurbine position={[-20, 0, -5]} />
      <WindTurbine position={[20, 0, -10]} />
      <WindTurbine position={[-22, 0, -15]} />
    </group>
  )
}

export default CityGrid
