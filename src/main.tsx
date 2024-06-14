import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import './components/Nav.css'
import './components/Footer.css'
import './components/Card.css'
import './components/Banner.css'
import './components/Search.css'
import './components/View_More_Card.css'
import './pages/View_More.css'
import './pages/Home.css'
import './pages/About.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
