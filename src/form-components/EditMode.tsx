import React, { useState } from "react";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <div className="form-check form-switch">
                <input
                    type="checkbox"
                    className="form-check-input"
                    checked={isEditMode}
                    onChange={() => setIsEditMode(!isEditMode)}
                    role="checkbox"
                    id="editModeSwitch"
                />
                <label className="form-check-label" htmlFor="editModeSwitch">
                    Edit Mode
                </label>
            </div>

            {isEditMode ?
                <div>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            checked={isStudent}
                            onChange={() => setIsStudent(!isStudent)}
                            id="studentCheckbox"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="studentCheckbox"
                        >
                            Student
                        </label>
                    </div>
                </div>
            :   <p>
                    {name} is {isStudent ? "a" : "not a"} student
                </p>
            }
        </div>
    );
}
