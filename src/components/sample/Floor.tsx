import * as THREE from 'three'

function Floor() {
  return (
    <mesh receiveShadow rotation={[-(Math.PI * 0.5), 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <meshStandardMaterial color={'lightblue'} side={THREE.DoubleSide} />
    </mesh>
  )
}

export default Floor
