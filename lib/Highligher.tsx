'use client'
import { useInView } from 'framer-motion'
import React, { useRef } from 'react'
import { RoughNotation } from 'react-rough-notation'

interface HighlightProps {
    children: React.ReactNode
    type: any
    color: string
    show?: boolean

    brackets?: [] // Maybe an array

    iterations?: number
    order?: number | string
    strokeWidth?: number

    animate?: boolean
    animationDelay?: number
    animationDuration?: number
}
const Highlighter = ({ children,type, color, show, brackets, iterations, order, strokeWidth, animate, animationDelay, animationDuration }: HighlightProps) => {
    // console.log({ type, color, show })
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
        <span ref={ref}>
            <RoughNotation type={type} show={isInView} color={color} brackets={'bottom'} animate={animate} animationDelay={animationDelay} animationDuration={animationDuration} strokeWidth={strokeWidth} order={order} iterations={iterations} >
                {children}
            </RoughNotation>
        </span>
    )
}

export default Highlighter