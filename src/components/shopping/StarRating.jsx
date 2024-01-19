import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

const StarRating = ({ stars, count }) => {
    const ratingStar = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index} className='inline-block'>
                {stars >= index + 1 ? (
                    <FaStar className='icon' />
                ) : stars >= number ? (
                    <FaStarHalf className='icon' />
                ) : (
                    <FaRegStar className='icon' />
                )}
            </span>
        );
    });

    return (
        <div className='icon-style '>
          <div className='text-yellow-600'>{ratingStar}</div>
          <div>{`Riviews: ${count}`}</div>
        </div>
      );
};

export default StarRating;
