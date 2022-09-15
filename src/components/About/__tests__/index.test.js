// Testing file for ABout
//need react to enable the components to function properly so that it can tested out.
import React from 'react';

// React Testing Library
import { render, cleanup } from '@testing-library/react';

// jest-dom offers access to custom matchers that are used to test DOM elements.
import '@testing-library/jest-dom/extend-expect';

// Import the ABout component
import About from '../About';

// It ensures there is no left over memory data
afterEach(cleanup);

// describe the component which we are testing
describe('About component', () => {
  //renders About test
  // First Test

  // test for component is rendering
  //  In the first argument, a string declares what is being tested.
  // In the second argument, a callback function runs the test.
  it('renders', () => {
    render(<About />);
  });

  // //  returns a snapshot of the About component.
  // const { asFragment } = render(<About />);

  // Second Test
  //   Create a Test to Compare Snapshots of the DOM
  it('matches snapshot DOM node structure', () => {
    // render About
    // we use asFragment function which returns the snapshot of 'about' component
    //  returns a snapshot of the About component.
    const { asFragment } = render(<About />);
    // comparing the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});
