import React from 'react'

export default function Answer({ data, questionId, getAnswer, isVisible, count }) {

    const handleChange = (e) => {
        // Permet de recuperer l'idde la réponse choisie et de la renvoyer dans Question.js
        const idAnswer = e.target.value; //dans JSX id = idAnswer
        getAnswer(idAnswer)
    }

    return (
        <div>
            {data.map(answer => {
                const idAnswer = String(questionId) + String(answer.id);
                return (
                    <div className="form-check container">
                        <input className="form-check-input" type="radio"
                            name={"radiogrp-" + data.id} id={idAnswer}
                            value={answer.id} 
                            onChange={handleChange} />
                        <label className="form-check-label row" htmlFor={idAnswer}>
                            <div className="col">{answer.name}</div>
                            <div className="col text-right">{isVisible ? answer.count : null}</div>
                        </label>
                    </div>
                )
            })}
        </div>
    )
}
