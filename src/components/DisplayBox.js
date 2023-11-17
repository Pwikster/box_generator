import React from 'react'

const DisplayBox = (props) => {


    return props.boxes.map((box, index) => (
        <div key={index} style={{
            width: `${box.size}px`,
            height: `${box.size}px`,
            backgroundColor: box.color,
            display: 'inline-block',
            margin: '10px'
        }} />
    ));
}

export default DisplayBox