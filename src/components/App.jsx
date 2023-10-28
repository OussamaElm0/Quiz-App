import React, {useState} from 'react';
import Form from './Form';
import Quiz from './Quiz';
import Footer from './Footer';

export default function App() {
    const [qst, setQst] = useState({ response_code: 0, results: [] });
    const getQuestions = async (apiUrl) => {
        try {
            const response = await fetch(apiUrl)
            const data = await response.json()
            setQst(data)
        } catch(error) {
            console.log("Error fetching data:",error);
        }
    }
    return (
        <>
            <header className='header'>
                <h1>Welcome!</h1>
            </header>
            <Form onSubmit={getQuestions} />
            <Quiz questions={qst} score={0} />
            <Footer />
        </>
    ) 
}