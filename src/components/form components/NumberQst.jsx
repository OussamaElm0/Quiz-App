import React from 'react';

export default function Number(props){
    const handleNum = (e) => {
        const {value} = e.target
        value >= 0 && value <= 50 ? props.onChange(value) : alert('The number of questions must be beetwen 1 and 50')
    }
    return (
        <>
            <label htmlFor='num' className='form-item'>Number of Questions : </label>
            <input 
                id='num'
                className='form-item'
                type='number'
                value={props.value}
                onChange={handleNum}
            />
        </>
    )
}