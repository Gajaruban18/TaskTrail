import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import TaskForm from './components/TaskForm'

const Home = () => {
  const [showForm, setShowForm] = useState(false)
  const navigate = useNavigate()

  const handleAddTaskClick = () => {
    const token = localStorage.getItem('token')
    if (token) {
      setShowForm(true)
    } else {
      alert('Please login to add a task')
      navigate('/login') // redirect to login page if you have one
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gradient-to-r from-white to-[#FFEDED] flex items-center justify-center p-4">
        <div className="text-center max-w-xl py-4">
          <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
            Effortless task <br />
            management,{' '}
            <span className="bg-gradient-to-r from-[#AC2898] to-[#421B41] bg-clip-text text-transparent">
              anytime
            </span>
          </h1>

          <p className="text-[#646464] py-8">
            Your daily work, digitalized. Ditch the paperwork and get organized with TaskTrail. Your secure, centralized platform for tasks, docs and teamwork.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={handleAddTaskClick}
              className="px-12 py-3 text-white font-medium text-lg rounded-full bg-gradient-to-r from-[#421B41] to-[#AC2898] 
                hover:bg-gradient-to-r hover:from-[#AC2898] hover:to-[#421B41] transition-all duration-300
                shadow-lg hover:shadow-[#421B41]/50 hover:scale-105"
            >
              Add task
            </button>

            <button
              className="px-8 py-3 font-medium text-lg rounded-full border-2 border-[#AC2898] text-[#AC2898]
                hover:bg-[#AC2898]/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#AC2898]"
              onClick={() => alert('Feature coming soon!')}
            >
              Learn more
            </button>
          </div>
        </div>
      </main>

      {showForm && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={() => setShowForm(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <TaskForm onClose={() => setShowForm(false)} />
          </div>
        </>
      )}

      <Footer />
    </div>
  )
}

export default Home
