import React, { useState, useEffect } from "react";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);

    const checkAnswer = (input: string) => {
        const normalized = input.trim();
        const expectedNormalized = expectedAnswer.trim();
        setIsCorrect(normalized === expectedNormalized);
    };

    useEffect(() => {
        checkAnswer(userAnswer);
    }, [userAnswer, expectedAnswer]);

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="Enter your answer"
                aria-label="answer input"
            />
            <p role="alert">{isCorrect ? "✔️" : "❌"}</p>
        </div>
    );
}
