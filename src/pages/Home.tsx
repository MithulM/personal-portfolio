import reactLogo from '../assets/react.svg'
import {Counter} from '../components/counter'
import viteLogo from '../assets/vite.svg'
import Logo from '../components/logoTag'
import React from 'react'
import '../App.css'

export function Home() {
    return (
        <React.Fragment>
            <div className="App">
                <div>
                    <Logo src={viteLogo} href="https://vitejs.dev" alt="Vite logo" />
                    <Logo src={reactLogo} href="https://reactjs.org" alt="React Logo" />
                </div>
                <Counter />
            </div>
        </React.Fragment>
    )
}