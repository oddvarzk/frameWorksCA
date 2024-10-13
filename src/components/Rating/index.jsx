import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar, faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon key={i} icon={fullStar} />);
    } else if (i - rating < 1) {
      stars.push(<FontAwesomeIcon key={i} icon={halfStar} />);
    } else {
      stars.push(<FontAwesomeIcon key={i} icon={emptyStar} />);
    }
  }
  return <div className="star-rating text-mutedTerracotta">{stars}</div>;
};

export default StarRating;
