import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const modifyCounter = (num) => setCounter(counter + num);


    return (
        <>
            <h1>{counter}</h1>
            {[-19, -5, -2, 1, 3, 7, 11, 100].map(element => {
                const displayElement = element > 0 ? `+${element}` : element;
                return <button onClick = {() => modifyCounter(element)}>{displayElement}</button>
            })}
            
        </>
    )
}

export default Counter