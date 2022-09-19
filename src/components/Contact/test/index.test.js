import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

// 1 . call cleanup
afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<ContactForm></ContactForm>);
  });
});

it('renders', () => {
  const { getByTestId } = render(<ContactForm />);
  expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
});

it('renders', () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId('button')).toHaveTextContent('Submit');
});
