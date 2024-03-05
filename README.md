tabela Composite pattern
Overview
The "tabela Composite pattern" project is a React application that provides a user interface for viewing and interacting with a table of car data. It includes both desktop and mobile versions to ensure a responsive design.

Table Component
Desktop Version
The desktop version of the table is implemented in the Table component. It displays car information such as name, next reservation date, status, and rating. Each row has a button to trigger a dropdown menu with additional options. Users can also click on a car image to expand it and mark it as selected.

Dependencies
React
Next.js
react-rating-stars-component
Font Awesome
Usage
jsx
Copy code
import Table from '../components/table/Table'

export default function Home() {
  return (
    <main className="container-fluid mx-auto px-4 pt-4 grid gap-4">
      <Table />
    </main>
  );
}
Mobile Version
The mobile version of the table is implemented in the MobileTableItem component. It presents a simplified view of the car data, allowing users to view the car image, name, next reservation date, and rating. The dropdown menu with additional options is accessible through a button.

Dependencies
React
Next.js
react-rating-stars-component
Font Awesome
Usage
jsx
Copy code
import MobileTableItem from '../components/table/TableMobile'

// Inside your component
{TableData.map((item, index) => (
  <MobileTableItem key={index} item={item} index={undefined} />
))}
Data
The sample data for the table is stored in the TableData module. It includes information such as car images, names, next reservation dates, statuses, ratings, and actions.

Usage
jsx
Copy code
import CarImage from '../../../public/assets/img/mini-cooper.jpg';
import TableData from '../../components/data/data';

// Sample usage of the data
const firstCar = TableData[0];
console.log(firstCar.name); // Mini Cooper 2020
Getting Started
Clone the repository.
Install dependencies using npm install.
Run the application with npm run dev.