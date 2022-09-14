// React Knowledge file

// Import React in every component file.
// the file name should be the same to which it is refrencing to
import React from 'react';

const Pet = () => {
  return (
    // JSX file
    // Writing in normal Html Way
    // <div>
    //   <h1>Ginger</h1>
    //   <p1>Breed : Brittany Spaniel</p1>
    // </div>

    // Another way of writing the above code in React Form.
    //React.createElement(element name, prop, all the chidren of the parent);
    React.createElement('div', {}, [
      React.createElement('h1', {}, 'Ginger'),
      React.createElement('p', {}, 'Breed : Brittany Spaniel'),
    ])
  );
};

// Exporting the file to App.js
export default Pet;
