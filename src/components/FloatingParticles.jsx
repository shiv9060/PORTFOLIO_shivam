import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const FloatingParticles = ({ count = 200 }) => {
  const mesh = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const neonColors = [
      [0, 0.83, 1],
      [0.54, 0.36, 0.96],
      [0.02, 1, 0.65],
    ]
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 80
      pos[i * 3 + 1] = Math.random() * 20 - 2
      pos[i * 3 + 2] = (Math.random() - 0.5) * 120 - 10
      const c = neonColors[Math.floor(Math.random() * neonColors.length)]
      col[i * 3] = c[0]
      col[i * 3 + 1] = c[1]
      col[i * 3 + 2] = c[2]
    }
    return [pos, col]
  }, [count])

  useFrame(({ clock }) => {
    if (mesh.current) {
      const t = clock.getElapsedTime()
      mesh.current.rotation.y = t * 0.02
      const posAttr = mesh.current.geometry.attributes.position
      for (let i = 0; i < count; i++) {
        posAttr.array[i * 3 + 1] += Math.sin(t + i) * 0.002
      }
      posAttr.needsUpdate = true
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

export default FloatingParticles
