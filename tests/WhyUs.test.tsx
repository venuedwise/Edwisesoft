import React from 'react';
import { render, screen } from '@testing-library/react';
import WhyUs from '../sections/WhyUs';

describe('Why Us Section', () => {
  it('renders all trust points', () => {
    render(<WhyUs />);
  expect(screen.getByText(/Deep Domain Expertise/i)).toBeInTheDocument();
  expect(screen.getByText(/Tailored, Impactful Solutions/i)).toBeInTheDocument();
  expect(screen.getByText(/Innovation That Works/i)).toBeInTheDocument();
  expect(screen.getByText(/End-to-End Partnership/i)).toBeInTheDocument();
  });
});
