import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id="main">
      <div id="app">
        <App/> 
      </div>
      
      <div id='smallScreen'><h1>Please increase your screen resolution to view 🙂</h1></div>
    </div>
  </React.StrictMode>
)



