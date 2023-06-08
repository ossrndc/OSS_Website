import { useState } from 'react';
import './styles.css';

/* eslint-disable react/prop-types */
const Event = ({ events }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % events.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + events.length) % events.length);
  };

  return (
    <div className="event-container" id="events">
      <div className="view-all-button">View All</div>
      <h2 className="event-title">Our Events</h2>
      <p className="event-sub-title">Event Wrapup and Highlights</p>
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {events.map((event, index) => (
            <div
              className={`card-container ${
                index === currentIndex ? 'active' : ''
              }`}
              key={event.id}
            >
              <div className="card-image-container">
                <img
                  className="card-image"
                  src={event.image}
                  alt={`Event ${event.id}`}
                />
              </div>
              <div className="card-content">
                <p className="event-type">{event.type}</p>
                <p className="event-name">{event.name}</p>
                <p className="event-desc">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="radio-buttons">
        {events.map((event, index) => (
          <label key={event.id}>
            <input
              type="radio"
              name="event-radio"
              value={index}
              checked={index === currentIndex}
              onChange={() => setCurrentIndex(index)}
            />
            <span className="radio-label" />
          </label>
        ))}
      </div>
      <div className="slider-buttons">
        <button className="slider-btn prev " onClick={handlePrevious}>
          Previous
        </button>
        <button className="slider-btn next " onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Event;
