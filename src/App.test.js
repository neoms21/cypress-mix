import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders with test id', () => {
  const { getByTestId } = render(<App />);
  const linkElement = getByTestId("message");
  expect(linkElement.textContent).toEqual("To test with cypress")
});
