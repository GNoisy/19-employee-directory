import React from "react";

const styles = {
    jumboStyle: {
      background: "purple",
      
    }
  };

function Jumbotron() {
  return (
    <div style={styles.jumboStyle} className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-3 text-center text-white">Employee Directory</h1>
            <p className="lead text-center text-white">This directory allows you to search for employees alphabetically or sort by department.</p>
        </div>
    </div>
  );
}

export default Jumbotron;