import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { MarketContextProvider } from './contexts/Market.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes, Navigate } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MarketContextProvider>
      <Routes>
        <Route exact path="/" element={<Navigate to="/marketplace" replace={true} />} />
        <Route path="/marketplace" element={<App />} />
      </Routes>
    </MarketContextProvider>
  </BrowserRouter>,
)
