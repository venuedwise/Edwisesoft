import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../sections/Services';

describe('Services Section', () => {
  it('renders all service cards', () => {
    render(<Services />);
  expect(screen.getByText(/AALS \(Agentic AI Learning System\)/i)).toBeInTheDocument();
  expect(screen.getByText(/AI-Powered Assessments/i)).toBeInTheDocument();
  expect(screen.getAllByText(/Analytics Dashboard/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/Virtual Classrooms/i).length).toBeGreaterThan(0);
  });
});
