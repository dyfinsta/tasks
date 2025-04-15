import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Helper function to roll a die (1-6)
 */
export function d6(): number {
    const roll = 1 + Math.floor(Math.random() * 6);
    console.log("Rolled number:", roll);
    return roll;
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(d6());
    const [rightDie, setRightDie] = useState<number>(d6());

    const rollLeft = () => setLeftDie(d6());
    const rollRight = () => setRightDie(d6());

    let result: string | null = null;
    if (leftDie === 1 && rightDie === 1) {
        result = "Lose";
    } else if (leftDie === rightDie) {
        result = "Win";
    }

    return (
        <div>
            <div data-testid="left-die">Left Die: {leftDie}</div>
            <div data-testid="right-die">Right Die: {rightDie}</div>
            <Button onClick={rollLeft}>Roll Left</Button>
            <Button onClick={rollRight}>Roll Right</Button>
            {result && <div>{result}</div>}
        </div>
    );
}
