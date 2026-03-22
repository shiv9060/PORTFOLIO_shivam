import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Stars, PerspectiveCamera } from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import FloatingParticles from './FloatingParticles'
import CityGrid from './CityGrid'
import SkillOrbs from './SkillOrbs'
import ProjectBuildings from './ProjectBuildings'

function CameraController() {
  const { camera } = useThree()
  const targetRef = useRef({ x: 0, y: 3, z: 30 })

  const waypoints = [
    { x: 0, y: 3, z: 30 },
    { x: -5, y: 5, z: 10 },
    { x: 5, y: 2, z: -5 },
    { x: -3, y: 4, z: -25 },
    { x: 0, y: 2, z: -45 },
  ]

  useEffect(() => {
    camera.position.set(waypoints[0].x, waypoints[0].y, waypoints[0].z)
    camera.lookAt(0, 0, 0)

    const handleScroll = () => {
      const scrollY = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      if (maxScroll <= 0) return
      const progress = Math.min(scrollY / maxScroll, 1)

      const lastIdx = waypoints.length - 1
      const segment = progress * lastIdx
      const idx = Math.min(Math.floor(segment), lastIdx - 1)
      const t = segment - idx

      const from = waypoints[idx]
      const to = waypoints[idx + 1]

      targetRef.current = {
        x: THREE.MathUtils.lerp(from.x, to.x, t),
        y: THREE.MathUtils.lerp(from.y, to.y, t),
        z: THREE.MathUtils.lerp(from.z, to.z, t),
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [camera])

  useFrame(() => {
    camera.position.x += (targetRef.current.x - camera.position.x) * 0.05
    camera.position.y += (targetRef.current.y - camera.position.y) * 0.05
    camera.position.z += (targetRef.current.z - camera.position.z) * 0.05
    camera.lookAt(0, 1, camera.position.z - 20)
  })

  return null
}

function NeonFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -20]}>
      <planeGeometry args={[200, 120, 40, 40]} />
      <meshStandardMaterial
        color="#000820"
        wireframe
        emissive="#001a40"
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}

function NeonLights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight position={[0, 20, 20]} color="#00d4ff" intensity={2} distance={80} />
      <pointLight position={[-20, 10, 0]} color="#8b5cf6" intensity={1.5} distance={60} />
      <pointLight position={[20, 10, -20]} color="#06ffa5" intensity={1} distance={60} />
      <pointLight position={[0, 5, -45]} color="#00d4ff" intensity={2} distance={40} />
      <fog attach="fog" args={['#020408', 40, 120]} />
    </>
  )
}

const ThreeScene = () => {
  return (
    <div className="canvas-container">
      <Canvas
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ background: '#020408' }}
      >
        <PerspectiveCamera makeDefault fov={60} near={0.1} far={200} />
        <CameraController />
        <NeonLights />
        <NeonFloor />
        <Stars radius={150} depth={60} count={3000} factor={4} fade speed={1} />
        <Suspense fallback={null}>
          <FloatingParticles />
          <CityGrid />
          <SkillOrbs />
          <ProjectBuildings />
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ThreeScene
