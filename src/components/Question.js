import React, { useState } from 'react'

export default function Question({ data }) {
    const [isVisible, setIsVisible] = useState(false);
    const [userAnswer, setUserAnswer] = useState(null);

    const [count, setCount] = useState(0);  // pour forcer le render du composant car setIsVisble ne change qu'une fois


    const handleChange = (e) => {
        setUserAnswer(e.target.value);
    }

    const handleVote = () => {
        setIsVisible(true);
        setCount(count+1); // pour forcer le render du composant car setIsVisble ne change qu'une fois

        const newQuestion = data;
        newQuestion.answers[userAnswer].count++;
        data = newQuestion;
    }

    return (
        <div>
            <div className="card mb-3">
                <div className="card-header bg-primary text-white border-primary">
                    {data.title}
                </div>
                <div className="card-body">
                    <form>
                        {data.answers.map(answer => {
                            const idAnswer = String(data.id) + String(answer.id);
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
                    </form>
                </div>
                <div className="card-footer bg-transparent">
                    <button
                        className="btn btn-primary"
                        onClick={handleVote}>
                        Voter
                        </button>
                </div>
            </div>
        </div>
    )
}

//<Answer data={data.answers} questionId={data.id} getAnswer={getAnswer} isVisible={isVisible} />