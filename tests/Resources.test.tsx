import React from 'react';
import { render, screen } from '@testing-library/react';
import Resources from '../sections/Resources';

describe('Resources Section', () => {
  it('renders resource categories and cards', () => {
    render(<Resources />);
    // Check for at least one known resource title/category
    expect(screen.getByText(/AI in Modern Classrooms/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Blogs/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Case Studies/i).length).toBeGreaterThan(0);
  });
});
