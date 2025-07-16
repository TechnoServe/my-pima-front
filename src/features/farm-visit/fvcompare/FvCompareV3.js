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
            {ft_data.qas.qas.map((ft_practice) => {
                const aa_practice = aaPracticesMap.get(ft_practice.practice_name_id);
                const isSectionOpen = openSections[ft_practice.practice_name_id] !== false; // Default to open

                return (
                    <div key={ft_practice.practice_name_id} className="practice-section">
                        <div className="practice-header-row" onClick={() => toggleSection(ft_practice.practice_name_id)}>
                            {isSectionOpen ? <KeyboardArrowDownIcon sx={{ color: '#555' }} /> : <KeyboardArrowRightIcon sx={{ color: '#555' }} />}
                            <h3 className="practice-name">{ft_practice.practice_name}</h3>
                        </div>
                        {isSectionOpen && (
                            <div className="qa-comparison-grid">
                                {ft_practice.questions.map((question, index) => {
                                    const ft_answer = ft_practice.answers[index];
                                    const aa_answer = aa_practice ? aa_practice.answers[index] : 'N/A';
                                    const areEqual = JSON.stringify(ft_answer) === JSON.stringify(aa_answer);

                                    const createMarkup = (htmlString) => ({ __html: htmlString || '<em>Not Answered</em>' });

                                    return (
                                        <div className="qa-row-container" key={index}>
                                            <div className="question-cell">{question}</div>
                                            <div className="qa-answers-container">
                                                <div className={`answer-cell ${areEqual ? 'match' : 'diff'}`}>
                                                    <strong>Farmer Trainer</strong>
                                                    <div dangerouslySetInnerHTML={createMarkup(ft_answer)} />
                                                </div>
                                                <div className={`answer-cell ${areEqual ? 'match' : 'diff'}`}>
                                                    <strong>Agronomy Advisor</strong>
                                                    <div dangerouslySetInnerHTML={createMarkup(aa_answer)} />
                                                </div>
                                            </div>
                                        </div>
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