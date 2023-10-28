import React, { useState, useEffect } from 'react';
import Categories from './form components/Categories';
import Difficulty from './form components/Difficulty';
import Type from './form components/Type';
import Number from './form components/NumberQst';
import Button from './form components/Button';

export default function Form(props) {
    const [numQst, setNum] = useState(1);
    const [category, setCategory] = useState(9);
    const [difficulty, setDifficulty] = useState('easy');
    const [type, setType] = useState('multiple');
    var apiUrl ;

    useEffect( () => {
        apiUrl = `https://opentdb.com/api.php?amount=${numQst}&category=${category}&difficulty=${difficulty}&type=${type}`;
    },[numQst , category, difficulty, type])

    useEffect(() => {
        setNum(numQst)
    })
    useEffect(() => {
        setCategory(category)
    })
    useEffect(() => {
        setDifficulty(difficulty)
    })
    useEffect(()=>{
        setType(type)
    })
    
    const handleNumber = (num) => {
        setNum(num)
    }
    const handleCat = (cat) => {
        setCategory(cat)
    }
    const handleDif = (dif) => {
        setDifficulty(dif)
    }
    const handleType = (type) => {
        setType(type)
    }
    const generateUrl = () => {
        props.onSubmit(apiUrl)
    }   

    return (
        <form className='form-section'>
            <Number onChange={handleNumber} value={numQst}/>
            <Categories onChange={handleCat} />
            <Difficulty onChange={handleDif} />
            <Type onChange={handleType}/>
            <Button onClick={generateUrl} />
        </form>
    )
}