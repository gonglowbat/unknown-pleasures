import { useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Leva } from 'leva'
import Scene from './components/Scene'
import useStore from './stores/store'


const App = () => {
    const isDebug = useStore((state) => state.isDebug)
    const setIsDebug = useStore((state) => state.setIsDebug)

    useEffect(() => {
        window.addEventListener('hashchange', () => {
            setIsDebug(window.location.hash === '#debug')
        })

        return window.removeEventListener('hashchange', () => {
            setIsDebug(window.location.hash === '#debug')
        })
    }, [])

    return (
        <>
            <Leva collapsed={false} hidden={!isDebug}/>

            <Canvas
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 100,
                    position: [0, 5, 5],
                }}
            >
                <Scene />
            </Canvas>
        </>
    )
}

export default App
