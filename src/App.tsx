import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Counter from './components/counter'
import Logo from './components/logoTag'
import './App.css'

function App() {
    const [count, setCount] = useState(0);
    // useEffect(() => {
    //   document.title = `You clicked ${count} times`;
    // })

    return (
        <div className="App">
            <div>
                <Logo src={viteLogo} href="https://vitejs.dev" alt="Vite logo"/>
                <Logo src={reactLogo} href="https://reactjs.org" alt="React Logo"/>
            </div>
            <h1>Vite + React</h1>
            <Counter />
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}

export default App
