import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-card">
        <div className="row">
          <h1>Join our community</h1>
          <p>30-day, hassle-free money back guarantee</p>
          <p>Gain access to our full library of tutorials along with expert code reviews.
            Perfect for any developers who are serious about honing their skills.</p>
        </div>
        <div className="row-2">
          <section className='sec-1'>
            <h2>Monthly Subscription</h2>
            <p className='p-one'><span>$29</span>per month</p>
            <p className='p-two'> Full access for less than $1 a day</p>
            <button>
              Sign Up</button>
          </section>
          <section className='sec-2'>
            <h3>Why Us</h3>
            <p> Tutorials by industry experts
              Peer &amp; expert code review
              Coding exercises
              Access to our GitHub repos
              Community forum
              Flashcard decks
              New videos every week</p>
          </section>
        </div>
      </div>
    </>
  )
}

export default App
