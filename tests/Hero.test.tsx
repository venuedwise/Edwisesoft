import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../sections/Hero';

describe('Hero Section', () => {
  it('renders headline and CTAs', () => {
    render(<Hero />);
  expect(screen.getByRole('heading', { name: /Empowering Education Through Technology/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Explore Services/i })).toBeInTheDocument();
  });
});
