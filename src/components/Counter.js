import React, {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    function add() {
        setCount(count + 1)
    }

    function substract() {
        setCount(count - 1)
    }
    return (
        <div className='counter'>
            <button className="counter-minus" onClick={substract}>-</button>
            <div className='count-counter'>
                <h1>{count}</h1>
            </div>
            <button className="counter-plus" onClick={add}>+</button>
        </div>
    )
}