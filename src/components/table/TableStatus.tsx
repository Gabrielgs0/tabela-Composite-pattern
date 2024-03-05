const TableStatus: React.FC<{ status: string }> = ({ status }) => (
    <td className="py-2 px-4 border-b">
      <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
        {status}
      </span>
    </td>
  );

export default TableStatus