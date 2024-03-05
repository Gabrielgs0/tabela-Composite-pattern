import Rating from 'react-rating-stars-component';
  
  const TableRating: React.FC<{ rating: number }> = ({ rating }) => (
    <td className="py-2 px-4 border-b">
      <Rating
        count={5}
        onChange={(rating: number) => console.log(rating)}
        size={24}
        activeColor="#ffd700"
        value={rating}
      />
    </td>
  );

export default TableRating