import React, { useState, useEffect } from "react";

function Checklist({ title, initialItems }) {
  const [items, setItems] = useState(initialItems);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    calculateProgress();
  }, [items]);

  const toggleItem = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedItems);
  };

  const resetItems = () => {
    const resetItems = items.map((item) => ({ ...item, checked: false }));
    setItems(resetItems);
  };

  const calculateProgress = () => {
    const completedItems = items.filter((item) => item.checked).length;
    const totalItems = items.length;
    const percentage = (completedItems / totalItems) * 100;
    setProgress(percentage);
    if (percentage === 100) {
      setIsCompleted(true);
      setTimeout(() => setIsCompleted(false), 5000); // Reset after 5 seconds
    }
  };

  return (
    <div className="full-page-container">
      <style>{`
        /* CSS styles */
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
        }

        .full-page-container {
          position: relative;
          min-height: 100%;
          background-color: #f8f9fa;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .checklist-container {
          font-family: Arial, sans-serif;
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 5px;
          width: 400px;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          z-index: 2;
          position: relative;
        }

        .checklist-item {
          margin-bottom: 10px;
        }

        .checklist-item.checked label {
          text-decoration: line-through;
        }

        input[type="checkbox"] {
          margin-right: 10px;
        }

        label {
          display: inline-block;
          vertical-align: middle;
        }

        .reset-button {
          margin-top: 10px;
          margin-right: 10px;
          padding: 8px 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          z-index: 1;
        }

        .reset-button:hover {
          background-color: #0056b3;
        }

        .progress-bar {
          background-color: #ddd;
          height: 20px;
          border-radius: 4px;
          overflow: hidden;
          margin-top: 10px;
        }

        .progress {
          background-color: #007bff;
          height: 100%;
          width: ${progress}%;
          transition: width 0.3s ease-in-out;
        }

        .celebration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: ${isCompleted ? "flex" : "none"};
          justify-content: center;
          align-items: center;
          z-index: 3;
        }

        .celebration-message {
          background-color: #fff;
          padding: 20px;
          border-radius: 5px;
          text-align: center;
          font-size: 24px;
          color: #000;
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background-color: red;
          animation: fly-star 2s linear infinite;
          pointer-events: none;
        }

        @keyframes fly-star {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
          }
          50% {
            transform: translateY(-100px) translateX(100px) rotate(720deg);
          }
          100% {
            transform: translateY(-200px) translateX(200px) rotate(1440deg);
          }
        }
      `}</style>
      <div className="checklist-container">
        <h2>{title}</h2>
        {items.map((item) => (
          <div
            key={item.id}
            className={`checklist-item ${item.checked ? "checked" : ""}`}
          >
            <input
              type="checkbox"
              id={`item-${item.id}`}
              checked={item.checked}
              onChange={() => toggleItem(item.id)}
            />
            <label htmlFor={`item-${item.id}`}>{item.text}</label>
          </div>
        ))}
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <button className="reset-button" onClick={resetItems}>
          Reset
        </button>
      </div>
      {isCompleted && (
        <div className="celebration-overlay">
          <div className="celebration-message">
            Congratulations! You've completed the {title}!
            {[...Array(20)].map((_, index) => (
              <div
                key={index}
                className="star"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random()}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Checklist;
