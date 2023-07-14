import React, { useState } from 'react'

    export default function AboutUs(props) {
    
    return (
            <div className={`container bg-${props.mode==='light'?'light':'#2a3240'}`}>
            <h2 className='my-3' style={{color: props.mode==='dark'?'white':'black'}}>About Us</h2>
            
            <p style={{color: props.mode==='dark'?'white':'black'}}>Word Wizard is a versatile text utility application designed to assist users in various aspects of writing, editing, and enhancing their written content. With a wide range of features and tools, Word Wizard empowers users to improve their productivity, accuracy, and creativity when working with text.</p>
            
        </div>
    )
    }