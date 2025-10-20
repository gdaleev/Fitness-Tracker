import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import AddWorkout from "./pages/AddWorkout"
import History from "./pages/History"
import Goals from "./pages/Goals"

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/add" element={<AddWorkout />} />
            <Route path="/history" element={<History />} />
            <Route path="/goals" element={<Goals />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
