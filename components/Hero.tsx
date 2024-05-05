"use client";

import Spline from '@splinetool/react-spline'
import React from 'react'

type Props = {}

export default function Hero({}: Props) {
  return (
    <div className='relative z-0 w-full'>
    
    <div className="absolute inset-0 backdrop-filter backdrop-blur-sm flex justify-center items-center">
        <div className='block '>
            <h1 className="text-white text-center 2xl:text-9xl lg:text-7xl md:text-5xl text-2xl font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>AUFAL MAROM</h1>
            <p className='text-white justify-center text-center  lg:text-2xl md:text-lg text-sm font-bold' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.6)'}}>Fullstack Web Developer Enthusiast</p>
        </div>
    </div>
    
    
    <Spline scene="https://draft.spline.design/Tm9qXIRwfjlJJgOz/scene.splinecode" />
</div>
)
}