import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import Line from './Line'


const Lines = () => {
    const linesRef = useRef()

    const lineCount = useMemo(() => 69, [])
    const lines = useMemo(() => [...new Array(lineCount)], [])

    const animationTimeline = useMemo(() => gsap.timeline({ repeat: -1, smoothChildTiming: true }), [])
    const divider = useMemo(() => 8, [])
    const ease = 'power1.inOut'

    useFrame((state) => {
        const time = state.clock.getElapsedTime()

        linesRef.current.children.forEach((line) => {
            line.children.forEach((child) => {
                child.material.uniforms.uTime.value = time
            })
        })

        animationTimeline
            .to(linesRef.current.rotation, {
                z: -0.5 / divider,
                x: -0.5 / divider,
                duration: 6,
                ease,
            }).to(linesRef.current.rotation, {
                z: 0.5 / divider,
                x: -0.5 / divider,
                duration: 4,
                ease,
            }).to(linesRef.current.rotation, {
                z: 0.5 / divider,
                x: 0.5 / divider,
                duration: 6,
                ease,
            }).to(linesRef.current.rotation, {
                z: -0.5 / divider,
                x: 0.5 / divider,
                duration: 4,
                ease,
            })
    })

    return (
        <group ref={linesRef}>
            {lines.map((line, index) => {
                return (<Line key={index} index={index} />)
            })}
        </group>
    )
}

export default Lines
