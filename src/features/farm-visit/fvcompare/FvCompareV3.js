import React, { useState } from 'react';
import './FarmVisitComparison.css';

// Using the existing Material-UI Icons from your project
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FvCompareV3 = ({ ft_data, aa_data }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (practiceId) => {
    setOpenSections(prev => ({ ...prev, [practiceId]: !prev[practiceId] }));
  };

  if (!ft_data?.qas?.qas || !aa_data?.qas?.qas) {
    return <div>Question and answer data is missing or not in the expected format.</div>;
  }

  // Create a map of AA practices for easy lookup
  const aaPracticesMap = new Map(aa_data.qas.qas.map(p => [p.practice_name_id, p]));

  return (
    <div className="fv-compare-container-v3">
      <div className="comparison-headers">
          <div className="header-item practice-header">Best Practice</div>
          <div className="header-item">Farmer Trainer Data</div>
          <div className="header-item">Agronomy Advisor Data</div>
      </div>
      {ft_data.qas.qas.map((ft_practice) => {
        const aa_practice = aaPracticesMap.get(ft_practice.practice_name_id);
        const isSectionOpen = openSections[ft_practice.practice_name_id] || false;

        return (
          <div key={ft_practice.practice_name_id} className="practice-section">
            <div className="practice-header-row" onClick={() => toggleSection(ft_practice.practice_name_id)}>
               {/* Replaced Font Awesome with the existing MUI Icons */}
               {isSectionOpen ? <KeyboardArrowDownIcon /> : <KeyboardArrowRightIcon />}
               <h3 className="practice-name">{ft_practice.practice_name}</h3>
            </div>
            {isSectionOpen && (
                 <div className="qa-comparison-grid">
                    {ft_practice.questions.map((question, index) => {
                        const ft_answer = ft_practice.answers[index];
                        const aa_answer = aa_practice ? aa_practice.answers[index] : 'N/A';
                        const areEqual = JSON.stringify(ft_answer) === JSON.stringify(aa_answer);
                        const valueClassName = areEqual ? 'match' : 'diff';

                        // Function to render HTML strings safely
                        const createMarkup = (htmlString) => {
                            return {__html: htmlString || 'Not Answered'};
                        }

                        return (
                            <React.Fragment key={index}>
                                <div className="question-cell"><strong>{question}</strong></div>
                                <div className={`answer-cell ${valueClassName}`} dangerouslySetInnerHTML={createMarkup(ft_answer)} />
                                <div className={`answer-cell ${valueClassName}`} dangerouslySetInnerHTML={createMarkup(aa_answer)} />
                            </React.Fragment>
                        );
                    })}
                 </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FvCompareV3;