import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const element = <React.StrictMode><App /></React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(element);