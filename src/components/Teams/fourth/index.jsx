import React, { useState } from "react";
import "./style.css";

const Fourth = ({ fourth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visiblePhotos = fourth.slice(currentIndex, currentIndex + 4);
  const totalPages = Math.ceil(fourth.length / 4); // Calculate the total number of pages

  const handleRadioChange = (index) => {
    setCurrentIndex(index * 4); // Update the current index based on the selected page
  };

  return (
    <div className="container">
      <div className="text-container">
        <h3>OSS</h3>
        <h1>Our Team</h1>
        <p>
          It's a community of like-minded individuals who are dedicated to making a difference.
          Explore our list of current and past society members and see how they have helped shape our community.
        </p>
        <button disabled="disabled">Year-4th</button>
      </div>
      <div className="photo-container">
        <div className="photo-grid">
          {visiblePhotos.map((person, index) => (
            <div key={index} className="photo-card">
              <img src={person.image} alt={person.name} className="photo" />
              <h3 className="name">{person.name}</h3>
              <p className="domain">{person.domain}</p>
              <p className="desc">{person.desc}</p>
              <a href="#" className="linkedin"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" className="twitter"><i class="fa-brands fa-twitter"></i></a>
            </div>
          ))}
        </div>
        <div className="radio-buttons">
          {[...Array(Math.ceil(fourth.length / 4))].map((_, index) => (
            <label key={index}>
              <input
                type="radio"
                name="team-radio"
                value={index * 4}
                checked={currentIndex === index * 4}
                onChange={() => setCurrentIndex(index * 4)}
              />
              <span className="radio-label" />
            </label>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Fourth;
