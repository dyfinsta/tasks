import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header>UM COS420 with React Hooks and TypeScript</header>
            <img
                src="public\sunPVS.png"
                alt="A picture of the sunflower from plants vs zombies"
            />
            <p>Why the Sunflower is useful</p>
            <ul>
                <li>It is inexpensive. Only 50 sun!</li>
                <li>
                    It generates more sun, refunding the cost of itself in only
                    2 cycles!
                </li>
                <li>
                    It is very easy to protect. You can keep it in the very last
                    row.
                </li>
                <Button
                    className="btn"
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </ul>
            <div>
                <div
                    style={{
                        width: "100px",
                        height: "200px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "200px",
                        backgroundColor: "red",
                    }}
                ></div>
                <div
                    style={{
                        width: "100px",
                        height: "200px",
                        backgroundColor: "red",
                    }}
                ></div>
            </div>
        </div>
    );
}

export default App;
