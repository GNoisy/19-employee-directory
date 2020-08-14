import React from 'react';
import Jumbotron from "./components/Jumbotron";
import TableData from "./components/TableData"




function App() {
  return (
    <div>
      <Jumbotron />
      <div className="container">
        <TableData />
      </div>

    </div>
  );
}

export default App;