import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App'
import './index.css'

const element = <React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(element);