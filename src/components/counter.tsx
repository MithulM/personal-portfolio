import { useState, useEffect } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    })
    function handleRight(e: { preventDefault: () => void; }) {
        e.preventDefault();
        setCount((count) => count - 1);
    }
    return (
        <button onClick={() => setCount(count => count + 1)} onContextMenu={handleRight}>
            count is {count}
        </button>
    );
}