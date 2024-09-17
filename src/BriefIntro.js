import React, { useState } from 'react';
import './BriefIntro.css';

const BriefIntro = () => {
  const [skills, setSkills] = useState('');

  const handleInputChange = (e) => {
    setSkills(e.target.value);
  };

  return (
    <div className="form-container">
      <div className="skill-entry">
        <div className="progress-indicator">3/3</div>
        <h2>Great. Now give a brief introduction about yourself.</h2>
         <hr className="l1"></hr>
        <label className="skill">TITLE</label>
        <input
          type="text"
          id="skills"
          className="skill-input"
          placeholder="Java"
          value={skills}
          onChange={handleInputChange}
        />

<label className="bio skill">BIO</label>
        <input
          type="text"
          id="bio"
          className="bio-input"
          placeholder="Write about yourself..."
          value={skills}
          onChange={handleInputChange}
        />
        <div className="b">
        <p className="atleast">Atleast 100 characters</p>
        </div>
      </div>

      <div className="suggestion-card">
        <div className="profile">
          <div className="profile-image">
            <img src="https://via.placeholder.com/40" alt="profile" />
          </div>
          <div className="profile-details">
            <h3>Harshada A</h3>
            <p>AI/ML Developer</p>
          </div>
        </div>
        <p className="suggestion-text">
          I'm a developer experienced in building websites for small and medium size buisnesess, Wether you are tring to win  work list your services or create a new online store. I can help.
          <p className="learn">Knows HTML,CSS3,jQuery,WordPress and SEO</p>
        </p>
      </div>

      {/* Bottom buttons */}
      <div className="form-buttons">
        <button className="back-button">Back</button>
        <button className="next-button">SET PROFILE</button>
      </div>
    </div>
  );
};

export default BriefIntro;