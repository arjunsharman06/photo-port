// Testing file for components
// Step 1 : Import the Nav Component
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' },
];

const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// Step2 : Configure the Testing Environment

// 1 . call cleanup
afterEach(cleanup);

// 2 . add describe function to declare what this test suite will be testing:
describe('Nav component', () => {
  // basline test
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
  });

  // Snap-Shot test
  it('matches snapshot', () => {
    // render Nav
    // we use asFragment function which returns the snapshot of 'nav' component

    //  returns a snapshot of the Nav component.
    const { asFragment } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // comparing the snapshot
    expect(asFragment()).toMatchSnapshot();
  });
});

// Step3 : Create a Test for Emoji Visibility
describe('emoji is visible', () => {
  it('inserts emoji into the h2', () => {
    // Arrange
    // query to return the element containing the emoji
    const { getByLabelText } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    // Assert
    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

//Step4 : Create a Test for Link Visibility
describe('links are visible', () => {
  const { getByTestId } = render(
    <Nav
      categories={categories}
      setCurrentCategory={mockSetCurrentCategory}
      currentCategory={mockCurrentCategory}
      contactSelected={mockContactSelected}
      setContactSelected={mockSetContactSelected}
    />
  );

  it('inserts text into the links', () => {
    const { getByTestId } = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />
    );
    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});
