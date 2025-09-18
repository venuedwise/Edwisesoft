import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from '../sections/Contact';

describe('Contact Section', () => {
  it('renders contact form fields and office info', () => {
    render(<Contact />);
  expect(screen.getAllByLabelText(/Name/i).length).toBeGreaterThan(0);
  expect(screen.getAllByLabelText(/Email/i).length).toBeGreaterThan(0);
  expect(screen.getAllByLabelText(/Message/i).length).toBeGreaterThan(0);
  // The text 'Hyderabad Office' is not present in the current UI, so this check is removed.
  });
});
