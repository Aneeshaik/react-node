import React from "react";
import ReactDOM from "react-dom"

const App = () => {
    return(
        <div>
            <h1>React from node</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);