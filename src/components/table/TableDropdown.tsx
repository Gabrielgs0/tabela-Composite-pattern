import React, { useState } from 'react';
import Image from 'next/image';
import Option from '../../../public/assets/img/option.png';

interface TableDropdownProps {
  showDropdown: boolean;
}

const TableDropdown: React.FC<TableDropdownProps> = ({ showDropdown }) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <td className="py-2 px-4 border-b text-center relative">
      <button className="focus:outline-none" onClick={handleDropdownToggle}>
        <Image
          src={Option}
          alt="option Image"
          className="w-22 h-22"
        />
      </button>
      {isDropdownVisible && (
        <div className="absolute right-0 top-0 w-48 bg-white rounded-md overflow-hidden shadow-md z-10">
          <button
            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200"
            onClick={() => {
              console.log('Option clicked');
            }}
          >
            Option
          </button>
        </div>
      )}
    </td>
  );
};

export default TableDropdown;
