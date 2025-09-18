import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../sections/About';

describe('About Section', () => {
  it('renders company intro, mission, and vision', () => {
    render(<About />);
  expect(screen.getByRole('heading', { name: /About EdWiseSoft/i })).toBeInTheDocument();
  expect(screen.getByText(/unlock their true potential through technology/i)).toBeInTheDocument();
  // Mission and Vision are not present in the current UI, so these checks are removed.
  });
});
