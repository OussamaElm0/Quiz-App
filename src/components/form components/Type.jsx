import React from 'react';

export default function Type(props) {
    const types = [
        {
            id : 1 ,
            name : "Multiple",
            value : "multiple"
        },
        {
            id : 2,
            name : "True/False",
            value : "boolean"
        }
    ];

    const handleType = e => {
        const {value} = e.target ;
        props.onChange(value)
    }

    return (
      <>
        <label htmlFor="type" className="form-item">
          Type :{" "}
        </label>
        <select className="form-item select" id='type' onChange={handleType}>
            { types.map( type => {
                return (
                    <option value={type.value} key={type.id}>
                        {type.name}
                    </option>
                )
            })}
        </select>
      </>
    );
}