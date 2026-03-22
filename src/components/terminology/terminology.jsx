import { useState } from 'react'
import "./terminology.css";
import { financeTags } from '../data/financeTerms';

function TerminologySection() {
    const[showAll, setShowAll] = useState(false);
    const visibleTerms = showAll ? financeTags : financeTags.slice(0, 5);
    
  return (
    <div className="terminology-section" id="terms">
      <h2>FINANCE TERMINOLOGIES</h2>
      <p>
        Learn common financial terms in simple language to make better money decisions.
      </p>
      <div className="terms">
        {visibleTerms.map((elem)=>(
            elem.id <= 5 ?
                <span 
                key = {elem.id} 
                style={{
                    opacity: 1,
                    transform: 'none',
                    animation: 'none'
                    }}>
                    {elem.name}
                </span>
            :   <span 
                key = {elem.id} 
                >
                    {elem.name}
                </span>
        ))}
      </div>
      <button className='view-btn' onClick={() => setShowAll(!showAll)}>
        {showAll ? 'Show Less' : 'View All Terms'}
      </button>

    </div>
  );
}

export default TerminologySection;