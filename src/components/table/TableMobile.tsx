import React, { useState } from 'react';
import Image from 'next/image';
import Rating from 'react-rating-stars-component';
import Option from '../../../public/assets/img/option.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';


interface TableItem {
  image: string;
  name: string;
  nextReservation: string;
  rating: number;
}

const Dropdown = () => {
  return (
    <div className="absolute right-0 top-0 w-48 bg-white rounded-md overflow-hidden shadow-md z-10">
      <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200">
        Option
      </button>
    </div>
  );
};

const MobileTableItem: React.FC<{ item: TableItem; index: number }> = ({ item, index }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleImageCheck = () => {
    if (isImageExpanded && selectedImageIndex === index) {
      setIsImageExpanded(false);
      setSelectedImageIndex(-1);
    } else {
      setIsImageExpanded(true);
      setSelectedImageIndex(index);
    }
  };

  return (
    <div key={index} className="lg:hidden border rounded p-4 mb-4 flex justify-between">
      <div
        className={`relative ${isImageExpanded ? 'z-50' : ''}`}
        onClick={toggleImageCheck}
      >
        <Image
          src={item.image}
          alt="Car Image"
          className="w-24 h-24 cursor-pointer"
        />
        {isImageExpanded && (
          <div className="absolute top-2 left-2">
            <span role="img" aria-label="selected-icon">
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', fontSize: '1.5em' }} />
            </span>
          </div>
        )}
      </div>
      <div className="mb-2">
        <p className='font-bold'>{item.name}</p>
        <p>next reservation: {item.nextReservation}</p>
        <Rating
          count={5}
          onChange={(rating: any) => console.log(rating)}
          size={24}
          activeColor="#ffd700"
          value={item.rating}
        />
      </div>
      <div className="mb-4">
        <button
          className="focus:outline-none"
          onClick={toggleDropdown}
        >
          <Image
            src={Option}
            alt="Car Image"
            className="w-22 h-22"
          />
        </button>
        {showDropdown && <Dropdown />}
      </div>
    </div>
  );
};

export default MobileTableItem;
