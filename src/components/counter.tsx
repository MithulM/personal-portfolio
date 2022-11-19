import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    function handleRight(e) {
        e.preventDefault();
        setCount((count) => count - 1);
    }
    return (
        <button onClick={() => setCount(count => count + 1)} onContextMenu={handleRight}>
            count is {count}
        </button>
    );
}

export default Counter;