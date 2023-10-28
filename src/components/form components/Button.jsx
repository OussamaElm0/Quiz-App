import React from 'react';

export default function Button(props) {
    const generateUrl = (e) => {
        e.preventDefault()
        props.onClick()
    }
    return (
        <button 
            className='form-item form-btn'
            onClick={generateUrl}
        >
            Generate
        </button>
    )
}