import React, { useState } from 'react';
import { TableContent } from './index'
import MobileTableItem from './TableMobile'

import TableData from '../../components/data/data'

const Table = () => {
  const [showDropdown, setShowDropdown] = useState(TableData.map(() => false));
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(-1); 

  const toggleDropdown = (index: number) => {
    const newShowDropdown = [...showDropdown];
    newShowDropdown[index] = !newShowDropdown[index];
    setShowDropdown(newShowDropdown);
  };

  const toggleImageCheck = (index: number) => {
    if (isImageExpanded && selectedImageIndex === index) {
      setIsImageExpanded(false);
      setSelectedImageIndex(-1);
    } else {
      setIsImageExpanded(true);
      setSelectedImageIndex(index);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto hidden lg:flex flex-wrap">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b text-left">Car</th>
              <th className="py-2 px-4 border-b text-left">Next Reservation</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Rating</th>
              <th className="py-2 px-4 border-b text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
          {TableData.map((table, index) => (
            <tr key={index}>
              <TableContent.TableCell
                item={table}
                index={index}
                isImageExpanded={isImageExpanded}
                selectedImageIndex={selectedImageIndex}
                toggleImageCheck={toggleImageCheck}
              />
              <TableContent.TableNextReservation nextReservation={table.nextReservation} />
              <TableContent.TableStatus status={table.status} />
              <TableContent.TableRating rating={table.rating} />
              
                <TableContent.TableDropdown showDropdown={table.showDropdown} />
            </tr>
          ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden">
        {TableData.map((item, index) => (
          <MobileTableItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Table;
