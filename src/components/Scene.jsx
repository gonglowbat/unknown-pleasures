import { Center, GizmoHelper, GizmoViewport, OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useEffect } from 'react'
import { Perf } from 'r3f-perf'
import { useControls } from 'leva'
import Lines from './Lines'
import useStore from '../stores/store'


const Scene = () => {
    const { camera } = useThree()
    const isDebug = useStore((state) => state.isDebug)

    const cameraControls = useControls({
        positionX: { value: camera.position.x, min: 0, max: 10, step: 0.25 },
        positionY: { value: camera.position.y, min: 0, max: 10, step: 0.25 },
        positionZ: { value: camera.position.z, min: 0, max: 10, step: 0.25 },
    })

    useEffect(() => {
        camera.position.x = cameraControls.positionX
        camera.position.y = cameraControls.positionY
        camera.position.z = cameraControls.positionZ
    }, [
        cameraControls.positionX,
        cameraControls.positionY,
        cameraControls.positionZ,
    ])

    return (
        <>
            {isDebug && (
                <>
                    <Perf position="top-left" />

                    <OrbitControls makeDefault />

                    <GizmoHelper>
                        <GizmoViewport />
                    </GizmoHelper>
                </>
            )}

            <Center>
                <Lines />
            </Center>
        </>
    )
}

export default Scene
