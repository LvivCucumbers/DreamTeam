import { useState, useEffect } from 'react';

function App() {
    const [date, setDate] = useState();

    useEffect(() => {
        fetch("http://localhost:3000/").then((response) => {
            return response.text();
        })
        .then((data) => {
            setDate(data);
        });
    }, [])

    return (
        <div>
            <h1>{date}</h1>
        </div>
    );
}

export default App;
