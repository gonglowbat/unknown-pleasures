import * as THREE from 'three'
import { useMemo } from 'react'
import lineVertexShader from '../shaders/line/vertex.glsl'
import lineFragmentShader from '../shaders/line/fragment.glsl'
import planeFragmentShader from '../shaders/plane/fragment.glsl'


const lineGeometry = new THREE.BoxGeometry(5, 0.02, 0.02, 128)
const plneGeometry = new THREE.PlaneGeometry(5, 1.5, 128, 1)

const Line = (props) => {
    const uniforms = useMemo(() => {
        return {
            uTime: new THREE.Uniform(0),
            uOffset: new THREE.Uniform(props.index * 11),
        }
    }, [props.index])

    return (
        <group>
            <mesh
                position-z={-props.index * 0.095}
                geometry={lineGeometry}
            >
                <shaderMaterial
                    vertexShader={lineVertexShader}
                    fragmentShader={lineFragmentShader}
                    uniforms={uniforms}
                />
            </mesh>
            <mesh
                position-y={-0.75}
                position-z={-props.index * 0.095}
                geometry={plneGeometry}
            >
                <shaderMaterial
                    vertexShader={lineVertexShader}
                    fragmentShader={planeFragmentShader}
                    uniforms={uniforms}
                />
            </mesh>
        </group>
    )
}

export default Line
