import React from 'react';
import {useState} from 'react';
import '../CSS/InputWord.css';
import {useNavigate} from "react-router-dom";

function InputWord() {
    const [word, setWord] = useState<string>('');
    const navigate = useNavigate();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (word.trim().length > 0){
            navigate("/display-word", {state: {data: word.trim()}});
        }
    }

    return (
        <div className="center-form">
            <form onSubmit={handleSubmit}>
                <label>Enter a word:
                    <input type="text" value={word} onChange={e => setWord(e.target.value)}/>
                </label>
                <button type="submit" disabled={word.trim().length === 0}>Send</button>
            </form>
        </div>
    );
};

export default InputWord;