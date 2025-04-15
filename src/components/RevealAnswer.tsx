import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isRevealed, setIsRevealed] = useState(false);

    return (
        <div>
            <Button onClick={() => setIsRevealed((prev) => !prev)}>
                Reveal Answer
            </Button>
            {isRevealed && <p>42</p>}
        </div>
    );
}
