import { Canvas, useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import styled from 'styled-components'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { AxesHelper } from 'three'
import Floor from '../components/sample/Floor'
import Cube from '../components/sample/Cube'

function Sample() {
  const MyOrbitControls = () => {
    const { camera, gl } = useThree()

    useEffect(() => {
      const orbitControls = new OrbitControls(camera, gl.domElement)

      return () => {
        orbitControls.dispose()
      }
    }, [camera, gl])

    return null
  }

  return (
    <App>
      <Canvas
        shadows={true}
        camera={{
          position: [2, 2, 7],
        }}
      >
        <MyOrbitControls />
        <primitive object={new AxesHelper(10)} />
        <ambientLight color="white" intensity={0.1} />
        <directionalLight color="white" position={[0, 2, 5]} />

        <Cube />
        <Floor />
      </Canvas>
    </App>
  )
}

export default Sample

const App = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eee;
`
