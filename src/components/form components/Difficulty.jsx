import React from 'react';

export default function Difficulty(props) {
    const levels = [
        {
            id : 1,
            name : "Easy",
            value : "easy"
        }, 
        {
            id : 2,
            name : "Medium",
            value : "medium"
        },
        {
            id : 3,
            name : "Hard",
            value : "hard"
        }
    ];

    const handleDif = (e) => {
        const {value} = e.target
        props.onChange(value)
    }

    return (
      <>
        <label htmlFor="diff" className="form-item ">
          Difficulty :{" "}
        </label>
        <select className="form-item select" id="diff" onChange={handleDif}>
          {levels.map((level) => {
            return (
              <option value={level.value} key={level.id}>
                {level.name}
              </option>
            );
          })}
        </select>
      </>
    );
}