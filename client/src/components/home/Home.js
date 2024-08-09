import React from 'react';
import './Home.css';
import Navbar from '../navbar/Navbar';
import Footer from './Footer';

import CountUp from 'react-countup';
import gif from '../../assets/eHospital.gif';
import HomeReview from './HomeReview'; // Import the HomeReview component

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <div className="title-section">
          <div className="home-left">
            <div className="title-box">
              <div className='title-font home'>CareConnect</div>
              <div className='title-font home'>Integrated Healthcare Network</div>
              <div className='description home'>
                Experience seamless care with CareConnect, where your health is our priority. Join our integrated network today.
              </div>
              <button>Join Us Now</button>
            </div>
          </div>
          <div className="home-right">
            <img src={gif} alt="Healthcare GIF" className="background-gif" />
          </div>
        </div>
        <div className='home-stats'>
          <div className='stat-box'>
          <h3><CountUp end={500} duration={4} />+</h3>
            <p>Doctors</p>
          </div>
          <div className='stat-box'>
          <h3><CountUp end={3000} duration={4} />+</h3>
            <p>Patients Served</p>
          </div>
          <div className='stat-box'>
          <h3><CountUp end={50} duration={4} />+</h3>
            <p>Specialties</p>
          </div>
        </div>
        <HomeReview /> {/* Use the HomeReview component */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
