import React from 'react'
import { Image } from '@nextui-org/react'
import NextImage from 'next/image'

interface ImageProps {
    src:string
    alt:string
    width:number
    height: number
    isBlurred: boolean
    priority: boolean
}

const Images = ({src,alt,width,height,isBlurred,priority}:ImageProps) => {
  return (
    <Image as={NextImage} src={src} alt={alt} width={width} height={height} isBlurred={isBlurred} priority={priority} />
  )
}

export default Images