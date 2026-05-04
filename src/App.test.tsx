import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hi, i'm chris\./i });
  expect(heading).toBeInTheDocument();
});
