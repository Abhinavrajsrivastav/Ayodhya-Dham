import React from 'react';
import './ExpertAdvicePage.css';
import ExpertPageCard from './ExpertPageCard/ExpertPageCard';
import AboutPlace from '../../../Components/Data/AboutPlace';


const ExpertAdvicePage = () => {
  // Accessing the places data from AboutPlace component
  const placesData = AboutPlace();

  return (
    <div className="expert-page-container">
      <div className="expert-page-heading">Some places you can hangout in Ayodhya</div>
      <div className="ExpertPage-container">
        {/* Mapping over placesData array and generating ExpertPageCard for each place */}
        {placesData.map((place, index) => (
          <ExpertPageCard
            key={index} // Providing a unique key for each card
            name={place.name}
            img={place.img}
            about={place.about}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertAdvicePage;