import { DoubleSide, Vector3 } from 'three'

function Cube() {
  return (
    <mesh castShadow position={new Vector3(0, 0.5, 0)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} side={DoubleSide} />
    </mesh>
  )
}

export default Cube
