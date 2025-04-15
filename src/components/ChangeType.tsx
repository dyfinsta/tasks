import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ChangeType(): React.JSX.Element {
    const [type, setType] = useState("Short Answer");

    const toggleType = () => {
        setType((prevType) =>
            prevType === "Short Answer" ? "Multiple Choice" : "Short Answer",
        );
    };

    return (
        <div>
            <p>{type}</p>
            <Button onClick={toggleType}>Change Type</Button>
        </div>
    );
}
