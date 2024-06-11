import React from "react";

const QASection = ({ qa, openModal }) => (
  <div className="qa">
    <p className="practice-name">{qa.practice_name}</p>
    <div className="qa-content">
      {qa.questions.map((question, index) => (
        <div key={index} className="question-answer">
          <p className="question">{question}</p>
          {question.toLowerCase().includes("take a photo") ? (
            qa.answers[index] ? (
              <img
                src={qa.answers[index]}
                alt="Answer"
                className="photo"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(qa.answers[index], question);
                }}
              />
            ) : (
              <p className="answer">No photo provided</p>
            )
          ) : (
            <p className="answer">{qa.answers[index]}</p>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default QASection;
