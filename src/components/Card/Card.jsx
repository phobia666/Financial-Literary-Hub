import React, { useState } from 'react'
import './Card.css'
import { financeTerms } from '../data/data'
import { ArrowUpRight } from 'lucide-react'
const Card = () => {
  const [openCards, setOpenCards] = useState([])

  const handleToggle = (id) => {
    setOpenCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    )
  }

  return (
    <div className="centre" id="core-concepts">
      <div className="card-title">
        <div className="title-back">
          <div className="title-left">
            <p>---- CORE CONCEPTS</p>
            <h1>Everything you need to know about your money</h1>
          </div>
          <div className="title-right">
            <p>From budgeting basics to smart investing — explore 10 essential finance topics designed to help you make better decisions with your money.</p>
          </div>
        </div>
        
      </div>
      <div className="card-section">
        {financeTerms.map((term) => (
        <div className="card-container" key={term.id}>
          <img src={term.image} alt={term.title} className="card-image" />
          <h2>{term.title}</h2>
          <p>{term.shortDesc}</p>
          <div className={`more-text-wrap ${openCards.includes(term.id) ? 'open' : ''}`}>
            <p className="more-text">{term.details}</p>
          </div>
          <div className="btn-div">
            <button className="read-btn" type="button" onClick={() => handleToggle(term.id)}>
              <span className="txt">{openCards.includes(term.id) ? 'Show Less' : 'Read More'}</span>
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
export default Card