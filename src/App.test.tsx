import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: /hi, i'm chris shen/i });
  expect(heading).toBeInTheDocument();

  const bio = screen.getByText(/i’m working on probabilistic markets/i);
  expect(bio.tagName).toBe('P');
  expect(bio).toHaveTextContent(/i like modeling uncertain systems/i);
});
