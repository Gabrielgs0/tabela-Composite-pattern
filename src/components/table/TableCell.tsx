import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface TableCellProps {
    item: {
      image: string;
      name: string;
    };
    index: number;
    isImageExpanded: boolean;
    selectedImageIndex: number;
    toggleImageCheck: (index: number) => void;
  }

  const TableCell: React.FC<TableCellProps> = ({
    item,
    index,
    isImageExpanded,
    selectedImageIndex,
    toggleImageCheck,
  }) => {
  return (
    <td className="py-2 px-4 border-b flex cursor-pointer">
      <div
        className={`relative ${isImageExpanded && selectedImageIndex === index ? 'z-50' : ''}`}
        onClick={() => toggleImageCheck(index)}
      >
        <Image
          src={item.image}
          alt="Car Image"
          className="w-24 h-24"
        />
        {isImageExpanded && selectedImageIndex === index && (
          <div className="absolute top-2 left-2">
            <span role="img" aria-label="selected-icon">
              <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', fontSize: '1.5em' }} />
            </span>
          </div>
        )}
      </div>
      <p className='leading-[5rem] ml-5 font-medium'>{item.name}</p>
    </td>
  );
};

export default TableCell;
